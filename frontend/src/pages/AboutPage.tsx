import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  Wrench, 
  Users, 
  CheckCircle2, 
  ChevronDown, 
  Navigation, 
  Send,
  Sparkles,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { 
  BUSINESS_CONTACT, 
  getWhatsAppUrl, 
  DISPLAY_PHONE, 
  TEL_PHONE, 
  SECONDARY_PHONE, 
  STORE_ADDRESS,
  STORE_HOURS,
  getISTStoreStatus
} from '../constants/contact';
import { api } from '../services/api';

export const AboutPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactSubject, setContactSubject] = useState('General Enquiry');
  const [contactMessage, setContactMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  // Dynamic Indian Standard Time (IST) store status calculation
  const storeStatus = getISTStoreStatus();
  const todayName = storeStatus.todayName;

  const faqs = [
    {
      q: 'Where is JAI HIND SPORTS located in Coimbatore?',
      a: 'We are located at Shop No. 2/17, Near Kavees Bakery, Cheran Ma Nagar, Vilankurichi, Coimbatore, Tamil Nadu - 641035. You can get live directions and view our location on Google Maps.'
    },
    {
      q: 'What are your store opening hours?',
      a: `We are open 7 days a week: Monday to Saturday from 10:00 AM to 9:00 PM, and on Sundays from 10:00 AM to 2:00 PM. Verified on our Google Business Profile. For festival or holiday timings, feel free to WhatsApp or call us at ${DISPLAY_PHONE}.`
    },
    {
      q: 'How can I check if an item is available?',
      a: `The quickest way is to message us on WhatsApp at ${DISPLAY_PHONE} with the product name or sport. We will check our current store inventory and confirm availability.`
    },
    {
      q: 'Do you supply sports gear for schools, teams, and clubs?',
      a: 'Yes, we handle enquiries for schools, academies, corporate teams, and sports clubs in Coimbatore. Contact us via WhatsApp or phone with your team requirements.'
    },
    {
      q: 'Do you offer sports equipment maintenance and services?',
      a: 'Yes, we provide badminton racket stringing, grip replacements, cricket bat preparation, and general sports accessories guidance. Please enquire with us for turnaround times.'
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*Store Contact Enquiry - JAI HIND SPORTS*\nName: ${contactName}\nPhone: ${contactPhone}\nSubject: ${contactSubject}\nMessage: ${contactMessage}`;
    const targetUrl = getWhatsAppUrl(msg);
    setLastWhatsAppUrl(targetUrl);
    // Non-blocking submission to backend verification endpoint
    api.submitEnquiry({
      name: contactName,
      phone: contactPhone,
      subject: contactSubject,
      message: contactMessage
    }).catch(() => {});
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12 sm:space-y-16">
      
      {/* 1. HERO HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FF6B00]/15 text-[#FF8533] border border-[#FF6B00]/30">
          COIMBATORE SPORTS STORE
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-athletic tracking-wide">
          ABOUT JAI HIND SPORTS
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          Sports goods and accessories store in Coimbatore, Tamil Nadu. Serving athletes, fitness enthusiasts, and sports teams with quality equipment and customer assistance.
        </p>
      </section>

      {/* 2. OUR STORE & WHAT WE OFFER */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
            Our Store
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-athletic tracking-wide leading-tight">
            SPORTS GOODS & ACCESSORIES IN COIMBATORE
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            <strong>JAI HIND SPORTS</strong> is a dedicated sports equipment and athletic accessories store based in Coimbatore. We support regular players, tournament competitors, fitness enthusiasts, and sports institutions with a practical range of sporting goods.
          </p>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Whether you are preparing for competitive tournaments, looking for team uniforms and sports day gear, or needing accessories for practice sessions, we are here to assist with product availability and recommendations.
          </p>

          <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10 text-left">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-[#FF8533] font-athletic">Coimbatore</div>
              <div className="text-xs text-zinc-400">Vilankurichi Post</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-athletic">Multi-Sport</div>
              <div className="text-xs text-zinc-400">Gear & Accessories</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-[#138808] font-athletic">Direct Support</div>
              <div className="text-xs text-zinc-400">Call & WhatsApp</div>
            </div>
          </div>
        </div>

          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden aspect-[4/3] bg-black/40 border border-[#1F3A2E] shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1000&q=80"
            alt="Cricket gear and sports equipment at JAI HIND SPORTS"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1D17] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-xs text-zinc-300">
            <strong className="text-white block font-athletic uppercase text-sm">
              JAI HIND SPORTS • Coimbatore
            </strong>
            Shop No. 2/17, Near Kavees Bakery, Cheran Ma Nagar, Vilankurichi.
          </div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER & IN-STORE SERVICES */}
      <section className="bg-[#0E1D17] border border-[#1F3A2E] rounded-3xl p-6 sm:p-10 space-y-8">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-[#138808] mb-1">
            Comprehensive Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-athletic tracking-wide">
            WHAT WE OFFER & IN-HOUSE SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-athletic">Sports Equipment Brands</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Quality sports gear across leading sporting brands such as SG, SS, MRF, DSC, Yonex, Li-Ning, Nivia, Cosco, Spalding, Sega, and Vector X.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#138808]/20 text-[#138808] flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-athletic">Badminton Stringing</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Badminton racket stringing, tension adjustments, grommet care, and grip replacements.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-athletic">Bat Preparation & Oiling</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Cricket bat knocking assistance, linseed oiling, and protective edge tape application.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#138808]/20 text-[#138808] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-athletic">School & Team Bulk</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Custom jerseys, annual sports day ground packages, institutional requirements, and formal quotation billing.
            </p>
          </div>
        </div>
      </section>

      {/* 4. STORE OPENING HOURS (VERIFIED FROM GOOGLE BUSINESS PROFILE) */}
      <section className="bg-[#0E1D17] border border-[#1F3A2E] rounded-3xl p-6 sm:p-10 space-y-6 relative overflow-hidden">
        {/* Subtle Tricolour Glow Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#138808]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-5">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#138808]/15 text-[#2ecc71] border border-[#138808]/30">
              <Clock className="w-3.5 h-3.5" />
              <span>Verified Google Business Hours</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-athletic tracking-wide">
              STORE HOURS
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm max-w-xl">
              Standard operating timings for our Coimbatore showroom.
            </p>
          </div>

          {/* Dynamic Real-time Status Badge (Indian Standard Time) */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10">
            <span className={`w-3 h-3 rounded-full ${storeStatus.isOpen ? 'bg-[#2ecc71] animate-pulse' : 'bg-zinc-500'}`} />
            <div>
              <div className="text-xs font-bold font-athletic uppercase tracking-wider text-white">
                {storeStatus.isOpen ? 'OPEN NOW' : 'CLOSED NOW'}
              </div>
              <div className="text-[11px] text-zinc-400">
                Today ({storeStatus.todayName}): {storeStatus.todaySchedule} (IST)
              </div>
            </div>
          </div>
        </div>

        {/* Simple Stacked Mobile-First Store Hours Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-[#FF6B00]/30 space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8533] block">
              Mon – Sat
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-athletic tracking-wide">
              10:00 AM – 9:00 PM
            </div>
            <p className="text-xs text-zinc-300">
              Showroom, bat knocking & oiling, and electronic badminton stringing.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-[#138808]/30 space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2ecc71] block">
              Sunday
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-athletic tracking-wide">
              10:00 AM – 2:00 PM
            </div>
            <p className="text-xs text-zinc-300">
              Sunday morning session for match-day essentials, ball purchases & grip replacements.
            </p>
          </div>
        </div>

        {/* Complete Day-by-Day Schedule List (Mobile Optimized, No Horizontal Scroll) */}
        <div className="rounded-2xl border border-white/10 bg-[#07110D] overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#FF6B00]" />
              <h3 className="text-sm font-bold text-white font-athletic tracking-wider uppercase">
                Complete Weekly Timetable
              </h3>
            </div>
            <a
              href={BUSINESS_CONTACT.googleBusinessProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#FF8533] hover:text-white flex items-center gap-1 font-semibold"
            >
              <span>View on Google</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="divide-y divide-white/5">
            {STORE_HOURS.schedule.map((item) => {
              const isCurrentDay = todayName === item.day;
              return (
                <div
                  key={item.day}
                  className={`p-3.5 sm:px-6 sm:py-4 flex items-center justify-between text-xs sm:text-sm transition-colors ${
                    isCurrentDay
                      ? 'bg-gradient-to-r from-[#FF6B00]/15 via-[#138808]/15 to-transparent border-l-4 border-l-[#FF6B00]'
                      : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`font-semibold ${isCurrentDay ? 'text-white font-bold' : 'text-zinc-300'}`}>
                      {item.day}
                    </span>
                    {isCurrentDay && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#138808] text-white uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Today
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span className={`font-mono text-xs sm:text-sm ${
                      item.isSunday ? 'text-[#FF8533]' : 'text-zinc-200'
                    }`}>
                      {item.hours}
                    </span>
                    <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded ${
                      item.isSunday 
                        ? 'bg-[#FF6B00]/15 text-[#FF8533]' 
                        : 'bg-[#138808]/15 text-[#2ecc71]'
                    }`}>
                      {item.isSunday ? 'Half Day' : 'Open'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Contact & Directions Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="space-y-0.5 text-center sm:text-left">
            <span className="text-zinc-200 font-bold block">
              Have questions about holiday hours or need equipment assistance?
            </span>
            <span className="text-zinc-400">
              Message us anytime on WhatsApp. Inquiries received outside store hours are answered promptly next morning.
            </span>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${TEL_PHONE}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold font-athletic uppercase min-h-[48px]"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>Call Store</span>
            </a>

            <a
              href={getWhatsAppUrl('Hello JAI HIND SPORTS, I want to check store hours and product availability.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#138808] hover:bg-[#169b09] text-white font-bold font-athletic uppercase min-h-[48px] shadow-md shadow-[#138808]/20"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. VISIT US & CONTACT INFORMATION */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] mb-1">
            Visit & Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-athletic tracking-wide">
            FIND US IN COIMBATORE
          </h2>
          <p className="text-zinc-300 text-sm">
            Visit our showroom for hands-on gear selection or connect directly via phone or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#0E1D17] border border-[#1F3A2E] rounded-3xl p-6 sm:p-8 space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-white block font-athletic text-lg">Store Address</strong>
                  <p className="text-zinc-300 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    Shop No. 2/17, Near Kavees Bakery,<br />
                    Cheran Ma Nagar, Vilankurichi,<br />
                    Coimbatore, Tamil Nadu - 641035
                  </p>
                  <span className="text-[11px] text-zinc-400 mt-1 block">
                    (Cheran Ma Nagar / Vilankurichi)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#138808]/20 text-[#138808] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-white block font-athletic text-lg">Store Hours</strong>
                  <div className="text-zinc-300 text-xs sm:text-sm mt-0.5 space-y-0.5">
                    <div>
                      <span className="text-zinc-400">Mon – Sat: </span>
                      <strong className="text-white">10:00 AM – 9:00 PM</strong>
                    </div>
                    <div>
                      <span className="text-zinc-400">Sunday: </span>
                      <strong className="text-white">10:00 AM – 2:00 PM</strong>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#2ecc71] font-medium mt-1 block">
                    Verified Google Business Profile Hours • Open 7 Days
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-white block font-athletic text-lg">Contact Numbers</strong>
                  <div className="text-zinc-300 text-xs sm:text-sm mt-0.5 space-y-1">
                    <div>
                      <span className="text-zinc-400 text-xs">Primary WhatsApp / Call: </span>
                      <a href={`tel:${TEL_PHONE}`} className="hover:text-white font-medium block">
                        {DISPLAY_PHONE}
                      </a>
                    </div>
                    <div>
                      <span className="text-zinc-400 text-xs">Secondary Contact / Alternative WhatsApp: </span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <a href={`tel:${BUSINESS_CONTACT.secondaryTel}`} className="hover:text-white font-medium">
                          {SECONDARY_PHONE}
                        </a>
                        <span className="text-zinc-500">•</span>
                        <a
                          href={BUSINESS_CONTACT.secondaryWhatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#2ecc71] hover:underline text-xs font-medium"
                        >
                          Alternative WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#138808]/20 text-[#138808] flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-white block font-athletic text-lg">WhatsApp Quick Assistance</strong>
                  <p className="text-zinc-300 text-xs mt-0.5">
                    Fast response on product stock, brand queries, or equipment availability.
                  </p>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#2ecc71] hover:underline font-bold mt-1 inline-block"
                  >
                    WhatsApp us: {DISPLAY_PHONE} →
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action CTA Buttons (GET DIRECTIONS IS PROMINENT) */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={BUSINESS_CONTACT.googleBusinessProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#ff7a1a] active:scale-95 text-white text-xs font-bold font-athletic tracking-wide uppercase shadow-md transition-all text-center min-h-[48px]"
              >
                <Navigation className="w-4 h-4 shrink-0" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={`tel:${TEL_PHONE}`}
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-white/10 hover:bg-white/15 active:scale-95 text-white text-xs font-bold font-athletic tracking-wide uppercase transition-all min-h-[48px]"
              >
                <Phone className="w-4 h-4 text-[#FF6B00]" />
                <span>Call Store</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Map + Contact Form Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Interactive Map Embed */}
            <div className="relative rounded-3xl overflow-hidden border border-[#1F3A2E] bg-black/40 h-72 sm:h-80 shadow-xl">
              <iframe
                title="JAI HIND SPORTS Coimbatore Map"
                src="https://maps.google.com/maps?q=Shop+No.+2%2F17+Near+Kavees+Bakery+Cheran+Ma+Nagar+Vilankurichi+Coimbatore+641035&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale invert contrast-125 opacity-85"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-3 left-3 bg-[#07110D]/90 backdrop-blur-md p-2.5 rounded-xl border border-white/10 text-xs">
                <span className="font-bold text-white block font-athletic">JAI HIND SPORTS</span>
                <span className="text-zinc-400">Shop No. 2/17, Near Kavees Bakery, Cheran Ma Nagar</span>
              </div>
              <div className="absolute bottom-3 right-3">
                <a
                  href={BUSINESS_CONTACT.googleBusinessProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#FF6B00] hover:bg-[#ff7a1a] text-white text-xs font-bold transition-all shadow-md min-h-[44px]"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>GET DIRECTIONS</span>
                </a>
              </div>
            </div>

            {/* In-Store Message Form */}
            <div className="bg-[#0E1D17] border border-[#1F3A2E] rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-white font-athletic tracking-wide">
                SEND A MESSAGE OR ENQUIRY
              </h3>

              {submitted ? (
                <div className="p-5 rounded-2xl bg-[#138808]/20 border border-[#138808]/40 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#138808] mx-auto" />
                  <h4 className="text-lg font-bold text-white font-athletic">Enquiry Prepared!</h4>
                  <p className="text-xs text-zinc-300">
                    Your message has been transferred to WhatsApp for direct interaction with our store team.
                  </p>
                  {lastWhatsAppUrl && (
                    <div className="pt-2">
                      <a
                        href={lastWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#138808] hover:bg-[#169b09] text-white text-xs font-bold font-athletic uppercase tracking-wider transition-colors min-h-[44px]"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Open in WhatsApp</span>
                      </a>
                    </div>
                  )}
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#FF8533] hover:text-white underline mt-2 block mx-auto transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-zinc-400 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Karthik Raman"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full bg-[#07110D] border border-[#1F3A2E] text-white text-xs rounded-xl p-2.5 outline-none focus:border-[#FF6B00]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-zinc-400 mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 87547 39973"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full bg-[#07110D] border border-[#1F3A2E] text-white text-xs rounded-xl p-2.5 outline-none focus:border-[#FF6B00]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-zinc-400 mb-1">Subject</label>
                    <select
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                      className="w-full bg-[#07110D] border border-[#1F3A2E] text-white text-xs rounded-xl p-2.5 outline-none focus:border-[#FF6B00]"
                    >
                      <option value="Product Availability">Product Availability Check</option>
                      <option value="Badminton Stringing">Badminton Racket Stringing</option>
                      <option value="Bat Knocking Service">Cricket Bat Knocking & Oiling</option>
                      <option value="School / Club Bulk Order">School / Club Bulk Order</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-zinc-400 mb-1">Message</label>
                    <textarea
                      rows={2}
                      required
                      placeholder="Ask about brand models, stringing turnaround, sizes, or stock..."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="w-full bg-[#07110D] border border-[#1F3A2E] text-white text-xs rounded-xl p-2.5 outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#138808] hover:bg-[#169b09] text-white font-bold text-xs uppercase tracking-wider font-athletic transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send Inquiry to Store via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="bg-[#0E1D17] border border-[#1F3A2E] rounded-3xl p-6 sm:p-10 space-y-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] mb-1">
            Common Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-athletic tracking-wide">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-[#1F3A2E] rounded-2xl overflow-hidden bg-[#07110D] transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-sm sm:text-base font-bold text-white font-athletic tracking-wide">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#FF6B00] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
