// Featured restaurants section component
import React from 'react';
import RestaurantCard from './cards/RestaurantCard';
import { featuredRestaurants } from  '../utils/constants';

const FeaturedRestaurants = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">Featured Restaurants</h2>
          <p className="text-xl text-gray-600">
            Handpicked restaurants with the best ratings and fastest delivery times
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;