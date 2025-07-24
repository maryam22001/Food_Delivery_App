// Hero banner section component
import React from 'react';
import { Clock, Star, Truck } from 'lucide-react';



/// Hero Section Component
const HeroSection = () => {
  return (
    <section className="bg-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Delicious food{' '}
              <span className="text-orange-500">delivered</span>{' '}
              to your door
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Order from your favorite restaurants and get fresh, hot meals delivered in minutes. Fast, reliable, and always delicious.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Order Now →
              </button>
              <button className="border border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                Browse Menu
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">30min</span>
                </div>
                <p className="text-sm text-gray-600">Average delivery</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">4.8</span>
                </div>
                <p className="text-sm text-gray-600">Customer rating</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Truck className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">500+</span>
                </div>
                <p className="text-sm text-gray-600">Restaurants</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Delicious Food" 
                className="w-full max-w-lg rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;