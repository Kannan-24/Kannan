#!/usr/bin/env bash
# Choose the Gmail account the contact API sends FROM (and where enquiries go).
# The app password is typed hidden and sent to the VM over SSH stdin: it never
# appears on screen, in shell history, or in process lists.
#
#   bash contact-api/set-smtp.sh
#
# Gmail files mail that an account sends to ITSELF under "Sent", not "Inbox".
# If FROM and TO are the same Gmail account, this script delivers via the
# TO+portfolio@gmail.com alias (same Inbox; the "To:" line still shows TO).
# App password: https://myaccount.google.com/apppasswords (needs 2-Step Verification).
set -euo pipefail

HOST=${CONTACT_VM_HOST:-invoice-vm}
ENV_FILE=/etc/portfolio-contact.env

current_to=$(ssh -o BatchMode=yes "$HOST" "sudo grep -E '^MAIL_TO=' $ENV_FILE | cut -d= -f2-")

read -rp "Deliver enquiries TO [$current_to]: " MAIL_TO
MAIL_TO=${MAIL_TO:-$current_to}
read -rp "Send FROM (Gmail address that owns the app password): " SMTP_USER
read -rsp "App password for $SMTP_USER (hidden): " SMTP_PASS
echo
SMTP_PASS=${SMTP_PASS// /} # Google shows it as 4 groups of 4 letters
if [[ -z "$SMTP_USER" || -z "$SMTP_PASS" || -z "$MAIL_TO" ]]; then
  echo "All three values are required." >&2
  exit 1
fi
DELIVER_TO=""
if [[ "${SMTP_USER,,}" == "${MAIL_TO,,}" && "${MAIL_TO,,}" == *@gmail.com ]]; then
  DELIVER_TO="${MAIL_TO%@*}+portfolio@${MAIL_TO#*@}"
  echo "Same Gmail account for FROM and TO: delivering via $DELIVER_TO so enquiries land in the Inbox."
fi

# Rewrites the SMTP/MAIL lines in the env file (backup kept); values come from stdin.
UPDATE_PY='
import sys
user, password, to, deliver = (sys.stdin.readline().rstrip("\n") for _ in range(4))
path = "/etc/portfolio-contact.env"
keep = [l for l in open(path).read().splitlines()
        if not l.startswith(("SMTP_USER=", "SMTP_PASS=", "MAIL_TO=", "DELIVER_TO=", "# Gmail puts"))]
keep += [f"SMTP_USER={user}", f"SMTP_PASS={password}", f"MAIL_TO={to}"]
if deliver:
    keep += ["# Gmail puts mail an account sends to itself under Sent; this alias lands in the same Inbox.",
             f"DELIVER_TO={deliver}"]
open(path, "w").write("\n".join(keep) + "\n")
'
CHECK="sudo systemd-run --quiet --pipe --wait -p EnvironmentFile=$ENV_FILE -p DynamicUser=yes python3 /opt/portfolio-contact/server.py"

echo "==> Updating $HOST"
ssh -o BatchMode=yes "$HOST" "sudo cp -a $ENV_FILE $ENV_FILE.bak"
printf '%s\n%s\n%s\n%s\n' "$SMTP_USER" "$SMTP_PASS" "$MAIL_TO" "$DELIVER_TO" |
  ssh -o BatchMode=yes "$HOST" "sudo python3 -c $(printf %q "$UPDATE_PY")"

echo "==> Checking the Gmail login"
if ! ssh -o BatchMode=yes "$HOST" "$CHECK --check-smtp"; then
  echo "Login failed: restoring the previous settings." >&2
  ssh -o BatchMode=yes "$HOST" "sudo cp -a $ENV_FILE.bak $ENV_FILE"
  exit 1
fi
ssh -o BatchMode=yes "$HOST" "sudo systemctl restart portfolio-contact && systemctl is-active portfolio-contact"

read -rp "Send a test enquiry to $MAIL_TO now? [Y/n] " answer
if [[ ! "$answer" =~ ^[Nn] ]]; then
  ssh -o BatchMode=yes "$HOST" "$CHECK --send-test"
  echo "Check the Inbox of $MAIL_TO for \"Portfolio enquiry: Website from Test Client\"."
fi
