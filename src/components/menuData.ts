import { MenuItem } from './CartContext';

// Mock menu data - in a real app, this could come from an API
export const menuItems: MenuItem[] = [
  // Coffee
  {
    id: '1',
    name: 'Espresso',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300&h=200&fit=crop',
    price: 3.50,
    description: 'Rich and bold single shot of premium espresso'
  },
  {
    id: '2',
    name: 'Cappuccino',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop',
    price: 4.25,
    description: 'Perfect balance of espresso, steamed milk, and foam'
  },
  {
    id: '3',
    name: 'Latte',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=300&h=200&fit=crop',
    price: 4.75,
    description: 'Smooth espresso with steamed milk and light foam'
  },
  {
    id: '4',
    name: 'Americano',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=200&fit=crop',
    price: 3.75,
    description: 'Espresso with hot water for a clean, crisp taste'
  },
  {
    id: '5',
    name: 'Mocha',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
    price: 5.25,
    description: 'Espresso with chocolate syrup and steamed milk'
  },

  // Snacks
  {
    id: '6',
    name: 'Croissant',
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1555507036-ab794f575c5f?w=300&h=200&fit=crop',
    price: 3.00,
    description: 'Buttery, flaky French pastry baked fresh daily'
  },
  {
    id: '7',
    name: 'Avocado Toast',
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=300&h=200&fit=crop',
    price: 7.50,
    description: 'Fresh avocado on artisan sourdough with lime and sea salt'
  },
  {
    id: '8',
    name: 'Bagel with Cream Cheese',
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    price: 4.25,
    description: 'Everything bagel toasted with herb cream cheese'
  },
  {
    id: '9',
    name: 'Granola Bowl',
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=300&h=200&fit=crop',
    price: 6.50,
    description: 'House-made granola with Greek yogurt and fresh berries'
  },

  // Desserts
  {
    id: '10',
    name: 'Chocolate Chip Cookie',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=300&h=200&fit=crop',
    price: 2.75,
    description: 'Warm, gooey cookie with premium chocolate chips'
  },
  {
    id: '11',
    name: 'Cheesecake Slice',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300&h=200&fit=crop',
    price: 5.50,
    description: 'New York style cheesecake with berry compote'
  },
  {
    id: '12',
    name: 'Tiramisu',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop',
    price: 6.25,
    description: 'Classic Italian dessert with coffee-soaked ladyfingers'
  },
  {
    id: '13',
    name: 'Macarons',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=300&h=200&fit=crop',
    price: 8.00,
    description: 'Assorted French macarons (box of 6)'
  },

  // Cold Drinks
  {
    id: '14',
    name: 'Iced Coffee',
    category: 'Cold Drinks',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop',
    price: 3.25,
    description: 'Cold brew coffee served over ice'
  },
  {
    id: '15',
    name: 'Frappuccino',
    category: 'Cold Drinks',
    image: 'https://images.unsplash.com/photo-1546173159-315191b6270b?w=300&h=200&fit=crop',
    price: 5.75,
    description: 'Blended ice coffee drink with whipped cream'
  },
  {
    id: '16',
    name: 'Fresh Orange Juice',
    category: 'Cold Drinks',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300&h=200&fit=crop',
    price: 4.50,
    description: 'Freshly squeezed orange juice'
  }
];