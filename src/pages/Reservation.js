import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Reservation.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [formRef, formInView] = useInView({ threshold: 0.3, triggerOnce: true });
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
    console.log('Reservation submitted:', formData);
    alert('Thank you for your reservation request! We will contact you shortly to confirm your booking.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      specialRequests: ''
    });
  };

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
  ];

  const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];

  return (
    <motion.div 
      className="reservation-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="reservation-hero" ref={heroRef}>
        <div className="reservation-hero-background">
          <img src="/sepatarestaurant_1753090202_3680182292693909471_65649597383.webp" alt="Restaurant Interior" />
          <div className="reservation-hero-overlay"></div>
        </div>
        <motion.div 
          className="reservation-hero-content"
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <h1>Reserve Your Table</h1>
          <p>Experience unforgettable dining with stunning sea views</p>
        </motion.div>
      </section>

      {/* Reservation Form Section */}
      <section className="reservation-form-section section-padding" ref={formRef}>
        <div className="container">
          <div className="reservation-content">
            <motion.div 
              className="form-container"
              variants={fadeInLeft}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
            >
              <h2>Make a Reservation</h2>
              <p>Please fill out the form below and we'll confirm your reservation within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="reservation-form">
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
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+355 XX XXX XXX"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="guests">Number of Guests *</label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                    >
                      {guestOptions.map(option => (
                        <option key={option} value={option}>{option} {option === '1' ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Preferred Date *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">Preferred Time *</label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="specialRequests">Special Requests</label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Any dietary restrictions, special occasions, or other requests..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary submit-btn">
                  Submit Reservation
                </button>
              </form>
            </motion.div>

            <motion.div 
              className="reservation-info"
              variants={fadeInRight}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
            >
              <div className="info-card">
                <h3>Reservation Policy</h3>
                <ul>
                  <li>Reservations are confirmed within 24 hours</li>
                  <li>Please arrive within 15 minutes of your reservation time</li>
                  <li>For parties of 8 or more, please call directly</li>
                  <li>Cancellations must be made at least 2 hours in advance</li>
                </ul>
              </div>

              <div className="info-card">
                <h3>Contact Information</h3>
                <div className="contact-item">
                  <strong>Phone:</strong>
                  <span>+355 XX XXX XXX</span>
                </div>
                <div className="contact-item">
                  <strong>Email:</strong>
                  <span>reservations@sepata.al</span>
                </div>
                <div className="contact-item">
                  <strong>Address:</strong>
                  <span>Lungomare, Vlore, Albania</span>
                </div>
              </div>

              <div className="info-card">
                <h3>Opening Hours</h3>
                <div className="hours-item">
                  <span>Monday - Sunday</span>
                  <span>12:00 PM - 11:00 PM</span>
                </div>
                <div className="hours-item">
                  <span>Kitchen closes</span>
                  <span>10:30 PM</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section section-padding" ref={infoRef}>
        <div className="container">
          <motion.div 
            className="location-content"
            variants={fadeInUp}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
          >
            <h2>Find Us</h2>
            <p>Located in the heart of Lungomare, Vlore, with stunning views of the Adriatic Sea</p>
            
            <div className="location-details">
              <div className="location-info">
                <h3>Getting Here</h3>
                <p>
                  Sëpata Steak House is conveniently located on Vlore's famous Lungomare promenade. 
                  We're easily accessible by car with nearby parking available, or by foot if you're 
                  staying in the city center.
                </p>
                <div className="location-features">
                  <div className="feature">
                    <span className="feature-icon">🚗</span>
                    <span>Valet Parking Available</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🚶</span>
                    <span>5 min walk from city center</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🌊</span>
                    <span>Waterfront location</span>
                  </div>
                </div>
              </div>
              
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.8!2d19.4908!3d40.4686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI4JzA3LjAiTiAxOcKwMjknMjcuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '15px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sëpata Steak House Location"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="reservation-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            variants={fadeInUp}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
          >
            <h2>Prefer to Call?</h2>
            <p>Our reservation team is available to assist you</p>
            <a href="tel:+355XXXXXXX" className="btn-secondary">
              Call +355 XX XXX XXX
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Reservation;
