import { motion } from 'framer-motion';
import { Gift, CheckCircle, Package, ArrowRight, ShieldCheck, Leaf, Clock } from 'lucide-react';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import { luxuryProducts } from '../data/luxuryDryFruits';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useInView } from '../hooks';

export default function DryFruitsPage() {
  const { ref: categoryRef, isInView: categoryInView } = useInView();
  const { ref: dryFruitsRef, isInView: dryFruitsInView } = useInView();
  const { ref: healthyMixRef, isInView: healthyMixInView } = useInView();
  const { ref: naturalFoodsRef, isInView: naturalFoodsInView } = useInView();
  const { ref: spicesRef, isInView: spicesInView } = useInView();
  const { ref: wellnessRef, isInView: wellnessInView } = useInView();
  const { ref: giftRef, isInView: giftInView } = useInView();
  const { ref: featuresRef, isInView: featuresInView } = useInView();

  const renderProductGrid = (category: string, title: string, subtitle: string, ref: any, inView: boolean) => {
    const products = luxuryProducts.filter(p => p.category === category);
    if (products.length === 0) return null;

    return (
      <section className="py-24 bg-surface" id={category}>
        <div className="container mx-auto px-6 max-w-[1280px]">
          <SectionHeading label="COLLECTION" title={title} subtitle={subtitle} />
          
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="bg-white dark:bg-dark-card rounded-[32px] overflow-hidden flex flex-col h-full group hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 border border-border hover:border-primary/30"
              >
                <div className="h-64 overflow-hidden relative bg-surface">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg backdrop-blur-md">
                      {product.badge}
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-heading font-bold text-text-primary mb-2 line-clamp-2 min-h-[3.5rem]">
                    {product.name}
                  </h3>
                  <p className="text-sm text-text-secondary mb-6 flex-grow leading-relaxed font-light line-clamp-3">
                    {product.description}
                  </p>
                  <a
                    href={`https://wa.me/919888202024?text=${encodeURIComponent(`Hi! I'm interested in ordering ${product.name}. Could you please share the current price and availability?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-medium text-primary bg-primary/5 hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Enquire Price
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };

  return (
    <>
      <PageHero
        label="LUXURY COLLECTION"
        title="Premium Dry Fruits & Wellness"
        subtitle="Sourced globally, curated locally. Experience the finest quality hand-picked essentials for a healthy and luxurious lifestyle."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Products', to: '/products' }, { label: 'Luxury Collection' }]}
        backgroundImage="/products-hero-new.jpg"
        gradient="from-black/90 via-black/60 to-black/30"
      />

      {/* Featured Categories */}
      <section className="py-24 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-6 max-w-[1280px]">
          <SectionHeading label="DISCOVER" title="Our Collections" subtitle="Explore our range of premium products meticulously categorized for your convenience." />
          
          <motion.div
            ref={categoryRef}
            variants={staggerContainer}
            initial="hidden"
            animate={categoryInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          >
            {[
              { id: 'dry-fruits', title: 'Premium Dry Fruits', desc: 'Hand-picked luxury nuts and dried fruits', count: '10 Products', img: '/products/premium-dry-fruits-cover.jpg' },
              { id: 'healthy-mix', title: 'Healthy Mixes', desc: 'Signature blends of seeds, nuts, and berries', count: '11 Products', img: '/products/walnut-muesli.jpg' },
              { id: 'natural-foods', title: 'Natural Foods', desc: '100% pure honey, mishri, and gulkand', count: '3 Products', img: '/products/honey-luxury.jpg' },
              { id: 'spices', title: 'Premium Spices', desc: 'Aromatic saffron, cardamom, and cloves', count: '3 Products', img: '/products/premium-spices-cover.jpg' },
              { id: 'wellness', title: 'Wellness Products', desc: 'Authentic Himalayan Shilajit and Qawah', count: '5 Products', img: '/products/shilajit-luxury.jpg' },
              { id: 'hampers', title: 'Gift Hampers', desc: 'Bespoke corporate and wedding gifting', count: 'Custom', img: '/dry-fruits.jpg' }
            ].map((cat, i) => (
              <motion.a
                href={`#${cat.id}`}
                key={i}
                variants={fadeInUp}
                className="group block relative h-[280px] rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <img src={cat.img} alt={cat.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="text-accent text-xs font-bold tracking-widest uppercase mb-2">{cat.count}</div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-gray-300 text-sm font-light flex items-center justify-between">
                    {cat.desc}
                    <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Render Product Grids */}
      {renderProductGrid('dry-fruits', 'Premium Dry Fruits', 'The finest selection of nuts and dried fruits, sourced directly from premier global orchards.', dryFruitsRef, dryFruitsInView)}
      
      {/* Healthy Mix uses white background for contrast */}
      <div className="bg-white dark:bg-dark-bg">
        {renderProductGrid('healthy-mix', 'Healthy Mix Collection', 'Our signature artisanal blends designed for your daily vitality and crunch.', healthyMixRef, healthyMixInView)}
      </div>

      {renderProductGrid('natural-foods', 'Premium Natural Foods', '100% pure, unprocessed sweetness derived from nature.', naturalFoodsRef, naturalFoodsInView)}
      
      <div className="bg-white dark:bg-dark-bg">
        {renderProductGrid('spices', 'Premium Spices', 'Exquisite, highly aromatic spices reserved for culinary excellence.', spicesRef, spicesInView)}
      </div>

      {renderProductGrid('wellness', 'Wellness Collection', 'Authentic traditional wellness products crafted for longevity and health.', wellnessRef, wellnessInView)}

      {/* Gift Hampers Section */}
      <section className="py-32 bg-dark-bg text-white relative overflow-hidden" id="hampers">
        <div className="absolute inset-0 bg-[url('/dry-fruits.jpg')] opacity-20 bg-cover bg-center" />
        <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
          <motion.div
            ref={giftRef}
            variants={staggerContainer}
            initial="hidden"
            animate={giftInView ? 'visible' : 'hidden'}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent font-bold tracking-widest text-xs uppercase backdrop-blur-sm">
                <Gift className="w-4 h-4" /> Bespoke Gifting
              </div>
              
              <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                Luxury Hampers for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">Every Occasion.</span>
              </h2>
              
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-lg">
                Make your celebrations truly memorable with our elegantly packaged premium dry fruit boxes. From Diwali festivals to grand weddings and corporate events.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                {[
                  'Wedding Gift Boxes', 'Festival Hampers', 
                  'Corporate Gift Boxes', 'Luxury Wooden Boxes',
                  'Premium Ribbon Packaging', 'Custom Assortments'
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex items-center gap-4 text-gray-200">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 border border-accent/30">
                      <CheckCircle className="w-4 h-4 text-accent" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="pt-10">
                <a
                  href="https://wa.me/919888202024?text=Hi! I want to enquire about custom luxury gift hampers."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex px-8 py-4 text-lg"
                >
                  <Package className="w-5 h-5 mr-2 inline" /> Discuss Custom Orders
                </a>
              </div>
            </div>
            
            <div className="relative h-[600px] lg:h-[800px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-white/10">
              <img src="/dry-fruits.jpg" alt="Luxury Hampers" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20">
                <h3 className="text-2xl font-bold mb-2">Corporate & Bulk Orders</h3>
                <p className="text-gray-300 font-light">We offer specialized branding and custom packaging solutions for large scale corporate gifting with special pricing.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 max-w-[1280px]">
          <motion.div
            ref={featuresRef}
            variants={staggerContainer}
            initial="hidden"
            animate={featuresInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: ShieldCheck, title: 'Quality Assured', desc: 'Rigorously tested and graded for the perfect size and crunch.' },
              { icon: Package, title: 'Luxury Packaging', desc: 'Food-grade premium packaging that retains natural freshness.' },
              { icon: Leaf, title: '100% Natural', desc: 'Sourced from the finest farms, completely free from artificial additives.' },
              { icon: Clock, title: 'Legacy of Trust', desc: 'A trusted heritage of excellence in delivering premium dry fruits and wellness products.' },
            ].map((feat, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white dark:bg-dark-card p-10 rounded-[32px] text-center border border-border hover:border-primary/50 transition-colors shadow-sm">
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                  <feat.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-4 text-text-primary">{feat.title}</h3>
                <p className="text-text-secondary font-light leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6 text-left">
            {[
              { q: 'Are your dry fruits chemically treated?', a: 'No, all our dry fruits are 100% natural, sun-dried, and completely free from any chemical treatments or artificial preservatives.' },
              { q: 'Do you offer bulk discounts for weddings?', a: 'Yes, we provide special pricing and custom luxury packaging for wedding favors and corporate bulk orders.' },
              { q: 'How long do the healthy mixes stay fresh?', a: 'When stored in a cool, dry place in their airtight packaging, our healthy mixes retain their crunch and nutritional value for up to 6 months.' }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-surface rounded-[24px] border border-border">
                <h4 className="text-xl font-bold text-text-primary mb-3">{faq.q}</h4>
                <p className="text-text-secondary font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
