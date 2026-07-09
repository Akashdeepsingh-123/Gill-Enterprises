import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Truck, ClipboardList, Package, Send, ExternalLink, ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import { courierTimeline } from '../data/products';
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from '../utils/animations';
import { useInView } from '../hooks';

const partners = [
  {
    name: 'DHL Express',
    logo: '/official-dhl-logo.svg',
    desc: 'Premium international shipping with fast delivery times and complete tracking visibility worldwide.',
    services: ['International Export/Import', 'Express Documents', 'Heavy Shipments'],
  },
  {
    name: 'DTDC',
    logo: '/official-dtdc-logo.png',
    desc: 'India\'s leading logistics provider offering extensive domestic reach and cost-effective shipping.',
    services: ['Pan-India Delivery', 'Economy Shipping', 'E-commerce Solutions'],
  },
  {
    name: 'Blue Dart',
    logo: '/official-bluedart-logo.svg',
    desc: 'South Asia\'s premier express air and integrated transportation & distribution company.',
    services: ['Premium Domestic', 'Next Day Delivery', 'Secure Shipping'],
  },
];

const timelineIcons: Record<string, React.ElementType> = {
  clipboard: ClipboardList,
  package: Package,
  send: Send,
  truck: Truck,
  'check-circle': CheckCircle,
};

export default function CourierServicesPage() {
  const { ref: partnersRef, isInView: partnersInView } = useInView();
  const { ref: timelineRef, isInView: timelineInView } = useInView();
  const { ref: formRef, isInView: formInView } = useInView();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    destination: '',
    weight: '0-500g',
    type: 'Document',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const text = `*Courier Booking Enquiry*
Name: ${formData.name}
Phone: ${formData.phone}
To: ${formData.destination}
Weight: ${formData.weight}
Type: ${formData.type}
Message: ${formData.message}`;
    
    window.open(`https://wa.me/919888202024?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      <PageHero
        label="LOGISTICS"
        title="Global Courier Services"
        subtitle="Fast, safe, and reliable shipping solutions for domestic and international deliveries."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Courier Services' }]}
        backgroundImage="/images/heroes/bg-courier.jpg"
        gradient="from-slate-900 via-gray-900 to-dark-bg"
      />

      {/* Booking Form Layout — Right After Hero */}
      <section className="section-padding bg-surface relative">
        <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
            ref={formRef}
            initial="hidden"
            animate={formInView ? 'visible' : 'hidden'}
            className="grid lg:grid-cols-12 gap-16 items-center"
          >
            <motion.div variants={fadeInLeft} className="lg:col-span-5 space-y-8">
              <SectionHeading label="GET A QUOTE" title="Ready to Ship?" align="left" />
              <p className="text-lg text-text-secondary leading-relaxed font-light">
                Fill out the details to get an instant quote or initiate your courier booking. Our logistics experts will guide you through the documentation process for international shipments.
              </p>
              <div className="bg-white dark:bg-dark-card p-6 rounded-3xl border border-border flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-text-primary">Fast & Secure Delivery</h4>
                  <p className="text-sm text-text-secondary mt-1">Visit our shop to securely book your shipments with fast, reliable tracking.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="lg:col-span-7 bg-white dark:bg-dark-card rounded-[40px] p-8 sm:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-border">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-surface border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm" placeholder="e.g. Amritpal Singh" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-surface border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm" placeholder="e.g. +91 9888202024" required />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Destination Country/PIN</label>
                    <input type="text" name="destination" value={formData.destination} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-surface border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm" placeholder="e.g. London, UK" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Approx. Weight</label>
                    <div className="relative">
                      <select name="weight" value={formData.weight} onChange={handleChange} className="w-full px-5 py-4 pr-12 rounded-2xl bg-surface border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm appearance-none">
                        <option value="Not measured yet">Not measured yet</option>
                        <option value="0-500g">0 - 500g</option>
                        <option value="500g-1kg">500g - 1kg</option>
                        <option value="1-5kg">1kg - 5kg</option>
                        <option value="5-10kg">5kg - 10kg</option>
                        <option value="10kg+">More than 10kg</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Package Type</label>
                    <div className="relative">
                      <select name="type" value={formData.type} onChange={handleChange} className="w-full px-5 py-4 pr-12 rounded-2xl bg-surface border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm appearance-none">
                        <option value="Document">Document</option>
                        <option value="Parcel">Parcel/Box</option>
                        <option value="Fragile">Fragile Items</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary pointer-events-none" />
                    </div>
                  </div>
                </div>
                
                <div className="pt-6">
                  <button type="button" onClick={handleWhatsApp} className="w-full py-5 rounded-2xl font-bold text-white bg-dark-bg hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-3">
                    <WhatsAppIcon className="w-5 h-5" /> Proceed via WhatsApp
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Partners Section */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading label="OUR NETWORK" title="World-Class Logistics Partners" subtitle="We leverage the best global networks to ensure your packages arrive safely and on time." />
          
          <motion.div
            ref={partnersRef}
            variants={staggerContainer}
            initial="hidden"
            animate={partnersInView ? 'visible' : 'hidden'}
            className="grid lg:grid-cols-3 gap-8 mt-16"
          >
            {partners.map((partner, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-white dark:bg-dark-card rounded-[32px] p-10 border border-border hover:border-primary/50 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500">
                <div className="h-20 flex items-center justify-start mb-8">
                  <img src={partner.logo} alt={partner.name} className="h-full object-contain max-w-[180px] transition-transform duration-300 hover:scale-105 hover:shadow-sm hover:-translate-y-1" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">{partner.name}</h3>
                <p className="text-text-secondary text-base leading-relaxed mb-8 pb-8 border-b border-border">
                  {partner.desc}
                </p>
                <ul className="space-y-4">
                  {partner.services.map((service, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-text-primary">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      </div>
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Process Timeline */}
      <section className="section-padding bg-white dark:bg-dark-bg overflow-hidden border-y border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading label="THE PROCESS" title="Streamlined Shipping" subtitle="From drop-off to delivery, we make sending parcels effortless." />
          
          <motion.div
            ref={timelineRef}
            variants={staggerContainer}
            initial="hidden"
            animate={timelineInView ? 'visible' : 'hidden'}
            className="mt-24 relative"
          >
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-4 relative z-10">
              {courierTimeline.map((step, index) => {
                const Icon = timelineIcons[step.icon];
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex flex-row lg:flex-col items-center gap-8 lg:gap-6 flex-1 group"
                  >
                    <div className="w-24 h-24 rounded-[2rem] bg-surface dark:bg-dark-card border border-border group-hover:border-primary flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500 relative">
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
                      {Icon && <Icon className="w-8 h-8 text-text-secondary group-hover:text-primary transition-colors" />}
                      <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shadow-md">
                        {step.step}
                      </div>
                    </div>
                    <div className="text-left lg:text-center max-w-xs">
                      <h4 className="font-heading font-bold text-text-primary text-xl mb-2 group-hover:text-primary transition-colors">{step.title}</h4>
                      <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>



      {/* Tracking CTA */}
      <section className="py-20 bg-dark-bg text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/20 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <a
            href="https://www.dhl.com/in-en/home/tracking.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white font-heading font-bold text-2xl hover:text-primary transition-colors group"
          >
            Track an existing shipment <ExternalLink className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </section>
    </>
  );
}
