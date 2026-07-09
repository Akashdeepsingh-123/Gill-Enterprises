import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';
import PageHero from '../components/ui/PageHero';
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from '../utils/animations';
import { useInView } from '../hooks';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['GT Road, near Bus Stand, opposite HDFC Bank', 'Dhariwal, Punjab 143519'],
    href: 'https://maps.app.goo.gl/kKPDcy1FSErVjDjy6',
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 9888202024'],
    href: 'tel:+919888202024',
  },
  {
    icon: WhatsAppIcon,
    title: 'WhatsApp',
    lines: ['Chat with us for quick replies'],
    href: 'https://wa.me/919888202024',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['gilldhlcourierservice@gmail.com'],
    href: 'mailto:gilldhlcourierservice@gmail.com',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Monday - Sunday: 8:00 AM - 9:00 PM'],
    href: null,
  },
];

export default function ContactPage() {
  const { ref, isInView } = useInView();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `*Website Contact Form*
Name: ${formData.name}
Phone: ${formData.phone}
Subject: ${formData.subject || 'General Enquiry'}
Message: ${formData.message}`;
    
    window.open(`https://wa.me/919888202024?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      <PageHero
        label="GET IN TOUCH"
        title="Visit Gill Enterprises"
        subtitle="Visit our store in Dhariwal or reach out for inquiries about our products and courier services."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]}
        backgroundImage="/images/heroes/bg-contact.png"
        gradient="from-slate-900 via-gray-900 to-dark-bg"
      />

      <section className="section-padding bg-surface relative min-h-screen">
        <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid lg:grid-cols-12 gap-16"
          >
            {/* Left Column: Info Grid */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-text-primary mb-3">Get in Touch</h2>
                <p className="text-text-secondary leading-relaxed font-light">Whether you have a question about our products, need a courier quote, or just want to say hello, we are ready to answer all your questions.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactInfo.map((info, idx) => {
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white dark:bg-dark-card border border-border text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-text-primary text-lg mb-1 group-hover:text-primary transition-colors">{info.title}</h3>
                        {info.lines.map((line, i) => (
                          <p key={i} className="text-sm text-text-secondary">{line}</p>
                        ))}
                      </div>
                    </div>
                  );

                  const className = "bg-surface p-6 rounded-3xl border border-transparent hover:border-border hover:bg-white dark:hover:bg-dark-card group transition-all duration-300 block";

                  return (
                    <motion.div key={idx} variants={fadeInLeft}>
                      {info.href ? (
                        <a href={info.href} target={info.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className={className}>
                          {content}
                        </a>
                      ) : (
                        <div className={className}>{content}</div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Form & Map */}
            <motion.div variants={fadeInRight} className="lg:col-span-7 space-y-8">
              {/* Premium Form */}
              <div className="bg-white dark:bg-dark-card rounded-[40px] p-8 sm:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-border">
                <h3 className="text-2xl font-heading font-bold text-text-primary mb-8">Send a Message</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Full Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-surface border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm" placeholder="eg. Amritpal Singh" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-surface border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm" placeholder="eg. 9888202024" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Subject</label>
                    <select name="subject" value={formData.subject} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-surface border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm appearance-none cursor-pointer" required>
                      <option value="" disabled>Select an enquiry type</option>
                      <option value="Dairy Products Enquiry">Dairy Products Enquiry</option>
                      <option value="Dry Fruits & Gifting">Dry Fruits & Gifting</option>
                      <option value="Courier Services">Courier Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-5 py-4 rounded-2xl bg-surface border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm resize-none" placeholder="How can we help you today?" required></textarea>
                  </div>

                  <button type="submit" className="w-full py-5 rounded-2xl font-bold text-white bg-[#25D366] hover:bg-[#1DA851] transition-colors flex items-center justify-center gap-3 shadow-lg shadow-green-500/25">
                    <WhatsAppIcon className="w-5 h-5 text-white" /> Send via WhatsApp
                  </button>
                </form>
              </div>

              {/* Map */}
              <div className="bg-white dark:bg-dark-card rounded-[40px] shadow-sm border border-border h-80 overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.782806530635!2d75.31740537553331!3d31.953488874015632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391bed2bfc838f21%3A0xf2716b7538e41989!2sWonder%20Milk%20Dairy%20%26%20DHL%20%7C%20DTDC%20Courier%20Service!5e0!3m2!1sen!2sin!4v1714571695484!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '2rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gill Enterprises Location"
                  className="transition-all duration-700 hover:shadow-lg"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
