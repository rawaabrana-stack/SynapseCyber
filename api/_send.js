// Shared mail-sending logic used by both the Vercel serverless function
// (api/contact.js) and the Vite dev middleware (vite.config.js).
// Files in /api that start with "_" are treated as helpers by Vercel and are
// NOT exposed as HTTP endpoints.
import nodemailer from 'nodemailer';

let transporter;

function getTransporter() {
  if (transporter) return transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    const err = new Error('SMTP is not configured. Set SMTP_HOST, SMTP_USER and SMTP_PASS.');
    err.statusCode = 500;
    throw err;
  }

  const port = Number(SMTP_PORT) || 465;
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // 465 = implicit TLS, 587 = STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  return transporter;
}

function escapeHtml(value = '') {
  return String(value).replace(/[<>&"]/g, (c) => (
    { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]
  ));
}

function fail(message, statusCode = 400) {
  const err = new Error(message);
  err.statusCode = statusCode;
  return err;
}

/**
 * Validate a form payload and send it as an email.
 * @param {object} data - { formType, name, email, organisation, reason, service, message }
 * @returns {Promise<{id: string}>}
 */
export async function sendMail(data = {}) {
  const formType = (data.formType || 'Website enquiry').toString().slice(0, 80);
  const name = (data.name || '').toString().trim();
  const email = (data.email || '').toString().trim();
  const organisation = (data.organisation || '').toString().trim();
  const reason = (data.reason || '').toString().trim();
  const service = (data.service || '').toString().trim();
  const message = (data.message || '').toString().trim();

  if (!name || !email || !message) {
    throw fail('Name, email and message are all required.');
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw fail('Please provide a valid email address.');
  }
  if (message.length > 8000) {
    throw fail('Message is too long.');
  }

  const to = process.env.MAIL_TO || process.env.SMTP_USER;
  const from = process.env.MAIL_FROM || process.env.SMTP_USER;
  const fromName = process.env.MAIL_FROM_NAME || 'SynapseCyber Website';

  const subject = `[SynapseCyber] ${formType} — ${name}${organisation ? ` (${organisation})` : ''}`;

  const rows = [
    ['Form', formType],
    ['Name', name],
    ['Email', email],
    ['Organisation', organisation],
    ['Reason', reason],
    ['Service', service],
  ].filter(([, v]) => v);

  const text =
    rows.map(([k, v]) => `${k}: ${v}`).join('\n') +
    `\n\nMessage:\n${message}\n`;

  const html =
    `<h2 style="font-family:system-ui,sans-serif;margin:0 0 12px">${escapeHtml(formType)} — new submission</h2>` +
    `<table style="font-family:system-ui,sans-serif;border-collapse:collapse;font-size:14px">` +
    rows
      .map(
        ([k, v]) =>
          `<tr><td style="padding:4px 14px 4px 0;color:#555;vertical-align:top"><b>${escapeHtml(k)}</b></td>` +
          `<td style="padding:4px 0">${escapeHtml(v)}</td></tr>`
      )
      .join('') +
    `</table>` +
    `<p style="font-family:system-ui,sans-serif;font-size:14px;white-space:pre-wrap;margin-top:16px">` +
    `<b>Message</b><br>${escapeHtml(message)}</p>`;

  const info = await getTransporter().sendMail({
    from: `"${fromName}" <${from}>`,
    to,
    replyTo: `"${name}" <${email}>`, // hitting Reply goes straight to the enquirer
    subject,
    text,
    html,
  });

  return { id: info.messageId };
}
