import app from '../backend/src/app.js';

/**
 * Vercel Serverless Function wildcard catch-all route
 * Handles all sub-path API requests such as /api/health, /api/store/info, /api/enquiry
 */
export default function handler(req: any, res: any) {
  return app(req, res);
}

export { app };
