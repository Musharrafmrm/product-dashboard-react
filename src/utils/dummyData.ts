
import { Product } from '@/types/Product';

const sampleProducts = [
  {
    name: 'iPhone 15 Pro',
    description: 'Latest iPhone with A17 Pro chip, titanium design, and advanced camera system',
    price: 999.99,
    category: 'Electronics',
    stock: 25,
    imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
    inStock: true,
  },
  {
    name: 'MacBook Air M2',
    description: 'Lightweight laptop with M2 chip, 13.6-inch display, and all-day battery life',
    price: 1199.99,
    category: 'Electronics',
    stock: 15,
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    inStock: true,
  },
  {
    name: 'Nike Air Max 270',
    description: 'Comfortable running shoes with Max Air cushioning and breathable mesh upper',
    price: 149.99,
    category: 'Sports',
    stock: 50,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    inStock: true,
  },
  {
    name: 'Levi\'s 501 Original Jeans',
    description: 'Classic straight-leg jeans made from premium denim with authentic styling',
    price: 89.99,
    category: 'Clothing',
    stock: 0,
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    inStock: false,
  },
  {
    name: 'The Great Gatsby',
    description: 'Classic American novel by F. Scott Fitzgerald, first published in 1925',
    price: 12.99,
    category: 'Books',
    stock: 100,
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
    inStock: true,
  },
  {
    name: 'Coffee Table',
    description: 'Modern wooden coffee table perfect for living room, made from sustainable oak',
    price: 299.99,
    category: 'Home & Garden',
    stock: 8,
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
    inStock: true,
  },
  {
    name: 'LEGO Creator Set',
    description: 'Building blocks set with 500+ pieces for creative construction and hours of fun',
    price: 79.99,
    category: 'Toys',
    stock: 30,
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    inStock: true,
  },
  {
    name: 'Skincare Routine Kit',
    description: 'Complete skincare set including cleanser, toner, serum, and moisturizer',
    price: 129.99,
    category: 'Beauty',
    stock: 0,
    imageUrl: 'https://images.unsplash.com/photo-1556228578-dd7e24b2a564?w=400',
    inStock: false,
  },
];

export const generateDummyProducts = (): Product[] => {
  return sampleProducts.map((product, index) => ({
    ...product,
    id: `product-${Date.now()}-${index}`,
    createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
  }));
};
