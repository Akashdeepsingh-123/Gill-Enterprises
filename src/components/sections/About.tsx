import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';
import { useInView } from '../../hooks';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To provide premium quality products and reliable courier services that enrich the lives of our customers, ensuring convenience and satisfaction at every step.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To become the most trusted one-stop destination for daily essentials, premium dry fruits, dairy products, and courier services in Punjab and beyond.',
  },
  {
    icon: Heart,
    title: 'Our Commitment',
    text: 'We are committed to delivering excellence through quality products, competitive pricing, and heartfelt customer service that feels like family.',
  },
];

const About: React.FC = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left: Image */}
          <motion.div variants={fadeInLeft} className="relative">
            <div className="relative">
              <img
                src="/about-store.jpg"
                alt="Gill Enterprises Store"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-accent/20 -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-primary/20 -z-10" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={fadeInRight} className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
                Our Story
              </h2>

              {/* Gold left border text block */}
              <div className="border-l-4 border-accent pl-6 space-y-4">
                <p className="text-text-secondary leading-relaxed">
                  Gill Enterprises has been a cornerstone of trust and quality in the heart
                  of Dhariwal, Punjab. What started as a humble neighborhood store has grown
                  into a beloved destination for premium daily essentials, exquisite dry fruits,
                  fresh dairy products, and reliable courier services.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  With years of dedication and a passion for excellence, we've built relationships
                  that go beyond transactions. Our customers are our extended family, and we take
                  pride in serving them with the finest products sourced from trusted suppliers
                  across India.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Today, Gill Enterprises stands as a symbol of reliability, quality, and warmth —
                  a place where every visit feels like coming home.
                </p>
              </div>
            </div>

            {/* Value Cards */}
            <motion.div
              variants={staggerContainer}
              className="space-y-4"
            >
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 border border-border/50 hover:border-accent/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-text-primary mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {value.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
