import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'milk',
    name: 'Fresh Milk',
    description: 'Farm-fresh, pure and pasteurized milk delivered daily from our dairy farms.',
    image: '/fresh-milk.jpg',
    category: 'dairy',
  },
  {
    id: 'paneer',
    name: 'Fresh Paneer',
    description: 'Soft, creamy paneer made from pure milk. Perfect for curries, tikkas and snacks.',
    image: '/paneer.jpg',
    category: 'dairy',
  },
  {
    id: 'ghee',
    name: 'Pure Desi Ghee',
    description: 'Traditional desi ghee with rich aroma and taste. Made from pure cow milk butter.',
    image: '/ghee.jpg',
    category: 'dairy',
  },
  {
    id: 'curd',
    name: 'Fresh Curd',
    description: 'Thick, creamy curd set naturally. A healthy addition to every meal.',
    image: '/curd.jpg',
    category: 'dairy',
  },
  {
    id: 'butter',
    name: 'Farm Butter',
    description: 'Rich, yellow home-made style butter churned from fresh cream. Straight from our farms.',
    image: '/dairy-products.jpg',
    category: 'dairy',
  },
  {
    id: 'lassi',
    name: 'Fresh Lassi',
    description: 'Refreshing and authentic home-made style sweet lassi. The perfect traditional cooler.',
    image: '/fresh-milk.jpg',
    category: 'dairy',
  },
  {
    id: 'almonds',
    name: 'Premium Almonds',
    description: 'Handpicked California almonds. Crunchy, nutritious and perfect for daily snacking.',
    image: '/almonds.jpg',
    category: 'dryfruits',
  },
  {
    id: 'cashews',
    name: 'Golden Cashews',
    description: 'Whole premium cashews sourced from the finest farms. Buttery and delicious.',
    image: '/cashews.jpg',
    category: 'dryfruits',
  },
  {
    id: 'walnuts',
    name: 'Premium Walnuts',
    description: 'Brain-shaped brain food. Rich in omega-3 and essential nutrients.',
    image: '/dry-fruits.jpg',
    category: 'dryfruits',
  },
  {
    id: 'dates',
    name: 'Medjool Dates',
    description: 'Soft, sweet and naturally flavored premium dates. Nature\'s candy.',
    image: '/dry-fruits.jpg',
    category: 'dryfruits',
  },
  {
    id: 'pistachios',
    name: 'Roasted Pistachios',
    description: 'Lightly salted, perfectly roasted pistachios. A premium snacking experience.',
    image: '/dry-fruits.jpg',
    category: 'dryfruits',
  },
];

export const services: {
  id: string;
  title: string;
  description: string;
  items: string[];
  image: string;
  gradient: string;
  icon: string;
}[] = [
  {
    id: 'dairy',
    title: 'Fresh Dairy',
    description: 'Farm-fresh dairy products sourced daily from our farms. Pure quality you can taste.',
    items: ['Fresh Milk', 'Paneer', 'Curd', 'Butter', 'Ghee', 'Lassi'],
    image: '/dairy-products.jpg',
    gradient: 'from-blue-600 to-cyan-500',
    icon: 'milk',
  },
  {
    id: 'dryfruits',
    title: 'Premium Dry Fruits',
    description: 'Handpicked premium dry fruits and nuts. Quality tested and perfectly packed for freshness.',
    items: ['Almonds', 'Cashews', 'Walnuts', 'Pistachios', 'Dates', 'Raisins', 'Gift Packs'],
    image: '/dry-fruits.jpg',
    gradient: 'from-amber-500 to-orange-500',
    icon: 'nut',
  },
  {
    id: 'courier',
    title: 'Courier Services',
    description: 'Reliable domestic and international courier services through DHL, DTDC and Blue Dart.',
    items: ['DHL Express', 'DTDC', 'Blue Dart', 'Domestic Courier', 'International Courier', 'Document Delivery', 'Parcel Packing', 'Tracking Assistance'],
    image: '/courier-service.jpg',
    gradient: 'from-emerald-500 to-green-600',
    icon: 'package',
  },
];

export const stats = [
  { id: '1', value: 1500, suffix: '+', label: 'Happy Customers', icon: 'users' },
  { id: '2', value: 500, suffix: '+', label: 'Parcels Delivered', icon: 'package' },
  { id: '3', value: 3, suffix: '+', label: 'Years Experience', icon: 'award' },
  { id: '4', value: 100, suffix: '%', label: 'Customer Satisfaction', icon: 'heart' },
];

export const whyChooseUs = [
  { icon: 'leaf', title: 'Fresh Products', description: 'Daily sourced from our farms' },
  { icon: 'shield-check', title: 'Best Quality', description: 'Premium quality guaranteed' },
  { icon: 'truck', title: 'Trusted Courier Partners', description: 'DHL, DTDC, Blue Dart' },
  { icon: 'indian-rupee', title: 'Affordable Prices', description: 'Best value for your money' },
  { icon: 'zap', title: 'Fast Service', description: 'Quick turnaround times' },
  { icon: 'lock', title: 'Secure Parcel Handling', description: 'Safe and insured delivery' },
  { icon: 'smile', title: 'Customer Satisfaction', description: '99% happy customers' },
  { icon: 'briefcase', title: 'Professional Staff', description: 'Trained and courteous team' },
];

export const courierTimeline = [
  { step: 1, title: 'Book Courier', description: 'Visit store or enquire via WhatsApp', icon: 'clipboard' },
  { step: 2, title: 'Parcel Packed', description: 'Secure professional packaging', icon: 'package' },
  { step: 3, title: 'Dispatched', description: 'Handed to courier partner', icon: 'send' },
  { step: 4, title: 'In Transit', description: 'Live tracking available', icon: 'truck' },
  { step: 5, title: 'Delivered', description: 'Safe delivery confirmed', icon: 'check-circle' },
];
