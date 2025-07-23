// Footer section component
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white flex items-center justify-center font-bold text-lg">
                FD
              </div>
              <span className="ml-3 text-2xl font-bold">FoodDash</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your favorite food delivered fresh and fast. Experience the best of local cuisine from the comfort of your home.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors text-lg">
                f
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors text-lg">
                t
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors text-lg">
                i
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Restaurants</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Categories</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">For Restaurants</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Partner with us</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Restaurant dashboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Business solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Marketing tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform inline-block">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center group">
                <Phone className="w-5 h-5 mr-3 text-orange-500 group-hover:scale-110 transition-transform" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center group">
                <Mail className="w-5 h-5 mr-3 text-orange-500 group-hover:scale-110 transition-transform" />
                <span>support@fooddash.com</span>
              </div>
              <div className="flex items-start group">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-orange-500 group-hover:scale-110 transition-transform" />
                <span>123 Food Street<br />Downtown, NY 10001</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>© 2024 FoodDash. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;