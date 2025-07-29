# Food Delivery App - Free Serverless with Stripe Integration

## Main Idea

This project is a **completely free serverless** Food Delivery web application with integrated Stripe payment processing. Perfect for demos, MVPs, and small SaaS applications with **zero ongoing costs**.

**Architecture:**
- **Backend**: Django on Vercel Functions (Free)
- **Database**: Vercel Postgres/Neon (Free)
- **Frontend**: React + Vite on Vercel (Free)
- **Payment**: Stripe integration
- **CI/CD**: GitHub Actions (Free)

**💰 Total Cost: $0/month**

---

## Tools and Technologies Used

- **Backend (Free Serverless):**
  - Django (REST Framework) on Vercel Functions
  - Vercel Postgres (Free database)
  - Stripe Python SDK
  - python-decouple for environment variable management
  - Django CORS Headers for cross-origin requests
  - Whitenoise for static file serving

- **Frontend:**
  - React with Vite
  - Stripe.js and React Stripe.js for payment UI and processing
  - Tailwind CSS for styling
  - React Router for navigation

- **Deployment (All Free):**
  - GitHub Actions for CI/CD
  - Vercel for backend and frontend (Free tier)
  - Neon for serverless PostgreSQL database (Free tier)

- **Testing:**
  - Curl commands for backend API testing
  - Stripe test cards for payment simulation

---

## Current Status ✅

### ✅ Resolved Issues
- ✅ Integrated Stripe Payment Intents API for secure payment processing
- ✅ Created backend endpoints for payment intent creation and webhook handling
- ✅ Developed React StripePayment component for frontend payment UI
- ✅ Configured environment variables for sensitive keys
- ✅ Added proxy in Vite config for API requests
- ✅ Provided curl scripts for backend endpoint testing
- ✅ Added missing Stripe dependencies to frontend
- ✅ Fixed environment variable access for Vite
- ✅ Improved API service with better error handling
- ✅ Enhanced Stripe payment component with better UI
- ✅ **Optimized for free serverless deployment with Vercel**
- ✅ **Configured for free Neon/Vercel Postgres database**
- ✅ **Added serverless-specific optimizations (connection pooling, cold start handling)**
- ✅ Created GitHub Actions CI/CD pipeline for free deployment
- ✅ Added Vercel deployment configuration and scripts
- ✅ Created comprehensive free serverless deployment guide

### 🚀 Ready for Free Serverless Deployment
The application is now optimized for **completely free** serverless deployment with:
- **Vercel Functions backend** with automatic scaling
- **Free database** (Vercel Postgres or Neon)
- **Complete CI/CD pipeline** via GitHub Actions
- **Cold start optimization** for better performance
- **Zero ongoing costs** - perfect for demos and MVPs

---

## Quick Start

### Prerequisites
- Python 3.11+
- Node.js 18+
- Vercel Account (Free)
- Neon Account (Free) or Vercel Postgres
- Stripe Account (Free test mode)
- GitHub Account (Free)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Food_Delivery_App
   ```

2. **Backend Setup (Vercel Functions Local):**
   ```bash
   # Create virtual environment
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   
   # Install dependencies
   pip install -r requirements.txt
   
   # Set up environment variables
   cp env.example .env
   # Edit .env with your values
   
   # Run migrations
   python manage.py migrate
   
   # Start Vercel dev server
   vercel dev
   ```

3. **Frontend Setup:**
   ```bash
   cd frontend
   
   # Install dependencies
   npm install
   
   # Start the frontend dev server
   npm run dev
   ```

The frontend runs on port 5173 by default and the Vercel backend on port 3000.

---

## 🚀 Free Deployment Options

### **🏆 RECOMMENDED: Vercel (Most Generous Free Tier)**

**Vercel Free Tier:**
- ✅ **Serverless Functions**: 100GB-hours/month
- ✅ **Bandwidth**: 100GB/month
- ✅ **Database**: Vercel Postgres (Free)
- ✅ **Domains**: Unlimited custom domains
- ✅ **Cost**: $0/month

**Quick Deploy:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy with one command
./vercel-deploy.sh
```

### **🥈 Alternative: Netlify + Supabase**
- ✅ **Netlify Functions**: 125,000 requests/month
- ✅ **Supabase Database**: 500MB free
- ✅ **Cost**: $0/month

### **🥉 Alternative: Railway**
- ✅ **$5 credit/month** (usually enough for demos)
- ✅ **Unlimited deployments**
- ✅ **Cost**: $0/month (with credit)

For detailed free deployment instructions, see [FREE_SERVERLESS_DEPLOYMENT.md](./FREE_SERVERLESS_DEPLOYMENT.md).

---

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `GET /api/auth/validate` - Token validation
- `POST /api/auth/signout` - User logout

### Data
- `GET /api/restaurants` - List restaurants
- `GET /api/categories` - List categories
- `GET /api/restaurants/{id}/menu` - Get restaurant menu
- `GET /api/user/profile` - Get user profile
- `GET /api/user/orders` - Get user orders

### Payments
- `POST /api/create-payment-intent` - Create Stripe payment intent
- `POST /api/stripe-webhook` - Stripe webhook handler

---

## Environment Variables

### Backend (.env)
```bash
SECRET_KEY=your-django-secret-key
DEBUG=False
DATABASE_URL=your-free-database-url
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
STRIPE_WEBHOOK_SECRET=your-webhook-secret
```

### Frontend (.env)
```bash
VITE_API_URL=https://your-vercel-domain.vercel.app
VITE_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
```

---

## Testing

### Backend Tests
```bash
python manage.py test
```

### Frontend Tests
```bash
cd frontend
npm run lint
npm run build
```

### Vercel Local Testing
```bash
vercel dev
```

### Stripe Testing
Use Stripe test cards:
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`

---

## 💰 Cost Comparison

| Platform | Backend | Database | Frontend | Monthly Cost |
|----------|---------|----------|----------|--------------|
| **Vercel** | Functions | Postgres | Vercel | **$0** |
| **Netlify + Supabase** | Functions | Supabase | Netlify | **$0** |
| **Railway** | Railway | Postgres | Vercel | **$0** |
| **Render** | Render | Postgres | Vercel | **$0** |
| **AWS Lambda** | Lambda | RDS | Vercel | **$5-20** |

---

## Free Serverless Benefits

### 🚀 **Automatic Scaling**
- Scales from 0 to thousands of requests automatically
- No server management required
- Pay only for actual usage (but it's free!)

### 💰 **Completely Free**
- No monthly costs
- No setup fees
- No hidden charges
- Perfect for demos and MVPs

### 🔧 **Easy Maintenance**
- Automatic updates and patches
- Built-in monitoring and logging
- No server administration

### 🌍 **Global Availability**
- Deployed across multiple regions
- Low latency worldwide
- High availability

### ⚡ **Fast Performance**
- Optimized for serverless execution
- Cold start optimization
- Connection pooling

---

## Resources

These are YouTube tutorials that were used as references:

- [How To Create Complete Food Delivery App Using React JS Step By Step Tutorial](https://youtu.be/9jRTo7ILxQc?si=x1fZjISgQtY6KJpB)
- [How to Build an E-commerce Website with Django and Python](https://youtu.be/YZvRrldjf1Y?si=QsoYZpgvJD4pNH-F)
- [Django Project: Build a Micro eCommerce with Python, Django, Neon Postgres, Stripe, & TailwindCSS](https://youtu.be/qx9nshX9CQQ?si=6Zx5mYSCI2l-mHrZ)

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

## License

This project is licensed under the ISC License.

---

This README provides a comprehensive overview of the **completely free serverless** Food Delivery App, including setup instructions, deployment guide, API documentation, and the benefits of free serverless architecture.

**🎉 Your Food Delivery App can be live in minutes with zero ongoing costs!**
