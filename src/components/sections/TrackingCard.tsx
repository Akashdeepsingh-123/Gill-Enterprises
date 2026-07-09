import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, ExternalLink } from 'lucide-react';
import { fadeInUp } from '../../utils/animations';

const courierOptions = [
  {
    value: 'dhl',
    label: 'DHL Express',
    color: 'from-yellow-400 to-red-500',
    getUrl: (trackingNumber: string) =>
      `https://www.dhl.com/global-en/home/tracking/tracking-express.html?submit=1&tracking-id=${encodeURIComponent(trackingNumber)}`,
  },
  {
    value: 'dtdc',
    label: 'DTDC',
    color: 'from-blue-500 to-indigo-600',
    getUrl: (_trackingNumber: string) =>
      `https://www.dtdc.in/tracking/shipment-tracking.asp`,
  },
  {
    value: 'bluedart',
    label: 'Blue Dart',
    color: 'from-blue-600 to-blue-800',
    getUrl: (_trackingNumber: string) =>
      `https://www.bluedart.com/tracking`,
  },
];

interface TrackingCardProps {
  compact?: boolean;
}

const TrackingCard: React.FC<TrackingCardProps> = ({ compact = false }) => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [courier, setCourier] = useState('dhl');
  const [error, setError] = useState('');

  const handleTrack = () => {
    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number');
      return;
    }
    setError('');
    const selected = courierOptions.find((c) => c.value === courier);
    if (selected) {
      window.open(selected.getUrl(trackingNumber.trim()), '_blank', 'noopener,noreferrer');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleTrack();
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`w-full max-w-2xl mx-auto ${
        compact ? '' : ''
      }`}
    >
      <div className="relative bg-gradient-to-br from-white/95 to-white/80 dark:from-dark-card/95 dark:to-dark-card/80 rounded-[32px] border border-white/40 dark:border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.08)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.4)] p-8 sm:p-10 md:p-12 backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_40px_100px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Subtle internal glow/reflection */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent dark:via-white/20" />
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-[40px] pointer-events-none" />

        {/* Card Header */}
        {!compact && (
          <div className="flex items-center gap-4 mb-10 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 flex items-center justify-center shadow-inner">
              <Search className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-text-primary text-xl tracking-tight">Track Your Parcel</h3>
              <p className="text-text-secondary text-sm mt-0.5">Enter details to track via official portals</p>
            </div>
          </div>
        )}

        <div className="space-y-6 relative z-10">
          {/* Tracking Number Input */}
          <div className="group">
            <label htmlFor="tracking-number" className="block text-xs font-bold text-text-secondary uppercase tracking-widest mb-2.5 transition-colors group-focus-within:text-primary">
              Tracking Number
            </label>
            <div className="relative">
              <input
                id="tracking-number"
                type="text"
                value={trackingNumber}
                onChange={(e) => {
                  setTrackingNumber(e.target.value);
                  if (error) setError('');
                }}
                onKeyDown={handleKeyDown}
                placeholder="Enter your Tracking Number"
                className={`w-full px-5 py-4 pr-12 rounded-2xl bg-surface/50 dark:bg-dark-bg/50 border ${
                  error ? 'border-red-400 focus:ring-red-400/20' : 'border-border focus:border-primary focus:ring-primary/20'
                } focus:ring-4 outline-none transition-all duration-300 text-sm text-text-primary placeholder:text-text-secondary/40 shadow-inner`}
                aria-label="Tracking Number"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary/40 pointer-events-none transition-colors group-focus-within:text-primary/60" />
            </div>
            {error && (
              <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs mt-2 ml-1 font-medium">{error}</motion.p>
            )}
          </div>

          {/* Courier Select */}
          <div className="group">
            <label htmlFor="courier-select" className="block text-xs font-bold text-text-secondary uppercase tracking-widest mb-2.5 transition-colors group-focus-within:text-primary">
              Courier Company
            </label>
            <div className="relative cursor-pointer">
              <select
                id="courier-select"
                value={courier}
                onChange={(e) => setCourier(e.target.value)}
                className="w-full px-5 py-4 pr-12 rounded-2xl bg-surface/50 dark:bg-dark-bg/50 border border-border focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all duration-300 text-sm text-text-primary appearance-none shadow-inner cursor-pointer"
                aria-label="Select Courier Company"
              >
                {courierOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary/60 pointer-events-none transition-transform group-focus-within:rotate-180 duration-300" />
            </div>
          </div>

          {/* Track Button */}
          <motion.button
            onClick={handleTrack}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4.5 rounded-2xl font-bold text-white bg-gradient-to-r from-primary to-emerald-500 hover:from-primary-hover hover:to-emerald-600 transition-all duration-300 flex items-center justify-center gap-3 text-sm shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.4)] mt-4 border border-white/10"
          >
            <ExternalLink className="w-5 h-5" />
            Track Shipment
          </motion.button>

          {/* Info Text */}
          <p className="text-center text-text-secondary/50 text-xs pt-2 font-medium tracking-wide">
            Redirects securely to official courier portals
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TrackingCard;
