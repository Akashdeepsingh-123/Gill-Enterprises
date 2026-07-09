import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Heart,
  Send,
  ArrowUpRight,
} from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const footerColumns = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      // { label: 'Gallery', href: '/gallery' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Our Products',
    links: [
      { label: 'Dairy Products', href: '/products/dairy' },
      { label: 'Pure Desi Ghee', href: '/products/dairy' },
      { label: 'Fresh Paneer', href: '/products/dairy' },
      { label: 'Premium Dry Fruits', href: '/products/dry-fruits' },
      { label: 'Gift Packs', href: '/products/dry-fruits' },
    ],
  },
  {
    title: 'Courier Services',
    links: [
      { label: 'Domestic Courier', href: '/courier-services' },
      { label: 'International Courier', href: '/courier-services' },
      { label: 'Track Shipment', href: '/track-shipment' },
      { label: 'Courier Enquiry', href: '/contact' },
    ],
  },
];

const socialLinks = [
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    href: '#',
    label: 'Facebook',
    hoverBg: 'hover:bg-blue-600',
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    href: '#',
    label: 'Instagram',
    hoverBg: 'hover:bg-pink-600',
  },
  {
    icon: WhatsAppIcon,
    href: 'https://wa.me/919888202024',
    label: 'WhatsApp',
    hoverBg: 'hover:bg-green-600',
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative bg-[#0B0F19] overflow-hidden">
      {/* Decorative top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      {/* ───── CTA Banner ───── */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative -mb-px mt-16 rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-600" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAyYzguODM3IDAgMTYgNy4xNjMgMTYgMTZzLTcuMTYzIDE2LTE2IDE2LTE2LTcuMTYzLTE2LTE2IDcuMTYzLTE2IDE2LTE2eiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-30" />
          
          <div className="relative px-8 py-10 sm:px-12 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-heading font-bold text-xl sm:text-2xl mb-1">
                Ready to ship? Let's get started.
              </h3>
              <p className="text-white/90 text-sm font-medium">
                Book a courier or track your existing shipment in seconds.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                to="/courier-services"
                className="px-6 py-3 rounded-xl bg-white text-primary font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg"
              >
                Book Courier
              </Link>
              <Link
                to="/track-shipment"
                className="px-6 py-3 rounded-xl bg-white/15 text-white font-bold text-sm hover:bg-white/25 transition-colors border border-white/20 backdrop-blur-sm"
              >
                Track Shipment
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ───── Main Footer Content ───── */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-16 pb-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8"
        >
          {/* ── Brand Column ── */}
          <motion.div variants={fadeInUp} className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Gill Enterprises"
                className="h-16 w-auto opacity-100 transition-opacity"
              />
              <span className="font-heading font-bold text-white text-lg tracking-tight">
                Gill Enterprises
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Dhariwal's trusted one-stop destination for premium dairy, handpicked dry fruits, and reliable worldwide courier services.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-2">
              <a
                href="tel:+919888202024"
                className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                  <Phone className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                </div>
                <span>+91 9888202024</span>
              </a>
              <a
                href="mailto:gilldhlcourierservice@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                  <Mail className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                </div>
                <span className="truncate">gilldhlcourierservice@gmail.com</span>
              </a>
              <a
                href="https://maps.app.goo.gl/kKPDcy1FSErVjDjy6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-white text-sm transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                  <MapPin className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                </div>
                <span>GT Road, Near Bus Stand,<br />Opp. HDFC Bank, Dhariwal 143519</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 transition-all duration-300 hover:text-white hover:border-transparent ${social.hoverBg}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Link Columns ── */}
          {footerColumns.map((col) => (
            <motion.div
              key={col.title}
              variants={fadeInUp}
              className="lg:col-span-2"
            >
              <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-5">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="group flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      <ChevronRight className="w-3 h-3 text-gray-600 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" />
                      {link.label}
                      {link.label === 'Track Shipment' && (
                        <ArrowUpRight className="w-3 h-3 text-gray-600 group-hover:text-primary transition-colors" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* ── Newsletter Column ── */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-5">
              Stay Updated
            </h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Get exclusive offers and updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary/60 focus:bg-white/10 transition-all"
                  required
                  aria-label="Email for newsletter"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </button>
            </form>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary text-xs mt-2 font-medium"
              >
                ✓ Thanks for subscribing!
              </motion.p>
            )}

            {/* Business Hours */}
            <div className="mt-6 pt-6 border-t border-white/5">
              <h5 className="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-3">Business Hours</h5>
              <div className="space-y-1.5 text-gray-500 text-xs">
                <p className="flex justify-between">
                  <span>Mon – Sun</span>
                  <span className="text-gray-400">8:00 AM – 9:00 PM</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ───── Courier Partner Logos ───── */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-wrap items-center justify-center gap-10">
            <img src="/official-dhl-logo.svg" alt="DHL" className="h-10 object-contain transition-transform duration-300 hover:scale-105 hover:shadow-sm hover:-translate-y-1" />
            <img src="/official-dtdc-logo.png" alt="DTDC" className="h-10 object-contain transition-transform duration-300 hover:scale-105 hover:shadow-sm hover:-translate-y-1" />
            <img src="/official-bluedart-logo.svg" alt="Blue Dart" className="h-10 object-contain transition-transform duration-300 hover:scale-105 hover:shadow-sm hover:-translate-y-1" />
          </div>
        </div>

        {/* ───── Bottom Bar ───── */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Gill Enterprises. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-gray-500">
            <Link to="/privacy-policy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <Link to="/terms" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
