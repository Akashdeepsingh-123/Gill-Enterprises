import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { fadeInUp, staggerContainer, scaleIn } from '../../utils/animations';
import { useInView } from '../../hooks';
import { fetchGoogleReviews, GooglePlaceDetails } from '../../services/googlePlaces';

const Reviews: React.FC = () => {
  const { ref, isInView } = useInView();
  const [data, setData] = useState<GooglePlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadReviews() {
      try {
        const placeData = await fetchGoogleReviews();
        setData(placeData);
      } catch (err) {
        console.error('Error fetching reviews:', err);
      } finally {
        setLoading(false);
      }
    }
    loadReviews();
  }, []);

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  return (
    <section id="reviews" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none" />

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
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold tracking-wider uppercase">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary">
              What Our Customers Say
            </h2>

            {/* Google Rating Badge */}
            {!loading && data && (
              <motion.div
                variants={scaleIn}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white shadow-lg border border-border"
              >
                <div className="flex items-center gap-1.5">
                  <Star className="w-6 h-6 text-yellow-400" fill="#FBBF24" />
                  <span className="text-2xl font-bold text-text-primary">{data.rating.toFixed(1)}</span>
                </div>
                <div className="w-px h-8 bg-border" />
                <span className="text-sm text-text-secondary font-medium">
                  Based on {data.userRatingCount} Google Reviews
                </span>
              </motion.div>
            )}
          </motion.div>

          {/* Swiper Carousel */}
          {!loading && data?.reviews && data.reviews.length > 0 && (
            <motion.div variants={fadeInUp}>
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="pb-14"
              >
                {data.reviews.map((review, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white rounded-2xl p-6 shadow-md border border-border h-full flex flex-col">
                      {/* Avatar + Name */}
                      <div className="flex items-center gap-3 mb-4">
                        <img 
                          src={review.authorAttribution.photoUri || 'https://via.placeholder.com/150'} 
                          alt={review.authorAttribution.displayName}
                          className="w-12 h-12 rounded-full object-cover flex-shrink-0 border border-border"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h4 className="font-semibold text-text-primary">{review.authorAttribution.displayName}</h4>
                          {/* Stars */}
                          <div className="flex items-center gap-0.5 mt-0.5 text-[#F59E0B]">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={i < review.rating ? 'fill-current' : 'text-gray-200'}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className="text-text-secondary leading-relaxed flex-1 text-sm italic">
                        {review.originalText?.text 
                          ? `"${review.originalText.text}"`
                          : "(Rating only, no text provided)"}
                      </p>

                      {/* Date */}
                      <p className="text-xs text-text-secondary/60 mt-4 pt-4 border-t border-border/50">
                        {formatDate(review.publishTime)}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          )}

          {!loading && (!data || !data.reviews || data.reviews.length === 0) && (
            <div className="text-center text-text-secondary py-12">
              Reviews are currently unavailable. Please check our Google Business Profile.
            </div>
          )}

          {loading && (
            <div className="flex justify-center space-x-4 animate-pulse py-12">
              <div className="w-12 h-12 bg-gray-200 rounded-full" />
              <div className="w-12 h-12 bg-gray-200 rounded-full" />
              <div className="w-12 h-12 bg-gray-200 rounded-full" />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
