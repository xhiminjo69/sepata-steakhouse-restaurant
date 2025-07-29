import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [galleryRef, galleryInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const { t } = useLanguage();

  const fadeInUp = {
    hidden: { opacity: 0.8, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const galleryImages = [
    {
      src: '/sepata-steakhouse-restaurant/sepatarestaurant_1747758600_3636673091845828801_65649597383.jpg',
      alt: 'Signature Steak Dish',
      category: 'food',
      title: 'Premium Ribeye Steak'
    },
    {
      src: '/sepata-steakhouse-restaurant/sepatarestaurant_1747758600_3636673091845908237_65649597383.jpg',
      alt: 'Gourmet Plating',
      category: 'food',
      title: 'Artisanal Presentation'
    },
    {
      src: '/sepata-steakhouse-restaurant/sepatarestaurant_1751706218_3669900208993574167_65649597383.webp',
      alt: 'Restaurant Interior',
      category: 'interior',
      title: 'Elegant Dining Room'
    },
    {
      src: '/sepata-steakhouse-restaurant/sepatarestaurant_1751706218_3669900209010297573_65649597383.webp',
      alt: 'Dining Ambiance',
      category: 'interior',
      title: 'Sophisticated Atmosphere'
    },
    {
      src: '/sepata-steakhouse-restaurant/sepatarestaurant_1752076851_3673008916742566714_65649597383.webp',
      alt: 'Sea View Dining',
      category: 'views',
      title: 'Adriatic Sea Views'
    },
    {
      src: '/sepata-steakhouse-restaurant/sepatarestaurant_1753090202_3680182292693909471_65649597383.webp',
      alt: 'Fine Dining Experience',
      category: 'interior',
      title: 'Intimate Setting'
    },
    {
      src: '/sepata-steakhouse-restaurant/sepatarestaurant_1753090202_3680182292735638364_65649597383.webp',
      alt: 'Chef at Work',
      category: 'kitchen',
      title: 'Culinary Artistry'
    },
    {
      src: '/sepata-steakhouse-restaurant/sepatarestaurant_1747591912_3635386913221966564_65649597383.webp',
      alt: 'Restaurant Exterior',
      category: 'exterior',
      title: 'Lungomare Location'
    },
    {
      src: '/sepata-steakhouse-restaurant/Hero section.jpg',
      alt: 'Restaurant Hero',
      category: 'interior',
      title: 'Welcome to Sëpata'
    },
    {
      src: '/sepata-steakhouse-restaurant/Screenshot 2025-07-29 175943.jpg',
      alt: 'Restaurant Experience',
      category: 'interior',
      title: 'Dining Excellence'
    },
    {
      src: '/sepata-steakhouse-restaurant/Screenshot 2025-07-29 180021.jpg',
      alt: 'Culinary Artistry',
      category: 'food',
      title: 'Gourmet Creations'
    },
    {
      src: '/sepata-steakhouse-restaurant/Screenshot 2025-07-29 180135.jpg',
      alt: 'Premium Dining',
      category: 'interior',
      title: 'Elegant Atmosphere'
    },
    {
      src: '/sepata-steakhouse-restaurant/Screenshot 2025-07-29 180217.jpg',
      alt: 'Restaurant Ambiance',
      category: 'interior',
      title: 'Sophisticated Setting'
    },
    {
      src: '/sepata-steakhouse-restaurant/Screenshot 2025-07-29 180305.jpg',
      alt: 'Fine Dining Experience',
      category: 'views',
      title: 'Scenic Dining'
    },
    {
      src: '/sepata-steakhouse-restaurant/Screenshot 2025-07-29 180439.jpg',
      alt: 'Restaurant Details',
      category: 'interior',
      title: 'Attention to Detail'
    },
    {
      src: '/sepata-steakhouse-restaurant/sepatarestaurant_1753205703_3682478802195952600_65649597383.png',
      alt: 'Exquisite Dining Setting',
      category: 'interior',
      title: 'Luxurious Dining Experience'
    },
    {
      src: '/sepata-steakhouse-restaurant/sepatarestaurant_1752931601_3680179464441162780_65649597383.png',
      alt: 'Gourmet Dish Presentation',
      category: 'food',
      title: 'Culinary Excellence'
    },
    {
      src: '/sepata-steakhouse-restaurant/sepatarestaurant_1752048016_3672767506730798798_65649597383.png',
      alt: 'Restaurant Atmosphere',
      category: 'interior',
      title: 'Elegant Ambiance'
    },
    {
      src: '/sepata-steakhouse-restaurant/sepatarestaurant_1751915026_3671651815005315746_65649597383.png',
      alt: 'Signature Dish',
      category: 'food',
      title: 'Chefs Special Creation'
    },
    {
      src: '/sepata-steakhouse-restaurant/sepatarestaurant_1751804495_3670724619738287426_65649597383.png',
      alt: 'Outdoor Dining Area',
      category: 'exterior',
      title: 'Terrace Dining Experience'
    },
    {
      src: '/sepata-steakhouse-restaurant/sepatarestaurant_1749888011_3654647984667456269_65649597383.png',
      alt: 'Restaurant View',
      category: 'views',
      title: 'Panoramic Scenery'
    }
  ];

  const categories = [
    { id: 'all', name: t('gallery.all_photos'), icon: '📸' },
    { id: 'food', name: t('gallery.cuisine'), icon: '🍽️' },
    { id: 'interior', name: t('gallery.interior'), icon: '🏛️' },
    { id: 'views', name: t('gallery.sea_views'), icon: '🌊' },
    { id: 'kitchen', name: t('gallery.kitchen'), icon: '👨‍🍳' },
    { id: 'exterior', name: t('gallery.interior'), icon: '🏢' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image, index) => {
    setSelectedImage({ ...image, index });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage({ ...filteredImages[newIndex], index: newIndex });
  };

  return (
    <motion.div 
      className="gallery-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="gallery-hero" ref={heroRef}>
        <div className="gallery-hero-background">
          <img src="/sepata-steakhouse-restaurant/sepatarestaurant_1752076851_3673008916742566714_65649597383.webp" alt="Gallery Hero" />
          <div className="gallery-hero-overlay"></div>
        </div>
        <motion.div 
          className="gallery-hero-content"
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <h1>{t('gallery.title')}</h1>
          <p>{t('gallery.subtitle')}</p>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section section-padding" ref={galleryRef}>
        <div className="container">
          <motion.div 
            className="gallery-content"
            variants={fadeInUp}
            initial={{ opacity: 1, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Category Filter */}
            <div className="gallery-filters">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="filter-icon">{category.icon}</span>
                  <span className="filter-name">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Image Grid */}
            <motion.div 
              className="gallery-grid"
              layout
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence>
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.src}
                    className="gallery-item"
                    layout
                    initial={{ opacity: 1, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => openLightbox(image, index)}
                  >
                    <div className="image-container">
                      <img src={image.src} alt={image.alt} />
                      <div className="image-overlay">
                        <div className="image-info">
                          <h3>{image.title}</h3>
                          <p>{t('gallery.click_to_view')}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={closeLightbox}>
                ×
              </button>
              
              <button 
                className="lightbox-nav lightbox-prev" 
                onClick={() => navigateImage('prev')}
              >
                ‹
              </button>
              
              <div className="lightbox-image-container">
                <img src={selectedImage.src} alt={selectedImage.alt} />
                <div className="lightbox-info">
                  <h3>{selectedImage.title}</h3>
                </div>
              </div>
              
              <button 
                className="lightbox-nav lightbox-next" 
                onClick={() => navigateImage('next')}
              >
                ›
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Info Section */}
      <section className="gallery-info-section section-padding">
        <div className="container">
          <motion.div 
            className="gallery-info-content"
            variants={fadeInUp}
            initial="hidden"
            animate={galleryInView ? "visible" : "hidden"}
          >
            <h2>{t('gallery.capturing_moments')}</h2>
            <p>{t('gallery.description_1')}</p>
            <p>{t('gallery.description_2')}</p>
            <div className="gallery-stats">
              <div className="stat-item">
                <h3>{t('gallery.premium_ingredients')}</h3>
                <p>{t('gallery.premium_ingredients_desc')}</p>
              </div>
              <div className="stat-item">
                <h3>{t('gallery.artisanal_preparation')}</h3>
                <p>{t('gallery.artisanal_preparation_desc')}</p>
              </div>
              <div className="stat-item">
                <h3>{t('gallery.elegant_presentation')}</h3>
                <p>{t('gallery.elegant_presentation_desc')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Gallery;
