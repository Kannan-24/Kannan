#!/usr/bin/env bash
# Choose the Gmail account the contact API sends FROM (and where enquiries go).
# The app password is typed hidden and sent to the VM over SSH stdin: it never
# appears on screen, in shell history, or in process lists.
#
#   bash contact-api/set-smtp.sh
#
# Gmail files mail that an account sends to ITSELF under "Sent", not "Inbox",
# so send FROM a different Gmail account than the one you receive enquiries at.
# App password: https://myaccount.google.com/apppasswords (needs 2-Step Verification).
set -euo pipefail

HOST=${CONTACT_VM_HOST:-invoice-vm}
ENV_FILE=/etc/portfolio-contact.env

current_to=$(ssh -o BatchMode=yes "$HOST" "sudo grep -E '^MAIL_TO=' $ENV_FILE | cut -d= -f2-")

read -rp "Deliver enquiries TO [$current_to]: " MAIL_TO
MAIL_TO=${MAIL_TO:-$current_to}
read -rp "Send FROM (Gmail address that owns the app password): " SMTP_USER
if [[ "${SMTP_USER,,}" == "${MAIL_TO,,}" ]]; then
  echo "Warning: same account as the TO address. Gmail will file enquiries under Sent, not Inbox."
fi
read -rsp "App password for $SMTP_USER (hidden): " SMTP_PASS
echo
SMTP_PASS=${SMTP_PASS// /} # Google shows it as 4 groups of 4 letters
if [[ -z "$SMTP_USER" || -z "$SMTP_PASS" || -z "$MAIL_TO" ]]; then
  echo "All three values are required." >&2
  exit 1
fi

# Rewrites the three lines in the env file, keeping a backup; values come from stdin.
UPDATE_PY='
import sys
user, password, to = (sys.stdin.readline().rstrip("\n") for _ in range(3))
path = "/etc/portfolio-contact.env"
keep = [l for l in open(path).read().splitlines()
        if not l.startswith(("SMTP_USER=", "SMTP_PASS=", "MAIL_TO="))]
open(path, "w").write("\n".join(keep + [f"SMTP_USER={user}", f"SMTP_PASS={password}", f"MAIL_TO={to}"]) + "\n")
'
CHECK="sudo systemd-run --quiet --pipe --wait -p EnvironmentFile=$ENV_FILE -p DynamicUser=yes python3 /opt/portfolio-contact/server.py"

echo "==> Updating $HOST"
ssh -o BatchMode=yes "$HOST" "sudo cp -a $ENV_FILE $ENV_FILE.bak"
printf '%s\n%s\n%s\n' "$SMTP_USER" "$SMTP_PASS" "$MAIL_TO" |
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
