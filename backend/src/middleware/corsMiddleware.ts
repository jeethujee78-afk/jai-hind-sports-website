import cors from 'cors';
import { Request } from 'express';
import { ENV } from '../config/env.js';

export const configureCors = () => {
  const allowedOrigins = ENV.ALLOWED_ORIGINS;

  return cors((req: Request, callback: any) => {
    const origin = req.headers.origin;
    const host = req.headers.host;

    // 1. Non-browser requests without origin header (e.g. cURL, internal health checks)
    if (!origin) {
      return callback(null, { origin: true });
    }

    // 2. Same-origin requests (frontend & backend hosted on same domain on Vercel)
    try {
      const parsedOrigin = new URL(origin);
      if (host && (parsedOrigin.host === host || parsedOrigin.host === host.split(':')[0])) {
        return callback(null, {
          origin: true,
          methods: ['GET', 'POST', 'OPTIONS'],
          allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
          credentials: true
        });
      }
    } catch {}

    // 3. Explicit whitelist check (e.g. localhost during dev or configured external origins)
    if (allowedOrigins.includes(origin)) {
      return callback(null, {
        origin: true,
        methods: ['GET', 'POST', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
        credentials: true
      });
    }

    // 4. Origin not permitted
    const corsError = new Error(`Origin '${origin}' not allowed by CORS policy`);
    (corsError as any).status = 403;
    return callback(corsError, { origin: false });
  });
};
