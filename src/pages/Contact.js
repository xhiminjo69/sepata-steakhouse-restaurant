import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [infoRef, infoInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <motion.div 
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="contact-hero" ref={heroRef}>
        <div className="contact-hero-background">
          <img src={`${process.env.PUBLIC_URL}/sepatarestaurant_1751706218_3669900208993574167_65649597383.webp`} alt="Contact Us" />
          <div className="contact-hero-overlay"></div>
        </div>
        <motion.div 
          className="contact-hero-content"
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section section-padding" ref={contactRef}>
        <div className="container">
          <div className="contact-content">
            <motion.div 
              className="form-container"
              variants={fadeInLeft}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
            >
              <h2>Get in Touch</h2>
              <p>Have a question, feedback, or want to make a special arrangement? We're here to help.</p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+355 XX XXX XXX"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="reservation">Reservation Inquiry</option>
                      <option value="event">Private Event</option>
                      <option value="feedback">Feedback</option>
                      <option value="catering">Catering Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary submit-btn">
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div 
              className="contact-info"
              variants={fadeInRight}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
            >
              <div className="info-card">
                <h3>Visit Us</h3>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <strong>Address</strong>
                    <span>Lungomare, Vlore, Albania</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-details">
                    <strong>Phone</strong>
                    <span>+355 XX XXX XXX</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-details">
                    <strong>Email</strong>
                    <span>info@sepata.al</span>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h3>Opening Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Monday - Sunday</span>
                    <span>12:00 PM - 11:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Kitchen closes</span>
                    <span>10:30 PM</span>
                  </div>
                  <div className="hours-item special">
                    <span>Happy Hour</span>
                    <span>5:00 PM - 7:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="Facebook">
                    <div className="social-icon">📘</div>
                    <span>Facebook</span>
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    <div className="social-icon">📷</div>
                    <span>Instagram</span>
                  </a>
                  <a href="#" className="social-link" aria-label="TripAdvisor">
                    <div className="social-icon">🦉</div>
                    <span>TripAdvisor</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section section-padding" ref={infoRef}>
        <div className="container">
          <motion.div 
            className="map-content"
            variants={fadeInUp}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
          >
            <h2>Find Us on the Map</h2>
            <p>Located in the heart of Lungomare with stunning sea views</p>
            
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d97171.21030930363!2d19.4131403!3d40.4398482!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d40.4459885!2d19.4941645!4m5!1s0x13453331cc8fee15%3A0xb9568441f3a08996!2sLungo%20Mare%2C%20Murat%20Terba%C3%A7i%2C%20Vlor%C3%AB!3m2!1d40.4398775!2d19.495541199999998!5e0!3m2!1sen!2s!4v1753809939748!5m2!1sen!2s"
                width="100%"
                height="500"
                style={{ border: 0, borderRadius: '20px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sëpata Steak House Location"
              ></iframe>
            </div>
            
            <div className="map-info">
              <div className="map-feature">
                <h4>Easy to Find</h4>
                <p>Located on the main Lungomare promenade, easily accessible by car or on foot</p>
              </div>
              <div className="map-feature">
                <h4>Parking Available</h4>
                <p>Valet parking service and nearby public parking options</p>
              </div>
              <div className="map-feature">
                <h4>Public Transport</h4>
                <p>Well connected by local bus routes and taxi services</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section-padding">
        <div className="container">
          <motion.div 
            className="faq-content"
            variants={fadeInUp}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
          >
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>Do you take reservations?</h4>
                <p>Yes, we highly recommend making a reservation, especially for dinner service and weekends. You can book online or call us directly.</p>
              </div>
              <div className="faq-item">
                <h4>Do you offer vegetarian options?</h4>
                <p>Absolutely! While we specialize in premium steaks, we have a variety of vegetarian dishes and can accommodate dietary restrictions.</p>
              </div>
              <div className="faq-item">
                <h4>Is there a dress code?</h4>
                <p>We maintain a smart casual dress code. We want our guests to feel comfortable while maintaining the elegant atmosphere of our restaurant.</p>
              </div>
              <div className="faq-item">
                <h4>Do you host private events?</h4>
                <p>Yes, we offer private dining options for special occasions, business meetings, and celebrations. Contact us to discuss your requirements.</p>
              </div>
              <div className="faq-item">
                <h4>Do you offer catering services?</h4>
                <p>We provide catering services for special events. Please contact us in advance to discuss menu options and availability.</p>
              </div>
              <div className="faq-item">
                <h4>What payment methods do you accept?</h4>
                <p>We accept all major credit cards, cash, and mobile payment options for your convenience.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
