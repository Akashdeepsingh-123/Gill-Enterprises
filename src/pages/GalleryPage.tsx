import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ArrowRight } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import { galleryImages } from '../data/gallery';
import { fadeInUp, scaleIn, staggerContainer } from '../utils/animations';
import { useInView } from '../hooks';
import { Link } from 'react-router-dom';

const filterCategories = [
  { label: 'All', value: 'all' },
  { label: 'Store', value: 'store' },
  { label: 'Dairy', value: 'dairy' },
  { label: 'Dry Fruits', value: 'dryfruits' },
  { label: 'Courier', value: 'courier' },
];

export default function GalleryPage() {
  const { ref, isInView } = useInView();
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    activeFilter === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <>
      <PageHero
        label="GALLERY"
        title="Visualizing Quality."
        subtitle="Explore our flagship store, premium products, and professional logistics environment."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Gallery' }]}
        gradient="from-slate-900 via-gray-900 to-dark-bg"
      />

      <section className="section-padding bg-surface relative min-h-screen">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-16"
          >
            {/* Filter Pills - Apple Style */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
              <div className="p-1.5 rounded-full bg-white dark:bg-dark-card border border-border shadow-sm flex flex-wrap gap-1">
                {filterCategories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setActiveFilter(category.value)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeFilter === category.value
                        ? 'bg-primary text-white shadow-md'
                        : 'text-text-secondary hover:text-text-primary dark:hover:text-white'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Image Grid - Masonry/Equal Square Hybrid */}
            <motion.div
              layout
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image) => (
                  <motion.div
                    key={image.id}
                    layout
                    variants={scaleIn}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="rounded-[32px] overflow-hidden relative group cursor-pointer aspect-square bg-white dark:bg-dark-card shadow-sm border border-border"
                    onClick={() => setLightboxImage(image.src)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-100 scale-90">
                        <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-2xl">
                          <ZoomIn className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center pt-16 pb-8">
              <Link to="/contact" className="inline-flex items-center gap-3 text-lg font-heading font-bold text-primary hover:text-primary-dark transition-colors group">
                Visit Our Store <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Premium Lightbox */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
              onClick={() => setLightboxImage(null)}
            >
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
                onClick={() => setLightboxImage(null)}
              >
                <X className="w-6 h-6" />
              </motion.button>

              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                src={lightboxImage}
                alt="Gallery preview"
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
