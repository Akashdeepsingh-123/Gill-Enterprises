import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, ChevronDown, Check } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import ReviewsFallback from '../components/sections/ReviewsFallback';
import { fetchGoogleReviews, GooglePlaceDetails, GoogleReview } from '../services/googlePlaces';
import { GOOGLE_REVIEWS_CONFIG } from '../config/googleReviews';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useInView } from '../hooks';

type FilterType = 'all' | '5' | '4' | '3';
type SortType = 'newest' | 'oldest';

export default function ReviewsPage() {
  const { ref, isInView } = useInView();
  const [data, setData] = useState<GooglePlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [filter, setFilter] = useState<FilterType>('all');
  const [sort, setSort] = useState<SortType>('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  useEffect(() => {
    async function loadReviews() {
      try {
        const placeData = await fetchGoogleReviews();
        setData(placeData);
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    loadReviews();
  }, []);

  const filteredAndSortedReviews = useMemo(() => {
    if (!data?.reviews) return [];
    
    let result = [...data.reviews];

    // Apply Filters
    if (filter !== 'all') {
      const minStars = parseInt(filter, 10);
      result = result.filter((r) => r.rating === minStars);
    }

    // Apply Sorting
    result.sort((a, b) => {
      const dateA = new Date(a.publishTime).getTime();
      const dateB = new Date(b.publishTime).getTime();
      return sort === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [data, filter, sort]);

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  return (
    <>
      <PageHero
        label="REVIEWS"
        title="Trusted by Our Community."
        subtitle="Don't just take our word for it. Read what our community in Dhariwal has to say."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Reviews' }]}
        backgroundImage="/images/heroes/bg-reviews.jpg"
        gradient="from-slate-900 via-gray-900 to-dark-bg"
      />

      <section className="section-padding bg-surface min-h-[60vh]">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-16"
          >
            {/* Loading State */}
            {loading && (
              <div className="space-y-12 animate-pulse">
                <div className="max-w-3xl mx-auto h-40 bg-white/50 dark:bg-dark-card/50 rounded-[40px]" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="h-64 bg-white/50 dark:bg-dark-card/50 rounded-[32px]" />
                  ))}
                </div>
              </div>
            )}

            {/* Error State */}
            {!loading && error && <ReviewsFallback />}

            {/* Success State */}
            {!loading && !error && data && (
              <>
                {/* Google Rating Hero Block */}
                <motion.div variants={fadeInUp} className="flex justify-center">
                  <a
                    href={GOOGLE_REVIEWS_CONFIG.PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-dark-card p-8 md:p-12 rounded-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-border group hover:border-primary/50 transition-colors max-w-3xl w-full relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    
                    <div className="w-24 h-24 rounded-full bg-surface flex items-center justify-center flex-shrink-0 relative z-10 shadow-sm border border-border">
                      <img src="/google-logo.svg" alt="Google" className="w-10 h-10" />
                    </div>
                    
                    <div className="text-center md:text-left flex-grow relative z-10">
                      <div className="flex flex-col md:flex-row md:items-end gap-3 mb-2 justify-center md:justify-start">
                        <span className="text-5xl font-heading font-bold text-text-primary leading-none">
                          {data.rating.toFixed(1)}
                        </span>
                        <div className="flex text-[#F59E0B] pb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-6 h-6 ${
                                i < Math.round(data.rating) ? 'fill-current' : 'text-gray-200 dark:text-gray-700'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-text-secondary text-lg">
                        Based on <span className="font-bold text-text-primary">{data.userRatingCount}</span> Google Reviews
                      </p>
                    </div>
                    
                    <div className="hidden md:block w-px h-24 bg-border relative z-10" />
                    
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0 relative z-10">
                      <MapPin className="w-6 h-6" />
                    </div>
                  </a>
                </motion.div>

                {/* Filters & Sorting */}
                <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-text-secondary uppercase tracking-wider mr-2">Filter</span>
                    {(['all', '5', '4', '3'] as FilterType[]).map((f) => (
                      <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          filter === f 
                            ? 'bg-primary text-white shadow-md' 
                            : 'bg-white dark:bg-dark-card border border-border text-text-secondary hover:border-primary/50'
                        }`}
                      >
                        {f === 'all' ? 'All Reviews' : `${f} Stars`}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-text-secondary uppercase tracking-wider mr-2">Sort</span>
                    <div className="flex bg-white dark:bg-dark-card rounded-full border border-border p-1">
                      <button
                        onClick={() => setSort('newest')}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                          sort === 'newest' ? 'bg-surface text-text-primary shadow-sm' : 'text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        Newest
                      </button>
                      <button
                        onClick={() => setSort('oldest')}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                          sort === 'oldest' ? 'bg-surface text-text-primary shadow-sm' : 'text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        Oldest
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Reviews Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
                  <AnimatePresence mode="popLayout">
                    {!data.reviews || data.reviews.length === 0 ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="col-span-full py-12 text-center text-text-secondary"
                      >
                        You have {data.userRatingCount} ratings on Google, but no written reviews yet. Be the first to write a review!
                      </motion.div>
                    ) : filteredAndSortedReviews.length === 0 ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="col-span-full py-12 text-center text-text-secondary"
                      >
                        No reviews match your selected filter.
                      </motion.div>
                    ) : (
                      filteredAndSortedReviews.map((review) => (
                        <motion.div
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                          key={review.authorAttribution.uri}
                          className="bg-white dark:bg-dark-card rounded-[32px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-border transition-all duration-300 h-full flex flex-col group relative overflow-hidden"
                        >
                          {/* Verified Badge */}
                          <div className="absolute top-6 right-6 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-green-100 dark:border-green-800/30">
                            <Check className="w-3 h-3" /> Google
                          </div>

                          <div className="flex items-center gap-4 mb-6">
                            <img 
                              src={review.authorAttribution.photoUri || 'https://via.placeholder.com/150'} 
                              alt={review.authorAttribution.displayName}
                              className="w-12 h-12 rounded-full object-cover border border-border"
                              referrerPolicy="no-referrer"
                            />
                            <div>
                              <h4 className="font-heading font-bold text-text-primary text-sm group-hover:text-primary transition-colors">
                                {review.authorAttribution.displayName}
                              </h4>
                              <span className="text-xs text-text-secondary">
                                {formatDate(review.publishTime)}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1 mb-6 text-[#F59E0B]">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating ? 'fill-current' : 'text-gray-200 dark:text-gray-700'
                                }`}
                              />
                            ))}
                          </div>
                          
                          <div className="flex-grow">
                            <p className="text-text-primary text-base leading-relaxed font-light mb-8 italic">
                              {review.originalText?.text 
                                ? `"${review.originalText.text}"`
                                : <span className="text-text-secondary">(Rating only, no text provided)</span>
                              }
                            </p>
                          </div>

                          <div className="pt-6 border-t border-border mt-auto">
                            <a
                              href={review.authorAttribution.uri}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-bold text-primary hover:text-primary-dark transition-colors flex items-center gap-1"
                            >
                              Read on Google
                            </a>
                          </div>
                        </motion.div>
                      ))
                    )}
                  </AnimatePresence>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
