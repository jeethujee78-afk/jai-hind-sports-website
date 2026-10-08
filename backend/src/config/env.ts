import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

const parseAllowedOrigins = (): string[] => {
  const configured = process.env.ALLOWED_ORIGINS || process.env.FRONTEND_URL || '';
  const origins = configured
    .split(',')
    .map(o => o.trim().replace(/\/$/, ''))
    .filter(Boolean);

  // In non-production environments, allow local development ports
  if (process.env.NODE_ENV !== 'production') {
    const devDefaults = [
      'http://localhost:3000',
      'http://localhost:5173',
      'http://127.0.0.1:3000',
      'http://127.0.0.1:5173'
    ];
    for (const devOrigin of devDefaults) {
      if (!origins.includes(devOrigin)) {
        origins.push(devOrigin);
      }
    }
  }

  // On Vercel, allow the deployment URL and production URL if provided by platform
  if (process.env.VERCEL_URL) {
    const vercelOrigin = `https://${process.env.VERCEL_URL}`;
    if (!origins.includes(vercelOrigin)) origins.push(vercelOrigin);
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    const vercelProdOrigin = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
    if (!origins.includes(vercelProdOrigin)) origins.push(vercelProdOrigin);
  }

  return origins;
};

const resolveTrustProxy = () => {
  if (process.env.TRUST_PROXY !== undefined && process.env.TRUST_PROXY !== '') {
    if (process.env.TRUST_PROXY === 'true') return true;
    if (process.env.TRUST_PROXY === 'false') return false;
    const num = Number(process.env.TRUST_PROXY);
    return isNaN(num) ? process.env.TRUST_PROXY : num;
  }
  // On Vercel, serverless functions run behind Vercel's reverse proxy edge network (1 hop)
  if (process.env.VERCEL === '1' || Boolean(process.env.VERCEL)) {
    return 1;
  }
  // Default to false in local development / standalone environment
  return false;
};

export const ENV = {
  PORT: parseInt(process.env.PORT || '5000', 10),
  NODE_ENV: (process.env.NODE_ENV || 'development') as 'development' | 'production' | 'test',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000',
  ALLOWED_ORIGINS: parseAllowedOrigins(),
  RATE_LIMIT_WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10), // 15 minutes default
  RATE_LIMIT_MAX: parseInt(process.env.RATE_LIMIT_MAX || '100', 10),
  ENQUIRY_RATE_LIMIT_MAX: parseInt(process.env.ENQUIRY_RATE_LIMIT_MAX || '10', 10),
  TRUST_PROXY: resolveTrustProxy()
} as const;
