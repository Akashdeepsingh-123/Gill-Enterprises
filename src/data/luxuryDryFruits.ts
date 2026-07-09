export interface LuxuryProduct {
  id: string;
  name: string;
  description: string;
  category: 'dry-fruits' | 'healthy-mix' | 'natural-foods' | 'spices' | 'wellness';
  image: string;
  badge?: string;
}

export const luxuryProducts: LuxuryProduct[] = [
  // Premium Dry Fruits
  { id: 'df-1', name: 'Almonds (Badam)', description: 'Premium large-size crunchy almonds sourced from the best orchards.', category: 'dry-fruits', image: '/products/almonds-luxury.jpg', badge: 'Best Seller' },
  { id: 'df-2', name: 'Almond Kernels (Badam Giri)', description: 'Perfectly shelled premium almond kernels, rich in natural oils.', category: 'dry-fruits', image: '/products/almond-kernels-luxury.jpg' },
  { id: 'df-3', name: 'Cashew Nuts (Kaju)', description: 'Creamy, large whole cashews perfect for snacking and gifting.', category: 'dry-fruits', image: '/products/cashews-luxury.jpg', badge: 'Premium' },
  { id: 'df-4', name: 'Walnuts', description: 'Whole walnuts in shell, naturally rich in Omega-3.', category: 'dry-fruits', image: '/products/walnuts-luxury.jpg' },
  { id: 'df-5', name: 'Walnut Kernels (Walnut Giri)', description: 'Hand-cracked premium walnut halves, fresh and crisp.', category: 'dry-fruits', image: '/products/walnut-kernels-luxury.jpg', badge: 'Fresh' },
  { id: 'df-6', name: 'Pistachios', description: 'Lightly roasted and salted Iranian pistachios.', category: 'dry-fruits', image: '/products/pistachios-luxury.jpg', badge: 'Imported' },
  { id: 'df-7', name: 'Raisins (Kishmish)', description: 'Naturally sun-dried premium sweet raisins.', category: 'dry-fruits', image: '/products/raisins-luxury.jpg' },
  { id: 'df-8', name: 'Figs (Anjir)', description: 'Soft, sweet, and chewy premium dried figs.', category: 'dry-fruits', image: '/products/figs-luxury.jpg' },
  { id: 'df-9', name: 'Dried Plum', description: 'Tangy and sweet premium dried plums.', category: 'dry-fruits', image: '/products/dried-plum-luxury.jpg' },
  { id: 'df-10', name: 'Fox Nuts (Phool Makhana)', description: 'Light, crunchy, and highly nutritious roasted fox nuts.', category: 'dry-fruits', image: '/products/fox-nuts-luxury.jpg' },

  // Healthy Mix Collection
  { id: 'hm-1', name: 'Walnut Mix Powder', description: 'A finely ground blend of walnuts and premium nuts for daily vitality.', category: 'healthy-mix', image: '/products/walnut-mix-powder.jpg' },
  { id: 'hm-2', name: 'Walnut Muesli', description: 'Crunchy muesli packed with premium walnuts, oats, and dried fruits.', category: 'healthy-mix', image: '/products/walnut-muesli-product.jpg', badge: 'Healthy Start' },
  { id: 'hm-3', name: 'Walnut Corn Mix', description: 'A savory and crunchy mix of roasted corn and premium walnuts.', category: 'healthy-mix', image: '/products/walnut-corn-mix.jpg' },
  { id: 'hm-4', name: 'Walnut Mix DF', description: 'Our signature dry fruit mix featuring premium walnuts and select berries.', category: 'healthy-mix', image: '/products/walnut-mix-df.jpg' },
  { id: 'hm-5', name: 'Walnut Mix SF', description: 'A specialized super-food mix with walnuts and exotic seeds.', category: 'healthy-mix', image: '/products/walnut-mix-sf.jpg', badge: 'Superfood' },
  { id: 'hm-6', name: 'Walnut Mix EX', description: 'The executive mix: ultimate luxury blend of our finest nuts.', category: 'healthy-mix', image: '/products/walnut-mix-ex.jpg', badge: 'Executive' },
  { id: 'hm-7', name: 'Walnut Cherry Mix', description: 'Sweet tart cherries perfectly balanced with earthy walnuts.', category: 'healthy-mix', image: '/products/walnut-cherry-mix.jpg' },
  { id: 'hm-8', name: 'Walnut Strawberry Mix', description: 'Premium dried strawberries mixed with fresh walnuts.', category: 'healthy-mix', image: '/products/walnut-strawberry-mix.jpg' },
  { id: 'hm-9', name: 'Walnut Kiwi Mix', description: 'Exotic dried kiwi slices paired with premium walnuts.', category: 'healthy-mix', image: '/products/walnut-kiwi-mix.jpg' },
  { id: 'hm-10', name: 'Walnut Mango Mix', description: 'Tropical dried mango pieces mixed with crunchy walnuts.', category: 'healthy-mix', image: '/products/walnut-mango-mix.jpg' },
  { id: 'hm-11', name: 'Mixed Seeds', description: 'A nutritious blend of pumpkin, sunflower, flax, and chia seeds.', category: 'healthy-mix', image: '/products/mixed-seeds.jpg', badge: 'Daily Wellness' },

  // Premium Natural Foods
  { id: 'nf-1', name: 'Pure Natural Honey', description: 'Raw, unprocessed mountain honey gathered from wild flowers.', category: 'natural-foods', image: '/products/pure-honey-luxury.jpg', badge: '100% Pure' },
  { id: 'nf-2', name: 'Mishri', description: 'Crystal clear rock sugar, perfect for natural sweetening.', category: 'natural-foods', image: '/products/mishri-luxury.jpg' },
  { id: 'nf-3', name: 'Gulkand', description: 'Premium rose petal preserve made with natural rock sugar.', category: 'natural-foods', image: '/products/gulkand-luxury.jpg' },

  // Premium Spices
  { id: 'sp-1', name: 'Saffron (Kesar)', description: 'Premium grade A saffron threads for exquisite aroma and color.', category: 'spices', image: '/products/saffron-luxury.jpg', badge: 'Premium Grade' },
  { id: 'sp-2', name: 'Green Cardamom (Elaichi)', description: 'Large, bold green cardamom pods rich in essential oils.', category: 'spices', image: '/products/cardamom-luxury.jpg' },
  { id: 'sp-3', name: 'Cloves (Laung)', description: 'Hand-picked premium cloves with intense flavor and aroma.', category: 'spices', image: '/products/cloves-luxury.jpg' },

  // Wellness Collection
  { id: 'wl-1', name: 'Shilajit 10gm', description: 'Pure Himalayan Shilajit resin for stamina and vitality.', category: 'wellness', image: '/products/shilajit-resin-product.jpg', badge: 'Authentic' },
  { id: 'wl-2', name: 'Branded Shilajit', description: 'Premium certified Shilajit in luxury presentation packaging.', category: 'wellness', image: '/products/shilajit-resin-product.jpg' },
  { id: 'wl-3', name: 'Amla Candy', description: 'Sweet and tangy Indian gooseberry candy rich in Vitamin C.', category: 'wellness', image: '/products/amla-candy-luxury.jpg' },
  { id: 'wl-4', name: 'Shahi Qawah', description: 'Traditional Kashmiri green tea blended with saffron and spices.', category: 'wellness', image: '/products/shahi-qawah.jpg' },
  { id: 'wl-5', name: 'Instant Shahi Qawah', description: 'Premium instant Qawah mix for quick, luxurious refreshment.', category: 'wellness', image: '/products/instant-qawah.jpg', badge: 'New' },
];
