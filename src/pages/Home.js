import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

const Home = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [menuRef, menuInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [galleryRef, galleryInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const { t } = useLanguage();

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-image">
          <img src="/sepata-steakhouse-restaurant/LOGO SEPATA.jpg" alt="Sëpata Steak House" />
        </div>
        <motion.div 
          className="hero-content"
          variants={staggerContainer}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <motion.h1 variants={fadeInUp} className="hero-title">
            {t('home.welcome')} Sëpata
          </motion.h1>
          <motion.p variants={fadeInUp} className="hero-subtitle">
            {t('home.hero_subtitle')}
          </motion.p>
          <motion.p variants={fadeInUp} className="hero-description">
            {t('home.hero_description')}
          </motion.p>
          <motion.div variants={fadeInUp} className="hero-buttons">
            <Link to="/menu" className="btn-primary">{t('menu.title')}</Link>
            <Link to="/reservation" className="btn-secondary">{t('home.cta_button')}</Link>
          </motion.div>
        </motion.div>

      </section>

      {/* About Preview */}
      <section className="about-preview section-padding" ref={aboutRef}>
        <div className="container">
          <motion.div 
            className="about-content"
            variants={fadeInUp}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
          >
            <div className="about-text">
              <h2>{t('home.about_heading')}</h2>
              <p>
                {t('home.about_p1')}
              </p>
              <p>
                {t('home.about_p2')}
              </p>
              <Link to="/about" className="btn-secondary">{t('about.title')}</Link>
            </div>
            <div className="about-image">
              <img src="/sepata-steakhouse-restaurant/rreth nesh.png" alt="Restaurant Interior" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Highlight */}
      <section 
        className="menu-preview section-padding" 
        ref={menuRef}
        style={{
          backgroundImage: `url('/sepata-steakhouse-restaurant/sepatarestaurant_1747591912_3635386913221966564_65649597383.webp')`
        }}
      >
        <div className="container">
          <motion.div 
            className="menu-content"
            variants={fadeInUp}
            initial="hidden"
            animate={menuInView ? "visible" : "hidden"}
          >
            <div className="menu-header">
              <h2>{t('home.menu_heading')}</h2>
              <p>{t('home.menu_description')}</p>
            </div>
            <div className="menu-highlights">
              <div className="menu-item">
                <h3>{t('home.menu_item1_title')}</h3>
                <p>{t('home.menu_item1_desc')}</p>
                <span className="price">{t('home.menu_item1_price')}</span>
              </div>
              <div className="menu-item">
                <h3>{t('home.menu_item2_title')}</h3>
                <p>{t('home.menu_item2_desc')}</p>
                <span className="price">{t('home.menu_item2_price')}</span>
              </div>
              <div className="menu-item">
                <h3>{t('home.menu_item3_title')}</h3>
                <p>{t('home.menu_item3_desc')}</p>
                <span className="price">{t('home.menu_item3_price')}</span>
              </div>
            </div>
            <Link to="/menu" className="btn-primary">{t('menu.title')}</Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="gallery-preview section-padding" ref={galleryRef}>
        <div className="container">
          <motion.div 
            className="gallery-content"
            variants={fadeInUp}
            initial="hidden"
            animate={galleryInView ? "visible" : "hidden"}
          >
            <h2>{t('home.gallery_heading')}</h2>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/sepata-steakhouse-restaurant/sepatarestaurant_1747758600_3636673091845828801_65649597383.jpg" alt="Signature Dish" />
              </div>
              <div className="gallery-item">
                <img src="/sepata-steakhouse-restaurant/Screenshot 2025-07-29 180021.jpg" alt="Culinary Artistry" />
              </div>
              <div className="gallery-item">
                <img src="/sepata-steakhouse-restaurant/Screenshot 2025-07-29 180135.jpg" alt="Premium Dining" />
              </div>
              <div className="gallery-item">
                <img src="/sepata-steakhouse-restaurant/Screenshot 2025-07-29 180305.jpg" alt="Scenic Dining" />
              </div>
              <div className="gallery-item">
                <img src="/sepata-steakhouse-restaurant/sepatarestaurant_1752931601_3680179464441162780_65649597383.png" alt="Gourmet Dish Presentation" />
              </div>
              <div className="gallery-item">
                <img src="/sepata-steakhouse-restaurant/sepatarestaurant_1753205703_3682478802195952600_65649597383.png" alt="Exquisite Dining Setting" />
              </div>
            </div>
            <Link to="/gallery" className="btn-secondary">{t('gallery.title')}</Link>
          </motion.div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="reservation-cta" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/sepata-steakhouse-restaurant/sepatarestaurant_1753090202_3680182292693909471_65649597383.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          <motion.div 
            className="cta-content"
            variants={fadeInUp}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
          >
            <h2>{t('reservation.title')}</h2>
            <p>{t('home.reservation_description')}</p>
            <Link to="/reservation" className="btn-primary">{t('home.cta_button')}</Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="contact-preview section-padding" ref={contactRef}>
        <div className="container">
          <motion.div 
            className="contact-content"
            variants={fadeInUp}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
          >
            <div className="contact-info">
              <h2>{t('home.contact_heading')}</h2>
              <div className="contact-item">
                <h3>{t('home.location_heading')}</h3>
                <p>{t('home.location_address')}</p>
              </div>
              <div className="contact-item">
                <h3>{t('home.hours_heading')}</h3>
                <p>{t('home.hours_value')}</p>
              </div>
              <div className="contact-item">
                <h3>{t('home.reservations_heading')}</h3>
                <p>{t('home.reservations_phone')}</p>
              </div>
              <Link to="/contact" className="btn-secondary">{t('contact.title')}</Link>
            </div>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d97171.21030930363!2d19.4131403!3d40.4398482!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d40.4459885!2d19.4941645!4m5!1s0x13453331cc8fee15%3A0xb9568441f3a08996!2sLungo%20Mare%2C%20Murat%20Terba%C3%A7i%2C%20Vlor%C3%AB!3m2!1d40.4398775!2d19.495541199999998!5e0!3m2!1sen!2s!4v1753809939748!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sëpata Steak House Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
