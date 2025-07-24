// Footer section component
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded text-white flex items-center justify-center font-bold text-sm">
                FD
              </div>
              <span className="ml-3 text-xl font-bold">FoodDash</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Your favorite food delivered fresh and fast. Experience the best of local cuisine from the comfort of your home.
            </p>
            <div className="flex space-x-3">
              <button className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 text-sm">f</button>
              <button className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 text-sm">t</button>
              <button className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 text-sm">i</button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Restaurants</a></li>
              <li><a href="#" className="hover:text-white">Categories</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">For Restaurants</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Partner with us</a></li>
              <li><a href="#" className="hover:text-white">Restaurant dashboard</a></li>
              <li><a href="#" className="hover:text-white">Business solutions</a></li>
              <li><a href="#" className="hover:text-white">Marketing tools</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-orange-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-orange-500" />
                <span>support@fooddash.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 text-orange-500" />
                <span>123 Food Street<br />Downtown, NY 10001</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2024 FoodDash. All rights reserved.</p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;