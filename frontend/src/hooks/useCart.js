// Custom hook for cart functionality
import { useState } from 'react';

export const useCart = () => {
  const [cartItems, setCartItems] = useState(1);
  
  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };
  
  const removeFromCart = () => {
    setCartItems(prev => Math.max(0, prev - 1));
  };
  
  return {
    cartItems,
    addToCart,
    removeFromCart
  };
};