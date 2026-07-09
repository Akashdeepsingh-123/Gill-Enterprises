import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useInView } from '../../hooks';

const partnerLogos = [
  { src: '/official-dhl-logo.svg', alt: 'DHL Express' },
  { src: '/official-dtdc-logo.png', alt: 'DTDC Courier' },
  { src: '/official-bluedart-logo.svg', alt: 'Blue Dart' },
];

const Partners: React.FC = () => {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="partners" className="section-padding relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-white to-surface pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            Trusted Partners
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary mb-5">
            Official Courier{' '}
            <span className="gradient-text">Partners</span>
          </h2>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-20"
        >
          {partnerLogos.map((logo) => (
            <motion.div
              key={logo.alt}
              variants={fadeInUp}
              className="group"
            >
              <motion.img
                src={logo.src}
                alt={logo.alt}
                className="h-16 md:h-20 lg:h-24 object-contain transition-transform duration-300 hover:scale-105 hover:shadow-sm hover:-translate-y-1 cursor-pointer"
                whileTap={{ scale: 0.98 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
