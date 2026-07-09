import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useInView } from '../../hooks';

const storeFeatures = [
  {
    image: '/store-exterior.jpg',
    title: 'Modern Store',
    description: 'Visit our clean, well-organized store in the heart of Dhariwal',
  },
  {
    image: '/store-interior.jpg',
    title: 'Premium Products',
    description: 'Browse our curated selection of dairy products and dry fruits',
  },
  {
    image: '/about-store.jpg',
    title: 'Courier Counter',
    description: 'Professional courier services with DHL, DTDC & Blue Dart',
  },
];

const StoreExperience: React.FC = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="store-experience" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface to-white pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <span className="inline-block px-5 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm tracking-widest uppercase">
              Store Experience
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary">
              Visit Our{' '}
              <span className="gradient-text">Store</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Experience premium quality products and services in person at our Dhariwal location
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {storeFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group card-premium bg-white rounded-3xl overflow-hidden"
              >
                {/* Image */}
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-heading font-bold text-text-primary group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Address & Directions */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
          >
            <div className="flex items-center gap-3 text-text-secondary">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg font-medium">
              GT Road, near Bus Stand, opposite HDFC Bank, Dhariwal, Punjab 143519
              </span>
            </div>

            <motion.a
              href="https://maps.app.goo.gl/kKPDcy1FSErVjDjy6" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary"
            >
              <span className="flex items-center gap-2">
                Get Directions
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoreExperience;
