// Categories page with detailed category exploration
import React, { useState } from 'react';
import { ArrowRight, Star, Clock, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RestaurantCard from '../components/cards/RestaurantCard';
import { categories, featuredRestaurants } from '../utils/constants';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Extended categories with more details
  const extendedCategories = [
    {
      ...categories[0],
      description: "From classic margherita to gourmet specialty pizzas",
      popularItems: ["Margherita Pizza", "Pepperoni", "BBQ Chicken", "Veggie Supreme"],
      trending: true,
      color: "from-red-400 to-red-600"
    },
    {
      ...categories[1], 
      description: "Juicy burgers from classic to gourmet varieties",
      popularItems: ["Classic Cheeseburger", "Bacon Burger", "Veggie Burger", "Double Stack"],
      color: "from-yellow-400 to-orange-500"
    },
    {
      ...categories[2],
      description: "Fresh sushi, sashimi and Japanese delicacies",
      popularItems: ["California Roll", "Salmon Sashimi", "Tuna Roll", "Rainbow Roll"],
      trending: true,
      color: "from-green-400 to-teal-500"
    },
    {
      ...categories[3],
      description: "Authentic Mexican flavors and street food",
      popularItems: ["Tacos al Pastor", "Quesadillas", "Burritos", "Nachos"],
      color: "from-orange-400 to-red-500"
    },
    {
      ...categories[4],
      description: "Pan-Asian cuisine from various regions",
      popularItems: ["Pad Thai", "Fried Rice", "Dumplings", "Ramen"],
      color: "from-purple-400 to-pink-500"
    },
    {
      ...categories[5],
      description: "Sweet treats and delightful desserts",
      popularItems: ["Chocolate Cake", "Ice Cream", "Cookies", "Cheesecake"],
      color: "from-pink-400 to-rose-500"
    },
    {
      ...categories[6],
      description: "Nutritious and wholesome meal options",
      popularItems: ["Buddha Bowl", "Smoothie Bowl", "Quinoa Salad", "Protein Bowl"],
      trending: true,
      color: "from-green-400 to-emerald-500"
    },
    {
      ...categories[7],
      description: "Artisan coffee and cafe beverages",
      popularItems: ["Espresso", "Cappuccino", "Cold Brew", "Latte"],
      color: "from-amber-400 to-brown-500"
    }
  ];

  const getCategoryRestaurants = (categoryName) => {
    return featuredRestaurants.filter(restaurant => 
      restaurant.cuisine.toLowerCase().includes(categoryName.toLowerCase()) ||
      categoryName.toLowerCase().includes(restaurant.cuisine.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItems={1} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Explore Food Categories
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Discover your favorite cuisines and explore new flavors
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span>Trending Categories</span>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2" />
              <span>Top Rated</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {extendedCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer group"
                onClick={() => setSelectedCategory(category)}
              >
                <div className={`h-32 bg-gradient-to-br ${category.color} relative flex items-center justify-center`}>
                  {category.trending && (
                    <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                      Trending
                    </div>
                  )}
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {category.emoji}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-800">{category.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {category.description}
                  </p>
                  <p className="text-orange-600 font-semibold text-lg mb-4">{category.count}</p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-xs text-gray-500 font-medium">Popular Items:</p>
                    <div className="flex flex-wrap gap-1">
                      {category.popularItems?.slice(0, 2).map((item, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition-colors group-hover:bg-orange-600 flex items-center justify-center">
                    Explore {category.name}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured by Category */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Popular in Each Category
            </h2>
            <p className="text-lg text-gray-600">
              Top restaurants from each food category
            </p>
          </div>
          
          <div className="space-y-12">
            {['Italian', 'Japanese', 'Mexican'].map((cuisineType) => {
              const restaurants = getCategoryRestaurants(cuisineType);
              if (restaurants.length === 0) return null;
              
              return (
                <div key={cuisineType}>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{cuisineType} Cuisine</h3>
                    <button className="text-orange-500 hover:text-orange-600 font-semibold flex items-center">
                      View All
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {restaurants.map((restaurant) => (
                      <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className={`h-32 bg-gradient-to-br ${selectedCategory.color} relative flex items-center justify-center`}>
              <button
                onClick={() => setSelectedCategory(null)}
                className="absolute top-4 right-4 bg-white bg-opacity-20 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-30"
              >
                ×
              </button>
              <div className="text-6xl">{selectedCategory.emoji}</div>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedCategory.name}</h2>
              <p className="text-gray-600 mb-6">{selectedCategory.description}</p>
              <p className="text-orange-600 font-semibold text-xl mb-6">{selectedCategory.count}</p>
              
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Popular Items</h3>
                <div className="grid grid-cols-2 gap-2">
                  {selectedCategory.popularItems?.map((item, idx) => (
                    <div key={idx} className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-center">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => setSelectedCategory(null)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Start Ordering
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Categories;