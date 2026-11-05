#!/usr/bin/env bash
# Deploy the contact-form API to the invoice VM (https://skmnco.in/portfolio-api).
#
#   contact-api/deploy.sh      # upload server.py + systemd unit, restart, health check
#
# Needs the `invoice-vm` SSH host (~/.ssh/config). The server keeps its own
# /etc/portfolio-contact.env (SMTP password lives only there); it is never
# touched here. One-time setup (env file, nginx) is described in README.md.
set -euo pipefail

HOST=${CONTACT_VM_HOST:-invoice-vm}
URL=${CONTACT_URL:-https://skmnco.in/portfolio-api}
cd "$(dirname "$0")"

echo "==> Uploading to $HOST"
ssh -o BatchMode=yes "$HOST" 'mkdir -p ~/portfolio-contact-deploy'
scp -q server.py portfolio-contact.service "$HOST:portfolio-contact-deploy/"

echo "==> Installing and restarting"
ssh -o BatchMode=yes "$HOST" 'set -e
sudo install -d -m 755 /opt/portfolio-contact
sudo install -m 644 ~/portfolio-contact-deploy/server.py /opt/portfolio-contact/server.py
sudo install -m 644 ~/portfolio-contact-deploy/portfolio-contact.service /etc/systemd/system/portfolio-contact.service
sudo systemctl daemon-reload
sudo systemctl enable --now portfolio-contact >/dev/null 2>&1
sudo systemctl restart portfolio-contact
for i in 1 2 3 4 5 6 7 8 9 10; do
  curl -fs http://127.0.0.1:8200/health >/dev/null && break
  sleep 1
done
systemctl is-active portfolio-contact'

echo "==> Health check: $URL/health"
curl -fsS "$URL/health"
echo
