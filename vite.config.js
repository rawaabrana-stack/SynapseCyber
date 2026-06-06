import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Reads the raw request body and parses it as JSON (dev mail endpoint only).
function readJson(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
      if (data.length > 1_000_000) req.destroy(); // 1MB guard
    });
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch {
        reject(Object.assign(new Error('Invalid JSON body'), { statusCode: 400 }));
      }
    });
    req.on('error', reject);
  });
}

export default defineConfig(({ mode }) => {
  // Load ALL env vars (no VITE_ prefix filter) so the server-side SMTP_* values
  // from .env.local are available to the dev mail handler below. These are used
  // only inside configureServer and are never exposed to the client bundle.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'dev-mail-api',
        apply: 'serve', // dev only — production uses the Vercel /api/contact function
        configureServer(server) {
          for (const key of ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'MAIL_TO', 'MAIL_FROM', 'MAIL_FROM_NAME']) {
            if (env[key] && process.env[key] == null) process.env[key] = env[key];
          }

          server.middlewares.use('/api/contact', async (req, res, next) => {
            if (req.method !== 'POST') return next();
            res.setHeader('Content-Type', 'application/json');
            try {
              const body = await readJson(req);
              const { sendMail } = await server.ssrLoadModule('/api/_send.js');
              const result = await sendMail(body);
              res.statusCode = 200;
              res.end(JSON.stringify({ ok: true, id: result.id }));
            } catch (err) {
              const code = err.statusCode || 500;
              if (code >= 500) server.config.logger.error('[mail] ' + (err?.stack || err));
              res.statusCode = code;
              res.end(
                JSON.stringify({
                  ok: false,
                  error:
                    code >= 500
                      ? 'Could not send message (check the SMTP settings in .env.local).'
                      : err.message,
                })
              );
            }
          });
        },
      },
    ],
  };
});
