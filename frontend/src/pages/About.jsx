// About Us page with company information and team
import React from 'react';
import { Users, Target, Award, Truck, Clock, Shield, Heart, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = ({ user, onSignOut }) => {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "50,000+" },
    { icon: Truck, label: "Restaurant Partners", value: "500+" },
    { icon: Clock, label: "Average Delivery", value: "30 min" },
    { icon: Star, label: "Customer Rating", value: "4.8/5" }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To connect food lovers with their favorite restaurants, making delicious meals accessible with just a few clicks."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "We believe in quality, reliability, and exceptional customer service. Every order matters to us."
    },
    {
      icon: Shield,
      title: "Our Promise",
      description: "Safe, fast, and reliable food delivery service that you can trust for your daily meals."
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "👩‍💼",
      description: "Passionate about connecting communities through food"
    },
    {
      name: "Mike Chen",
      role: "Head of Operations",
      image: "👨‍💻",
      description: "Ensuring smooth operations and timely deliveries"
    },
    {
      name: "Emily Davis",
      role: "Customer Experience",
      image: "👩‍🎓",
      description: "Dedicated to providing exceptional customer service"
    },
    {
      name: "David Rodriguez",
      role: "Technology Lead",
      image: "👨‍🔬",
      description: "Building innovative solutions for better user experience"
    }
  ];

  const milestones = [
    { year: "2020", event: "FoodDash Founded", description: "Started with a vision to revolutionize food delivery" }
  ];

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-white">
      <Header cartItems={1} user={user} onSignOut={onSignOut} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About FoodDash
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              We're passionate about connecting food lovers with amazing restaurants, 
              making delicious meals accessible with just a few clicks. Since 2020, 
              we've been dedicated to bringing communities together through food.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core values shape everything we do, from technology development to customer service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  FoodDash was born from a simple idea: everyone deserves access to delicious, 
                  quality food without the hassle. Our founders, frustrated with limited food 
                  delivery options in their neighborhood, decided to create a platform that 
                  would connect local restaurants with hungry customers.
                </p>
                <p>
                  What started as a small operation in 2020 has grown into a thriving community 
                  of food lovers, restaurant partners, and dedicated delivery professionals. 
                  We've maintained our commitment to supporting local businesses while providing 
                  exceptional service to our customers.
                </p>
                <p>
                  Today, we're proud to serve thousands of customers daily, helping them discover 
                  new flavors and enjoy their favorite meals from the comfort of their homes. 
                  Our journey is just beginning, and we're excited about the future of food delivery.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8 text-center">
                <div className="text-8xl mb-4">🍝</div>
                <div className="text-6xl">🍔</div>
                <div className="text-8xl">🍕</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our growth story
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1 px-8">
                    <div className={`bg-white p-6 rounded-2xl shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-orange-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-orange-500 rounded-full relative z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              The passionate people behind FoodDash
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-orange-600 font-semibold mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Experience FoodDash?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover amazing food from local restaurants
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Ordering Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

=======
>>>>>>> 9bf9788 (Add user authentication and profile management: update API routes, models, and frontend components)
export default About;