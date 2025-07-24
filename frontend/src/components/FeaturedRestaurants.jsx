// Featured restaurants section component
import React from 'react';
import { Star, Clock, Heart } from 'lucide-react';
import { featuredRestaurants } from '../utils/constants';

// Featured Restaurants Component
const FeaturedRestaurants = () => {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '1rem'
          }}>
            Featured Restaurants
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#4b5563' }}>
            Handpicked restaurants with the best ratings and fastest delivery times
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {featuredRestaurants.map((restaurant) => (
            <div key={restaurant.id} style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'all 0.3s'
            }}>
              <div style={{ position: 'relative' }}>
                {restaurant.discount && (
                  <div style={{
                    position: 'absolute',
                    top: '0.75rem',
                    left: '0.75rem',
                    backgroundColor: '#dc2626',
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    zIndex: 10
                  }}>
                    {restaurant.discount}
                  </div>
                )}
                {restaurant.isNew && (
                  <div style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    backgroundColor: '#f97316',
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    zIndex: 10
                  }}>
                    New!
                  </div>
                )}
                {restaurant.featured && (
                  <div style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    left: '0.75rem',
                    backgroundColor: '#eab308',
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>
                    Featured
                  </div>
                )}
                <button style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  padding: '0.5rem',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                  border: 'none',
                  cursor: 'pointer',
                  zIndex: 10
                }}>
                  <Heart style={{ width: '1rem', height: '1rem', color: '#4b5563' }} />
                </button>

                <div style={{
                  height: '10rem',
                  background: 'linear-gradient(to bottom right, #fed7aa, #fff7ed)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ fontSize: '3.75rem', opacity: 0.4 }}>
                    {restaurant.emoji}
                  </div>
                </div>
              </div>

              <div style={{ padding: '1rem' }}>
                <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.25rem' }}>{restaurant.name}</h3>
                <p style={{ color: '#4b5563', fontSize: '0.875rem', marginBottom: '0.75rem' }}>{restaurant.cuisine}</p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.75rem',
                  fontSize: '0.875rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Star style={{ width: '1rem', height: '1rem', color: '#fbbf24', fill: '#fbbf24', marginRight: '0.25rem' }} />
                    <span style={{ fontWeight: 'bold' }}>{restaurant.rating}</span>
                    <span style={{ color: '#6b7280', marginLeft: '0.25rem' }}>({restaurant.reviews})</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', color: '#4b5563' }}>
                    <Clock style={{ width: '1rem', height: '1rem', marginRight: '0.25rem' }} />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: restaurant.deliveryFee === 'Free delivery' ? '#059669' : '#111827'
                  }}>
                    {restaurant.deliveryFee}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default FeaturedRestaurants;