import React from 'react';
import { MessageCircle, Info } from 'lucide-react';
import { Product } from '../types';
import { getWhatsAppUrl } from '../constants/contact';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onOpenComingSoon?: (feature: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect
}) => {
  const msg = `Hi JAI HIND SPORTS, I'm interested in ${product.name} (${product.brand}, Category: ${product.category}). Is it available?`;
  const whatsAppUrl = getWhatsAppUrl(msg);

  return (
    <div
      onClick={() => onSelect(product)}
      className="group relative flex flex-col bg-[#0E1D17] border border-[#1B3528] hover:border-[#FF6B00]/60 active:border-[#FF6B00] rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-xl hover:shadow-black/60 cursor-pointer text-left"
    >
      {/* Top Image Box */}
      <div className="relative w-full aspect-[4/3] bg-black/40 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Gradient Overlay for athletic contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1D17] via-transparent to-black/30" />

        {/* Brand Chip */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-black/85 backdrop-blur-md text-white border border-white/20">
            {product.brand}
          </span>
          {product.badge && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#FF6B00] text-white">
              {product.badge}
            </span>
          )}
        </div>

        {/* Category Tag */}
        <div className="absolute top-2.5 right-2.5">
          <span className="px-2 py-1 rounded-md text-[10px] sm:text-[11px] font-semibold text-zinc-300 bg-[#07110D]/90 backdrop-blur-md border border-white/10">
            {product.sport}
          </span>
        </div>

        {/* Check Availability Indicator */}
        <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/85 backdrop-blur-md text-[10px] sm:text-[11px] font-medium text-zinc-300 border border-white/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2ecc71] animate-pulse" />
          <span>Check Availability</span>
        </div>

        {/* Representative Image Notice */}
        <div className="absolute bottom-2.5 right-2.5 text-[9px] text-zinc-400 bg-black/80 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/10">
          Representative Photo
        </div>
      </div>

      {/* Card Content */}
      <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between space-y-2.5 sm:space-y-3">
        <div>
          <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#FF8533] mb-1">
            {product.subcategory || product.category}
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FF8533] transition-colors line-clamp-2 leading-snug font-athletic tracking-wide">
            {product.name}
          </h3>
          <p className="text-zinc-400 text-xs mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Available Sizes preview if exists */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {product.sizes.slice(0, 3).map((sz, i) => (
              <span key={i} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/10">
                {sz}
              </span>
            ))}
            {product.sizes.length > 3 && (
              <span className="text-[10px] px-1 py-0.5 text-zinc-500">
                +{product.sizes.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Card Actions (Mobile-first, comfortable touch targets min 48px) */}
        <div className="pt-2 sm:pt-3 border-t border-white/10 flex items-center gap-2">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-3.5 rounded-xl bg-[#138808] hover:bg-[#169b09] active:scale-95 text-white text-xs sm:text-sm font-bold uppercase font-athletic tracking-wider transition-all shadow-md shadow-[#138808]/25 min-h-[48px]"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
          >
            <MessageCircle className="w-4 h-4 fill-white shrink-0" />
            <span>ENQUIRE NOW</span>
          </a>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(product);
            }}
            className="flex items-center justify-center gap-1.5 py-3 px-3.5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 text-zinc-300 hover:text-white text-xs font-semibold border border-white/15 transition-colors min-h-[48px]"
            aria-label="View Product Details"
          >
            <Info className="w-4 h-4 text-[#FF6B00] shrink-0" />
            <span className="hidden xs:inline">Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};
