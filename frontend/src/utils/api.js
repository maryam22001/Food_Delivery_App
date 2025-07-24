// API utility functions for backend communication
const API_BASE_URL = '/api';

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
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }

      return data;
    } catch (error) {
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
    return this.request('/auth/signin', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async validateToken() {
    return this.request('/auth/validate');
  }

  async signOut() {
    return this.request('/auth/signout', {
      method: 'POST',
    });
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
}

export default new ApiService();