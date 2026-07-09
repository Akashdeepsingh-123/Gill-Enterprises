import PageHero from '../components/ui/PageHero';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import { useInView } from '../hooks';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const { ref, isInView } = useInView();

  return (
    <>
      <PageHero
        label="LEGAL"
        title="Privacy Policy"
        subtitle="We value your trust. Learn how we handle and protect your information."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]}
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
              <ShieldCheck className="w-8 h-8" />
              <p className="text-sm uppercase tracking-widest font-bold m-0 text-text-secondary">
                Last Updated: July 2024
              </p>
            </div>

            <h2 className="text-3xl text-text-primary">1. Introduction</h2>
            <p className="text-text-secondary">
              Gill Enterprises ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our store in Dhariwal, use our website, or interact with our services, including our dairy sales, dry fruit orders, and courier bookings.
            </p>

            <h2 className="text-3xl text-text-primary mt-12">2. Information We Collect</h2>
            <p className="text-text-secondary">We may collect information about you in a variety of ways. The information we may collect includes:</p>
            <ul className="text-text-secondary space-y-3 list-none pl-0">
              <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span><strong>Personal Data:</strong> Name, shipping address, email address, and telephone number when you book a courier or place an order.</span></li>
              <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span><strong>Courier Data:</strong> Sender and receiver details, package contents, and tracking information necessary to fulfill our courier services via DHL, DTDC, and Blue Dart.</span></li>
              <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span><strong>Communication Data:</strong> Information you provide when you contact us via WhatsApp, phone, or email.</span></li>
            </ul>

            <h2 className="text-3xl text-text-primary mt-12">3. How We Use Your Information</h2>
            <p className="text-text-secondary">We use the information we collect to:</p>
            <ul className="text-text-secondary space-y-3 list-none pl-0">
              <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span>Process and manage your courier bookings and product orders.</span></li>
              <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span>Communicate with you regarding your shipment status, order updates, or inquiries.</span></li>
              <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span>Improve our store operations, website, and customer service experience.</span></li>
              <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span>Comply with legal obligations, particularly concerning shipping regulations.</span></li>
            </ul>

            <h2 className="text-3xl text-text-primary mt-12">4. Information Sharing</h2>
            <p className="text-text-secondary">We only share your information with third parties in the following situations:</p>
            <ul className="text-text-secondary space-y-3 list-none pl-0">
              <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span><strong>Courier Partners:</strong> We share necessary details with our official partners strictly to facilitate delivery.</span></li>
              <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law.</span></li>
            </ul>

            <h2 className="text-3xl text-text-primary mt-12">5. Contact Us</h2>
            <p className="text-text-secondary">
              If you have questions or comments about this Privacy Policy, please contact us:
            </p>
            
            <div className="bg-surface p-8 rounded-3xl mt-8 border border-border not-prose">
              <p className="font-heading font-bold text-text-primary text-xl mb-2">Gill Enterprises</p>
              <p className="text-text-secondary">GT Road, near Bus Stand, opposite HDFC Bank,<br />Dhariwal, Punjab 143519</p>
              <p className="text-text-secondary mt-4">Phone: +91 9888202024</p>
              <Link to="/contact" className="mt-6 inline-flex btn-primary">
                Contact Support
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
