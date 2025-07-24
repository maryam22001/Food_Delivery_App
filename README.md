# Food Delivery App - Stripe Payment Integration

## Main Idea

This project is a Food Delivery web application with integrated Stripe payment processing. The goal is to provide a seamless and secure payment experience for users ordering food through the app. The backend is built with Django and connects to a Neon DB, while the frontend is a React app using Vite.

Stripe payment integration is implemented using Stripe Payment Intents API for customizable and secure payment flows. Sensitive keys are stored in environment variables for security.

---

## Tools and Technologies Used

- **Backend:**
  - Django (REST Framework)
  - Stripe Python SDK
  - Neon DB (PostgreSQL compatible)
  - python-decouple for environment variable management
  - Django CORS Headers for cross-origin requests

- **Frontend:**
  - React with Vite
  - Stripe.js and React Stripe.js for payment UI and processing
  - Tailwind CSS for styling

- **Testing:**
  - Curl commands for backend API testing
  - Stripe test cards for payment simulation

---

## How to Set Up the Environment

1. **Clone the repository**

2. **Backend Setup:**
   - Create a `.env` file in the root directory with the following variables:
     ```
     STRIPE_SECRET_KEY=your_stripe_secret_key
     STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
     DATABASE_URL=your_neon_db_connection_string
     ```
   - Install Python dependencies:
     ```
     pip install -r requirements.txt
     ```
   - Run database migrations:
     ```
     python manage.py migrate
     ```
   - Start the backend server:
     ```
     python manage.py runserver
     ```

3. **Frontend Setup:**
   - Navigate to the `frontend` directory:
     ```
     cd frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the frontend dev server:
     ```
     npm run dev
     ```
   - The frontend runs on port 3001 by default (configured in `vite.config.js`).

---

## Resolved Issues

- Integrated Stripe Payment Intents API for secure payment processing.
- Created backend endpoints for payment intent creation and webhook handling.
- Developed React StripePayment component for frontend payment UI.
- Configured environment variables for sensitive keys.
- Added proxy in Vite config for API requests.
- Provided curl scripts for backend endpoint testing.

---

## Issues to Follow Up

- Implement comprehensive backend tests for payment endpoints.
- Set up deployment pipeline for backend and frontend.
- Perform thorough end-to-end testing of payment flows.
- Enhance webhook handling to update order/payment status in the database.
- Add user authentication and authorization improvements.
- Optimize frontend UI/UX for payment experience.

---

## Resources

These are YouTube tutorials that were used as references :

- [How To Create Complete Food Delivery App Using React JS Step By Step Tutorial](https://youtu.be/9jRTo7ILxQc?si=x1fZjISgQtY6KJpB)
- [How to Build an E-commerce Website with Django and Python](https://youtu.be/YZvRrldjf1Y?si=QsoYZpgvJD4pNH-F)
- [Django Project: Build a Micro eCommerce with Python, Django, Neon Postgres, Stripe, & TailwindCSS](https://youtu.be/qx9nshX9CQQ?si=6Zx5mYSCI2l-mHrZ)

---

This README provides a comprehensive overview of My  Food Delivery App, including setup instructions, tools used, resolved and pending issues, and useful resources for further learning.
