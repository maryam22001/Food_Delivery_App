import React, { useState } from 'react';
import { Search, MapPin, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ cartItems, user, onSignOut }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header style={{
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
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
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <Link to="/" style={{ 
              textDecoration: 'none', 
              color: '#4b5563', 
              fontWeight: '500',
              transition: 'color 0.2s'
            }}>
              Home
            </Link>
            <Link to="/restaurants" style={{ 
              textDecoration: 'none', 
              color: '#4b5563', 
              fontWeight: '500',
              transition: 'color 0.2s'
            }}>
              Restaurants
            </Link>
            <Link to="/categories" style={{ 
              textDecoration: 'none', 
              color: '#4b5563', 
              fontWeight: '500',
              transition: 'color 0.2s'
            }}>
              Categories
            </Link>
            <Link to="/about" style={{ 
              textDecoration: 'none', 
              color: '#4b5563', 
              fontWeight: '500',
              transition: 'color 0.2s'
            }}>
              About
            </Link>
          </div>

          {/* Search Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f9fafb',
            borderRadius: '0.5rem',
            padding: '0.5rem 1rem',
            maxWidth: '20rem',
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

          {/* Location */}
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', color: '#4b5563' }}>
            <MapPin style={{ width: '1rem', height: '1rem', marginRight: '0.25rem', color: '#f97316' }} />
            <span>Downtown</span>
          </div>

          {/* Cart */}
          <button style={{
            position: 'relative',
            padding: '0.5rem',
            color: '#4b5563',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer'
          }}>
            <ShoppingCart style={{ width: '1.25rem', height: '1.25rem' }} />
            {cartItems > 0 && (
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
            )}
          </button>

          {/* User Menu */}
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.875rem', color: '#4b5563' }}>
                Welcome, {user.name}
              </span>
              <button
                onClick={onSignOut}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#4b5563',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >
                <User style={{ width: '1rem', height: '1rem', marginRight: '0.25rem' }} />
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/signin" style={{
              display: 'flex',
              alignItems: 'center',
              color: '#4b5563',
              textDecoration: 'none',
              fontSize: '0.875rem'
            }}>
              <User style={{ width: '1rem', height: '1rem', marginRight: '0.25rem' }} />
              Sign In
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            padding: '0.5rem',
            color: '#4b5563',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer'
          }}
          className="md:hidden"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'white',
          borderBottom: '1px solid #e5e7eb',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>
            Home
          </Link>
          <Link to="/restaurants" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>
            Restaurants
          </Link>
          <Link to="/categories" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>
            Categories
          </Link>
          <Link to="/about" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>
            About
          </Link>
          {user ? (
            <button onClick={onSignOut} style={{
              textAlign: 'left',
              color: '#4b5563',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '500'
            }}>
              Sign Out
            </button>
          ) : (
            <Link to="/signin" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>
              Sign In
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;