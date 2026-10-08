import React from 'react';
import { X, MessageCircle, Phone, CheckCircle2, ShieldCheck, ShoppingBag, MapPin } from 'lucide-react';
import { Product } from '../types';
import { getWhatsAppUrl } from '../constants/contact';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenComingSoon: (feature: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onOpenComingSoon
}) => {
  if (!product) return null;

  const message = `Hi JAI HIND SPORTS, I'm interested in ${product.name} (${product.brand}, Sport: ${product.sport}, Code: ${product.id}). Is it available?`;
  const whatsAppUrl = getWhatsAppUrl(message);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#0E1D17] border border-[#1F3A2E] rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tricolour Accent Line */}
        <div className="h-1 w-full bg-gradient-to-r from-[#FF6B00] via-white to-[#138808]" />

        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#07110D]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/20 text-[#FF8533] border border-[#FF6B00]/30">
              {product.brand}
            </span>
            <span className="text-xs text-zinc-400">
              {product.sport} • {product.category}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close product details"
            className="p-1.5 text-zinc-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Image Container */}
            <div className="relative rounded-xl overflow-hidden bg-black/40 border border-white/10 aspect-square flex items-center justify-center group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              {product.badge && (
                <div className="absolute top-3 left-3 bg-[#138808] text-white text-xs font-bold px-2.5 py-1 rounded shadow-md uppercase tracking-wider">
                  {product.badge}
                </div>
              )}
              <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] text-zinc-300 border border-white/10">
                Representative Catalogue Image
              </div>
            </div>

            {/* Product Meta */}
            <div className="space-y-4">
              <div>
                <div className="text-xs text-[#FF8533] font-semibold tracking-wider uppercase mb-1">
                  {product.subcategory || product.category}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white font-athletic tracking-wide leading-tight">
                  {product.name}
                </h2>
              </div>

              {/* In-store availability banner */}
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-xs sm:text-sm font-medium">
                <MessageCircle className="w-4 h-4 text-[#138808] shrink-0" />
                <span>Enquiry Guide • <strong className="text-white">Contact us for current availability</strong></span>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Sizes / Variants */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Available Sizes / Specifications:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/15 text-zinc-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Colours */}
              {product.colours && product.colours.length > 0 && (
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Colours / Finishes:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.colours.map((c, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/15 text-zinc-300"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Features List */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Key Specifications:
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Store Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-white/10 text-xs text-zinc-300">
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/5">
              <ShieldCheck className="w-4 h-4 text-[#FF6B00]" />
              <span>Sports Goods & Accessories</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/5">
              <MapPin className="w-4 h-4 text-[#138808]" />
              <span>Coimbatore Store Walk-in</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Equipment Consultation</span>
            </div>
          </div>
        </div>

        {/* Modal Footer / Actions (Mobile-first min 48px touch target) */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-[#07110D] flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="text-xs text-zinc-400 w-full sm:w-auto text-center sm:text-left">
            <span>Product Code: <strong className="text-white uppercase">{product.id}</strong></span>
          </div>

          <div className="w-full sm:w-auto">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#138808] hover:bg-[#169b09] active:scale-95 text-white font-bold text-sm uppercase font-athletic tracking-wide transition-all shadow-lg shadow-[#138808]/30 min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5 fill-white shrink-0" />
              <span>ENQUIRE ON WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
