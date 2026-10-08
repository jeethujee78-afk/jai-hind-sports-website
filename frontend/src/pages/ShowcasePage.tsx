import React, { useState } from 'react';
import { 
  Sparkles, 
  Wrench, 
  Users, 
  School, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Phone
} from 'lucide-react';
import { SHOWCASE_ITEMS } from '../data/showcase';
import { ShowcaseItem } from '../types';
import { BUSINESS_CONTACT, getWhatsAppUrl, TEL_PHONE } from '../constants/contact';

interface ShowcasePageProps {
  onOpenTeamOrder: () => void;
}

export const ShowcasePage: React.FC<ShowcasePageProps> = ({ onOpenTeamOrder }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedShowcase, setSelectedShowcase] = useState<ShowcaseItem | null>(null);

  const categories = ['All', 'Services', 'Team Orders', 'School Sports', 'In-Store'];

  const filteredItems = activeFilter === 'All'
    ? SHOWCASE_ITEMS
    : SHOWCASE_ITEMS.filter(item => item.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      
      {/* Editorial Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FF6B00]/15 text-[#FF8533] border border-[#FF6B00]/30">
          SHOWROOM & IN-STORE SERVICES
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-athletic tracking-wide">
          SERVICES & IN-STORE EXPERTISE
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          From badminton racket stringing and cricket bat preparation to sports day packages and custom team kits for Coimbatore schools and clubs. Representative photos shown.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all min-h-[44px] ${
              activeFilter === cat
                ? 'bg-[#FF6B00] text-white shadow-md shadow-[#FF6B00]/25'
                : 'bg-[#0E1D17] border border-[#1F3A2E] text-zinc-400 hover:text-white hover:border-zinc-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Editorial Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="group relative flex flex-col bg-[#0E1D17] border border-[#1F3A2E] hover:border-[#FF6B00]/70 rounded-3xl overflow-hidden transition-all duration-300 shadow-xl"
          >
            {/* Visual Container */}
            <div className="relative aspect-[16/10] bg-black/40 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1D17] via-transparent to-black/30" />

              {/* Category Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#FF8533] border border-white/10">
                  {item.category}
                </span>
              </div>

              {/* Representative Visual Label */}
              <div className="absolute bottom-3 left-3 text-[10px] text-zinc-300 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                Representative Visual
              </div>

              {/* Date / Status Tag */}
              <div className="absolute bottom-3 right-3 text-[11px] text-zinc-300 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                {item.dateTag}
              </div>
            </div>

            {/* Editorial Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-white font-athletic tracking-wide leading-tight group-hover:text-[#FF8533] transition-colors">
                  {item.title}
                </h2>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bulleted Highlights */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
                  Service Highlights:
                </span>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#138808] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                <a
                  href={getWhatsAppUrl(
                    `Hello JAI HIND SPORTS, I am inquiring about:\n\n*${item.title}*\nCategory: ${item.category}\n\nPlease let me know more details and current availability.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#138808] hover:bg-[#169b09] text-white text-xs font-semibold transition-all shadow-md min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enquire on WhatsApp</span>
                </a>

                {item.category === 'Team Orders' || item.category === 'School Sports' ? (
                  <button
                    onClick={onOpenTeamOrder}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs font-medium transition-colors shrink-0"
                    title="Request Quotation"
                  >
                    Quote
                  </button>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Workshop Visit Banner */}
      <div className="rounded-3xl border border-[#1F3A2E] bg-gradient-to-r from-[#0E1D17] via-[#0B1712] to-[#0E1D17] p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <div className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
            Store in Coimbatore
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-athletic tracking-wide">
            VISIT JAI HIND SPORTS
          </h3>
          <p className="text-zinc-300 text-xs sm:text-sm max-w-xl">
            Located at 2/17 VRS Nagar, near Cheran Ma Nagar, Vilankurichi Post, Coimbatore. Contact us via phone or WhatsApp for product availability and assistance.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href={`tel:${TEL_PHONE}`}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/15 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#FF6B00]" />
            <span>Call Store</span>
          </a>
          <a
            href={BUSINESS_CONTACT.googleBusinessProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#138808] hover:bg-[#169b09] text-white text-xs font-semibold shadow-md transition-all"
          >
            <span>Google Maps / Directions</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

    </div>
  );
};
