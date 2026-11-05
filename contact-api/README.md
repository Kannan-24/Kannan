# Contact-form API

Receives the portfolio's contact form and emails it to you. It's one Python file
(standard library only) running on **invoice-vm**, published at
**https://skmnco.in/portfolio-api/** (`POST /contact`, `GET /health`).

| | |
| --- | --- |
| Code | `server.py` (this folder) → `/opt/portfolio-contact/server.py` |
| Process | systemd unit `portfolio-contact`, `127.0.0.1:8200`, sandboxed, restarts automatically |
| Web | nginx, `location ^~ /portfolio-api/` in the `skmnco.in` HTTPS block of `/etc/nginx/sites-available/invoice` (backup: `invoice.bak-before-portfolio-api`) |
| Secrets | `/etc/portfolio-contact.env` (root only): `SMTP_USER`, `SMTP_PASS`, `MAIL_TO`, `ALLOWED_ORIGINS`, `SITE_URL` |
| Saved messages | `/var/lib/portfolio-contact/messages.jsonl` (every enquiry, even if the email failed) |

What it does for each submission:

- accepts it only from `ALLOWED_ORIGINS` (the live site and local dev servers)
- drops spam-trap submissions (`bot-field`), limits each IP to 5 messages per 10 minutes
- validates the fields, saves a copy, then emails you a plain-text message with
  **Reply-To set to the client**, so you can just hit reply
- without JavaScript, the browser gets a small "Message sent" page instead of JSON

## Deploy a change

```bash
contact-api/deploy.sh
```

## Day-to-day

```bash
ssh invoice-vm 'systemctl status portfolio-contact'
ssh invoice-vm 'sudo journalctl -u portfolio-contact -n 50'                 # logs
ssh invoice-vm 'sudo tail -n 5 /var/lib/portfolio-contact/messages.jsonl'   # saved enquiries
ssh invoice-vm 'sudo systemd-run --quiet --pipe --wait -p EnvironmentFile=/etc/portfolio-contact.env -p DynamicUser=yes python3 /opt/portfolio-contact/server.py --check-smtp'   # test the Gmail login
```

To change where mail goes, or the Gmail app password: edit `/etc/portfolio-contact.env`
on the VM, then `sudo systemctl restart portfolio-contact`.

## One-time setup (already done)

1. `/etc/portfolio-contact.env`, mode `600`, owner root:

   ```
   SMTP_USER=you@gmail.com
   SMTP_PASS=<Gmail app password>
   MAIL_TO=you@gmail.com
   ALLOWED_ORIGINS=https://kannan-24.netlify.app,http://localhost:5173,http://localhost:4173
   SITE_URL=https://kannan-24.netlify.app
   ```

2. nginx, inside the `server_name skmnco.in` HTTPS block, then `sudo nginx -t && sudo systemctl reload nginx`:

   ```nginx
   location ^~ /portfolio-api/ {
       proxy_pass http://127.0.0.1:8200/;
       proxy_http_version 1.1;
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_set_header X-Forwarded-Proto $scheme;
       proxy_read_timeout 30s;
       client_max_body_size 64k;
   }
   ```

3. `contact-api/deploy.sh`
