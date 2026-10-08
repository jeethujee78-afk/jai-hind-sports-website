/**
 * JAI HIND SPORTS - Official Business Contact Configuration
 * SOURCE OF TRUTH: Google Business Profile (https://share.google/nXQqIAsG9K9kOHrok)
 */

export const BUSINESS_CONTACT = {
  name: 'JAI HIND SPORTS',

  primaryWhatsApp: '918754739973',
  secondaryWhatsApp: '919629024175',

  primaryDisplay: '+91 87547 39973',
  secondaryDisplay: '+91 96290 24175',

  // Supplementary structured properties
  primaryPhoneDigits: '8754739973',
  primaryDisplayPhone: '+91 87547 39973',
  primaryTel: '+918754739973',
  primaryWhatsAppUrl: 'https://wa.me/918754739973',

  secondaryPhoneDigits: '9629024175',
  secondaryPhone: '+91 96290 24175',
  secondaryDisplayPhone: '+91 96290 24175',
  secondaryTel: '+919629024175',
  secondaryWhatsAppUrl: 'https://wa.me/919629024175',

  // Official Verified Address from Google Business Profile
  address: {
    street: 'Shop No. 2/17, Near Kavees Bakery',
    area: 'Cheran Ma Nagar, Vilankurichi',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    pincode: '641035',
    country: 'India',
    full: 'Shop No. 2/17, Near Kavees Bakery, Cheran Ma Nagar, Vilankurichi, Coimbatore, Tamil Nadu - 641035',
    short: 'Shop No. 2/17, Near Kavees Bakery, Cheran Ma Nagar, Coimbatore',
    displayArea: 'Cheran Ma Nagar, Vilankurichi'
  },

  // Google Business Profile & Directions Link (Verified: https://share.google/UjCuwKuSwDqENkgFW)
  googleBusinessProfile: 'https://share.google/UjCuwKuSwDqENkgFW',
  directionsUrl: 'https://share.google/UjCuwKuSwDqENkgFW',

  // Verified Business Opening Hours from Google Profile
  hours: {
    monSat: '10:00 AM – 9:00 PM',
    sunday: '10:00 AM – 2:00 PM',
    summary: 'Mon – Sat: 10:00 AM – 9:00 PM | Sunday: 10:00 AM – 2:00 PM',
    compactMonSat: 'Mon–Sat: 10 AM – 9 PM',
    compactSun: 'Sun: 10 AM – 2 PM',
    schedule: [
      { day: 'Monday', hours: '10:00 AM – 9:00 PM', isSunday: false },
      { day: 'Tuesday', hours: '10:00 AM – 9:00 PM', isSunday: false },
      { day: 'Wednesday', hours: '10:00 AM – 9:00 PM', isSunday: false },
      { day: 'Thursday', hours: '10:00 AM – 9:00 PM', isSunday: false },
      { day: 'Friday', hours: '10:00 AM – 9:00 PM', isSunday: false },
      { day: 'Saturday', hours: '10:00 AM – 9:00 PM', isSunday: false },
      { day: 'Sunday', hours: '10:00 AM – 2:00 PM', isSunday: true }
    ]
  },
  hoursNotice: 'Mon – Sat: 10:00 AM – 9:00 PM • Sun: 10:00 AM – 2:00 PM',
  compactHours: 'Mon–Sat: 10 AM – 9 PM | Sun: 10 AM – 2 PM',
  description: 'JAI HIND SPORTS is a sports goods and sports accessories store serving customers in Coimbatore.'
} as const;

/**
 * Accurately checks store open/closed status according to Indian Standard Time (IST)
 * Weekdays/Saturday: 10:00 AM - 9:00 PM IST
 * Sunday: 10:00 AM - 2:00 PM IST
 */
export function getISTStoreStatus(): { isOpen: boolean; todaySchedule: string; todayName: string } {
  try {
    const now = new Date();
    const istString = now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    const istDate = new Date(istString);
    const day = istDate.getDay(); // 0 = Sunday, 1 = Monday ... 6 = Saturday
    const minutes = istDate.getHours() * 60 + istDate.getMinutes();

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const todayName = dayNames[day];

    if (day === 0) {
      // Sunday: 10:00 AM to 2:00 PM (600 to 840 mins)
      const isOpen = minutes >= 600 && minutes < 840;
      return { isOpen, todaySchedule: '10:00 AM – 2:00 PM', todayName };
    } else {
      // Mon - Sat: 10:00 AM to 9:00 PM (600 to 1260 mins)
      const isOpen = minutes >= 600 && minutes < 1260;
      return { isOpen, todaySchedule: '10:00 AM – 9:00 PM', todayName };
    }
  } catch {
    return { isOpen: false, todaySchedule: '10:00 AM – 9:00 PM', todayName: 'Today' };
  }
}

/**
 * Generates an official WhatsApp URL adhering strictly to the wa.me format:
 * https://wa.me/918754739973 or https://wa.me/918754739973?text=...
 * The PRIMARY number is the default destination for all customer enquiries.
 */
export function getWhatsAppUrl(message?: string): string {
  const baseUrl = BUSINESS_CONTACT.primaryWhatsAppUrl;
  if (!message || !message.trim()) {
    return baseUrl;
  }
  return `${baseUrl}?text=${encodeURIComponent(message.trim())}`;
}

/**
 * Generates an alternative WhatsApp URL for the secondary contact:
 * https://wa.me/919629024175 or https://wa.me/919629024175?text=...
 * Available as an alternative contact (not default).
 */
export function getSecondaryWhatsAppUrl(message?: string): string {
  const baseUrl = BUSINESS_CONTACT.secondaryWhatsAppUrl;
  if (!message || !message.trim()) {
    return baseUrl;
  }
  return `${baseUrl}?text=${encodeURIComponent(message.trim())}`;
}

// Named exports for clean imports across components
export const WHATSAPP_NUMBER = BUSINESS_CONTACT.primaryWhatsApp;
export const DISPLAY_PHONE = BUSINESS_CONTACT.primaryDisplay;
export const TEL_PHONE = BUSINESS_CONTACT.primaryTel;

export const SECONDARY_WHATSAPP = BUSINESS_CONTACT.secondaryWhatsApp;
export const SECONDARY_PHONE = BUSINESS_CONTACT.secondaryDisplay;
export const SECONDARY_TEL = BUSINESS_CONTACT.secondaryTel;
export const SECONDARY_WHATSAPP_URL = BUSINESS_CONTACT.secondaryWhatsAppUrl;

export const STORE_ADDRESS = BUSINESS_CONTACT.address.full;
export const GOOGLE_MAPS_URL = BUSINESS_CONTACT.directionsUrl;
export const HOURS_NOTICE = BUSINESS_CONTACT.hoursNotice;
export const STORE_HOURS = BUSINESS_CONTACT.hours;
export const BUSINESS_DESCRIPTION = BUSINESS_CONTACT.description;

