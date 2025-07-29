import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [storyRef, storyInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [visionRef, visionInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.3, triggerOnce: true });

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

  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="about-hero" ref={heroRef}>
        <div className="about-hero-background">
          <img src="/sepatarestaurant_1751706218_3669900209010297573_65649597383.webp" alt="Sëpata Restaurant Interior" />
          <div className="about-hero-overlay"></div>
        </div>
        <motion.div 
          className="about-hero-content"
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <h1>Our Story</h1>
          <p>Where culinary passion meets Albanian hospitality</p>
        </motion.div>
      </section>

      {/* Main Story Section */}
      <section className="story-section section-padding" ref={storyRef}>
        <div className="container">
          <motion.div 
            className="story-content"
            variants={fadeInLeft}
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
          >
            <div className="story-text">
              <h2>The Beginning</h2>
              <p>
                Sëpata Steak House was born from a dream to create something extraordinary along the stunning coastline of Vlore. Our founders, passionate about both exceptional cuisine and the rich culinary heritage of Albania, envisioned a place where international steakhouse excellence would meet the warmth of Albanian hospitality.
              </p>
              <p>
                Located in the heart of Lungomare, our restaurant offers more than just a meal – it provides an experience. The gentle sound of waves from the Adriatic Sea creates the perfect backdrop for intimate dinners, business meetings, and celebrations that deserve to be remembered.
              </p>
              <p>
                Every detail of Sëpata has been carefully crafted to reflect our commitment to excellence. From the carefully selected artwork that adorns our walls to the premium cuts of meat that grace our plates, we believe that dining should be an art form.
              </p>
            </div>
            <div className="story-image">
              <img src="/Screenshot 2025-07-29 180217.jpg" alt="Restaurant Ambiance" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section section-padding" ref={visionRef}>
        <div className="container">
          <motion.div 
            className="vision-content"
            variants={fadeInRight}
            initial="hidden"
            animate={visionInView ? "visible" : "hidden"}
          >
            <div className="vision-image">
              <img src="/sepatarestaurant_1747758600_3636673091845908237_65649597383.jpg" alt="Signature Dishes" />
            </div>
            <div className="vision-text">
              <h2>Our Vision</h2>
              <p>
                At Sëpata, we believe that great food brings people together. Our vision extends beyond serving exceptional steaks – we aim to create a culinary destination that celebrates the beauty of Vlore while honoring the traditions of fine dining.
              </p>
              <p>
                We source our ingredients with the utmost care, working with local suppliers who share our commitment to quality. Our steaks are aged to perfection, our seafood is caught fresh from the Adriatic, and our vegetables are sourced from the fertile lands of Albania.
              </p>
              <p>
                The location in Lungomare is not just our address – it's an integral part of our identity. The sea breeze, the sunset views, and the vibrant energy of Vlore's waterfront all contribute to the unique atmosphere that makes dining at Sëpata an unforgettable experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section-padding">
        <div className="container">
          <motion.div 
            className="values-header"
            variants={fadeInUp}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
          >
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </motion.div>
          <div className="values-grid" ref={teamRef}>
            <motion.div 
              className="value-item"
              variants={fadeInUp}
              initial="hidden"
              animate={teamInView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <div className="value-icon">🥩</div>
              <h3>Quality Excellence</h3>
              <p>We never compromise on the quality of our ingredients or the precision of our preparation. Every dish that leaves our kitchen meets our exacting standards.</p>
            </motion.div>
            <motion.div 
              className="value-item"
              variants={fadeInUp}
              initial="hidden"
              animate={teamInView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              <div className="value-icon">🌊</div>
              <h3>Coastal Heritage</h3>
              <p>Our location by the sea is central to our identity. We celebrate the maritime culture of Vlore while creating a sophisticated dining atmosphere.</p>
            </motion.div>
            <motion.div 
              className="value-item"
              variants={fadeInUp}
              initial="hidden"
              animate={teamInView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
            >
              <div className="value-icon">🤝</div>
              <h3>Albanian Hospitality</h3>
              <p>Warmth, generosity, and genuine care for our guests are at the heart of the Albanian spirit, and these values define every interaction at Sëpata.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section-padding">
        <div className="container">
          <motion.div 
            className="team-content"
            variants={fadeInUp}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
          >
            <div className="team-text">
              <h2>Our Team</h2>
              <p>
                Behind every exceptional meal at Sëpata is a team of dedicated professionals who share our passion for culinary excellence. Our chefs bring years of international experience, having trained in some of Europe's finest kitchens, while our service team embodies the warmth and professionalism that Albanian hospitality is known for.
              </p>
              <p>
                From our head chef who carefully selects each cut of meat, to our sommelier who curates our wine selection, to our servers who ensure every detail of your experience is perfect – every member of our team is committed to making your visit to Sëpata truly memorable.
              </p>
              <p>
                We believe that great restaurants are built by great people, and we're proud of the family we've created here at Sëpata.
              </p>
            </div>
            <div className="team-image">
              <img src="/Screenshot 2025-07-29 180439.jpg" alt="Our Team" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section section-padding">
        <div className="container">
          <motion.div 
            className="location-content"
            variants={fadeInUp}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
          >
            <h2>Lungomare, Vlore</h2>
            <p>
              Nestled along Vlore's beautiful Lungomare, Sëpata enjoys one of the most spectacular locations on the Albanian coast. Our restaurant offers panoramic views of the Adriatic Sea, where guests can watch the sun set over the water while enjoying their meal.
            </p>
            <p>
              The Lungomare is the heart of Vlore's social and cultural life, a place where locals and visitors alike come to enjoy the sea breeze and the vibrant atmosphere. Being part of this community is both an honor and a responsibility that we take seriously.
            </p>
            <div className="location-highlights">
              <div className="highlight-item">
                <h4>Seaside Dining</h4>
                <p>Panoramic views of the Adriatic Sea</p>
              </div>
              <div className="highlight-item">
                <h4>Prime Location</h4>
                <p>Heart of Vlore's Lungomare promenade</p>
              </div>
              <div className="highlight-item">
                <h4>Sunset Views</h4>
                <p>Perfect setting for romantic dinners</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
