export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'dairy' | 'dryfruits' | 'courier';
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'dairy' | 'dryfruits' | 'courier' | 'store';
  span?: 'tall' | 'wide' | 'normal';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: string[];
  image: string;
  color: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface CourierFormData {
  name: string;
  phone: string;
  destination: string;
  weight: string;
  parcelType: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
