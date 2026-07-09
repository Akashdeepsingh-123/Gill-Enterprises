import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';
import { useInView } from '../../hooks';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'GT Road, near Bus Stand, opposite HDFC Bank, Dhariwal, Punjab 143519',
    href: undefined,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9888202024',
    href: 'tel:+919888202024',
  },
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: '+91 9888202024',
    href: 'https://wa.me/919888202024',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'gilldhlcourierservice@gmail.com',
    href: 'mailto:gilldhlcourierservice@gmail.com',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon - Sat: 8:00 AM - 9:00 PM',
    href: undefined,
  },
];

const subjectOptions = [
  'General Inquiry',
  'Product Inquiry',
  'Courier Booking',
  'Bulk Order',
  'Feedback',
  'Other',
];

const Contact: React.FC = () => {
  const { ref, isInView } = useInView();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary">
              Get In Touch
            </h2>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Map + Info */}
            <motion.div variants={fadeInLeft} className="space-y-6">
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                <iframe
                  src="https://maps.google.com/maps?q=31.9534889,75.3199803&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  title="Gill Enterprises Location"
                  className="w-full h-64 border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Info Cards */}
              <div className="space-y-3">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.label}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-border/50 hover:border-accent/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary font-medium uppercase tracking-wider">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-text-primary font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-text-primary font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div variants={fadeInRight}>
              <form onSubmit={handleSubmit} className="card-premium p-8 space-y-5">
                <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                  Send Us a Message
                </h3>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-text-primary placeholder:text-text-secondary/50"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-text-primary placeholder:text-text-secondary/50"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-text-primary placeholder:text-text-secondary/50"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-text-primary"
                  >
                    <option value="">Select a subject</option>
                    {subjectOptions.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-text-primary placeholder:text-text-secondary/50 resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold shadow-lg shadow-primary/25 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
