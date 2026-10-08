import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { 
  BUSINESS_CONTACT, 
  getWhatsAppUrl, 
  getSecondaryWhatsAppUrl, 
  DISPLAY_PHONE, 
  TEL_PHONE 
} from '../constants/contact';

export const FloatingWhatsApp: React.FC = () => {
  const primaryUrl = getWhatsAppUrl(
    'Hello JAI HIND SPORTS, I would like to check sports equipment availability.'
  );

  return (
    <>
      {/* 1. MOBILE STICKY BOTTOM ACTION BAR (< 640px) */}
      <aside 
        aria-label="Quick contact"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#07110D]/95 backdrop-blur-md border-t border-[#1F3A2E] p-2.5 flex items-center gap-2 shadow-2xl safe-area-bottom"
      >
        <a
          href={`tel:${TEL_PHONE}`}
          className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/10 active:bg-white/20 text-white text-xs font-bold font-athletic uppercase min-h-[48px] shrink-0"
          aria-label={`Call ${DISPLAY_PHONE}`}
        >
          <Phone className="w-4 h-4 text-[#FF6B00]" />
          <span>Call</span>
        </a>

        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#138808] active:bg-[#169b09] text-white text-sm font-bold font-athletic uppercase shadow-lg shadow-[#138808]/30 min-h-[48px]"
          aria-label="Enquire on WhatsApp (Primary)"
        >
          <MessageCircle className="w-5 h-5 fill-white shrink-0" />
          <span>WhatsApp Us</span>
        </a>
      </aside>

      {/* 2. DESKTOP FLOATING WHATSAPP BUTTON (>= 640px) */}
      <div className="hidden sm:flex fixed bottom-7 right-7 z-40 items-center group">
        <div className="mr-3 px-3 py-1.5 rounded-full bg-[#0E1D17]/95 border border-[#138808]/40 text-xs font-semibold text-white shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          <span>Chat on WhatsApp ({DISPLAY_PHONE})</span>
        </div>

        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enquire on WhatsApp with JAI HIND SPORTS"
          title={`Chat on WhatsApp (${DISPLAY_PHONE})`}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#138808] hover:bg-[#169b09] text-white shadow-lg shadow-[#138808]/40 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/20 focus:outline-none focus:ring-2 focus:ring-[#138808]"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#FF6B00] border-2 border-[#07110D]" />
          </span>
          <MessageCircle className="w-7 h-7 fill-white" />
        </a>
      </div>
    </>
  );
};
