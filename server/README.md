# Contact form backend (cPanel / PHP)

`send-email.php` and `SmtpMailer.php` are standalone scripts — they are
**not** built by Vite and are not part of the React app's bundle. Deploy them
separately to whatever PHP hosting receives the contact form submissions.

Mail is sent over authenticated SMTP (`SmtpMailer.php`, no external
dependency), not PHP's `mail()` function — many hardened cPanel hosts disable
`mail()` entirely, which is why the form was failing with a 500 and no body.

## Deploy

1. In cPanel, under **Email > Email Accounts**, create a mailbox to send from
   if you don't already have one, e.g. `webmaster@africaclimateanalytics.org`.
   Click **Connect Devices** for that account to see its SMTP host/port
   (usually `mail.yourdomain.com`, port `587` with STARTTLS, or `465` with
   implicit SSL).
2. Open **File Manager**, navigate to your site's root (usually `public_html`).
3. Upload **both** `send-email.php` and `SmtpMailer.php` there (or into a
   subfolder, e.g. `public_html/api/` — they must stay in the same folder).
4. Edit the constants near the top of `send-email.php`:
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_ENCRYPTION` — from step 1.
   - `SMTP_USERNAME` / `SMTP_PASSWORD` — the mailbox's login and password.
   - `$to` (further down) — the inbox that should receive enquiries (can be
     the same mailbox, or a different one).

   Consider moving `SMTP_PASSWORD` out of this file and into a config file
   stored **outside** `public_html`, required in via an absolute path, so it
   isn't sitting in the web root.
5. In cPanel, under **Email > Email Deliverability**, confirm SPF/DKIM are set
   up for the domain (repair if needed) so messages don't land in junk.
6. If sending still fails, check **Metrics > Errors** in cPanel — both
   `send-email.php` and `SmtpMailer.php` log the underlying SMTP error via
   `error_log()`.

## Point the frontend at it

Set `VITE_CONTACT_API_URL` to the script's public URL, e.g.:

```
VITE_CONTACT_API_URL=https://africaclimateanalytics.org/send-email.php
```

Add this to a `.env` (or `.env.production`) file at the project root — see
`.env.example`. If unset, the frontend falls back to
`https://africaclimateanalytics.org/send-email.php`.

## CORS

The script currently sends `Access-Control-Allow-Origin: *`. Once the
frontend's production domain is known, tighten this to that exact origin
inside `send-email.php`.
