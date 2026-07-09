import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Phone, MapPin, Package } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useScrollPosition } from '../../hooks';

interface FloatingButton {
  id: string;
  icon: React.ReactNode;
  label: string;
  href: string;
  bgClass: string;
  shadowClass: string;
  displayClass?: string;
}

const floatingButtons: FloatingButton[] = [
  {
    id: 'directions',
    icon: <MapPin className="w-6 h-6" />,
    label: 'Directions',
    href: 'https://maps.app.goo.gl/kKPDcy1FSErVjDjy6',
    bgClass: 'bg-amber-500 hover:bg-amber-600',
    shadowClass: 'shadow-amber-500/30',
  },
  {
    id: 'call',
    icon: <Phone className="w-6 h-6" />,
    label: 'Call Us',
    href: 'tel:+919888202024',
    bgClass: 'bg-blue-500 hover:bg-blue-600',
    shadowClass: 'shadow-blue-500/30',
    displayClass: 'md:hidden', // Hide on desktop, visible on mobile
  },
  {
    id: 'whatsapp',
    icon: <WhatsAppIcon className="w-6 h-6" />,
    label: 'WhatsApp',
    href: 'https://wa.me/919888202024',
    bgClass: 'bg-green-500 hover:bg-green-600',
    shadowClass: 'shadow-green-500/30',
  },
];

const FloatingButtons: React.FC = () => {
  const { scrollY, scrollProgress } = useScrollPosition();
  const showBackToTop = scrollY > 400;
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-[3px] z-40"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent), var(--color-secondary))',
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.1 }}
      />

      {/* Floating Button Stack — bottom-right, stacked vertically */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col-reverse items-center gap-3">
        {floatingButtons.map((btn) => (
          <motion.div
            key={btn.id}
            className={`relative ${btn.displayClass || ''}`}
            onMouseEnter={() => setHoveredId(btn.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Tooltip Label */}
            <AnimatePresence>
              {hoveredId === btn.id && (
                <motion.span
                  initial={{ opacity: 0, x: 10, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.9 }}
                  className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg bg-gray-900 text-white text-sm font-medium shadow-lg"
                >
                  {btn.label}
                </motion.span>
              )}
            </AnimatePresence>

            <motion.a
              href={btn.href}
              target={btn.id === 'call' ? undefined : '_blank'}
              rel={btn.id === 'call' ? undefined : 'noopener noreferrer'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative w-14 h-14 rounded-full text-white shadow-lg ${btn.shadowClass} ${btn.bgClass} flex items-center justify-center transition-colors`}
              aria-label={btn.label}
            >
              {btn.icon}
              {/* Pulse on WhatsApp only */}
              {btn.id === 'whatsapp' && (
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
              )}
            </motion.a>
          </motion.div>
        ))}
      </div>

      {/* Back to Top — positioned at bottom left */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-[32px] left-[32px] z-40 w-12 h-12 rounded-full bg-primary text-white shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-primary-dark transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingButtons;
