
import { useState, useMemo, useCallback } from 'react';
import { Product, ProductFilters } from '@/types/Product';

export const useProductFilters = (products: Product[], searchTerm: string) => {
  const [filters, setFilters] = useState<ProductFilters>({
    category: 'all',
    stockStatus: 'all',
    priceRange: {
      min: 0,
      max: 10000,
    },
  });

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Search filter
      const matchesSearch = searchTerm === '' || 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      // Category filter
      const matchesCategory = filters.category === 'all' || 
        product.category === filters.category;

      // Stock status filter
      const matchesStockStatus = filters.stockStatus === 'all' ||
        (filters.stockStatus === 'inStock' && product.inStock) ||
        (filters.stockStatus === 'outOfStock' && !product.inStock);

      // Price range filter
      const matchesPriceRange = product.price >= filters.priceRange.min &&
        product.price <= filters.priceRange.max;

      return matchesSearch && matchesCategory && matchesStockStatus && matchesPriceRange;
    });
  }, [products, searchTerm, filters]);

  const updateFilters = useCallback((newFilters: Partial<ProductFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({
      category: 'all',
      stockStatus: 'all',
      priceRange: {
        min: 0,
        max: 10000,
      },
    });
  }, []);

  return {
    filteredProducts,
    filters,
    updateFilters,
    clearFilters,
  };
};
