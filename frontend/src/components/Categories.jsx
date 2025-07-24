// Categories section component
import React from 'react';
import CategoryCard from './cards/CategoryCard';
import { categories } from '../utils/constants';

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
          <p className="text-lg text-gray-600">
            Discover your favorite cuisines from top-rated restaurants in your area
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="h-32 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center rounded-t-xl">
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  {category.emoji}
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;