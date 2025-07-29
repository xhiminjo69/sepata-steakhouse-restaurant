import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [storyRef, storyInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [visionRef, visionInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.3, triggerOnce: true });
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
          <img src="/sepata-steakhouse-restaurant/sepatarestaurant_1751706218_3669900209010297573_65649597383.webp" alt="Sëpata Restaurant Interior" />
          <div className="about-hero-overlay"></div>
        </div>
        <motion.div 
          className="about-hero-content"
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <h1>{t('about.story_title')}</h1>
          <p>{t('about.hero_tagline')}</p>
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
              <h2>{t('about.story_title')}</h2>
              <p>{t('about.story_p1')}</p>
              <p>{t('about.story_p2')}</p>
              <p>{t('about.story_p3')}</p>
            </div>
            <div className="story-image">
              <img src="/sepata-steakhouse-restaurant/Screenshot 2025-07-29 180217.jpg" alt="Restaurant Ambiance" />
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
              <img src="/sepata-steakhouse-restaurant/sepatarestaurant_1747758600_3636673091845908237_65649597383.jpg" alt="Signature Dishes" />
            </div>
            <div className="vision-text">
              <h2>{t('about.mission_title')}</h2>
              <p>{t('about.vision_p1')}</p>
              <p>{t('about.vision_p2')}</p>
              <p>{t('about.vision_p3')}</p>
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
            <h2>{t('about.values_title')}</h2>
            <p>{t('about.values_subtitle')}</p>
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
              <h3>{t('about.value1_title')}</h3>
              <p>{t('about.value1_desc')}</p>
            </motion.div>
            <motion.div 
              className="value-item"
              variants={fadeInUp}
              initial="hidden"
              animate={teamInView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              <div className="value-icon">🌊</div>
              <h3>{t('about.value3_title')}</h3>
              <p>{t('about.value3_desc')}</p>
            </motion.div>
            <motion.div 
              className="value-item"
              variants={fadeInUp}
              initial="hidden"
              animate={teamInView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
            >
              <div className="value-icon">🤝</div>
              <h3>{t('about.value4_title')}</h3>
              <p>{t('about.value4_desc')}</p>
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
              <h2>{t('about.team_title')}</h2>
              <p>{t('about.team_p1')}</p>
              <p>{t('about.team_p2')}</p>
              <p>{t('about.team_p3')}</p>
            </div>
            <div className="team-image">
              <img src="/sepata-steakhouse-restaurant/Screenshot 2025-07-29 180439.jpg" alt="Our Team" />
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
            <h2>{t('about.location_title')}</h2>
            <p>{t('about.location_p1')}</p>
            <p>{t('about.location_p2')}</p>
            <div className="location-highlights">
              <div className="highlight-item">
                <h4>{t('about.highlight1_title')}</h4>
                <p>{t('about.highlight1_desc')}</p>
              </div>
              <div className="highlight-item">
                <h4>{t('about.highlight2_title')}</h4>
                <p>{t('about.highlight2_desc')}</p>
              </div>
              <div className="highlight-item">
                <h4>{t('about.highlight3_title')}</h4>
                <p>{t('about.highlight3_desc')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
