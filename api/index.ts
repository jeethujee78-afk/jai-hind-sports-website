import app from '../backend/src/app.js';

/**
 * Vercel Serverless Function entry point
 * Handles API requests routed through /api
 */
export default function handler(req: any, res: any) {
  return app(req, res);
}

export { app };
