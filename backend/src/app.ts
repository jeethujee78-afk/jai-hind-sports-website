import express, { Request, Response } from 'express';
import { randomUUID } from 'crypto';
import { ENV } from './config/env.js';
import { configureCors } from './middleware/corsMiddleware.js';
import { 
  configureSecurityHeaders, 
  generalRateLimiter, 
  enquiryRateLimiter 
} from './middleware/securityMiddleware.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';
import { enquirySchema } from './validators/enquiryValidator.js';

const app = express();

// Configure proxy trust (1 hop on Vercel, or custom env, false by default for local standalone)
if (ENV.TRUST_PROXY !== false) {
  app.set('trust proxy', ENV.TRUST_PROXY);
}

// 1. HTTP Security Headers via Helmet
app.use(configureSecurityHeaders());

// 2. Cross-Origin Resource Sharing (CORS): allows same-origin requests naturally, restricts untrusted cross-origins
app.use(configureCors());

// 3. Strict Payload Body Limits to prevent DoS (10KB limit)
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: false, limit: '10kb' }));

/**
 * Calculates real-time Indian Standard Time (IST, UTC+5:30) store status
 * Mon-Sat: 10:00 AM – 9:00 PM | Sun: 10:00 AM – 2:00 PM
 */
function getISTStoreStatus() {
  const now = new Date();
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
  const istDate = new Date(utcMs + 5.5 * 3600000);

  const dayOfWeek = istDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hours = istDate.getHours();
  const minutes = istDate.getMinutes();
  const currentMinutes = hours * 60 + minutes;

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = days[dayOfWeek];

  let isOpen = false;
  let todaySchedule = '';

  if (dayOfWeek === 0) {
    // Sunday: 10:00 AM to 2:00 PM (600 to 840 minutes)
    todaySchedule = '10:00 AM – 2:00 PM';
    isOpen = currentMinutes >= 600 && currentMinutes < 840;
  } else {
    // Monday to Saturday: 10:00 AM to 9:00 PM (600 to 1260 minutes)
    todaySchedule = '10:00 AM – 9:00 PM';
    isOpen = currentMinutes >= 600 && currentMinutes < 1260;
  }

  return {
    isOpen,
    todaySchedule,
    todayName,
    currentISTTime: istDate.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
  };
}

// Primary trusted WhatsApp destination phone number (immutable constant)
const TRUSTED_PRIMARY_WHATSAPP_PHONE = '918754739973';

// Create API Router to handle endpoints both under /api and under / (for serverless rewrite versatility)
const apiRouter = express.Router();

// 4. Rate Limiting on public API endpoints
apiRouter.use(generalRateLimiter);

// Root API information endpoint
apiRouter.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    service: 'JAI HIND SPORTS API',
    status: 'online',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      storeInfo: '/api/store/info',
      enquiry: 'POST /api/enquiry'
    }
  });
});

// Minimal health check endpoint (no infrastructure or environment leakage)
apiRouter.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

// Verified store profile & real-time hours endpoint
apiRouter.get('/store/info', (_req: Request, res: Response) => {
  const istStatus = getISTStoreStatus();

  res.status(200).json({
    name: 'JAI HIND SPORTS',
    tagline: 'Leading Sports Goods & Accessories Showroom in Coimbatore',
    address: {
      street: 'Shop No. 2/17, Near Kavees Bakery',
      area: 'Cheran Ma Nagar, Vilankurichi',
      city: 'Coimbatore',
      state: 'Tamil Nadu',
      pincode: '641035',
      full: 'Shop No. 2/17, Near Kavees Bakery, Cheran Ma Nagar, Vilankurichi, Coimbatore, Tamil Nadu - 641035'
    },
    contact: {
      primaryPhone: '+91 87547 39973',
      primaryWhatsAppUrl: 'https://wa.me/918754739973',
      secondaryPhone: '+91 96290 24175',
      secondaryWhatsAppUrl: 'https://wa.me/919629024175'
    },
    hours: {
      monSat: '10:00 AM – 9:00 PM',
      sunday: '10:00 AM – 2:00 PM',
      summary: 'Mon - Sat: 10:00 AM - 9:00 PM | Sun: 10:00 AM - 2:00 PM'
    },
    status: {
      isOpen: istStatus.isOpen,
      todaySchedule: istStatus.todaySchedule,
      todayName: istStatus.todayName,
      currentISTTime: istStatus.currentISTTime
    },
    directionsUrl: 'https://share.google/UjCuwKuSwDqENkgFW',
    services: [
      'Cricket Bat Knocking & Oiling Guidance',
      'Badminton Racket Stringing & Grip Replacement',
      'Handle Grip Replacement & Accessories',
      'School & College Sports Day Supply Quotes',
      'Team Uniforms & Club Order Quotations'
    ]
  });
});

// Hardened enquiry endpoint with strict rate limiting and schema validation
apiRouter.post('/enquiry', enquiryRateLimiter, (req: Request, res: Response) => {
  const parseResult = enquirySchema.safeParse(req.body);

  if (!parseResult.success) {
    const errorDetails = parseResult.error.issues.map(issue => ({
      field: issue.path.join('.'),
      message: issue.message
    }));

    res.status(400).json({
      error: 'Validation Error',
      message: 'Invalid enquiry payload.',
      details: errorDetails
    });
    return;
  }

  const validated = parseResult.data;
  const enquiryId = `ENQ-${randomUUID().slice(0, 8).toUpperCase()}`;

  // Safe diagnostic log: Log event ID and non-sensitive status ONLY (NO PII, NO customer names or phones)
  console.log(`[ENQUIRY_EVENT] id=${enquiryId} status=validated hasProduct=${Boolean(validated.productId)}`);

  // Construct safe WhatsApp direct URL using server-controlled destination
  const messageLines = [
    `Hello JAI HIND SPORTS, I am ${validated.name}.`,
    validated.subject && validated.subject !== 'General Enquiry' ? `Subject: ${validated.subject}` : null,
    validated.productName ? `Product: ${validated.productName}` : null,
    `Message: ${validated.message}`,
    `Contact Phone: ${validated.phone}`
  ].filter(Boolean).join('\n');

  const whatsAppDirectUrl = `https://wa.me/${TRUSTED_PRIMARY_WHATSAPP_PHONE}?text=${encodeURIComponent(messageLines)}`;

  res.status(200).json({
    success: true,
    stored: false,
    message: 'Enquiry validated. Click the WhatsApp link to chat directly with JAI HIND SPORTS.',
    enquiryId,
    whatsAppDirectUrl
  });
});

// Mount API router under both /api and / so it works regardless of Vercel serverless rewrite paths
app.use('/api', apiRouter);
app.use('/', apiRouter);

// Fallback 404 handler for unknown routes
app.use(notFoundHandler);

// Centralized error handler
app.use(errorHandler);

export { app };
export default app;
