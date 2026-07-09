import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { products } from '../../data/products';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useInView } from '../../hooks';

type FilterCategory = 'all' | 'dairy' | 'dryfruits';

const filterTabs: { label: string; value: FilterCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Dairy', value: 'dairy' },
  { label: 'Dry Fruits', value: 'dryfruits' },
];

const FeaturedProducts: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const { ref, isInView } = useInView(0.1);

  const filteredProducts =
    activeFilter === 'all'
      ? products
      : products.filter((p) => p.category === activeFilter);

  const handleWhatsApp = (productName: string) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in ${productName}. Please share details.`
    );
    window.open(`https://wa.me/919888202024?text=${message}`, '_blank');
  };

  return (
    <section id="products" className="section-padding relative overflow-hidden bg-surface">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            Featured Products
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary mb-5">
            Our Premium{' '}
            <span className="gradient-text">Selection</span>
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === tab.value
                  ? 'text-white'
                  : 'text-text-secondary hover:text-text-primary bg-white border border-border hover:border-primary/30'
              }`}
            >
              {activeFilter === tab.value && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 rounded-full gradient-blue-green"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                variants={fadeInUp}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group card-premium bg-white rounded-2xl overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-text-primary capitalize">
                      {product.category === 'dryfruits' ? 'Dry Fruits' : product.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-heading font-bold text-text-primary group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                  <motion.button
                    onClick={() => handleWhatsApp(product.name)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold text-sm shadow-lg shadow-green-500/20 transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Enquire Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
