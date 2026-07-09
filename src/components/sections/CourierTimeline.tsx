import React from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardList,
  Package,
  Send,
  Truck,
  CheckCircle,
} from 'lucide-react';
import { courierTimeline } from '../../data/products';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useInView } from '../../hooks';

const iconMap: Record<string, React.ElementType> = {
  clipboard: ClipboardList,
  package: Package,
  send: Send,
  truck: Truck,
  'check-circle': CheckCircle,
};

const CourierTimeline: React.FC = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="courier-timeline" className="section-padding relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 pointer-events-none" />

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
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary mb-5">
            Courier Booking{' '}
            <span className="gradient-text">Process</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Connecting Line — Desktop (horizontal) */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-1 rounded-full overflow-hidden">
            <motion.div
              className="h-full w-full gradient-gold-green rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          {/* Connecting Line — Mobile (vertical) */}
          <div className="lg:hidden absolute top-0 bottom-0 left-8 w-1 rounded-full overflow-hidden">
            <motion.div
              className="w-full h-full gradient-gold-green rounded-full"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
              style={{ transformOrigin: 'top' }}
            />
          </div>

          {/* Steps */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-4">
            {courierTimeline.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Package;

              return (
                <motion.div
                  key={item.step}
                  variants={fadeInUp}
                  custom={index}
                  className="flex lg:flex-col items-start lg:items-center gap-5 lg:gap-4 relative flex-1"
                >
                  {/* Step Number + Icon Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-white border-4 border-accent flex items-center justify-center shadow-lg shadow-accent/20"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <IconComponent className="w-7 h-7 text-primary" />
                    </motion.div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full gradient-blue-green flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{item.step}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:text-center">
                    <h3 className="text-lg font-heading font-bold text-text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourierTimeline;
