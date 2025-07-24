// Header navigation component
import React from 'react';
import { Search, MapPin, ShoppingCart, User } from 'lucide-react';

// Header Component
const Header = ({ cartItems }) => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-orange-500 rounded text-white flex items-center justify-center font-bold text-sm">
                FD
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">FoodDash</span>
            </div>
            <nav className="hidden md:ml-8 md:flex md:space-x-6">
              <a href="#" className="text-gray-900 hover:text-orange-500 px-3 py-2 text-sm font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium">Restaurants</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium">Categories</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium">About</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-50 rounded-lg px-4 py-2 max-w-sm w-full">
              <Search className="w-4 h-4 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search restaurants, cuisines..."
                className="bg-transparent border-none outline-none text-sm flex-1 placeholder-gray-500"
              />
            </div>
            
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-1 text-orange-500" />
              <span className="hidden sm:inline">Downtown</span>
            </div>
            
            <button className="relative p-2 text-gray-600 hover:text-orange-500">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartItems}
              </span>
            </button>
            
            <button className="flex items-center text-gray-600 hover:text-orange-500">
              <User className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline text-sm">Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;