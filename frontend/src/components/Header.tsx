import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Search, 
  Menu, 
  X, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { NavPage } from '../types';
import { BUSINESS_CONTACT, getWhatsAppUrl, DISPLAY_PHONE, TEL_PHONE } from '../constants/contact';

interface HeaderProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  searchQuery,
  onSearchChange,
  onSearchSubmit
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  // Strictly ONLY Home, Shop, Showcase, About
  const navLinks: { label: string; page: NavPage }[] = [
    { label: 'HOME', page: 'home' },
    { label: 'SHOP', page: 'shop' },
    { label: 'SHOWCASE', page: 'showcase' },
    { label: 'ABOUT', page: 'about' }
  ];

  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearchSubmit(searchQuery);
      setMobileSearchOpen(false);
    }
  };

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#07110D]/95 backdrop-blur-md border-b border-[#1A3326]">
      {/* 1. TOP UTILITY BAR (Desktop & Tablet) */}
      <div className="w-full bg-[#040A08] border-b border-white/5 py-1.5 px-3 sm:px-6 text-[11px] sm:text-xs text-zinc-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Left: Location */}
          <div className="flex items-center gap-1.5 text-zinc-300">
            <MapPin className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
            <span className="font-medium tracking-wide">Coimbatore</span>
            <span className="hidden sm:inline text-zinc-500">• {BUSINESS_CONTACT.address.displayArea}</span>
          </div>

          {/* Right: Direct Phone & WhatsApp */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs ml-auto">
            <div className="hidden md:flex items-center gap-1 text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-[#138808]" />
              <span>Mon–Sat: 10 AM – 9 PM | Sun: 10 AM – 2 PM</span>
            </div>

            <a
              href={`tel:${TEL_PHONE}`}
              className="flex items-center gap-1 hover:text-white transition-colors text-zinc-300 min-h-[32px] px-1"
              title="Call JAI HIND SPORTS"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span className="font-medium">{DISPLAY_PHONE}</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#2ecc71] hover:text-white transition-colors font-medium min-h-[32px] px-1"
              title="WhatsApp Store"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER BAR */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between gap-3">
        {/* Brand / Logo (Minimum 48px tap area for mobile comfort) */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 text-left group shrink-0 min-h-[48px] py-1"
          aria-label="JAI HIND SPORTS Home"
        >
          <div className="relative flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-wider text-white font-athletic group-hover:text-[#FF8533] transition-colors leading-none">
                JAI HIND
              </span>
              <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-wider text-[#138808] font-athletic leading-none">
                SPORTS
              </span>
            </div>
            <div className="h-0.5 w-full bg-gradient-to-r from-[#FF6B00] via-white to-[#138808] rounded-full mt-1 opacity-90" />
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-zinc-400 font-semibold mt-0.5 hidden xs:block">
              Sports Equipment • Coimbatore
            </span>
          </div>
        </button>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-4 relative">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search cricket bats, yonex, football, shoes..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyDown={handleSearchKeyPress}
              className="w-full bg-[#0E1D17] border border-[#1F3A2E] focus:border-[#FF6B00] text-sm text-white rounded-xl pl-10 pr-10 py-2.5 outline-none transition-all placeholder:text-zinc-500"
            />
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
            {searchQuery && (
              <button
                onClick={() => {
                  onSearchChange('');
                  onSearchSubmit('');
                }}
                className="absolute right-3 top-2.5 text-zinc-400 hover:text-white p-1"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Action Area: Mobile Search Toggle + WhatsApp CTA + Mobile Menu Button */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Mobile Search Toggle (Minimum 44px tap target) */}
          <button
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            aria-label="Toggle Search Bar"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Desktop WhatsApp Us Primary CTA Button */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#138808] hover:bg-[#169b09] text-white text-xs font-bold font-athletic tracking-wide uppercase shadow-md shadow-[#138808]/20 transition-all min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp Us</span>
          </a>

          {/* Mobile Hamburger Menu Toggle Button (Minimum 48px tap target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-12 h-12 text-zinc-200 hover:text-white rounded-xl hover:bg-white/10 active:scale-95 transition-all ml-0.5"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF6B00]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Expandable Field */}
      {mobileSearchOpen && (
        <div className="md:hidden px-3 pb-3 pt-1 border-t border-white/5 bg-[#0A1611]">
          <div className="relative flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search bats, rackets, shoes..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={handleSearchKeyPress}
                autoFocus
                className="w-full bg-[#0E1D17] border border-[#1F3A2E] text-white text-sm rounded-xl pl-9 pr-3 py-2.5 outline-none placeholder:text-zinc-500"
              />
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-3.5" />
            </div>
            <button
              onClick={() => {
                onSearchSubmit(searchQuery);
                setMobileSearchOpen(false);
              }}
              className="px-4 py-2.5 bg-[#FF6B00] text-white rounded-xl text-xs font-bold font-athletic uppercase min-h-[44px]"
            >
              Search
            </button>
          </div>
        </div>
      )}

      {/* 3. MAIN NAVIGATION BAR (Desktop ONLY: Home | Shop | Showcase | About) */}
      <nav className="hidden md:block border-t border-white/5 bg-[#0A1611]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`relative py-3 px-5 text-sm font-bold tracking-wider transition-all duration-200 font-athletic flex items-center gap-1.5 min-h-[44px] ${
                    isActive 
                      ? 'text-white' 
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-[#FF6B00] via-white to-[#138808] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#138808] animate-pulse" />
              <strong className="text-zinc-300">Showroom Open</strong>
            </span>
            <span className="text-zinc-600">|</span>
            <span className="text-[#FF8533] font-medium">Coimbatore Store</span>
          </div>
        </div>
      </nav>

      {/* 4. MOBILE NAVIGATION DRAWER (Strictly ONLY Home, Shop, Showcase, About) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0A1611] px-4 py-4 space-y-3 animate-in slide-in-from-top duration-200 shadow-2xl">
          <div className="space-y-1.5">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl text-base font-bold font-athletic tracking-wide transition-colors min-h-[48px] ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FF6B00]/25 to-[#138808]/25 text-white border border-[#FF6B00]/40'
                      : 'text-zinc-200 hover:bg-white/5 active:bg-white/10'
                  }`}
                >
                  <span className="text-lg tracking-wider">{link.label}</span>
                  <ChevronRight className="w-5 h-5 text-zinc-500" />
                </button>
              );
            })}
          </div>

          {/* Quick Contact Buttons at bottom of mobile menu */}
          <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
            <a
              href={`tel:${TEL_PHONE}`}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-semibold min-h-[48px]"
            >
              <Phone className="w-4 h-4 text-[#FF6B00]" />
              <span>Call Store</span>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#138808] text-white text-xs font-semibold shadow-md min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="pt-1 text-center text-xs text-zinc-400">
            📍 {BUSINESS_CONTACT.address.short}
          </div>
        </div>
      )}
    </header>
  );
};
