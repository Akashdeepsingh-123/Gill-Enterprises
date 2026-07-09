import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, AlertCircle } from 'lucide-react';
import { fadeInUp } from '../../utils/animations';
import { GOOGLE_REVIEWS_CONFIG } from '../../config/googleReviews';

export default function ReviewsFallback() {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-col items-center justify-center py-20 text-center"
    >
      <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center mb-6">
        <AlertCircle className="w-8 h-8 text-text-secondary" />
      </div>
      <h3 className="font-heading font-bold text-2xl text-text-primary mb-3">
        Live Google reviews are temporarily unavailable.
      </h3>
      <p className="text-text-secondary text-lg max-w-lg mx-auto mb-8">
        We are unable to fetch the latest reviews directly on the website at this moment. You can still read all our real customer reviews directly on our Google Business Profile.
      </p>
      <a
        href={GOOGLE_REVIEWS_CONFIG.PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary inline-flex items-center gap-2"
      >
        View Reviews on Google <ExternalLink className="w-4 h-4" />
      </a>
    </motion.div>
  );
}
