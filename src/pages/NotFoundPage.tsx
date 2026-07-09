import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import { useInView } from '../hooks';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFoundPage() {
  const { ref, isInView } = useInView();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-light-bg dark:bg-dark-bg overflow-hidden pt-20">
      <div className="absolute inset-0 pattern-dots opacity-40 pointer-events-none" />
      
      {/* Decorative Orbs - Linear style */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="relative inline-block">
            <h1 className="text-[120px] md:text-[200px] font-bold font-heading text-text-primary tracking-tighter leading-none">
              404
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none">
              <span className="text-[120px] md:text-[200px] font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light blur-xl opacity-50">
                404
              </span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4 max-w-lg mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
              Page Not Found
            </h2>
            <p className="text-lg text-text-secondary font-light leading-relaxed">
              We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps the URL is incorrect.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link to="/" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
              <Home className="w-5 h-5" /> Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" /> Go Back
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
