
import { ProductFormData } from '@/types/Product';

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ProductFormData, string>>;
}

export const validateProduct = (product: ProductFormData): ValidationResult => {
  const errors: Partial<Record<keyof ProductFormData, string>> = {};

  // Name validation
  if (!product.name || product.name.trim().length === 0) {
    errors.name = 'Product name is required';
  } else if (product.name.trim().length < 2) {
    errors.name = 'Product name must be at least 2 characters long';
  } else if (product.name.length > 100) {
    errors.name = 'Product name must be less than 100 characters';
  }

  // Description validation
  if (!product.description || product.description.trim().length === 0) {
    errors.description = 'Product description is required';
  } else if (product.description.trim().length < 10) {
    errors.description = 'Description must be at least 10 characters long';
  } else if (product.description.length > 500) {
    errors.description = 'Description must be less than 500 characters';
  }

  // Price validation
  if (product.price === undefined || product.price === null) {
    errors.price = 'Price is required';
  } else if (product.price < 0) {
    errors.price = 'Price must be a positive number';
  } else if (product.price > 999999) {
    errors.price = 'Price must be less than $999,999';
  }

  // Category validation
  if (!product.category || product.category.trim().length === 0) {
    errors.category = 'Category is required';
  }

  // Stock validation
  if (product.stock === undefined || product.stock === null) {
    errors.stock = 'Stock quantity is required';
  } else if (product.stock < 0) {
    errors.stock = 'Stock quantity must be a positive number';
  } else if (product.stock > 999999) {
    errors.stock = 'Stock quantity must be less than 999,999';
  }

  // Image URL validation (optional field)
  if (product.imageUrl && product.imageUrl.trim().length > 0) {
    try {
      new URL(product.imageUrl);
    } catch {
      errors.imageUrl = 'Please enter a valid URL';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};
