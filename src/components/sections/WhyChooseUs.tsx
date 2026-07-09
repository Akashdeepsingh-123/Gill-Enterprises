import React from 'react';
import { motion } from 'framer-motion';
import {
  Leaf,
  ShieldCheck,
  Truck,
  IndianRupee,
  Zap,
  Lock,
  Smile,
  Briefcase,
} from 'lucide-react';
import { whyChooseUs } from '../../data/products';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useInView } from '../../hooks';

const iconMap: Record<string, React.ElementType> = {
  leaf: Leaf,
  'shield-check': ShieldCheck,
  truck: Truck,
  'indian-rupee': IndianRupee,
  zap: Zap,
  lock: Lock,
  smile: Smile,
  briefcase: Briefcase,
};

const iconColors: Record<string, { bg: string; text: string }> = {
  leaf: { bg: 'bg-green-100', text: 'text-green-600' },
  'shield-check': { bg: 'bg-blue-100', text: 'text-blue-600' },
  truck: { bg: 'bg-amber-100', text: 'text-amber-600' },
  'indian-rupee': { bg: 'bg-emerald-100', text: 'text-emerald-600' },
  zap: { bg: 'bg-yellow-100', text: 'text-yellow-600' },
  lock: { bg: 'bg-indigo-100', text: 'text-indigo-600' },
  smile: { bg: 'bg-pink-100', text: 'text-pink-600' },
  briefcase: { bg: 'bg-purple-100', text: 'text-purple-600' },
};

const WhyChooseUs: React.FC = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="why-choose-us" className="section-padding relative overflow-hidden pattern-dots">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

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
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary mb-5">
            The Gill Enterprises{' '}
            <span className="gradient-text">Difference</span>
          </h2>
        </motion.div>

        {/* Icon Grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {whyChooseUs.map((item) => {
            const IconComponent = iconMap[item.icon] || Leaf;
            const colors = iconColors[item.icon] || {
              bg: 'bg-blue-100',
              text: 'text-blue-600',
            };

            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 border border-border hover:border-accent hover:shadow-lg transition-all duration-400 text-center group"
              >
                {/* Icon Circle */}
                <div
                  className={`w-16 h-16 rounded-full ${colors.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className={`w-7 h-7 ${colors.text}`} />
                </div>

                {/* Title */}
                <h3 className="text-base font-heading font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
