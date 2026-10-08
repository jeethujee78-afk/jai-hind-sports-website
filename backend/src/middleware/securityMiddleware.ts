import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { ENV } from '../config/env.js';

/**
 * Helmet HTTP security headers configured for API service
 */
export const configureSecurityHeaders = () => {
  return helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
    contentSecurityPolicy: false, // Not serving HTML from the API
    hidePoweredBy: true,
    noSniff: true,
    hsts: ENV.NODE_ENV === 'production' ? {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true
    } : false
  });
};

/**
 * General API rate limiter for public endpoints
 */
export const generalRateLimiter = rateLimit({
  windowMs: ENV.RATE_LIMIT_WINDOW_MS,
  max: ENV.RATE_LIMIT_MAX,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too Many Requests',
    message: 'Too many requests from this IP address. Please try again later.'
  }
});

/**
 * Strict rate limiter for enquiry submissions to prevent spam
 */
export const enquiryRateLimiter = rateLimit({
  windowMs: ENV.RATE_LIMIT_WINDOW_MS,
  max: ENV.ENQUIRY_RATE_LIMIT_MAX,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too Many Requests',
    message: 'Too many enquiry submissions from this IP address. Please try again after 15 minutes.'
  }
});
