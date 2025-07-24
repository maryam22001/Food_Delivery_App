// Custom hook for cart functionality
import { useState, useEffect } from 'react';

export const useCart = () => {
  // Initialize cart from localStorage or default to 0
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? parseInt(savedCart, 10) : 0;
  });
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', cartItems.toString());
  }, [cartItems]);
  
  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };
  
  const removeFromCart = () => {
    setCartItems(prev => Math.max(0, prev - 1));
  };
  
  const clearCart = () => {
    setCartItems(0);
  };
  
  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart
  };
};