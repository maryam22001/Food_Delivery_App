// How it works section component
import React from 'react';
import { Search, ShoppingCart, Truck } from 'lucide-react';
// How It Works Component
const HowItWorks = () => {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '1rem'
          }}>
            How It Works
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#4b5563',
            maxWidth: '42rem',
            margin: '0 auto'
          }}>
            Getting your favorite food delivered is easier than ever. Just follow these simple steps.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ position: 'relative', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: '#dbeafe',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Search style={{ width: '2rem', height: '2rem', color: '#2563eb' }} />
              </div>
              <div style={{
                position: 'absolute',
                top: '-0.5rem',
                right: '-0.5rem',
                width: '1.5rem',
                height: '1.5rem',
                backgroundColor: '#f97316',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
                fontWeight: 'bold'
              }}>
                1
              </div>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Browse & Select</h3>
            <p style={{ color: '#4b5563' }}>
              Choose from hundreds of restaurants and thousands of dishes in your area.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ position: 'relative', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: '#dcfce7',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <ShoppingCart style={{ width: '2rem', height: '2rem', color: '#16a34a' }} />
              </div>
              <div style={{
                position: 'absolute',
                top: '-0.5rem',
                right: '-0.5rem',
                width: '1.5rem',
                height: '1.5rem',
                backgroundColor: '#f97316',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
                fontWeight: 'bold'
              }}>
                2
              </div>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Order & Pay</h3>
            <p style={{ color: '#4b5563' }}>
              Add items to cart, customize your order, and pay securely online.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ position: 'relative', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: '#fed7aa',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Truck style={{ width: '2rem', height: '2rem', color: '#ea580c' }} />
              </div>
              <div style={{
                position: 'absolute',
                top: '-0.5rem',
                right: '-0.5rem',
                width: '1.5rem',
                height: '1.5rem',
                backgroundColor: '#f97316',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
                fontWeight: 'bold'
              }}>
                3
              </div>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Fast Delivery</h3>
            <p style={{ color: '#4b5563' }}>
              Track your order in real-time and enjoy hot, fresh food delivered to your door.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <div style={{
            backgroundColor: '#fff7ed',
            borderRadius: '1rem',
            padding: '2rem',
            maxWidth: '28rem',
            margin: '0 auto'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Ready to get started?</h3>
            <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
              Join thousands of satisfied customers who choose FoodDash for their daily meals.
            </p>
            <button style={{
              backgroundColor: '#f97316',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer'
            }}>
              Start Ordering Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// 
export default HowItWorks;