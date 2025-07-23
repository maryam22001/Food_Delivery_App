// How it works section component
import React from 'react';
import { Search, ShoppingCart, Truck } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting your favorite food delivered is easier than ever. Just follow these simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all">
                <Search className="w-10 h-10 text-blue-600" />
              </div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center text-lg font-black shadow-lg">
                1
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Browse & Select</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Choose from hundreds of restaurants and thousands of dishes in your area.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all">
                <ShoppingCart className="w-10 h-10 text-green-600" />
              </div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center text-lg font-black shadow-lg">
                2
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Order & Pay</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Add items to cart, customize your order, and pay securely online.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all">
                <Truck className="w-10 h-10 text-orange-600" />
              </div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center text-lg font-black shadow-lg">
                3
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Fast Delivery</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Track your order in real-time and enjoy hot, fresh food delivered to your door.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-10 max-w-lg mx-auto shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Join thousands of satisfied customers who choose FoodDash for their daily meals.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg">
              Start Ordering Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;