import React, { useState } from 'react';
import { X, Send, Users, School, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl, DISPLAY_PHONE } from '../constants/contact';

interface TeamOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeamOrderModal: React.FC<TeamOrderModalProps> = ({ isOpen, onClose }) => {
  const [teamType, setTeamType] = useState<'School / College' | 'Club / Academy' | 'Corporate'>('School / College');
  const [institutionName, setInstitutionName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [sport, setSport] = useState('Cricket');
  const [estimatedQuantity, setEstimatedQuantity] = useState('15 - 30 Kits');
  const [requirements, setRequirements] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*Team / School Order Enquiry - JAI HIND SPORTS*\n\nType: ${teamType}\nInstitution / Club: ${institutionName}\nContact Person: ${contactName}\nPhone: ${phone}\nSport: ${sport}\nEst. Quantity: ${estimatedQuantity}\nDetails: ${requirements || 'Standard sports equipment / kit inquiry'}\n\nPlease provide availability and quotation.`;
    const targetUrl = getWhatsAppUrl(msg);
    setLastWhatsAppUrl(targetUrl);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#0E1D17] border border-[#1F3A2E] rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1 w-full bg-gradient-to-r from-[#FF6B00] via-white to-[#138808]" />

        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#07110D]">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-[#FF6B00]" />
            <h3 className="text-xl font-bold text-white font-athletic tracking-wide">
              Team & School Bulk Inquiries
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 text-zinc-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#138808]/20 border border-[#138808]/40 flex items-center justify-center text-[#138808]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-white font-athletic">Enquiry Prepared!</h4>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-sm mx-auto">
              Your enquiry has been prepared and opened on WhatsApp. We will connect with you regarding pricing and availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              {lastWhatsAppUrl && (
                <a
                  href={lastWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#138808] hover:bg-[#169b09] text-white text-sm font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open in WhatsApp</span>
                </a>
              )}
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 overflow-y-auto">
            <p className="text-xs text-zinc-300 leading-relaxed">
              We assist schools, sports academies, clubs, and teams in Coimbatore with sports uniforms, practice gear, and tournament equipment.
            </p>

            {/* Team Type selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                Organization Type
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs font-medium">
                {(['School / College', 'Club / Academy', 'Corporate'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setTeamType(type)}
                    className={`py-2 px-2 rounded-xl text-center border transition-all ${
                      teamType === type
                        ? 'bg-[#FF6B00]/20 border-[#FF6B00] text-white font-bold'
                        : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  School / Team Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Coimbatore Sports Academy"
                  value={institutionName}
                  onChange={(e) => setInstitutionName(e.target.value)}
                  className="w-full bg-[#07110D] border border-[#1F3A2E] focus:border-[#FF6B00] text-sm text-white rounded-xl px-3 py-2 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Coach / Physical Director name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-[#07110D] border border-[#1F3A2E] focus:border-[#FF6B00] text-sm text-white rounded-xl px-3 py-2 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 87547 39973"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#07110D] border border-[#1F3A2E] focus:border-[#FF6B00] text-sm text-white rounded-xl px-3 py-2 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Primary Sport
                </label>
                <select
                  value={sport}
                  onChange={(e) => setSport(e.target.value)}
                  className="w-full bg-[#07110D] border border-[#1F3A2E] focus:border-[#FF6B00] text-sm text-white rounded-xl px-3 py-2 outline-none"
                >
                  <option value="Cricket">Cricket (Whites / Kits / Gear)</option>
                  <option value="Football">Football (Jerseys / Balls / Cones)</option>
                  <option value="Badminton">Badminton (Rackets / Shuttles / Uniforms)</option>
                  <option value="Athletics & Track">Athletics & Track (Spikes / Relay / Bibs)</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Volleyball">Volleyball</option>
                  <option value="Annual Sports Day Package">Annual Sports Day Package</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1">
                Estimated Order Size
              </label>
              <select
                value={estimatedQuantity}
                onChange={(e) => setEstimatedQuantity(e.target.value)}
                className="w-full bg-[#07110D] border border-[#1F3A2E] focus:border-[#FF6B00] text-sm text-white rounded-xl px-3 py-2 outline-none"
              >
                <option value="15 - 30 Kits">15 – 30 Kits (Single Squad)</option>
                <option value="30 - 75 Kits">30 – 75 Kits (Multiple Teams)</option>
                <option value="100+ Kits">100+ Kits (Entire School / College)</option>
                <option value="Equipment Bulk Purchase">Equipment & Balls Bulk Order</option>
                <option value="Custom Trophies / Medals">Trophies & Medals Package</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1">
                Specific Notes or Timeline
              </label>
              <textarea
                rows={2}
                placeholder="Mention sizes needed, tournament date, custom logo printing, or specific brand preferences..."
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                className="w-full bg-[#07110D] border border-[#1F3A2E] focus:border-[#FF6B00] text-sm text-white rounded-xl p-3 outline-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#138808] hover:bg-[#169b09] text-white font-semibold transition-all shadow-md text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Submit Inquiry on WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
