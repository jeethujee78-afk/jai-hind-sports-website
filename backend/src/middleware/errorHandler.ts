import { Request, Response, NextFunction } from 'express';
import { ENV } from '../config/env.js';

/**
 * 404 Not Found Middleware
 */
export const notFoundHandler = (req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not Found',
    message: `The requested resource '${req.originalUrl}' does not exist on this server.`
  });
};

/**
 * Centralized Error Handling Middleware
 */
export const errorHandler = (err: any, req: Request, res: Response, _next: NextFunction) => {
  // Handle malformed JSON body
  if (err instanceof SyntaxError && 'body' in err && (err as any).status === 400) {
    res.status(400).json({
      error: 'Bad Request',
      message: 'Malformed JSON payload provided in request body.'
    });
    return;
  }

  // Handle body size limit exceeded
  if (err.type === 'entity.too.large' || err.status === 413) {
    res.status(413).json({
      error: 'Payload Too Large',
      message: 'Request payload exceeds the allowable size limit (10KB).'
    });
    return;
  }

  // Handle CORS errors
  if (err.status === 403 || err.message?.includes('CORS')) {
    res.status(403).json({
      error: 'Forbidden',
      message: 'Request origin is not allowed by CORS policy.'
    });
    return;
  }

  const statusCode = typeof err.status === 'number' && err.status >= 400 && err.status < 600
    ? err.status
    : 500;

  // Never leak internal stack traces or paths in production
  const isProduction = ENV.NODE_ENV === 'production';

  res.status(statusCode).json({
    error: statusCode === 500 ? 'Internal Server Error' : (err.name || 'Error'),
    message: isProduction
      ? 'An unexpected error occurred. Please try again later.'
      : (err.message || 'An unexpected error occurred.')
  });
};
