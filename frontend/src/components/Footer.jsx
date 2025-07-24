// Footer section component
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

// Footer Component

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111827', color: 'white', padding: '3rem 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
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
              <span style={{ marginLeft: '0.75rem', fontSize: '1.25rem', fontWeight: 'bold' }}>FoodDash</span>
            </div>
            <p style={{ color: '#9ca3af', marginBottom: '1rem', fontSize: '0.875rem', lineHeight: '1.6' }}>
              Your favorite food delivered fresh and fast. Experience the best of local cuisine from the comfort of your home.
            </p>
          </div>

          <div>
            <h3 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9ca3af', fontSize: '0.875rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Home</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Restaurants</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Categories</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>About Us</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>For Restaurants</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9ca3af', fontSize: '0.875rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Partner with us</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Restaurant dashboard</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Business solutions</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Marketing tools</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Support</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Contact Us</h3>
            <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                <Phone style={{ width: '1rem', height: '1rem', marginRight: '0.5rem', color: '#f97316' }} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                <Mail style={{ width: '1rem', height: '1rem', marginRight: '0.5rem', color: '#f97316' }} />
                <span>support@fooddash.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <MapPin style={{ width: '1rem', height: '1rem', marginRight: '0.5rem', marginTop: '0.25rem', color: '#f97316' }} />
                <span>123 Food Street<br />Downtown, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #374151',
          marginTop: '2rem',
          paddingTop: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#9ca3af',
          fontSize: '0.875rem'
        }}>
          <p>© 2024 FoodDash. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.75rem' }}>
            <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};



export default Footer;