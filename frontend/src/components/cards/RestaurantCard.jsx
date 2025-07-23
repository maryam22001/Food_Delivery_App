// Individual restaurant card component
import React from 'react';
import { Star, Clock, Heart } from 'lucide-react';

const RestaurantCard = ({ restaurant }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
    <div className="relative">
      {restaurant.discount && (
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10 shadow-lg">
          {restaurant.discount}
        </div>
      )}
      {restaurant.isNew && (
        <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10 shadow-lg">
          New!
        </div>
      )}
      {restaurant.featured && (
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
          Featured
        </div>
      )}
      <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-all duration-200 z-10 group-hover:scale-110">
        <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
      </button>
      
      <div className="h-52 bg-gradient-to-br from-orange-100 via-orange-50 to-yellow-100 flex items-center justify-center relative overflow-hidden">
        <div className="text-8xl opacity-30 group-hover:scale-110 transition-transform duration-300">
          {restaurant.emoji}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="font-bold text-xl mb-2 text-gray-800">{restaurant.name}</h3>
      <p className="text-gray-600 mb-4 font-medium">{restaurant.cuisine}</p>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
            <span className="font-bold text-gray-800">{restaurant.rating}</span>
            <span className="text-gray-500 ml-1">({restaurant.reviews})</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            <span>{restaurant.deliveryTime}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <span className={`text-sm font-bold ${restaurant.deliveryFee === 'Free delivery' ? 'text-green-600' : 'text-gray-800'}`}>
          {restaurant.deliveryFee}
        </span>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md">
          Order Now
        </button>
      </div>
    </div>
  </div>
);

export default RestaurantCard;