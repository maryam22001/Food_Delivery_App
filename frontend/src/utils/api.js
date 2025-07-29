// API utility functions for backend communication
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

class ApiService {
  constructor() {
    this.token = localStorage.getItem('authToken');
  }

  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem('authToken', token);
    } else {
      localStorage.removeItem('authToken');
    }
  }

  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    if (this.token) {
      config.headers.Authorization = `Token ${this.token}`;
    }

    try {
      const response = await fetch(url, config);
      
      // Handle non-JSON responses
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Invalid response format');
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      return data;
    } catch (error) {
      // Handle network errors
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error('Network error: Unable to connect to the server');
      }
      throw error;
    }
  }

  // Authentication methods
  async signUp(userData) {
    return this.request('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async signIn(credentials) {
    const response = await this.request('/auth/signin', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    
    // Set token if login successful
    if (response.user && response.user.token) {
      this.setToken(response.user.token);
    }
    
    return response;
  }

  async validateToken() {
    return this.request('/auth/validate');
  }

  async signOut() {
    try {
      await this.request('/auth/signout', {
        method: 'POST',
      });
    } catch (error) {
      console.error('Sign out error:', error);
    } finally {
      this.setToken(null);
    }
  }

  // Data fetching methods
  async getRestaurants() {
    return this.request('/restaurants');
  }

  async getCategories() {
    return this.request('/categories');
  }

  async getMenuItems(restaurantId) {
    return this.request(`/restaurants/${restaurantId}/menu`);
  }

  async getUserProfile() {
    return this.request('/user/profile');
  }

  async getUserOrders() {
    return this.request('/user/orders');
  }

  async createCheckoutSession() {
    return this.request('/test-checkout', {
      method: 'POST',
    });
  }

  async createPaymentIntent(amount) {
    return this.request('/create-payment-intent', {
      method: 'POST',
      body: JSON.stringify({ amount }),
    });
  }
}

export default new ApiService();