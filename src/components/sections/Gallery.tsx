import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X } from 'lucide-react';
import { galleryImages } from '../../data/gallery';
import { fadeInUp, scaleIn, staggerContainer } from '../../utils/animations';
import { useInView } from '../../hooks';

const filterCategories = [
  { label: 'All', value: 'all' },
  { label: 'Store', value: 'store' },
  { label: 'Dairy', value: 'dairy' },
  { label: 'Dry Fruits', value: 'dryfruits' },
  { label: 'Courier', value: 'courier' },
];

const Gallery: React.FC = () => {
  const { ref, isInView } = useInView();
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    activeFilter === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface to-white pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-10"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase">
              Gallery
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary">
              Our Store & Products
            </h2>
          </motion.div>

          {/* Filter Pills */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
            {filterCategories.map((category) => (
              <motion.button
                key={category.value}
                onClick={() => setActiveFilter(category.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === category.value
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-white text-text-secondary border border-border hover:border-primary hover:text-primary'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  variants={scaleIn}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                  className="rounded-2xl overflow-hidden relative group cursor-pointer aspect-square"
                  onClick={() => setLightboxImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-100 scale-75">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-text-primary" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              src={lightboxImage}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
