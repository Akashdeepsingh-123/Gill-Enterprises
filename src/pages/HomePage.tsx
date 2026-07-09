import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sparkles, ArrowRight, Star, MapPin } from 'lucide-react';
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from '../utils/animations';
import { useInView } from '../hooks';
import TrustStats from '../components/sections/TrustStats';
import Partners from '../components/sections/Partners';
import SectionHeading from '../components/ui/SectionHeading';
import { products, whyChooseUs } from '../data/products';

import Reviews from '../components/sections/Reviews';
const featuredServices = [
  {
    title: 'Farm-Fresh Dairy',
    description: 'Pure, unadulterated milk, paneer, and desi ghee sourced daily from our farms.',
    image: '/dairy-products.jpg',
    to: '/products/dairy',
  },
  {
    title: 'Premium Dry Fruits',
    description: 'Handpicked, luxury-grade almonds, cashews, and custom gift packs for all occasions.',
    image: '/dry-fruits.jpg',
    to: '/products/dry-fruits',
  },
  {
    title: 'Worldwide Courier',
    description: 'Official partner for DHL, DTDC, and Blue Dart. Reliable domestic and international shipping.',
    image: '/courier-service.jpg',
    to: '/courier-services',
  },
];

export default function HomePage() {
  const { ref: heroRef, isInView: heroInView } = useInView();
  const { ref: highlightsRef, isInView: highlightsInView } = useInView();
  const { ref: servicesRef, isInView: servicesInView } = useInView();
  const { ref: productsRef, isInView: productsInView } = useInView();
  const { ref: reviewsRef, isInView: reviewsInView } = useInView();

  return (
    <>
      {/* 1. Hero Section - Balanced Two-Column */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-light-bg dark:bg-dark-bg">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pattern-dots opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/10 via-transparent to-transparent rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
            ref={heroRef}
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          >
            {/* Left: Text */}
            <div className="lg:col-span-6 space-y-8">
              <motion.div variants={fadeInLeft} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Dhariwal's Trusted Partner
              </motion.div>
              
              <motion.h1 variants={fadeInLeft} className="text-5xl lg:text-7xl font-heading font-bold text-text-primary tracking-tight leading-[1.1]">
                Premium Quality.<br />
                <span className="gradient-text-emerald">Professional Service.</span>
              </motion.h1>
              
              <motion.p variants={fadeInLeft} className="text-lg lg:text-xl text-text-secondary max-w-lg leading-relaxed">
                Gill Enterprises brings together farm-fresh dairy, luxury dry fruits, and world-class courier services under one roof.
              </motion.p>
              
              <motion.div variants={fadeInLeft} className="flex flex-wrap items-center gap-4 pt-4">
                <Link to="/products/dairy" className="btn-primary">
                  Explore Products
                </Link>
                <Link to="/courier-services" className="btn-outline">
                  Book Courier
                </Link>
              </motion.div>
            </div>

            {/* Right: Image & Shapes */}
            <motion.div variants={fadeInRight} className="lg:col-span-6 relative h-[500px] lg:h-[650px] w-full">
              <div className="absolute inset-0 bg-primary/5 rounded-[40px] transform rotate-3 scale-105 transition-transform duration-700 hover:rotate-6" />
              <div className="absolute inset-0 bg-accent/5 rounded-[40px] transform -rotate-3 scale-105 transition-transform duration-700 hover:-rotate-6" />
              
              <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl border border-white/20 dark:border-white/10">
                <img
                  src="/store-exterior.jpg"
                  alt="Gill Enterprises Premium Store"
                  className="w-full h-full object-cover object-[85%_center]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-8 left-8 glass-premium p-4 rounded-2xl flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-text-primary font-bold font-heading">Dhariwal's Trusted Choice</p>
                    <p className="text-xs text-text-secondary">Thousands of satisfied customers</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-6 relative z-20 -mt-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
          >
            {[
              { icon: '📦', label: 'Track Shipment', desc: 'Track your parcel', to: '/track-shipment', isLink: true },
              { icon: '📞', label: 'Contact Us', desc: 'Get in touch', to: '/contact', isLink: true },
              { icon: '💬', label: 'WhatsApp', desc: 'Chat with us', to: 'https://wa.me/919888202024', isLink: false },
              { icon: '📍', label: 'Get Directions', desc: 'Visit our shop', to: 'https://maps.app.goo.gl/kKPDcy1FSErVjDjy6', isLink: false },
            ].map((action) => (
              action.isLink ? (
                <Link
                  key={action.label}
                  to={action.to}
                  className="group bg-white dark:bg-dark-card rounded-2xl p-4 sm:p-5 border border-border shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-3 hover:-translate-y-0.5"
                >
                  <span className="text-2xl flex-shrink-0">{action.icon}</span>
                  <div className="min-w-0">
                    <p className="font-heading font-bold text-text-primary text-sm truncate">{action.label}</p>
                    <p className="text-text-secondary text-xs truncate">{action.desc}</p>
                  </div>
                </Link>
              ) : (
                <a
                  key={action.label}
                  href={action.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white dark:bg-dark-card rounded-2xl p-4 sm:p-5 border border-border shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-3 hover:-translate-y-0.5"
                >
                  <span className="text-2xl flex-shrink-0">{action.icon}</span>
                  <div className="min-w-0">
                    <p className="font-heading font-bold text-text-primary text-sm truncate">{action.label}</p>
                    <p className="text-text-secondary text-xs truncate">{action.desc}</p>
                  </div>
                </a>
              )
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Business Highlights (Trust Stats replacing generic counter) */}
      <div className="bg-white dark:bg-dark-card border-y border-border relative z-20">
        <TrustStats />
      </div>

      {/* 3. Featured Services - Unique Asymmetric Layout */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading label="OUR EXPERTISE" title="Comprehensive Services" subtitle="Discover our three pillars of excellence, designed to meet your daily and professional needs." />
          
          <motion.div
            ref={servicesRef}
            variants={staggerContainer}
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8"
          >
            {/* Service 1: Large Span */}
            <motion.div variants={fadeInUp} className="md:col-span-12 lg:col-span-8 group">
              <Link to={featuredServices[0].to} className="block h-[400px] relative rounded-3xl overflow-hidden card-premium">
                <img src={featuredServices[0].image} alt={featuredServices[0].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full flex items-end justify-between">
                  <div className="max-w-md">
                    <h3 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-3">{featuredServices[0].title}</h3>
                    <p className="text-white/80">{featuredServices[0].description}</p>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-primary transition-colors flex-shrink-0">
                    <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeInUp} className="md:col-span-6 lg:col-span-4 group">
              <Link to={featuredServices[1].to} className="block h-[400px] relative rounded-3xl overflow-hidden card-premium">
                <img src={featuredServices[1].image} alt={featuredServices[1].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">{featuredServices[1].title}</h3>
                  <p className="text-white/80 text-sm mb-4">{featuredServices[1].description}</p>
                  <div className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:text-white transition-colors">
                    Explore <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Service 3 - Wide */}
            <motion.div variants={fadeInUp} className="md:col-span-12 group">
              <Link to={featuredServices[2].to} className="block h-[300px] md:h-[400px] relative rounded-3xl overflow-hidden card-premium">
                <img src={featuredServices[2].image} alt={featuredServices[2].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
                <div className="absolute inset-y-0 left-0 p-8 lg:p-12 max-w-xl flex flex-col justify-center">
                  <h3 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-4">{featuredServices[2].title}</h3>
                  <p className="text-white/80 text-lg mb-8">{featuredServices[2].description}</p>
                  <div className="inline-flex items-center gap-2 text-primary-light font-medium group-hover:text-white transition-colors">
                    Book Now <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Why Choose Us (Redesigned for premium feel) */}
      <section className="section-padding bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading label="THE DIFFERENCE" title="Why We Stand Out" />
          
          <motion.div
            ref={highlightsRef}
            variants={staggerContainer}
            initial="hidden"
            animate={highlightsInView ? 'visible' : 'hidden'}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {whyChooseUs.slice(0, 3).map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="group p-8 rounded-3xl bg-surface border border-border hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold text-text-primary mb-3">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Official Courier Partners */}
      <Partners />

      {/* 6. Featured Products (Horizontal Scroll or Strict Grid) */}
      <section className="section-padding bg-surface relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading label="PREMIUM SELECTION" title="Featured Products" align="left" />
            <Link to="/products/dairy" className="btn-outline hidden md:flex">
              View All Products
            </Link>
          </div>

          <motion.div
            ref={productsRef}
            variants={staggerContainer}
            initial="hidden"
            animate={productsInView ? 'visible' : 'hidden'}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products.slice(0, 4).map((product) => (
              <motion.div key={product.id} variants={fadeInUp} className="card-premium group">
                <div className="h-48 overflow-hidden rounded-t-3xl relative bg-white">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2 block">{product.category}</span>
                  <h3 className="text-lg font-heading font-bold text-text-primary mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-text-secondary text-sm line-clamp-2">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/products/dairy" className="btn-outline w-full">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Customer Reviews Carousel */}
      <Reviews />

      {/* 8. Call To Action (Premium Dark Strip) */}
      <section className="relative py-24 overflow-hidden bg-dark-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-20" />
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center space-y-10">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tight">
            Ready to experience <span className="text-accent">premium quality?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
            Visit our store in Dhariwal or reach out to us for enquiries and reliable courier bookings.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Contact Us Today
            </Link>
            <a href="https://maps.app.goo.gl/kKPDcy1FSErVjDjy6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transform hover:scale-[1.02] active:scale-[0.98] border border-white/20 text-white hover:border-white hover:bg-white/10 transition-all duration-300">
              <MapPin className="w-5 h-5" /> Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
