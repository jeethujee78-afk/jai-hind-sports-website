import React from 'react';
import { X, ShoppingBag, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_CONTACT, getWhatsAppUrl, DISPLAY_PHONE, TEL_PHONE } from '../constants/contact';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureTitle?: string;
  contextMessage?: string;
}

export const ComingSoonModal: React.FC<ComingSoonModalProps> = ({
  isOpen,
  onClose,
  featureTitle = 'Online Ordering',
  contextMessage = 'Online ordering is in development. For now, please enquire or contact us directly on WhatsApp to check store availability.'
}) => {
  if (!isOpen) return null;

  const whatsAppUrl = getWhatsAppUrl(
    'Hello JAI HIND SPORTS, I was browsing your website and wanted to check product availability.'
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-[#0E1D17] border border-[#1F3A2E] rounded-2xl p-6 md:p-8 shadow-2xl text-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle tricolour gradient accent top bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B00] via-white to-[#138808]" />

        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6B00]/20 to-[#138808]/20 border border-[#FF6B00]/30 flex items-center justify-center mb-5 text-[#FF6B00]">
          <ShoppingBag className="w-7 h-7" />
        </div>

        <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FF6B00]/15 text-[#FF8533] border border-[#FF6B00]/30 mb-3">
          Coming Soon
        </div>

        <h3 className="text-2xl font-bold text-white mb-2 tracking-wide font-athletic">
          {featureTitle}
        </h3>

        <p className="text-zinc-300 text-sm leading-relaxed mb-6">
          {contextMessage}
        </p>

        <div className="space-y-3">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#138808] hover:bg-[#169b09] text-white font-semibold transition-all shadow-lg shadow-[#138808]/20 text-sm min-h-[48px]"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp Us ({DISPLAY_PHONE})</span>
          </a>

          <a
            href={`tel:${TEL_PHONE}`}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium border border-white/15 transition-all text-sm"
          >
            <Phone className="w-4 h-4 text-[#FF6B00]" />
            <span>Call Coimbatore Store</span>
          </a>
        </div>

        <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-1">
          <span>📍 {BUSINESS_CONTACT.address.short}</span>
          <span className="text-[#138808] font-medium">{BUSINESS_CONTACT.hoursNotice}</span>
        </div>
      </div>
    </div>
  );
};
