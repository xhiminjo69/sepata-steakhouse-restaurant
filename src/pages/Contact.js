import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';
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
  const { t } = useLanguage();

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
          <img src="/sepata-steakhouse-restaurant/sepatarestaurant_1752931601_3680179464441162780_65649597383.png" alt="Contact Us" />
          <div className="contact-hero-overlay"></div>
        </div>
        <motion.div 
          className="contact-hero-content"
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.subtitle')}</p>
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
              <h2>{t('contact.get_in_touch')}</h2>
              <p>{t('contact.form_description')}</p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">{t('contact.name')} *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder={t('contact.name_placeholder')}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">{t('contact.email')} *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder={t('contact.email_placeholder')}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">{t('contact.phone')}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={t('contact.phone_placeholder')}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">{t('contact.subject')} *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">{t('contact.select_subject')}</option>
                      <option value="reservation">{t('contact.reservation_inquiry')}</option>
                      <option value="event">{t('contact.private_event')}</option>
                      <option value="feedback">{t('contact.feedback')}</option>
                      <option value="catering">{t('contact.catering')}</option>
                      <option value="other">{t('contact.other')}</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('contact.message')} *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder={t('contact.message_placeholder')}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary submit-btn">
                  {t('contact.send_message')}
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
                <h3>{t('contact.visit_us')}</h3>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <strong>{t('contact.address_label')}</strong>
                    <span>Lungomare, Vlore, Albania</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-details">
                    <strong>{t('contact.phone_label')}</strong>
                    <span>+355 69 209 5155</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-details">
                    <strong>{t('contact.email_label')}</strong>
                    <span>info@sepata.al</span>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h3>{t('contact.opening_hours')}</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>{t('contact.monday_sunday')}</span>
                    <span>{t('contact.hours')}</span>
                  </div>
                  <div className="hours-item">
                    <span>{t('contact.kitchen_closes')}</span>
                    <span>{t('contact.kitchen_time')}</span>
                  </div>

                </div>
              </div>

              <div className="info-card">
                <h3>{t('contact.follow_us')}</h3>
                <div className="social-links">

                  <a href="https://www.instagram.com/sepatarestaurant/" className="social-link" aria-label="Instagram">
                    <div className="social-icon">📷</div>
                    <span>{t('contact.instagram')}</span>
                  </a>
                  <a href="https://www.tripadvisor.com/Restaurant_Review-g678774-d27694011-Reviews-Steak_House_Sepata_Restaurant-Vlore_Vlore_County.html" className="social-link" aria-label="TripAdvisor">
                    <div className="social-icon">🦉</div>
                    <span>{t('contact.tripadvisor')}</span>
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
            <h2>{t('contact.find_us_map')}</h2>
            <p>{t('contact.map_description')}</p>
            
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
                <h4>{t('contact.easy_to_find')}</h4>
                <p>{t('contact.easy_to_find_desc')}</p>
              </div>
              <div className="map-feature">
                <h4>{t('contact.parking_available')}</h4>
                <p>{t('contact.parking_desc')}</p>
              </div>
              <div className="map-feature">
                <h4>{t('contact.public_transport')}</h4>
                <p>{t('contact.transport_desc')}</p>
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
            <h2>{t('contact.faq_title')}</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>{t('contact.faq1_q')}</h4>
                <p>{t('contact.faq1_a')}</p>
              </div>
              <div className="faq-item">
                <h4>{t('contact.faq2_q')}</h4>
                <p>{t('contact.faq2_a')}</p>
              </div>
              <div className="faq-item">
                <h4>{t('contact.faq3_q')}</h4>
                <p>{t('contact.faq3_a')}</p>
              </div>
              <div className="faq-item">
                <h4>{t('contact.faq4_q')}</h4>
                <p>{t('contact.faq4_a')}</p>
              </div>
              <div className="faq-item">
                <h4>{t('contact.faq5_q')}</h4>
                <p>{t('contact.faq5_a')}</p>
              </div>
              <div className="faq-item">
                <h4>{t('contact.faq6_q')}</h4>
                <p>{t('contact.faq6_a')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
