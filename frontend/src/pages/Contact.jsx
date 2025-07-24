import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = ({ user, onSignOut }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
<<<<<<< HEAD
    } catch (error) {
=======
    } catch {
>>>>>>> 9bf9788 (Add user authentication and profile management: update API routes, models, and frontend components)
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header cartItems={1} user={user} onSignOut={onSignOut} />
      
      {/* Hero Section */}
      <section style={{ backgroundColor: '#f97316', color: 'white', padding: '4rem 0' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Get in Touch
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            
            {/* Contact Information */}
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>
                Contact Information
              </h2>
              <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: '1.6' }}>
                Have questions about our service? Need help with an order? Our team is here to help you 24/7.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: '#fef3c7',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem'
                  }}>
                    <Phone style={{ width: '1.5rem', height: '1.5rem', color: '#f59e0b' }} />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 'bold', color: '#111827', marginBottom: '0.25rem' }}>Phone</h3>
                    <p style={{ color: '#6b7280' }}>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: '#dbeafe',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem'
                  }}>
                    <Mail style={{ width: '1.5rem', height: '1.5rem', color: '#3b82f6' }} />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 'bold', color: '#111827', marginBottom: '0.25rem' }}>Email</h3>
                    <p style={{ color: '#6b7280' }}>support@fooddash.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: '#dcfce7',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem'
                  }}>
                    <MapPin style={{ width: '1.5rem', height: '1.5rem', color: '#16a34a' }} />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 'bold', color: '#111827', marginBottom: '0.25rem' }}>Address</h3>
                    <p style={{ color: '#6b7280' }}>123 Food Street<br />Downtown, NY 10001</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: '#fce7f3',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem'
                  }}>
                    <Clock style={{ width: '1.5rem', height: '1.5rem', color: '#ec4899' }} />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 'bold', color: '#111827', marginBottom: '0.25rem' }}>Hours</h3>
                    <p style={{ color: '#6b7280' }}>24/7 Customer Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ backgroundColor: '#f9fafb', padding: '2rem', borderRadius: '1rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>
                Send us a Message
              </h2>

              {submitStatus === 'success' && (
                <div style={{
                  backgroundColor: '#dcfce7',
                  border: '1px solid #bbf7d0',
                  color: '#166534',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div style={{
                  backgroundColor: '#fef2f2',
                  border: '1px solid #fecaca',
                  color: '#dc2626',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '0.5rem',
                        fontSize: '0.875rem',
                        outline: 'none',
                        backgroundColor: 'white'
                      }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '0.5rem',
                        fontSize: '0.875rem',
                        outline: 'none',
                        backgroundColor: 'white'
                      }}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      outline: 'none',
                      backgroundColor: 'white'
                    }}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      outline: 'none',
                      backgroundColor: 'white',
                      resize: 'vertical'
                    }}
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    backgroundColor: isSubmitting ? '#9ca3af' : '#f97316',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.5rem',
                    fontWeight: '600',
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    fontSize: '1rem',
                    transition: 'background-color 0.2s'
                  }}
                >
                  <Send style={{ width: '1rem', height: '1rem' }} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;