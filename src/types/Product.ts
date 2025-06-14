
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl?: string;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
}

export type ProductFormData = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;

export interface ProductFilters {
  category: string;
  stockStatus: 'all' | 'inStock' | 'outOfStock';
  priceRange: {
    min: number;
    max: number;
  };
}
