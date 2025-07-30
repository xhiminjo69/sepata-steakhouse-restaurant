import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';
import './Reservation.css';

const Reservation = () => {
  const { t } = useLanguage();
  
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
          <img src="/sepata-steakhouse-restaurant/sepatarestaurant_1753090202_3680182292693909471_65649597383.webp" alt="Restaurant Interior" />
          <div className="reservation-hero-overlay"></div>
        </div>
        <motion.div 
          className="reservation-hero-content"
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <h1>{t('reservation.title')}</h1>
          <p>{t('home.reservation_description')}</p>
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
              <h2>{t('reservation.title')}</h2>
              <p>{t('reservation.form_description')}</p>
              
              <form onSubmit={handleSubmit} className="reservation-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">{t('reservation.name')}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder={t('reservation.name_placeholder')}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">{t('reservation.email')}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder={t('reservation.email_placeholder')}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">{t('reservation.phone')}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder={t('reservation.phone_placeholder')}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="guests">{t('reservation.guests')}</label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                    >
                      {guestOptions.map(option => (
                        <option key={option} value={option}>{option} {option === '1' ? t('reservation.guest') : t('reservation.guests')}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">{t('reservation.date')}</label>
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
                    <label htmlFor="time">{t('reservation.time')}</label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">{t('reservation.select_time')}</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="specialRequests">{t('reservation.special_requests')}</label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder={t('reservation.special_requests_placeholder')}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary submit-btn">
                  {t('reservation.submit')}
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
                <h3>{t('reservation.policy')}</h3>
                <ul>
                  <li>{t('reservation.policy_1')}</li>
                  <li>{t('reservation.policy_2')}</li>
                  <li>{t('reservation.policy_3')}</li>
                  <li>{t('reservation.policy_4')}</li>
                </ul>
              </div>

              <div className="info-card">
                <h3>{t('reservation.contact_info')}</h3>
                <div className="contact-item">
                  <strong>{t('reservation.phone_label')}</strong>
                  <span>+355 69 209 5155</span>
                </div>
                <div className="contact-item">
                  <strong>{t('reservation.email_label')}</strong>
                  <span>reservations@sepata.al</span>
                </div>
                <div className="contact-item">
                  <strong>{t('reservation.address_label')}</strong>
                  <span>Lungomare, Vlore, Albania</span>
                </div>
              </div>

              <div className="info-card">
                <h3>{t('reservation.opening_hours')}</h3>
                <div className="hours-item">
                  <span>{t('reservation.monday_sunday')}</span>
                  <span>{t('reservation.hours')}</span>
                </div>
                <div className="hours-item">
                  <span>{t('reservation.kitchen_closes')}</span>
                  <span>{t('reservation.kitchen_time')}</span>
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
            <h2>{t('reservation.find_us')}</h2>
            <p>{t('reservation.location_description')}</p>
            
            <div className="location-details">
              <div className="location-info">
                <h3>{t('reservation.getting_here')}</h3>
                <p>{t('reservation.directions')}</p>
                <div className="location-features">
                  <div className="feature">
                    <span className="feature-icon">🚗</span>
                    <span>{t('reservation.valet_parking')}</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🚶</span>
                    <span>{t('reservation.walking_distance')}</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🌊</span>
                    <span>{t('reservation.waterfront')}</span>
                  </div>
                </div>
              </div>
              
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d97171.21023993204!2d19.413140332447057!3d40.43984824799447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x13453331cc8fee15%3A0xb9568441f3a08996!2sLungo%20Mare%2C%20Murat%20Terba%C3%A7i%2C%20Vlor%C3%AB!3m2!1d40.4398775!2d19.495541199999998!5e0!3m2!1sen!2s!4v1753823844694!5m2!1sen!2s"
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
            <h2>{t('reservation.prefer_call')}</h2>
            <p>{t('reservation.call_description')}</p>
            <a href="tel:+355XXXXXXX" className="btn-secondary">
              {t('reservation.call_button')}
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Reservation;
