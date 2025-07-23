// Header navigation component
import React from 'react';
import { Search, MapPin, ShoppingCart, User } from 'lucide-react';

const Header = ({ cartItems }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white flex items-center justify-center font-bold text-lg shadow-lg">
                FD
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">FoodDash</span>
            </div>
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <a href="#" className="text-orange-500 hover:text-orange-600 px-3 py-2 text-sm font-semibold border-b-2 border-orange-500">Home</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-semibold transition-colors">Restaurants</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-semibold transition-colors">Categories</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-semibold transition-colors">About</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-xl px-4 py-3 max-w-md w-full focus-within:ring-2 focus-within:ring-orange-500 focus-within:bg-white transition-all">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search restaurants, cuisines..."
                className="bg-transparent border-none outline-none text-sm flex-1 placeholder-gray-500"
              />
            </div>
            
            <div className="flex items-center text-sm text-gray-600 bg-gray-100 rounded-lg px-3 py-2">
              <MapPin className="w-4 h-4 mr-2 text-orange-500" />
              <span className="hidden sm:inline font-medium">Downtown</span>
            </div>
            
            <button className="relative p-3 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg">
                {cartItems}
              </span>
            </button>
            
            <button className="flex items-center text-gray-600 hover:text-orange-500 hover:bg-orange-50 px-3 py-2 rounded-xl transition-all">
              <User className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline text-sm font-semibold">Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;