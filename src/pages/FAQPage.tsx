import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';
import PageHero from '../components/ui/PageHero';
import { faqItems } from '../data/faq';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useInView } from '../hooks';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export default function FAQPage() {
  const { ref, isInView } = useInView();
  const [activeCategory, setActiveCategory] = useState('All');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const categories = ['All', ...new Set(faqItems.map((faq: FAQ) => faq.category))];
  const filteredFaqs = activeCategory === 'All' ? faqItems : faqItems.filter((faq: FAQ) => faq.category === activeCategory);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <>
      <PageHero
        label="SUPPORT"
        title="Frequently Asked Questions"
        subtitle="Find quick answers about our dairy products, dry fruits, and courier services."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]}
        backgroundImage="/images/heroes/bg-faq.jpg"
        gradient="from-slate-900 via-gray-900 to-dark-bg"
      />

      <section className="section-padding bg-surface">
        <div className="container mx-auto px-6 max-w-4xl relative">
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-12"
          >
            {/* Minimal Filter Tabs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-text-primary text-white dark:bg-white dark:text-black shadow-md'
                      : 'bg-transparent text-text-secondary hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* FAQ Accordion */}
            <motion.div variants={fadeInUp} className="space-y-4">
              {filteredFaqs.map((faq: FAQ) => {
                const isOpen = openItems.includes(faq.id);
                return (
                  <div
                    key={faq.id}
                    className={`bg-white dark:bg-dark-card rounded-2xl border transition-colors duration-300 ${
                      isOpen ? 'border-primary shadow-sm' : 'border-border hover:border-border/80'
                    }`}
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <span className="font-heading font-bold text-lg text-text-primary pr-8">
                        {faq.question}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-primary/10 text-primary' : 'bg-surface text-text-secondary'}`}>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-text-secondary leading-relaxed font-light border-t border-border/50 pt-4 mt-2">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>

            {/* Support CTA Block */}
            <motion.div variants={fadeInUp} className="mt-16 bg-primary/5 dark:bg-primary/10 rounded-[32px] p-8 md:p-12 text-center border border-primary/20">
              <div className="w-16 h-16 rounded-full bg-white dark:bg-dark-card mx-auto flex items-center justify-center shadow-sm mb-6 text-primary">
                <HelpCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-3">
                Still have questions?
              </h3>
              <p className="text-text-secondary mb-8 max-w-lg mx-auto">
                Can't find the answer you're looking for? Our team is always here to help you out. Drop us a message on WhatsApp.
              </p>
              <a
                href="https://wa.me/919888202024"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2" /> Chat with Support
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
