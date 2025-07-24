// Featured restaurants section component
import React from 'react';
import RestaurantCard from './cards/RestaurantCard';
import { featuredRestaurants } from  '../utils/constants';


// Featured Restaurants Component
const FeaturedRestaurants = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Restaurants</h2>
          <p className="text-lg text-gray-600">
            Handpicked restaurants with the best ratings and fastest delivery times
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                {restaurant.discount && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold z-10">
                    {restaurant.discount}
                  </div>
                )}
                {restaurant.isNew && (
                  <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold z-10">
                    New!
                  </div>
                )}
                {restaurant.featured && (
                  <div className="absolute bottom-3 left-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    Featured
                  </div>
                )}
                <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-gray-50 z-10">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
                
                <div className="h-40 bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
                  <div className="text-6xl opacity-40">
                    {restaurant.emoji}
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{restaurant.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{restaurant.cuisine}</p>
                
                <div className="flex items-center justify-between mb-3 text-sm">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-bold">{restaurant.rating}</span>
                    <span className="text-gray-500 ml-1">({restaurant.reviews})</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-semibold ${restaurant.deliveryFee === 'Free delivery' ? 'text-green-600' : 'text-gray-800'}`}>
                    {restaurant.deliveryFee}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturedRestaurants;