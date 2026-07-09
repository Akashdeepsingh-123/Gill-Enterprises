import PageHero from '../components/ui/PageHero';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import { useInView } from '../hooks';
import { Link } from 'react-router-dom';
import { Scale } from 'lucide-react';

export default function TermsPage() {
  const { ref, isInView } = useInView();

  return (
    <>
      <PageHero
        label="LEGAL"
        title="Terms & Conditions"
        subtitle="Clear, transparent terms of use for our products and services."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Terms & Conditions' }]}
        gradient="from-slate-900 via-gray-900 to-dark-bg"
      />

      <section className="section-padding bg-surface">
        <div className="container mx-auto px-6 max-w-4xl relative">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="bg-white dark:bg-dark-card rounded-[40px] p-8 md:p-16 shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-border prose prose-lg dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary-dark transition-colors prose-p:font-light prose-p:leading-relaxed"
          >
            <div className="flex items-center gap-3 text-primary mb-8 border-b border-border pb-8">
              <Scale className="w-8 h-8" />
              <p className="text-sm uppercase tracking-widest font-bold m-0 text-text-secondary">
                Last Updated: July 2024
              </p>
            </div>

            <h2 className="text-3xl text-text-primary">1. Acceptance of Terms</h2>
            <p className="text-text-secondary">
              By accessing our website, visiting our store in Dhariwal, or utilizing our services (including dairy, dry fruits, and courier services), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
            </p>

            <h2 className="text-3xl text-text-primary mt-12">2. Products & Services</h2>
            <h3 className="text-2xl text-text-primary">Dairy Products</h3>
            <p className="text-text-secondary">
              Due to the perishable nature of dairy products (milk, paneer, curd, ghee), all sales are final. We ensure that our products are fresh at the time of purchase. Customers are advised to maintain proper refrigeration immediately after purchase. We are not liable for spoilage due to improper storage after the product leaves our store.
            </p>

            <h3 className="text-2xl text-text-primary">Dry Fruits & Gift Packs</h3>
            <p className="text-text-secondary">
              We strive to provide the highest quality dry fruits. In the rare event of a quality issue with sealed packages, returns or exchanges may be considered within 24 hours of purchase, provided the original packaging and receipt are intact.
            </p>

            <h2 className="text-3xl text-text-primary mt-12">3. Courier Services</h2>
            <p className="text-text-secondary">
              Gill Enterprises acts as an authorized booking agent for DHL, DTDC, and Blue Dart.
            </p>
            <ul className="text-text-secondary space-y-3 list-none pl-0">
              <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span><strong>Liability:</strong> Once a parcel is handed over, the partner's terms apply. We are not directly liable for transit delays.</span></li>
              <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span><strong>Prohibited Items:</strong> Customers are solely responsible for ensuring parcels do not contain restricted items.</span></li>
              <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span><strong>Documentation:</strong> Valid KYC documents must be provided where required by law.</span></li>
            </ul>

            <h2 className="text-3xl text-text-primary mt-12">4. Pricing and Payments</h2>
            <p className="text-text-secondary">
              All prices are in Indian Rupees (INR). Prices for dairy and dry fruits are subject to market fluctuations. Courier rates are determined by our partners based on weight, dimensions, and destination.
            </p>

            <div className="mt-16 text-center not-prose pt-8 border-t border-border">
              <Link to="/contact" className="btn-primary inline-flex">
                Contact Support for Clarifications
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
