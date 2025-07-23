// Hero banner section component
import React from 'react';
import { Clock, Star, Truck } from 'lucide-react';

const HeroSection = ({ onAddToCart }) => {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-orange-100 to-yellow-50 py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
              Delicious food{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">delivered</span>{' '}
              to your door
            </h1>
            <p className="text-xl text-gray-600 max-w-lg mb-10 leading-relaxed">
              Order from your favorite restaurants and get fresh, hot meals delivered in minutes. Fast, reliable, and always delicious.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-xl">
                Order Now →
              </button>
              <button className="border-2 border-orange-500 text-orange-500 px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all">
                Browse Menu
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-3">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <span className="text-3xl font-black text-gray-900">30min</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">Average delivery</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-3">
                    <Star className="w-6 h-6 text-orange-500" />
                  </div>
                  <span className="text-3xl font-black text-gray-900">4.8</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">Customer rating</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-3">
                    <Truck className="w-6 h-6 text-orange-500" />
                  </div>
                  <span className="text-3xl font-black text-gray-900">500+</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">Restaurants</p>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-500 max-w-sm group">
              <div className="w-full h-64 bg-gradient-to-br from-green-100 via-green-50 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-inner transition-all">
                <div className="text-9xl opacity-40 group-hover:scale-110 transition-transform duration-300">🥗</div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Fresh Garden Salad</h3>
                <p className="text-gray-600 text-sm mb-4">Mixed greens, cherry tomatoes, cucumber, avocado with house dressing</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-gray-900">$12.99</span>
                  <button 
                    onClick={onAddToCart}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl text-sm font-bold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;