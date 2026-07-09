import { motion } from 'framer-motion';
import { Package, Droplets, Award, Truck, ArrowRight, ChevronDown } from 'lucide-react';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  scaleIn,
  floatingAnimation,
  floatingAnimationSlow,
  hoverLift,
  tapScale,
} from '../../utils/animations';

interface FloatingCard {
  icon: React.ReactNode;
  label: string;
  color: string;
  delay: number;
}

const floatingCards: FloatingCard[] = [
  {
    icon: <Package className="w-6 h-6" />,
    label: 'Express Courier',
    color: 'from-blue-500/20 to-blue-600/20 border-blue-400/20 text-blue-400',
    delay: 0,
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    label: 'Fresh Dairy',
    color: 'from-cyan-500/20 to-cyan-600/20 border-cyan-400/20 text-cyan-400',
    delay: 1.5,
  },
  {
    icon: <Award className="w-6 h-6" />,
    label: 'Premium Quality',
    color: 'from-amber-500/20 to-amber-600/20 border-amber-400/20 text-amber-400',
    delay: 3,
  },
  {
    icon: <Truck className="w-6 h-6" />,
    label: 'Fast Delivery',
    color: 'from-green-500/20 to-green-600/20 border-green-400/20 text-green-400',
    delay: 4.5,
  },
];

const partnerLogos = [
  { src: '/official-dhl-logo.svg', alt: 'DHL Express' },
  { src: '/official-dtdc-logo.png', alt: 'DTDC Courier' },
  { src: '/official-bluedart-logo.svg', alt: 'Blue Dart' },
];

export default function Hero() {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center bg-dark-bg">
      {/* Background Image with Ken Burns Effect */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/images/heroes/bg-home.jpg" 
          alt="Premium Brand Showcase" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      <div className="absolute inset-0 z-0 bg-black/40 md:bg-transparent" /> {/* Extra darkening on mobile */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28 md:py-32 lg:py-36">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-[0.15em]">
              Dhariwal's Trusted Choice
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-heading max-w-5xl leading-tight mb-6"
          >
            Trusted Dairy,{' '}
            <span className="gradient-text">Premium Dry Fruits</span>
            <br className="hidden sm:block" />
            {' '}& Reliable Courier Services
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-gray-300/90 max-w-2xl mb-10 leading-relaxed"
          >
            Gill Enterprises brings together fresh dairy products, premium dry fruits
            and trusted DHL, DTDC &amp; Blue Dart courier services — all under one roof.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16 md:mb-20"
          >
            <motion.button
              whileHover={hoverLift}
              whileTap={tapScale}
              onClick={() => handleScroll('#products')}
              className="btn-primary text-base"
            >
              <span className="flex items-center gap-2">
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.button>

            <motion.button
              whileHover={hoverLift}
              whileTap={tapScale}
              onClick={() => handleScroll('#courier-booking')}
              className="btn-secondary text-base"
            >
              <span className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                Book Courier
              </span>
            </motion.button>

            <motion.button
              whileHover={hoverLift}
              whileTap={tapScale}
              onClick={() => handleScroll('#contact')}
              className="btn-outline text-base"
            >
              <span className="flex items-center gap-2">
                Contact Us
              </span>
            </motion.button>
          </motion.div>

          {/* Floating Glass Cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-3xl mb-16 md:mb-20"
          >
            {floatingCards.map((card, index) => (
              <motion.div
                key={card.label}
                variants={scaleIn}
                animate={{
                  y: [-6, 6, -6],
                  transition: {
                    duration: 5 + index * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: card.delay,
                  },
                }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`glass rounded-2xl p-5 md:p-6 flex flex-col items-center gap-3 cursor-default bg-gradient-to-b ${card.color} border transition-all duration-300`}
              >
                <div className="p-3 rounded-xl bg-white/5">
                  {card.icon}
                </div>
                <span className="text-white/80 text-xs sm:text-sm font-medium text-center">
                  {card.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Partner Logos */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center gap-5"
          >
            <span className="text-gray-500 text-xs uppercase tracking-[0.2em] font-medium">
              Official Partners
            </span>
            <div className="flex items-center gap-6 md:gap-10">
              {partnerLogos.map((logo) => (
                <motion.img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  whileHover={{ scale: 1.08 }}
                  className="h-8 md:h-10 lg:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105 hover:shadow-sm hover:-translate-y-1"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={() => handleScroll('#about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
