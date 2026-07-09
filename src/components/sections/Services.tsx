import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Circle, Package, ArrowRight } from 'lucide-react';
import { services } from '../../data/products';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useInView } from '../../hooks';

const iconMap: Record<string, React.ElementType> = {
  milk: Droplets,
  nut: Circle,
  package: Package,
};

const Services: React.FC = () => {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

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
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary mb-5">
            What We{' '}
            <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            From farm-fresh dairy products to premium dry fruits and reliable courier services — 
            we bring quality and convenience to your doorstep.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Package;

            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="group card-premium bg-white rounded-3xl overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`} />
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  {/* Title on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-heading font-bold text-white drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Item Tags/Pills */}
                  <div className="flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <span
                        key={item}
                        className="inline-block px-3 py-1.5 rounded-full bg-surface text-text-secondary text-xs font-medium border border-border hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Arrow Link */}
                  <motion.a
                    href={`#${service.id}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link pt-2"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
