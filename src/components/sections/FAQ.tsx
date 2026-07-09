import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../../data/faq';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useInView } from '../../hooks';

const FAQ: React.FC = () => {
  const { ref, isInView } = useInView();
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding bg-surface relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
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
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary">
              Frequently Asked Questions
            </h2>
          </motion.div>

          {/* Accordion */}
          <motion.div variants={fadeInUp} className="space-y-4">
            {faqItems.map((item) => {
              const isOpen = activeId === item.id;

              return (
                <motion.div
                  key={item.id}
                  layout
                  className={`bg-white rounded-2xl border overflow-hidden transition-colors duration-300 ${
                    isOpen ? 'border-accent shadow-md' : 'border-border hover:border-accent/50'
                  }`}
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-heading font-semibold text-text-primary text-lg">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-colors ${
                          isOpen ? 'text-accent' : 'text-text-secondary'
                        }`}
                      />
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-5">
                          <div className="pt-2 border-t border-border/50">
                            <p className="text-text-secondary leading-relaxed mt-3">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
