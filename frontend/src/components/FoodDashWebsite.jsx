// Main container component that combines all sections
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import FeaturedRestaurants from './FeaturedRestaurants';
import Categories from './Categories';
import Footer from './Footer';
import { useCart } from '../hooks/useCart';

const FoodDashWebsite = ({ user, onSignOut }) => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header 
        cartItems={cartItems} 
        user={user} 
        onSignOut={onSignOut} 
        clearCart={clearCart}
      />
      <HeroSection 
        onAddToCart={addToCart} 
        onRemoveFromCart={removeFromCart}
      />
      <HowItWorks />
      <Categories />
      <FeaturedRestaurants />
      <Footer />
    </div>
  );
};

export default FoodDashWebsite;