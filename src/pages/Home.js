import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Home.css';

const Home = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [menuRef, menuInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [galleryRef, galleryInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.3, triggerOnce: true });

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
        <div className="hero-background">
          <img src={`${process.env.PUBLIC_URL}/LOGO SEPATA.jpg`} alt="Sëpata Steak House" />
          <div className="hero-overlay"></div>
        </div>
        <motion.div 
          className="hero-content"
          variants={staggerContainer}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <motion.h1 variants={fadeInUp} className="hero-title">
            Welcome to Sëpata
          </motion.h1>
          <motion.p variants={fadeInUp} className="hero-subtitle">
            Premium Steakhouse Experience in Lungomare, Vlore
          </motion.p>
          <motion.p variants={fadeInUp} className="hero-description">
            Indulge in the finest cuts of meat with breathtaking sea views, where culinary excellence meets Albanian hospitality.
          </motion.p>
          <motion.div variants={fadeInUp} className="hero-buttons">
            <Link to="/menu" className="btn-primary">View Menu</Link>
            <Link to="/reservation" className="btn-secondary">Make a Reservation</Link>
          </motion.div>
        </motion.div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
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
              <h2>Our Story</h2>
              <p>
                Nestled along the beautiful Lungomare of Vlore, Sëpata Steak House represents the pinnacle of fine dining in Albania. Our passion for exceptional cuisine and warm hospitality creates an unforgettable experience where the Mediterranean meets premium steakhouse tradition.
              </p>
              <p>
                With panoramic views of the Adriatic Sea and a commitment to sourcing the finest ingredients, we offer our guests a culinary journey that celebrates both international flavors and local Albanian heritage.
              </p>
              <Link to="/about" className="btn-secondary">Read More</Link>
            </div>
            <div className="about-image">
              <img src={`${process.env.PUBLIC_URL}/sepatarestaurant_1751706218_3669900208993574167_65649597383.webp`} alt="Restaurant Interior" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Highlight */}
      <section 
        className="menu-preview section-padding" 
        ref={menuRef}
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/sepatarestaurant_1747591912_3635386913221966564_65649597383.webp')`
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
              <h2>Culinary Excellence</h2>
              <p>Discover our carefully crafted menu featuring premium steaks, fresh seafood, and exquisite Albanian specialties.</p>
            </div>
            <div className="menu-highlights">
              <div className="menu-item">
                <h3>Premium Steaks</h3>
                <p>Aged to perfection and grilled to your preference</p>
                <span className="price">From €35</span>
              </div>
              <div className="menu-item">
                <h3>Fresh Seafood</h3>
                <p>Daily catch from the Adriatic Sea</p>
                <span className="price">From €28</span>
              </div>
              <div className="menu-item">
                <h3>Albanian Specialties</h3>
                <p>Traditional dishes with a modern twist</p>
                <span className="price">From €22</span>
              </div>
            </div>
            <Link to="/menu" className="btn-primary">See Full Menu</Link>
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
            <h2>Experience Sëpata</h2>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src={`${process.env.PUBLIC_URL}/sepatarestaurant_1747758600_3636673091845828801_65649597383.jpg`} alt="Signature Dish" />
              </div>
              <div className="gallery-item">
                <img src={`${process.env.PUBLIC_URL}/Screenshot 2025-07-29 180021.jpg`} alt="Culinary Artistry" />
              </div>
              <div className="gallery-item">
                <img src={`${process.env.PUBLIC_URL}/Screenshot 2025-07-29 180135.jpg`} alt="Premium Dining" />
              </div>
              <div className="gallery-item">
                <img src={`${process.env.PUBLIC_URL}/Screenshot 2025-07-29 180305.jpg`} alt="Scenic Dining" />
              </div>
            </div>
            <Link to="/gallery" className="btn-secondary">View Gallery</Link>
          </motion.div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="reservation-cta" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${process.env.PUBLIC_URL}/sepatarestaurant_1753090202_3680182292693909471_65649597383.webp')`,
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
            <h2>Reserve Your Table</h2>
            <p>Experience unforgettable dining with stunning sea views</p>
            <Link to="/reservation" className="btn-primary">Make a Reservation</Link>
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
              <h2>Visit Us</h2>
              <div className="contact-item">
                <h3>Location</h3>
                <p>Lungomare, Vlore, Albania</p>
              </div>
              <div className="contact-item">
                <h3>Hours</h3>
                <p>Daily: 12:00 PM - 11:00 PM</p>
              </div>
              <div className="contact-item">
                <h3>Reservations</h3>
                <p>+355 XX XXX XXX</p>
              </div>
              <Link to="/contact" className="btn-secondary">Contact Us</Link>
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
