// Header navigation component
import React from 'react';
import { Search, MapPin, ShoppingCart, User } from 'lucide-react';


const headerStyle = {
  backgroundColor: '#ffffff',
  borderBottom: '1px solid #e5e7eb',
  padding: '1rem 0',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const flexStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
};

const Header = ({ cartItems }) => {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div style={flexStyle}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                width: '2rem',
                height: '2rem',
                backgroundColor: '#f97316',
                borderRadius: '0.25rem',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '0.875rem'
              }}>
                FD
              </div>
              <span style={{
                marginLeft: '0.75rem',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#111827'
              }}>
                FoodDash
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#f9fafb',
              borderRadius: '0.5rem',
              padding: '0.5rem 1rem',
              maxWidth: '24rem',
              width: '100%'
            }}>
              <Search style={{ width: '1rem', height: '1rem', color: '#9ca3af', marginRight: '0.75rem' }} />
              <input
                type="text"
                placeholder="Search restaurants, cuisines..."
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontSize: '0.875rem',
                  flex: 1,
                  color: '#6b7280'
                }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', color: '#4b5563' }}>
              <MapPin style={{ width: '1rem', height: '1rem', marginRight: '0.25rem', color: '#f97316' }} />
              <span>Downtown</span>
            </div>

            <button style={{
              position: 'relative',
              padding: '0.5rem',
              color: '#4b5563',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}>
              <ShoppingCart style={{ width: '1.25rem', height: '1.25rem' }} />
              <span style={{
                position: 'absolute',
                top: '-0.25rem',
                right: '-0.25rem',
                backgroundColor: '#f97316',
                color: 'white',
                fontSize: '0.75rem',
                borderRadius: '9999px',
                width: '1.25rem',
                height: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold'
              }}>
                {cartItems}
              </span>
            </button>

            <button style={{
              display: 'flex',
              alignItems: 'center',
              color: '#4b5563',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}>
              <User style={{ width: '1rem', height: '1rem', marginRight: '0.25rem' }} />
              <span style={{ fontSize: '0.875rem' }}>Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;