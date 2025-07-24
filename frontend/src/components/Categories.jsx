// Categories section component
import React from 'react';
import CategoryCard from './cards/CategoryCard';
import { categories } from '../utils/constants';
//Categories Component
const Categories = () => {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '1rem'
          }}>
            Browse by Category
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#4b5563' }}>
            Discover your favorite cuisines from top-rated restaurants in your area
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {categories.map((category, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}>
              <div style={{
                height: '8rem',
                background: 'linear-gradient(to bottom right, #f9fafb, #f3f4f6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderTopLeftRadius: '0.75rem',
                borderTopRightRadius: '0.75rem'
              }}>
                <div style={{ fontSize: '2.5rem' }}>
                  {category.emoji}
                </div>
              </div>
              <div style={{ padding: '1rem', textAlign: 'center' }}>
                <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.25rem' }}>{category.name}</h3>
                <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;