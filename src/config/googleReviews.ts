/**
 * Google Reviews Configuration
 * 
 * To connect your Google Business Profile:
 * 1. Get your Place ID from: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
 * 2. Get a Google Maps API Key from the Google Cloud Console with "Places API (New)" enabled.
 * 
 * If you leave these blank, the app will show the fallback state indicating reviews are temporarily unavailable.
 */

export const GOOGLE_REVIEWS_CONFIG = {
  // Your Google Business Profile Place ID
  PLACE_ID: import.meta.env.VITE_GOOGLE_PLACE_ID || '',
  
  // Your Google Maps API Key (restricted to your domain in Google Cloud Console)
  API_KEY: import.meta.env.VITE_GOOGLE_API_KEY || '',

  // Fallback direct link to your Google Business Profile reviews (for the fallback UI button)
  PROFILE_URL: 'https://share.google/82PArv0ziJmcoaPEl',
};
