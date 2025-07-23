// Main container component that combines all sections
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import FeaturedRestaurants from './FeaturedRestaurants';
import Categories from './Categories';
import Footer from './Footer';
import { useCart } from '../hooks/useCart';

const FoodDashWebsite = () => {
  const { cartItems, addToCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItems={cartItems} />
      <HeroSection onAddToCart={addToCart} />
      <HowItWorks />
      <FeaturedRestaurants />
      <Categories />
      <Footer />
    </div>
  );
};

export default FoodDashWebsite;