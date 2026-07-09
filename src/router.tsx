import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DairyProductsPage from './pages/DairyProductsPage';
import DryFruitsPage from './pages/DryFruitsPage';
import CourierServicesPage from './pages/CourierServicesPage';
import TrackShipmentPage from './pages/TrackShipmentPage';
// import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'products/dairy', element: <DairyProductsPage /> },
      { path: 'products/dry-fruits', element: <DryFruitsPage /> },
      { path: 'courier-services', element: <CourierServicesPage /> },
      { path: 'track-shipment', element: <TrackShipmentPage /> },
      // { path: 'gallery', element: <GalleryPage /> },
      { path: 'reviews', element: <ReviewsPage /> },
      { path: 'faq', element: <FAQPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'privacy-policy', element: <PrivacyPolicyPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
