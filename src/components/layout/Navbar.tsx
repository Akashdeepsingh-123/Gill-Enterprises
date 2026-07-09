import { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Sun, Moon, ChevronRight, ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { useScrollPosition, useTheme } from '../../hooks';

interface NavLink {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
}

const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Products',
    to: '/products/dairy',
    children: [
      { label: 'Dairy Products', to: '/products/dairy' },
      { label: 'Premium Dry Fruits', to: '/products/dry-fruits' },
    ],
  },
  {
    label: 'Courier Services',
    to: '/courier-services',
    children: [
      { label: 'Courier Services', to: '/courier-services' },
      { label: 'Track Shipment', to: '/track-shipment' },
    ],
  },
  // { label: 'Gallery', to: '/gallery' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Reviews', to: '/reviews' },
];

const mobileMenuVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 300, damping: 30 },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { type: 'spring' as const, stiffness: 300, damping: 30 },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export default function Navbar() {
  const { scrollY } = useScrollPosition();
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isScrolled = scrollY > 20;
  const isHomePage = location.pathname === '/';
  // If we are on an inner page and at the top, the background is transparent but the hero image might be dark.
  // We force the text to be white in light mode to ensure visibility.
  const forceWhiteText = !isScrolled && !isHomePage && !isDark;

  const isActiveRoute = useCallback(
    (to: string, children?: { label: string; to: string }[]) => {
      if (to === '/') return location.pathname === '/';
      if (children) return children.some((c) => location.pathname.startsWith(c.to));
      return location.pathname.startsWith(to);
    },
    [location.pathname]
  );

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-[80px] flex items-center ${
          isScrolled
            ? isDark
              ? 'glass-dark-premium'
              : 'glass-premium'
            : 'bg-transparent'
        }`}
      >
        <nav className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <img src="/logo.png" alt="Gill Enterprises" className="h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
            <div className="hidden sm:block">
              <span className={`font-heading font-bold text-xl leading-none block transition-colors tracking-tight ${
                forceWhiteText ? 'text-white' : 'text-text-primary dark:text-white'
              }`}>
                Gill Enterprises
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={link.to}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-1 group ${
                    isActiveRoute(link.to, link.children)
                      ? 'text-primary'
                      : forceWhiteText 
                        ? 'text-white/80 hover:text-primary' 
                        : 'text-text-secondary hover:text-primary dark:text-gray-300 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        openDropdown === link.label ? 'rotate-180 text-primary' : ''
                      }`}
                    />
                  )}
                  {/* Animated Underline */}
                  <span className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-transform duration-300 origin-left bg-primary ${
                    isActiveRoute(link.to, link.children) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute top-[calc(100%+0.5rem)] left-0 w-56 rounded-2xl shadow-xl border bg-white dark:bg-dark-card border-border dark:border-dark-border overflow-hidden"
                    >
                      <div className="py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className={`block px-5 py-3 text-sm transition-colors duration-200 ${
                              location.pathname === child.to
                                ? 'bg-primary/5 text-primary font-medium'
                                : 'text-text-secondary hover:bg-gray-50 hover:text-text-primary dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`hidden md:flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 ${
                forceWhiteText 
                  ? 'text-white hover:bg-white/20' 
                  : 'text-text-secondary hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10'
              }`}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <Link
              to="/contact"
              className="hidden xl:flex btn-primary !px-6 !py-2.5 !text-sm"
            >
              Contact Us
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden flex items-center justify-center w-11 h-11 rounded-full transition-colors ${
                forceWhiteText
                  ? 'text-white hover:bg-white/20'
                  : 'text-text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden z-40"
              style={{ top: 0 }}
            />
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm lg:hidden overflow-y-auto bg-white dark:bg-dark-bg z-50 border-l border-border dark:border-dark-border"
            >
              <div className="flex items-center justify-between px-6 py-6 border-b border-border dark:border-dark-border">
                <span className="font-heading font-bold text-xl text-text-primary dark:text-white">Menu</span>
                <button
                  onClick={closeMobileMenu}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-text-secondary hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.children ? (
                      <>
                        <div className="px-4 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider">
                          {link.label}
                        </div>
                        {link.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            onClick={closeMobileMenu}
                            className={`flex items-center gap-3 px-6 py-3 rounded-xl text-base transition-colors ${
                              location.pathname === child.to
                                ? 'bg-primary/10 text-primary font-medium'
                                : 'text-text-secondary hover:text-text-primary hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white'
                            }`}
                          >
                            <ChevronRight className="w-4 h-4" />
                            {child.label}
                          </Link>
                        ))}
                      </>
                    ) : (
                      <Link
                        to={link.to}
                        onClick={closeMobileMenu}
                        className={`flex items-center justify-between px-4 py-4 rounded-xl text-base font-medium transition-colors ${
                          isActiveRoute(link.to)
                            ? 'bg-primary/10 text-primary'
                            : 'text-text-primary hover:bg-gray-50 dark:text-white dark:hover:bg-white/5'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="w-4 h-4 text-text-secondary opacity-50" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="px-6 py-6 space-y-4 border-t border-border dark:border-dark-border">
                <a
                  href="tel:+919888202024"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-semibold text-primary bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
                <a
                  href="https://wa.me/919888202024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-semibold text-white bg-[#25D366] hover:bg-[#1DA851] transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp
                </a>
                
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-semibold text-text-secondary bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10 transition-colors"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
