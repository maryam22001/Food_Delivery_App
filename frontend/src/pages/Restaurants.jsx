// Restaurants page with filtering and search functionality
import React, { useState } from 'react';
import { Search, Filter, Star, Clock, MapPin } from 'lucide-react';
import RestaurantCard from '../components/cards/RestaurantCard';
import { featuredRestaurants } from '../utils/constants';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Restaurants = ({ user, onSignOut }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('rating');
  const [showFilters, setShowFilters] = useState(false);

  // Extended restaurant data for demonstration
  const allRestaurants = [
    ...featuredRestaurants,
    {
      id: 7,
      name: "Pasta Paradise",
      cuisine: "Italian",
      rating: 4.6,
      reviews: 543,
      deliveryTime: "30-40 min",
      deliveryFee: "Free delivery",
      emoji: "🍝"
    },
    {
      id: 8,
      name: "Curry House",
      cuisine: "Indian",
      rating: 4.7,
      reviews: 876,
      deliveryTime: "25-35 min",
      deliveryFee: "$2.99",
      emoji: "🍛"
    },
    {
      id: 9,
      name: "BBQ Masters",
      cuisine: "American",
      rating: 4.5,
      reviews: 321,
      deliveryTime: "35-45 min",
      deliveryFee: "$3.49",
      discount: "10% OFF",
      emoji: "🍖"
    },
    {
      id: 10,
      name: "Fresh Bowls",
      cuisine: "Healthy",
      rating: 4.8,
      reviews: 654,
      deliveryTime: "20-30 min",
      deliveryFee: "Free delivery",
      isNew: true,
      emoji: "🥙"
    }
  ];

  const filteredRestaurants = allRestaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || 
                           restaurant.cuisine.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'delivery':
        return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const cuisines = ['All', ...new Set(allRestaurants.map(r => r.cuisine))];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItems={1} user={user} onSignOut={onSignOut} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Discover Amazing Restaurants
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Choose from hundreds of restaurants in your area
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search restaurants, cuisines, or dishes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
              
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 text-sm">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="rating">Rating</option>
                  <option value="delivery">Delivery Time</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
            
            <div className="text-gray-600">
              {filteredRestaurants.length} restaurants found
            </div>
          </div>
          
          {/* Category Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t">
              <div className="flex flex-wrap gap-2">
                {cuisines.map((cuisine) => (
                  <button
                    key={cuisine}
                    onClick={() => setSelectedCategory(cuisine)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === cuisine
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cuisine}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Restaurant Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No restaurants found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Restaurants;