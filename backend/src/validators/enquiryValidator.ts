import { z } from 'zod';

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name cannot exceed 100 characters'),
  phone: z
    .string()
    .trim()
    .min(7, 'Phone number must be at least 7 characters')
    .max(20, 'Phone number cannot exceed 20 characters')
    .regex(/^[+]?[0-9\s\-()]{7,20}$/, 'Invalid phone number format. Supported formats include: +91 87547 39973 or standard mobile numbers.'),
  subject: z
    .string()
    .trim()
    .max(100, 'Subject cannot exceed 100 characters')
    .optional(),
  message: z
    .string()
    .trim()
    .min(5, 'Message must be at least 5 characters')
    .max(1000, 'Message cannot exceed 1000 characters'),
  productId: z
    .string()
    .trim()
    .max(50, 'Product ID cannot exceed 50 characters')
    .optional(),
  productName: z
    .string()
    .trim()
    .max(100, 'Product name cannot exceed 100 characters')
    .optional()
}).strict(); // Disallow any unexpected extra fields

export type EnquiryInput = z.infer<typeof enquirySchema>;
