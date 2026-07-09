import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; to?: string }[];
  gradient?: string;
  backgroundImage?: string;
}

export default function PageHero({
  label,
  title,
  subtitle,
  breadcrumbs,
  gradient = 'from-dark-bg to-dark-card',
  backgroundImage,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background Image with Ken Burns Effect */}
      {backgroundImage ? (
        <>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={backgroundImage} 
              alt={title} 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
          <div className="absolute inset-0 z-0 bg-black/30 md:bg-transparent" /> {/* Extra darkening on mobile */}
        </>
      ) : (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} z-0`} />
          <div className="absolute inset-0 pattern-dots opacity-10 pointer-events-none z-0" />
        </>
      )}

      {/* Animated subtle shapes (Linear/Stripe style) - Only if no background image */}
      {!backgroundImage && (
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/20 blur-[120px] pointer-events-none z-0"
        />
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl space-y-6"
        >
          {/* Breadcrumbs */}
          <motion.nav variants={fadeInUp} aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-white/60 font-medium">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center gap-2">
                  {index > 0 && <ChevronRight className="w-3.5 h-3.5" />}
                  {crumb.to ? (
                    <Link
                      to={crumb.to}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>

          {/* Label */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
              {label}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white tracking-tight leading-tight"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-light"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
