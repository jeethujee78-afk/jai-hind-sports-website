import React from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  Users, 
  Wrench, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  TrendingUp,
  MapPin,
  Clock,
  Navigation
} from 'lucide-react';
import { NavPage, Product, SportType } from '../types';
import { SPORTS_LIST } from '../data/sports';
import { ProductCard } from '../components/ProductCard';
import { BUSINESS_CONTACT, getWhatsAppUrl, DISPLAY_PHONE, TEL_PHONE, STORE_ADDRESS } from '../constants/contact';

interface HomePageProps {
  onNavigate: (page: NavPage) => void;
  onSelectCategory: (category: string) => void;
  onSelectProduct: (product: Product) => void;
  onOpenComingSoon: (feature: string) => void;
  onOpenTeamOrder: () => void;
  featuredProducts: Product[];
  newArrivals: Product[];
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectCategory,
  onSelectProduct,
  onOpenComingSoon,
  onOpenTeamOrder,
  featuredProducts,
  newArrivals
}) => {
  return (
    <div className="w-full space-y-12 sm:space-y-20 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[520px] sm:min-h-[600px] flex items-center justify-center overflow-hidden bg-[#07110D]">
        {/* Background Image with Cinematic Sports Atmosphere */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=2000&q=85"
            alt="Sports stadium track and athletic motion"
            className="w-full h-full object-cover object-center opacity-35 scale-105"
          />
          {/* Gradients to blend smoothly into dark sports aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07110D] via-[#07110D]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07110D] via-[#07110D]/60 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center sm:text-left flex flex-col items-center sm:items-start justify-center">
          
          {/* Subtle Tricolour Accent Chip */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wider text-zinc-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
            <span>PLAY • TRAIN • COMPETE • GROW</span>
            <span className="w-2 h-2 rounded-full bg-[#138808]" />
          </div>

          {/* Primary Hero Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-athletic uppercase max-w-3xl leading-[0.95]">
            SPORTS FOR A <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-white to-[#138808]">
              STRONGER TOMORROW
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-5 text-base sm:text-xl text-zinc-300 max-w-xl leading-relaxed">
            Quality sports equipment for every player, every game, every level.
          </p>

          <p className="mt-1 text-xs sm:text-sm text-zinc-400 font-medium tracking-wide">
            GEAR • GUIDANCE • GREAT GAMES • COIMBATORE
          </p>

          {/* Hero CTAs: Strictly SHOP NOW as primary, WHATSAPP US as secondary */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('shop')}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FF6B00] hover:bg-[#ff7a1a] text-white font-bold text-base tracking-wide transition-all shadow-xl shadow-[#FF6B00]/25 transform active:scale-95 sm:hover:-translate-y-0.5 font-athletic uppercase min-h-[48px]"
            >
              <span>SHOP NOW</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#138808] hover:bg-[#169b09] text-white font-bold text-base tracking-wide border border-[#138808]/40 transition-all font-athletic uppercase min-h-[48px] shadow-lg shadow-[#138808]/20 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>WHATSAPP US</span>
            </a>
          </div>

          {/* Local Showroom Quick Badge */}
          <div className="mt-8 sm:mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 text-xs text-zinc-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#FF6B00]" />
              <span>{BUSINESS_CONTACT.address.displayArea}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#138808]" />
              <span>{BUSINESS_CONTACT.hoursNotice}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#FF8533]" />
              <span>Sports Goods & Accessories Store</span>
            </div>
          </div>
        </div>

        {/* Bottom subtle gradient divider */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6B00]/40 to-transparent" />
      </section>

      {/* 2. POPULAR CATEGORIES (1-Click Direct Navigation to Shop) */}
      <section id="categories-section" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] mb-1">
              Popular Equipment Categories
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-athletic tracking-wide">
              POPULAR CATEGORIES
            </h2>
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF8533] hover:text-white transition-colors min-h-[44px]"
          >
            <span>View All Products in Shop</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Visual Cards Grid for 9 Categories (Direct 1-Click to Shop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-6">
          {SPORTS_LIST.map((sport) => (
            <div
              key={sport.id}
              onClick={() => onSelectCategory(sport.name)}
              className="group relative h-44 sm:h-64 rounded-2xl overflow-hidden cursor-pointer border border-[#1B3528] hover:border-[#FF6B00] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#FF6B00]/10 flex flex-col justify-end p-3.5 sm:p-6"
            >
              {/* Background Image */}
              <img
                src={sport.image}
                alt={sport.name}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Multi-layer Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07110D] via-[#07110D]/70 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Card Meta */}
              <div className="relative z-10 space-y-0.5 sm:space-y-1">
                <span className="text-[10px] sm:text-xs font-semibold text-zinc-400 uppercase tracking-widest block">
                  Equipment
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-[#FF8533] transition-colors font-athletic tracking-wide leading-tight">
                  {sport.name}
                </h3>
                <p className="text-xs text-zinc-300 line-clamp-1 hidden sm:block">
                  {sport.subtitle}
                </p>

                <div className="pt-1.5 sm:pt-2 flex items-center gap-1 text-[11px] font-bold text-[#FF8533] group-hover:text-white uppercase tracking-wider">
                  <span>Shop {sport.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY JAI HIND SPORTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0E1D17] border border-[#1F3A2E] rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Subtle Tricolour Lighting */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#138808]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] mb-1">
              Coimbatore's Trusted Sports Destination
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-athletic tracking-wide">
              WHY JAI HIND SPORTS
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base mt-2">
              We stand for genuine equipment, honest guidance, and supporting the active community of Coimbatore.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#FF6B00]/20 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-athletic">Sports Equipment</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Cricket bats, badminton rackets, footballs, volleyballs, and athletics gear for regular players and beginners.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#138808]/20 border border-[#138808]/30 flex items-center justify-center text-[#138808]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-athletic">Player Guidance</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Friendly assistance on equipment selection, bat weights, racket grip sizes, and sporting accessories.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#FF6B00]/20 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-athletic">Schools & Clubs</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Bulk sports equipment, sports day supplies, team jerseys, and tournament kits in Coimbatore.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-[#138808]/20 border border-[#138808]/30 flex items-center justify-center text-[#138808]">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-athletic">Equipment Services</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Badminton racket stringing, cricket bat preparation, and accessories support for local sports enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] mb-1">
              Curated Selection
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-athletic tracking-wide">
              FEATURED PRODUCTS
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1">
              Popular match equipment and sports accessories in our catalogue. Contact us to check in-store availability.
            </p>
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/15 transition-colors"
          >
            <span>Browse Full Catalogue</span>
            <ChevronRight className="w-4 h-4 text-[#FF6B00]" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.slice(0, 6).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onOpenComingSoon={onOpenComingSoon}
            />
          ))}
        </div>
      </section>

      {/* 5. NEW ARRIVALS / SPECIAL HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-[#0B1712] via-[#0E1D17] to-[#07110D] border border-[#1F3A2E] rounded-3xl p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#138808]/20 border border-[#138808]/40 flex items-center justify-center text-[#138808]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#138808]">
                  Equipment Highlights
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-athletic tracking-wide">
                  CATALOGUE HIGHLIGHTS
                </h2>
              </div>
            </div>

            <button
              onClick={() => onNavigate('showcase')}
              className="text-xs font-bold uppercase tracking-wider text-[#FF8533] hover:text-white transition-colors"
            >
              View Full Showcase & Workshop →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newArrivals.slice(0, 3).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onOpenComingSoon={onOpenComingSoon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. TEAM & SCHOOL ORDERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden border border-[#FF6B00]/30 bg-[#0E1D17]">
          {/* Subtle Accent Line */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#FF6B00] via-white to-[#138808]" />

          <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FF6B00]/15 text-[#FF8533] border border-[#FF6B00]/30">
                Bulk Supply & Customization
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-athletic tracking-wide leading-tight">
                TEAM, ACADEMY & SCHOOL ORDERS
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Planning your school sports day, district tournament, or club season? We supply custom sublimation uniforms, equipment packages, official match balls, trophies, and athletics track gear with dedicated institutional invoicing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#138808] shrink-0" />
                  <span>Custom player names, numbers & sponsor logos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#138808] shrink-0" />
                  <span>Timelines confirmed based on squad size and customization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#138808] shrink-0" />
                  <span>In-store pickup & local dispatch support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#138808] shrink-0" />
                  <span>Official GST bill & quotation support</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={onOpenTeamOrder}
                  className="px-6 py-3 rounded-xl bg-[#FF6B00] hover:bg-[#ff7a1a] text-white font-bold text-sm tracking-wide transition-all shadow-lg font-athletic uppercase"
                >
                  Request Team Quotation
                </button>

                <a
                  href={getWhatsAppUrl('Hello JAI HIND SPORTS, we would like to enquire about a team/school sports order.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#138808] hover:bg-[#169b09] text-white font-semibold text-sm transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-video lg:aspect-square bg-black/40 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80"
                alt="School sports and team kit equipment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1D17] via-transparent to-black/20" />
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs text-zinc-300">
                <strong className="text-white block font-athletic uppercase tracking-wider text-sm">
                  Sports Day & Team Gear
                </strong>
                Bibs, relay batons, whistles, cones & accessories available for enquiry.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SIMPLE CONTACT / LOCATION & HOURS CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#07110D] border border-[#1A3326] rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#138808]">
              Personalized Store Assistance • Coimbatore
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-athletic tracking-wide">
              LOOKING FOR SPECIFIC GEAR?
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Have questions about sports goods, equipment specifications, or want to verify if a specific item is available? Contact JAI HIND SPORTS directly or visit our showroom.
            </p>

            {/* Compact Store Information Snippet */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-zinc-300 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Showroom Location:</strong>
                  <span>{STORE_ADDRESS}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#138808] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Shopping Hours:</strong>
                  <span>Mon–Sat: 10:00 AM – 9:00 PM</span>
                  <span className="block text-zinc-400">Sun: 10:00 AM – 2:00 PM</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#138808] hover:bg-[#169b09] active:scale-95 text-white font-bold text-sm transition-all shadow-lg font-athletic uppercase min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us: {DISPLAY_PHONE}</span>
              </a>

              <a
                href={`tel:${TEL_PHONE}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 active:scale-95 text-white font-medium text-sm border border-white/15 transition-colors font-athletic uppercase min-h-[48px]"
              >
                <Phone className="w-4 h-4 text-[#FF6B00]" />
                <span>Call Store</span>
              </a>

              <a
                href={BUSINESS_CONTACT.googleBusinessProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#ff7a1a] active:scale-95 text-white font-bold text-sm transition-all shadow-md font-athletic uppercase min-h-[48px]"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
