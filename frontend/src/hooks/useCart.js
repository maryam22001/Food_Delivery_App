import React, { useState } from 'react';
import { Search, MapPin, ShoppingCart, User, Clock, Star, Truck, Phone, Mail, Heart } from 'lucide-react';

// Custom hook for cart functionality
const USE_CART = () => {
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