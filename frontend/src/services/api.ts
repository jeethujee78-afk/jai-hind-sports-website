/**
 * JAI HIND SPORTS - Centralized Frontend API Client
 * Configured via import.meta.env.VITE_API_BASE_URL (defaults to relative '' with Vite reverse proxy)
 */

const rawBaseUrl = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.trim() || '';

// Normalize base URL: supports same-origin relative requests (default /api), empty string, or full domain
export const API_BASE_URL = rawBaseUrl.replace(/\/api\/?$/, '').replace(/\/$/, '');

export interface StoreInfoResponse {
  name: string;
  tagline?: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  contact: {
    primaryPhone: string;
    primaryWhatsAppUrl: string;
    secondaryPhone: string;
    secondaryWhatsAppUrl: string;
  };
  hours: {
    monSat: string;
    sunday: string;
    summary: string;
  };
  status: {
    isOpen: boolean;
    todaySchedule: string;
    todayName: string;
    currentISTTime?: string;
  };
  directionsUrl: string;
  services?: string[];
}

export interface EnquiryPayload {
  name: string;
  phone: string;
  subject?: string;
  message: string;
  productId?: string;
  productName?: string;
}

export interface EnquiryResponse {
  success: boolean;
  stored?: boolean;
  message: string;
  enquiryId?: string;
  whatsAppDirectUrl?: string;
}

class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  /**
   * Health check endpoint to verify backend connectivity
   */
  async checkHealth(): Promise<{ status: string; timestamp: string }> {
    try {
      const res = await fetch(`${this.baseUrl}/api/health`, {
        headers: { 'Accept': 'application/json' }
      });
      if (!res.ok) throw new Error(`Health check failed with HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('Backend service offline or unreachable:', err);
      return { status: 'offline', timestamp: new Date().toISOString() };
    }
  }

  /**
   * Fetch verified business information and real-time IST store hours
   */
  async getStoreInfo(): Promise<StoreInfoResponse | null> {
    try {
      const res = await fetch(`${this.baseUrl}/api/store/info`, {
        headers: { 'Accept': 'application/json' }
      });
      if (!res.ok) throw new Error(`Failed to fetch store info: ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('Using client-side verified store constants fallback:', err);
      return null;
    }
  }

  /**
   * Submit enquiry to server-side logging endpoint before WhatsApp redirect
   */
  async submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResponse> {
    try {
      const res = await fetch(`${this.baseUrl}/api/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) {
        return {
          success: false,
          message: data.message || `Validation error (${res.status})`
        };
      }
      return data;
    } catch (err) {
      console.warn('Backend enquiry route unreachable, continuing direct WhatsApp flow:', err);
      return { 
        success: true, 
        stored: false,
        message: 'Direct WhatsApp route active' 
      };
    }
  }
}

export const api = new ApiService();
export default api;
