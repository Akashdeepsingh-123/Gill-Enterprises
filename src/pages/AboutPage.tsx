import { motion } from 'framer-motion';
import { Target, Eye, Heart, Leaf, ShieldCheck, Truck, IndianRupee, Zap, Lock, Smile, Briefcase } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from '../utils/animations';
import { useInView } from '../hooks';
import { whyChooseUs } from '../data/products';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ElementType> = {
  'leaf': Leaf,
  'shield-check': ShieldCheck,
  'truck': Truck,
  'indian-rupee': IndianRupee,
  'zap': Zap,
  'lock': Lock,
  'smile': Smile,
  'briefcase': Briefcase,
};

const storeImages = [
  { src: '/store-exterior.jpg', title: 'Flagship Store', desc: 'GT Road, near Bus Stand, opposite HDFC Bank, Dhariwal' },
  { src: '/store-interior.jpg', title: 'Premium Layout', desc: 'Curated selection' },
  { src: '/about-store.jpg', title: 'Service Desk', desc: 'Logistics center' },
];

export default function AboutPage() {
  const { ref: storyRef, isInView: storyInView } = useInView();
  const { ref: visionRef, isInView: visionInView } = useInView();
  const { ref: whyRef, isInView: whyInView } = useInView();
  const { ref: storeRef, isInView: storeInView } = useInView();

  return (
    <>
      <PageHero
        label="OUR STORY"
        title="About Gill Enterprises"
        subtitle="Connecting our community with premium dairy, luxury dry fruits, and reliable global shipping."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
        backgroundImage="/images/heroes/bg-about.jpg"
        gradient="from-primary-dark via-primary to-emerald-900"
      />

      {/* Editorial Story Section */}
      <section className="section-padding bg-surface overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            ref={storyRef}
            variants={staggerContainer}
            initial="hidden"
            animate={storyInView ? 'visible' : 'hidden'}
            className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center"
          >
            <motion.div variants={fadeInLeft} className="lg:col-span-5 space-y-8">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary leading-tight">
                Quality is not an act, it is a <span className="gradient-text-emerald">habit.</span>
              </h2>
              <div className="w-12 h-1 bg-primary rounded-full" />
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed font-light">
                <p>
                  Built on a foundation of trust, Gill Enterprises started with a singular vision: to elevate the standard of daily essentials for the community of Dhariwal.
                </p>
                <p>
                  Over the years, our relentless pursuit of quality has allowed us to grow from a local dairy shop into a trusted, multi-faceted business. Today, we are proud to be the region's official partner for global logistics giants like DHL and Blue Dart, while maintaining our heritage in premium dairy and handpicked dry fruits.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="lg:col-span-7 relative h-[600px] w-full">
              <div className="absolute inset-0 bg-primary/5 rounded-[40px] transform rotate-3" />
              <div className="relative h-full w-full rounded-[40px] overflow-hidden shadow-2xl">
                <img src="/about-store.jpg" alt="Gill Enterprises Heritage" className="w-full h-full object-cover transition-all duration-700 hover:scale-105" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modern Vision/Mission Split */}
      <section className="section-padding bg-dark-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
            ref={visionRef}
            variants={staggerContainer}
            initial="hidden"
            animate={visionInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 gap-12 lg:gap-24"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center text-accent">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-heading font-bold">Our Mission</h3>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                To bridge the gap between premium global standards and local accessibility. We strive to provide Dhariwal with the purest products and the most reliable services, without compromise.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center text-primary">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-heading font-bold">Our Vision</h3>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                To be the most trusted, professionally run enterprise in the region, setting benchmarks for customer satisfaction, ethical sourcing, and operational excellence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Minimal Grid */}
      <section className="section-padding bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading label="DIFFERENTIATORS" title="The Gill Standard" subtitle="We don't cut corners. Here is what makes us different." />
          
          <motion.div
            ref={whyRef}
            variants={staggerContainer}
            initial="hidden"
            animate={whyInView ? 'visible' : 'hidden'}
            className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
          >
            {whyChooseUs.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <motion.div key={index} variants={fadeInUp} className="group">
                  <div className="w-14 h-14 rounded-2xl bg-surface border border-border flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {Icon && <Icon className="w-6 h-6 text-text-secondary group-hover:text-white transition-colors" />}
                  </div>
                  <h4 className="font-heading font-bold text-text-primary text-xl mb-3">{feature.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

    </>
  );
}
