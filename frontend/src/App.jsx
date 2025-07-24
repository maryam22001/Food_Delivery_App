import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FoodDashWebsite from './components/FoodDashWebsite';
import Restaurants from './pages/Restaurants';
import Categories from './pages/Categories';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ApiService from './utils/api';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('authToken');
    if (token) {
      ApiService.setToken(token);
      // Validate token with backend
      ApiService.validateToken()
        .then(data => {
          if (data && data.user) {
            setUser(data.user);
          } else {
            // If no user data is returned, clear the token
            ApiService.setToken(null);
          }
        })
        .catch(error => {
          console.error('Token validation error:', error);
          ApiService.setToken(null);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleSignIn = (userData) => {
    setUser(userData);
  };

  const handleSignUp = (userData) => {
    setUser(userData);
  };

  const handleSignOut = async () => {
    try {
      await ApiService.signOut();
    } catch (error) {
      console.error('Sign out error:', error);
    }
    setUser(null);
    ApiService.setToken(null);
  };

  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '3rem',
            height: '3rem',
            backgroundColor: '#f97316',
            borderRadius: '0.5rem',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            margin: '0 auto 1rem'
          }}>
            FD
          </div>
          <p style={{ color: '#6b7280' }}>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<FoodDashWebsite user={user} onSignOut={handleSignOut} />} 
        />
        <Route 
          path="/restaurants" 
          element={<Restaurants user={user} onSignOut={handleSignOut} />} 
        />
        <Route 
          path="/categories" 
          element={<Categories user={user} onSignOut={handleSignOut} />} 
        />
        <Route 
          path="/about" 
          element={<About user={user} onSignOut={handleSignOut} />} 
        />
        <Route 
          path="/contact" 
          element={<Contact user={user} onSignOut={handleSignOut} />} 
        />
        <Route 
          path="/signin" 
          element={
            user ? <Navigate to="/" replace /> : <SignIn onSignIn={handleSignIn} />
          } 
        />
        <Route 
          path="/signup" 
          element={
            user ? <Navigate to="/" replace /> : <SignUp onSignUp={handleSignUp} />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;