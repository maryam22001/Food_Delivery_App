// How it works section component
import React from 'react';
import { Search, ShoppingCart, Truck } from 'lucide-react';

// How It Works Component
const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting your favorite food delivered is easier than ever. Just follow these simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Browse & Select</h3>
            <p className="text-gray-600">
              Choose from hundreds of restaurants and thousands of dishes in your area.
            </p>
          </div>
          
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                <ShoppingCart className="w-8 h-8 text-green-600" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Order & Pay</h3>
            <p className="text-gray-600">
              Add items to cart, customize your order, and pay securely online.
            </p>
          </div>
          
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto">
                <Truck className="w-8 h-8 text-orange-600" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
            <p className="text-gray-600">
              Track your order in real-time and enjoy hot, fresh food delivered to your door.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-orange-50 rounded-2xl p-8 max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied customers who choose FoodDash for their daily meals.
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Start Ordering Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// 
export default HowItWorks;