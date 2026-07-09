import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Package, Truck, Clock, Shield, ChevronDown } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';
import { useInView } from '../../hooks';

interface CourierFormData {
  name: string;
  phone: string;
  destination: string;
  weight: string;
  type: string;
  message: string;
}

const CourierBooking: React.FC = () => {
  const { ref, isInView } = useInView();

  const [formData, setFormData] = useState<CourierFormData>({
    name: '',
    phone: '',
    destination: '',
    weight: '',
    type: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CourierFormData, string>>>({});

  const partnerLogos = [
    { src: '/official-dhl-logo.svg', alt: 'DHL' },
    { src: '/official-dtdc-logo.png', alt: 'DTDC' },
    { src: '/official-bluedart-logo.svg', alt: 'BlueDart' },
  ];

  const benefits = [
    { icon: Truck, text: 'Nationwide & International Delivery' },
    { icon: Clock, text: 'Express & Same-Day Options' },
    { icon: Shield, text: 'Insured & Secure Shipping' },
    { icon: Package, text: 'All Package Types Accepted' },
  ];

  const weightOptions = ['0-500g', '500g-1kg', '1-5kg', '5-10kg', '10kg+'];
  const typeOptions = ['Document', 'Parcel', 'Fragile', 'Electronics', 'Other'];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof CourierFormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof CourierFormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.destination.trim()) newErrors.destination = 'Destination is required';
    if (!formData.weight) newErrors.weight = 'Please select weight';
    if (!formData.type) newErrors.type = 'Please select type';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsApp = () => {
    if (!validate()) return;
    const message = `*Courier Booking*%0AName: ${formData.name}%0APhone: ${formData.phone}%0ADestination: ${formData.destination}%0AWeight: ${formData.weight}%0AType: ${formData.type}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919888202024?text=${message}`, '_blank');
  };

  const handleGetQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Quote logic here
    alert('Quote request submitted! We will contact you shortly.');
  };

  return (
    <section
      id="courier-booking"
      className="section-padding relative overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Left: Info */}
          <motion.div variants={fadeInLeft} className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                Courier Service
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
                Book a Courier
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Send your parcels and documents safely with our trusted courier partners.
                We offer competitive rates and real-time tracking for domestic and international shipments.
              </p>
            </div>

            {/* Partner Logos */}
            <div>
              <p className="text-sm text-text-secondary font-medium mb-3 uppercase tracking-wider">
                Our Trusted Partners
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                {partnerLogos.map((logo) => (
                  <motion.img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10 object-contain transition-transform duration-300 hover:scale-105 hover:shadow-sm hover:-translate-y-1"
                  />
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.text}
                  className="flex items-center gap-3"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-text-primary font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div variants={fadeInRight}>
            <form
              onSubmit={handleGetQuote}
              className="card-premium p-8 space-y-5"
            >
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                Shipment Details
              </h3>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.name ? 'border-red-400' : 'border-border'
                  } bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-text-primary placeholder:text-text-secondary/50`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.phone ? 'border-red-400' : 'border-border'
                  } bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-text-primary placeholder:text-text-secondary/50`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>



              {/* Destination */}
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1.5">
                  Destination <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Enter destination address"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.destination ? 'border-red-400' : 'border-border'
                  } bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-text-primary placeholder:text-text-secondary/50`}
                />
                {errors.destination && (
                  <p className="text-red-500 text-xs mt-1">{errors.destination}</p>
                )}
              </div>

              {/* Weight + Type row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">
                    Weight <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 pr-10 rounded-xl border ${
                        errors.weight ? 'border-red-400' : 'border-border'
                      } bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-text-primary appearance-none`}
                    >
                      <option value="">Select Weight</option>
                      {weightOptions.map((w) => (
                        <option key={w} value={w}>
                          {w}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary pointer-events-none" />
                  </div>
                  {errors.weight && (
                    <p className="text-red-500 text-xs mt-1">{errors.weight}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">
                    Type <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 pr-10 rounded-xl border ${
                        errors.type ? 'border-red-400' : 'border-border'
                      } bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-text-primary appearance-none`}
                    >
                      <option value="">Select Type</option>
                      {typeOptions.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary pointer-events-none" />
                  </div>
                  {errors.type && (
                    <p className="text-red-500 text-xs mt-1">{errors.type}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1.5">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any special instructions..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-text-primary placeholder:text-text-secondary/50 resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <motion.button
                  type="button"
                  onClick={handleWhatsApp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg shadow-green-500/25 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Send via WhatsApp
                </motion.button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold shadow-lg shadow-primary/25 transition-colors"
                >
                  <Package className="w-5 h-5" />
                  Get Quote
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourierBooking;
