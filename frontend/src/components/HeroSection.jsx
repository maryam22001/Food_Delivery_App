// Hero banner section component
import React from 'react';
import { Clock, Star, Truck } from 'lucide-react';



// Hero Section Component
const HeroSection = ({ onAddToCart, onRemoveFromCart }) => {
  return (
    <section style={{ backgroundColor: '#fff7ed', padding: '4rem 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#111827',
              lineHeight: '1.2',
              marginBottom: '1.5rem'
            }}>
              Delicious food{' '}
              <span style={{ color: '#f97316' }}>delivered</span>{' '}
              to your door
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: '#4b5563',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Order from your favorite restaurants and get fresh, hot meals delivered in minutes. Fast, reliable, and always delicious.
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
              <button
                onClick={onAddToCart}
                style={{
                  backgroundColor: '#f97316',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                Order Now →
              </button>
              <button 
                onClick={onRemoveFromCart}
                style={{
                  border: '1px solid #f97316',
                  color: '#f97316',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                Remove Item
              </button>
              <button style={{
                border: '1px solid #4b5563',
                color: '#4b5563',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                fontSize: '1rem'
              }}>
                Browse Menu
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                  <Clock style={{ width: '1.25rem', height: '1.25rem', color: '#f97316', marginRight: '0.5rem' }} />
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>30min</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Average delivery</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                  <Star style={{ width: '1.25rem', height: '1.25rem', color: '#f97316', marginRight: '0.5rem' }} />
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>4.8</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Customer rating</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                  <Truck style={{ width: '1.25rem', height: '1.25rem', color: '#f97316', marginRight: '0.5rem' }} />
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>500+</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Restaurants</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Delicious Food"
                style={{
                  width: '100%',
                  maxWidth: '32rem',
                  borderRadius: '1rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;