# Contact-form email (SMTP) — manual setup guide

How the website's forms send email. A React/Vite site runs in the **browser**, which
**cannot** send SMTP directly (credentials would be exposed and browsers can't speak the
SMTP protocol). So the flow is:

```
Browser form  --POST /api/contact-->  Serverless function (holds secrets)  --SMTP-->  Gmail  -->  Your inbox
```

---

## Step 1 — Create a Gmail App Password (the "sending" account)

1. On the Gmail account that will SEND the mail, turn on **2-Step Verification**:
   https://myaccount.google.com/security
2. Go to https://myaccount.google.com/apppasswords
3. Type any name (e.g. "My Website") and click **Create**.
4. Copy the **16-character code** (shown like `abcd efgh ijkl mnop`).
   The name is just a label — only the code matters. **Remove the spaces** before using it.

> A normal Gmail password will NOT work over SMTP — you must use an App Password.

---

## Step 2 — Install the mail library

```bash
npm install nodemailer
```

---

## Step 3 — Store the secrets in `.env.local` (never committed)

Create `.env.local` in the project root:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=sender@gmail.com          # the account the App Password belongs to
SMTP_PASS=abcdefghijklmnop          # the 16-char App Password, NO spaces
MAIL_TO=you@gmail.com               # where you RECEIVE submissions
MAIL_FROM=sender@gmail.com          # must equal SMTP_USER for Gmail
MAIL_FROM_NAME=My Website           # sender display name
```

Make sure `.gitignore` ignores it (this project already does via `.env.*`):

```
.env
.env.*
!.env.example
```

Ports: `465` = SSL (use `secure: true`), `587` = STARTTLS (use `secure: false`).

---

## Step 4 — Shared mailer: `api/_send.js`

Files in `/api` starting with `_` are helpers (not public endpoints).

```js
import nodemailer from 'nodemailer';

let transporter;
function getTransporter() {
  if (transporter) return transporter;
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    const e = new Error('SMTP not configured'); e.statusCode = 500; throw e;
  }
  const port = Number(SMTP_PORT) || 465;
  transporter = nodemailer.createTransport({
    host: SMTP_HOST, port, secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  return transporter;
}

export async function sendMail(data = {}) {
  const name = (data.name || '').trim();
  const email = (data.email || '').trim();
  const message = (data.message || '').trim();
  if (!name || !email || !message) { const e = new Error('Name, email and message are required.'); e.statusCode = 400; throw e; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { const e = new Error('Invalid email.'); e.statusCode = 400; throw e; }

  const info = await getTransporter().sendMail({
    from: `"${process.env.MAIL_FROM_NAME || 'Website'}" <${process.env.MAIL_FROM || process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO || process.env.SMTP_USER,
    replyTo: `"${name}" <${email}>`,   // Reply goes to the person who filled the form
    subject: `[Website] ${data.formType || 'Enquiry'} — ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });
  return { id: info.messageId };
}
```

---

## Step 5 — Serverless endpoint (production): `api/contact.js`

On Vercel, any file in `/api` becomes an HTTP endpoint automatically.

```js
import { sendMail } from './_send.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
    const result = await sendMail(body);
    return res.status(200).json({ ok: true, id: result.id });
  } catch (err) {
    const code = err.statusCode || 500;
    if (code >= 500) console.error(err);
    return res.status(code).json({ ok: false, error: code >= 500 ? 'Could not send. Email us directly.' : err.message });
  }
}
```

---

## Step 6 — Keep `/api` reachable: `vercel.json`

A SPA rewrite sends everything to `index.html`. Exclude `/api` so the function works:

```json
{
  "rewrites": [
    { "source": "/((?!api/).*)", "destination": "/index.html" }
  ]
}
```

---

## Step 7 — Make it work on local `npm run dev`: `vite.config.js`

Vite doesn't run `/api` functions, so add a dev-only middleware that reuses `sendMail`:

```js
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

function readJson(req) {
  return new Promise((resolve, reject) => {
    let d = '';
    req.on('data', c => { d += c; if (d.length > 1e6) req.destroy(); });
    req.on('end', () => { try { resolve(d ? JSON.parse(d) : {}); } catch { reject(Object.assign(new Error('Invalid JSON'), { statusCode: 400 })); } });
    req.on('error', reject);
  });
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ''); // load ALL vars (server-side only)
  return {
    plugins: [
      react(),
      {
        name: 'dev-mail-api',
        apply: 'serve',
        configureServer(server) {
          for (const k of ['SMTP_HOST','SMTP_PORT','SMTP_USER','SMTP_PASS','MAIL_TO','MAIL_FROM','MAIL_FROM_NAME'])
            if (env[k] && process.env[k] == null) process.env[k] = env[k];
          server.middlewares.use('/api/contact', async (req, res, next) => {
            if (req.method !== 'POST') return next();
            res.setHeader('Content-Type', 'application/json');
            try {
              const body = await readJson(req);
              const { sendMail } = await server.ssrLoadModule('/api/_send.js');
              const r = await sendMail(body);
              res.end(JSON.stringify({ ok: true, id: r.id }));
            } catch (err) {
              res.statusCode = err.statusCode || 500;
              res.end(JSON.stringify({ ok: false, error: err.message }));
            }
          });
        },
      },
    ],
  };
});
```

> Important: SMTP secrets must NOT have a `VITE_` prefix — that would leak them to the
> browser bundle. Loaded here, they stay server-side only.

---

## Step 8 — Reusable form hook: `src/useMailForm.js`

```js
import { useState } from 'react';

export function useMailForm(formType) {
  const [status, setStatus] = useState('idle'); // idle|sending|sent|error
  const [error, setError] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    const formEl = e.currentTarget;
    setError(''); setStatus('sending');
    const payload = Object.fromEntries(new FormData(formEl).entries());
    payload.formType = formType;
    try {
      const res = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('sent'); formEl.reset();
    } catch (err) { setError(err.message); setStatus('error'); }
  }
  return { sending: status === 'sending', sent: status === 'sent', error, handleSubmit };
}
```

---

## Step 9 — Wire each form (3 rules)

For every form (`Home.jsx`, `Contact.jsx`, `Quote.jsx`):

1. Use the hook: `const form = useMailForm('Contact');`
2. Make it a real form: `<form onSubmit={form.handleSubmit} noValidate>`  (NOT a `<div>`)
3. Give every field a **`name`** (FormData reads by name):
   `name`, `email`, `organisation`, `service`/`reason`, `message`
4. Button + feedback:
   ```jsx
   <button type="submit" disabled={form.sending}>{form.sending ? 'Sending…' : 'Send'}</button>
   {form.error && <p style={{color:'#c0392b'}}>{form.error}</p>}
   {form.sent && <p style={{color:'#1a7f4b'}}>Thanks — message sent.</p>}
   ```

---

## Step 10 — Test, then deploy

**Local:** `npm run dev`, submit a form. Watch the terminal for `[mail]` errors if it fails.

**Production (Vercel):** `.env.local` is NOT uploaded (gitignored). Add the same vars in
**Vercel → Project → Settings → Environment Variables**, then redeploy.

---

## Troubleshooting

| Symptom | Cause / fix |
| --- | --- |
| `Invalid login` / `535` | Wrong App Password, or used the normal password. Regenerate; remove spaces. |
| `SMTP not configured` | A `SMTP_*` var is empty. After editing `.env.local`, **restart** `npm run dev`. |
| Endpoint returns HTML not JSON | `/api` got caught by the SPA rewrite — fix `vercel.json` (Step 6). |
| Works locally, fails on Vercel | Env vars not set in the Vercel dashboard. |
| Email goes to Spam | Mark "Not spam" once; or later use a custom domain + SPF/DKIM for better delivery. |
| Gmail "limit exceeded" | Personal Gmail ≈ 500/day. For volume, use Brevo/SendGrid/Resend (same code, different `SMTP_HOST`). |
