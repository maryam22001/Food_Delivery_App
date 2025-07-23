// Individual category card component
import React from 'react';

const CategoryCard = ({ category }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-2">
    <div className="h-36 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center rounded-t-xl relative overflow-hidden">
      <div className="text-5xl group-hover:scale-125 transition-transform duration-300">
        {category.emoji}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="p-5 text-center">
      <h3 className="font-bold text-lg mb-1 text-gray-800">{category.name}</h3>
      <p className="text-gray-600 text-sm">{category.count}</p>
    </div>
  </div>
);

export default CategoryCard;