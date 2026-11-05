#!/usr/bin/env python3
"""Contact-form API for the portfolio site (https://kannan-24.netlify.app).

Receives the contact form, keeps a copy, and emails it to you over SMTP.
Python standard library only (nothing to pip install). Runs on invoice-vm as
the systemd unit `portfolio-contact`, behind nginx at
https://skmnco.in/portfolio-api/  (see README.md in this folder).

Endpoints
  GET  /health    -> {"ok": true}
  POST /contact   -> {"ok": true} | {"ok": false, "error": "..."}
       fields: name, email, project-type, message (required),
               budget (optional), bot-field (spam trap, must be empty)

Browsers without JavaScript post the form directly and get a small HTML page
back instead of JSON.

Configuration (environment, normally /etc/portfolio-contact.env):
  SMTP_USER, SMTP_PASS   required (e.g. Gmail address + app password)
  MAIL_TO                where enquiries are sent (default: SMTP_USER)
  SMTP_HOST, SMTP_PORT   default smtp.gmail.com:587 (STARTTLS; 465 = SSL)
  ALLOWED_ORIGINS        comma-separated sites allowed to post the form
  SITE_URL               "back to the portfolio" link on the no-JS page
  HOST, PORT             listen address, default 127.0.0.1:8200
  STATE_DIRECTORY        where messages.jsonl is kept (systemd sets this)

  python3 server.py --check-smtp   logs in to the SMTP server and exits
"""
from __future__ import annotations

import html
import json
import logging
import os
import re
import smtplib
import ssl
import sys
import threading
import time
from collections import defaultdict, deque
from datetime import datetime, timedelta, timezone
from email.message import EmailMessage
from email.utils import formataddr, formatdate, make_msgid
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs

log = logging.getLogger("contact")


def _env(name: str, default: str | None = None) -> str:
    value = os.environ.get(name, default)
    if value is None:
        sys.exit(f"Missing required environment variable {name}")
    return value


HOST = _env("HOST", "127.0.0.1")
PORT = int(_env("PORT", "8200"))
SMTP_HOST = _env("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(_env("SMTP_PORT", "587"))
SMTP_USER = _env("SMTP_USER")
SMTP_PASS = _env("SMTP_PASS")
MAIL_TO = _env("MAIL_TO", SMTP_USER)
ALLOWED_ORIGINS = {o.strip().rstrip("/") for o in _env("ALLOWED_ORIGINS", "").split(",") if o.strip()}
SITE_URL = _env("SITE_URL", "https://kannan-24.netlify.app").rstrip("/")
STATE_DIR = Path(_env("STATE_DIRECTORY", str(Path(__file__).with_name("data"))))

MAX_BODY = 32 * 1024
RATE_LIMIT = 5  # submissions per IP…
RATE_WINDOW = 600  # …per 10 minutes
IST = timezone(timedelta(hours=5, minutes=30))

LIMITS = {"name": 100, "email": 200, "project-type": 50, "budget": 50, "message": 5000}
REQUIRED = ("name", "email", "project-type", "message")
EMAIL_RE = re.compile(r"^[^@\s<>,;\"']+@[^@\s<>,;\"']+\.[A-Za-z]{2,}$")


class InvalidForm(ValueError):
    pass


# ---------------------------------------------------------------- rate limit
_hits: dict[str, deque] = defaultdict(deque)
_hits_lock = threading.Lock()


def rate_limited(ip: str) -> bool:
    now = time.monotonic()
    with _hits_lock:
        recent = _hits[ip]
        while recent and now - recent[0] > RATE_WINDOW:
            recent.popleft()
        if len(recent) >= RATE_LIMIT:
            return True
        recent.append(now)
        if len(_hits) > 1000:  # forget idle visitors
            for key in [k for k, v in _hits.items() if not v or now - v[-1] > RATE_WINDOW]:
                del _hits[key]
        return False


# ---------------------------------------------------------------- form + mail
def clean(form: dict[str, str]) -> dict[str, str]:
    data = {}
    for field, limit in LIMITS.items():
        value = form.get(field, "").replace("\r\n", "\n").strip()
        if field == "message":
            value = "".join(ch for ch in value if ch in "\n\t" or ch.isprintable())
        else:
            value = " ".join(value.split())  # one line: no header injection
        if len(value) > limit:
            raise InvalidForm(f"The {field.replace('-', ' ')} is too long.")
        data[field] = value
    missing = [f.replace("-", " ") for f in REQUIRED if not data[f]]
    if missing:
        raise InvalidForm("Please fill in: " + ", ".join(missing) + ".")
    if not EMAIL_RE.match(data["email"]):
        raise InvalidForm("Please enter a valid email address.")
    return data


def build_email(data: dict[str, str], received: datetime) -> EmailMessage:
    msg = EmailMessage()
    msg["Subject"] = f"Portfolio enquiry: {data['project-type']} from {data['name']}"
    msg["From"] = formataddr(("Portfolio contact form", SMTP_USER))
    msg["To"] = MAIL_TO
    msg["Reply-To"] = formataddr((data["name"], data["email"]))
    msg["Date"] = formatdate()
    msg["Message-ID"] = make_msgid(domain=SMTP_USER.rpartition("@")[2] or None)
    msg.set_content(
        f"New enquiry from {SITE_URL}\n\n"
        f"Name:          {data['name']}\n"
        f"Email:         {data['email']}\n"
        f"Project type:  {data['project-type']}\n"
        f"Budget:        {data['budget'] or 'not given'}\n\n"
        f"Message:\n{data['message']}\n\n"
        f"--\nReply to this email to answer {data['name']} directly.\n"
        f"Received {received:%d %b %Y, %H:%M} IST\n"
    )
    return msg


def smtp_session() -> smtplib.SMTP:
    context = ssl.create_default_context()
    if SMTP_PORT == 465:
        smtp = smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT, timeout=20, context=context)
    else:
        smtp = smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=20)
        smtp.starttls(context=context)
    smtp.login(SMTP_USER, SMTP_PASS)
    return smtp


def send_email(msg: EmailMessage) -> None:
    with smtp_session() as smtp:
        smtp.send_message(msg)


_file_lock = threading.Lock()


def save(entry: dict) -> None:
    """Append every enquiry to messages.jsonl, so nothing is lost if email fails."""
    try:
        STATE_DIR.mkdir(parents=True, exist_ok=True)
        with _file_lock, open(STATE_DIR / "messages.jsonl", "a", encoding="utf-8") as fh:
            fh.write(json.dumps(entry, ensure_ascii=False) + "\n")
    except OSError as exc:
        log.error("could not save message: %s", exc)


def result_page(ok: bool, error: str | None) -> str:
    title = "Message sent" if ok else "Message not sent"
    text = (
        "Thanks! Your message is on its way, and I'll get back to you soon."
        if ok
        else f"Sorry, your message couldn't be sent: {html.escape(error or 'unknown error')} "
        f'You can email me at <a href="mailto:{html.escape(MAIL_TO)}">{html.escape(MAIL_TO)}</a>.'
    )
    return (
        '<!doctype html><html lang="en"><head><meta charset="utf-8">'
        '<meta name="viewport" content="width=device-width, initial-scale=1">'
        f"<title>{title}</title><style>"
        "body{margin:0;min-height:100vh;display:grid;place-items:center;padding:16px;"
        "background:#05080b;color:#e6edf3;font:16px/1.6 system-ui,sans-serif}"
        "main{max-width:480px}a{color:#3eedb7}</style></head><body><main>"
        f"<h1>{title}</h1><p>{text}</p>"
        f'<p><a href="{html.escape(SITE_URL)}/">&larr; Back to the portfolio</a></p>'
        "</main></body></html>"
    )


# ---------------------------------------------------------------- HTTP
class Handler(BaseHTTPRequestHandler):
    server_version = "contact-api"
    sys_version = ""
    timeout = 15  # seconds per socket read; drops stalled clients

    def log_message(self, fmt: str, *args) -> None:
        log.info("%s %s", self.client_ip(), fmt % args)

    def client_ip(self) -> str:
        return self.headers.get("X-Real-IP") or self.client_address[0]

    def origin(self) -> str:
        return (self.headers.get("Origin") or "").rstrip("/")

    def send(self, status: int, body: bytes, content_type: str, extra: dict | None = None) -> None:
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        if self.origin() in ALLOWED_ORIGINS:
            self.send_header("Access-Control-Allow-Origin", self.origin())
            self.send_header("Vary", "Origin")
        for key, value in (extra or {}).items():
            self.send_header(key, value)
        self.end_headers()
        self.wfile.write(body)

    def reply(self, status: int, ok: bool, error: str | None = None) -> None:
        if "application/json" in (self.headers.get("Accept") or ""):
            payload = {"ok": ok, **({"error": error} if error else {})}
            self.send(status, json.dumps(payload).encode(), "application/json; charset=utf-8")
        else:  # plain form post (no JavaScript)
            self.send(status, result_page(ok, error).encode(), "text/html; charset=utf-8")

    def not_found(self) -> None:
        self.send(404, b'{"ok":false,"error":"Not found"}', "application/json")

    def do_GET(self) -> None:
        if self.path.split("?")[0] == "/health":
            self.send(200, b'{"ok":true}', "application/json")
        else:
            self.not_found()

    def do_OPTIONS(self) -> None:  # CORS preflight
        if self.origin() not in ALLOWED_ORIGINS:
            self.send(403, b"", "text/plain")
            return
        self.send(204, b"", "text/plain", {
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Accept",
            "Access-Control-Max-Age": "86400",
        })

    def do_POST(self) -> None:
        if self.path.split("?")[0] != "/contact":
            self.not_found()
            return
        if self.origin() not in ALLOWED_ORIGINS:
            log.warning("rejected origin %r", self.origin())
            self.reply(403, False, "This form can only be sent from the portfolio site.")
            return
        try:
            length = int(self.headers.get("Content-Length", ""))
        except ValueError:
            self.reply(411, False, "Missing Content-Length.")
            return
        if length > MAX_BODY:
            self.reply(413, False, "The message is too large.")
            return

        raw = self.rfile.read(length).decode("utf-8", "replace")
        content_type = (self.headers.get("Content-Type") or "").split(";")[0].strip().lower()
        if content_type == "application/json":
            try:
                form = {str(k): str(v) for k, v in json.loads(raw).items()}
            except (ValueError, AttributeError):
                self.reply(400, False, "Invalid JSON.")
                return
        else:
            form = {k: v[0] for k, v in parse_qs(raw, keep_blank_values=True).items()}

        ip = self.client_ip()
        if form.get("bot-field"):
            log.info("spam trap triggered by %s", ip)
            self.reply(200, True)  # look successful, send nothing
            return
        if rate_limited(ip):
            self.reply(429, False, "Too many messages. Please try again later or email me directly.")
            return
        try:
            data = clean(form)
        except InvalidForm as exc:
            self.reply(400, False, str(exc))
            return

        received = datetime.now(IST)
        entry = {"received": received.isoformat(timespec="seconds"), "ip": ip, **data, "emailed": False}
        try:
            send_email(build_email(data, received))
            entry["emailed"] = True
        except (smtplib.SMTPException, OSError) as exc:
            log.error("email failed: %s", exc)
        save(entry)

        if entry["emailed"]:
            log.info("enquiry emailed (%s)", data["project-type"])
            self.reply(200, True)
        else:
            self.reply(502, False, "The message was saved, but the email could not be sent.")


def main() -> None:
    logging.basicConfig(level=logging.INFO, format="%(levelname)s %(message)s", stream=sys.stderr)
    if "--check-smtp" in sys.argv:
        with smtp_session():
            pass
        print(f"SMTP login OK ({SMTP_USER} @ {SMTP_HOST}:{SMTP_PORT}); mail goes to {MAIL_TO}")
        return
    if not ALLOWED_ORIGINS:
        log.warning("ALLOWED_ORIGINS is empty: every form post will be rejected")
    server = ThreadingHTTPServer((HOST, PORT), Handler)
    server.daemon_threads = True
    log.info("listening on %s:%s, mailing %s, origins %s", HOST, PORT, MAIL_TO, sorted(ALLOWED_ORIGINS))
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
