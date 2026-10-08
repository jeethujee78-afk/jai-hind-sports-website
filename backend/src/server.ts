import { app } from './app.js';
import { ENV } from './config/env.js';

let server: any = null;

// Only start the persistent HTTP listener when running as a standalone server (not in tests or serverless)
if (process.env.NODE_ENV !== 'test') {
  server = app.listen(ENV.PORT, () => {
    console.log(`[JAI HIND SPORTS BACKEND] Running on port ${ENV.PORT} (${ENV.NODE_ENV})`);
  });
}

export { app, server };
export default app;
