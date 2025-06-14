
import { useState, useEffect, useCallback } from 'react';
import { Product, ProductFormData } from '@/types/Product';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { generateDummyProducts } from '@/utils/dummyData';

export const useProducts = () => {
  const [products, setProducts] = useLocalStorage<Product[]>('products', []);
  const [loading, setLoading] = useState(true);

  // Initialize with dummy data if no products exist
  useEffect(() => {
    const initializeProducts = async () => {
      if (products.length === 0) {
        const dummyProducts = generateDummyProducts();
        setProducts(dummyProducts);
      }
      setLoading(false);
    };

    // Simulate loading delay for better UX
    const timer = setTimeout(initializeProducts, 500);
    return () => clearTimeout(timer);
  }, [products.length, setProducts]);

  const addProduct = useCallback((productData: ProductFormData) => {
    const newProduct: Product = {
      ...productData,
      id: `product-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    setProducts(prev => [newProduct, ...prev]);
  }, [setProducts]);

  const updateProduct = useCallback((id: string, productData: ProductFormData) => {
    setProducts(prev => 
      prev.map(product =>
        product.id === id
          ? {
              ...product,
              ...productData,
              updatedAt: new Date().toISOString(),
            }
          : product
      )
    );
  }, [setProducts]);

  const deleteProduct = useCallback((id: string) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  }, [setProducts]);

  const bulkDeleteProducts = useCallback((ids: string[]) => {
    setProducts(prev => prev.filter(product => !ids.includes(product.id)));
  }, [setProducts]);

  const getProductById = useCallback((id: string) => {
    return products.find(product => product.id === id);
  }, [products]);

  return {
    products,
    loading,
    addProduct,
    updateProduct,
    deleteProduct,
    bulkDeleteProducts,
    getProductById,
  };
};
