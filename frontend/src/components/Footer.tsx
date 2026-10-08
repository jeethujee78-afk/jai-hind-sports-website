import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { NavPage } from '../types';
import { 
  BUSINESS_CONTACT, 
  getWhatsAppUrl, 
  DISPLAY_PHONE, 
  TEL_PHONE, 
  SECONDARY_PHONE, 
  STORE_ADDRESS 
} from '../constants/contact';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onSelectCategory: (category: string) => void;
  onOpenComingSoon: (feature: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectCategory,
  onOpenComingSoon
}) => {
  const categoriesList: string[] = [
    'Cricket',
    'Badminton',
    'Football',
    'Basketball',
    'Volleyball',
    'Tennis',
    'Fitness',
    'Athletics & Running',
    'School Sports'
  ];

  return (
    <footer className="w-full bg-[#040A08] border-t border-[#182F24] text-zinc-400 text-sm">
      {/* Tricolour Accent Line on top of Footer */}
      <div className="h-1 w-full bg-gradient-to-r from-[#FF6B00] via-white to-[#138808]" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Col 1 & 2: Brand Information & Coimbatore Trust */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-wider text-white font-athletic">
                JAI HIND
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#138808] font-athletic">
                SPORTS
              </span>
            </div>
            
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              {BUSINESS_CONTACT.description}
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-2.5 text-zinc-300">
                <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                <span>{STORE_ADDRESS}</span>
              </div>

              {/* Compact Store Hours */}
              <div className="flex items-start gap-2.5 text-zinc-300">
                <Clock className="w-4 h-4 text-[#138808] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <strong className="text-white block font-medium">Store Hours</strong>
                  <span className="text-zinc-300 block">Mon–Sat: 10 AM – 9 PM</span>
                  <span className="text-zinc-300 block">Sun: 10 AM – 2 PM</span>
                </div>
              </div>

              {/* Phone & WhatsApp Contacts */}
              <div className="flex flex-col gap-1 text-zinc-300 pl-6 border-l border-white/10 ml-2">
                <div>
                  <span className="text-zinc-400">Primary WhatsApp / Call: </span>
                  <a href={`tel:${TEL_PHONE}`} className="hover:text-white transition-colors font-medium">
                    {DISPLAY_PHONE}
                  </a>
                </div>
                <div>
                  <span className="text-zinc-400">Secondary Contact / Alternative WhatsApp: </span>
                  <a href={`tel:${BUSINESS_CONTACT.secondaryTel}`} className="hover:text-white transition-colors font-medium">
                    {SECONDARY_PHONE}
                  </a>
                  <span className="text-zinc-500 mx-1.5">•</span>
                  <a
                    href={BUSINESS_CONTACT.secondaryWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2ecc71] hover:underline"
                  >
                    Alternative WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#138808] hover:bg-[#169b09] text-white text-xs font-bold uppercase tracking-wider font-athletic transition-all shadow-md shadow-[#138808]/20 min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={BUSINESS_CONTACT.googleBusinessProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#FF6B00] hover:bg-[#ff7a1a] text-white text-xs font-bold uppercase tracking-wider font-athletic transition-colors shadow-md min-h-[44px]"
              >
                <span>Get Directions</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider font-athletic">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left py-1"
                >
                  <ChevronRight className="w-3 h-3 text-[#FF6B00]" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left py-1"
                >
                  <ChevronRight className="w-3 h-3 text-[#FF6B00]" />
                  <span>Shop</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('showcase'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left py-1"
                >
                  <ChevronRight className="w-3 h-3 text-[#FF6B00]" />
                  <span>Showcase</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors flex items-center gap-1 text-left py-1"
                >
                  <ChevronRight className="w-3 h-3 text-[#FF6B00]" />
                  <span>About</span>
                </button>
              </li>
            </ul>

            <div className="pt-3">
              <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
                E-Commerce
              </span>
              <p className="text-zinc-400 text-xs mt-1">
                Online ordering is in development. Check availability via WhatsApp or walk-in.
              </p>
            </div>
          </div>

          {/* Col 4: Categories */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider font-athletic">
              Shop by Category
            </h4>
            <div className="grid grid-cols-1 gap-1.5 text-xs">
              {categoriesList.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    onSelectCategory(cat);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left text-zinc-400 hover:text-[#FF8533] transition-colors py-0.5"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Col 5: Store Services & Guarantees */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider font-athletic">
              Specialist Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-200 block">Badminton Stringing</strong>
                  <span className="text-zinc-400">Electronic precision tension (22-32 lbs)</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#138808] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-200 block">Bat Knocking & Oiling</strong>
                  <span className="text-zinc-400">Machine conditioning & edge protection</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-200 block">School & Team Uniforms</strong>
                  <span className="text-zinc-400">Custom sublimation kits & bulk orders</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} <strong className="text-zinc-200">JAI HIND SPORTS</strong>. All rights reserved. 
            Coimbatore, Tamil Nadu, India.
          </p>

          <div className="flex items-center gap-4 text-zinc-400">
            <button onClick={() => onOpenComingSoon('Privacy Policy')} className="hover:text-white transition-colors">
              Privacy Notice
            </button>
            <span>•</span>
            <button onClick={() => onOpenComingSoon('Terms & Conditions')} className="hover:text-white transition-colors">
              Terms of Service
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
              Visit Showroom
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
