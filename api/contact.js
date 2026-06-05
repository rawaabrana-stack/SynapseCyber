// Vercel serverless function — receives form POSTs in production and sends
// the email via SMTP. Local development is handled by the dev middleware in
// vite.config.js, which reuses the same sendMail() helper.
import { sendMail } from './_send.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const body =
      typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
    const result = await sendMail(body);
    return res.status(200).json({ ok: true, id: result.id });
  } catch (err) {
    const code = err.statusCode || 500;
    if (code >= 500) console.error('[mail] send failed:', err);
    return res.status(code).json({
      ok: false,
      error:
        code >= 500
          ? 'Could not send your message right now. Please email ridarashid.cyber@gmail.com directly.'
          : err.message,
    });
  }
}
