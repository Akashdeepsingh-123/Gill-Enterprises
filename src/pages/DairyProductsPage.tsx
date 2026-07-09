import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Truck, IndianRupee, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import { products } from '../data/products';
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from '../utils/animations';
import { useInView } from '../hooks';

const dairyProducts = products.filter((p) => p.category === 'dairy');

const features = [
  { icon: Leaf, title: 'Farm Fresh Daily', desc: 'Sourced directly from our dairy farms every single morning to guarantee maximum freshness.' },
  { icon: ShieldCheck, title: 'Uncompromising Purity', desc: '100% pure, unadulterated, and rigorously tested. No preservatives or artificial additives.' },
  { icon: Truck, title: 'Reliable Supply', desc: 'Consistent daily restocks ensure you never run out of your essential daily dairy needs.' },
  { icon: IndianRupee, title: 'Wholesale Value', desc: 'Premium quality shouldn\'t mean premium prices. We offer the best rates in Dhariwal.' },
];

export default function DairyProductsPage() {
  const { ref: introRef, isInView: introInView } = useInView();
  const { ref: productsRef, isInView: productsInView } = useInView();
  const { ref: featuresRef, isInView: featuresInView } = useInView();

  return (
    <>
      <PageHero
        label="PRODUCTS"
        title="Farm-Fresh Dairy"
        subtitle="Pure, unadulterated milk and premium dairy products delivered fresh daily."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Products', to: '/products' }, { label: 'Dairy' }]}
        backgroundImage="/images/heroes/bg-dairy.jpg"
        gradient="from-emerald-900 via-primary-dark to-primary"
      />

      {/* Editorial Intro Layout */}
      <section className="section-padding bg-surface overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            ref={introRef}
            variants={staggerContainer}
            initial="hidden"
            animate={introInView ? 'visible' : 'hidden'}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInLeft} className="relative h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl">
              <img src="/fresh-milk.jpg" alt="Fresh Milk Pouring" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
            </motion.div>
            
            <motion.div variants={fadeInRight} className="space-y-8 lg:pl-8">
              <SectionHeading label="OUR COMMITMENT" title="Purity You Can Taste." align="left" />
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed font-light">
                <p>
                  At Gill Enterprises, we believe that good health starts with pure food. That's why our dairy products are sourced fresh every day from our farmers who share our uncompromising commitment to quality and hygiene.
                </p>
                <p>
                  From our rich, creamy morning milk to our traditional, aromatic desi ghee, every product guarantees authenticity. We don't just sell dairy; we deliver the essential nutrition your family relies on.
                </p>
              </div>
              <div className="pt-4 border-t border-border">
                <a href="#catalog" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors group">
                  View Full Catalog <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="catalog" className="section-padding bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading label="CATALOG" title="Our Dairy Selection" subtitle="Freshness delivered to your table." />
          
          <motion.div
            ref={productsRef}
            variants={staggerContainer}
            initial="hidden"
            animate={productsInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          >
            {dairyProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="card-premium flex flex-col h-full group"
              >
                <div className="h-64 overflow-hidden rounded-t-[24px] relative bg-surface">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-primary shadow-sm">
                    FRESH TODAY
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-heading font-bold text-text-primary mb-3">
                    {product.name}
                  </h3>
                  <p className="text-text-secondary mb-8 flex-grow leading-relaxed">
                    {product.description}
                  </p>
                  <a
                    href={`https://wa.me/919888202024?text=${encodeURIComponent(`Hi! I'm interested in your ${product.name}. Could you please share the current price and availability?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-primary bg-primary/5 hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Enquire on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section-padding bg-surface relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <SectionHeading label="STANDARDS" title="Why Choose Our Dairy?" />
          
          <motion.div
            ref={featuresRef}
            variants={staggerContainer}
            initial="hidden"
            animate={featuresInView ? 'visible' : 'hidden'}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white dark:bg-dark-card p-8 rounded-3xl border border-border shadow-sm hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-xl text-text-primary mb-3">{feature.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
