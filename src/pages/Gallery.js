import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [galleryRef, galleryInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const galleryImages = [
    {
      src: '/sepatarestaurant_1747758600_3636673091845828801_65649597383.jpg',
      alt: 'Signature Steak Dish',
      category: 'food',
      title: 'Premium Ribeye Steak'
    },
    {
      src: '/sepatarestaurant_1747758600_3636673091845908237_65649597383.jpg',
      alt: 'Gourmet Plating',
      category: 'food',
      title: 'Artisanal Presentation'
    },
    {
      src: '/sepatarestaurant_1751706218_3669900208993574167_65649597383.webp',
      alt: 'Restaurant Interior',
      category: 'interior',
      title: 'Elegant Dining Room'
    },
    {
      src: '/sepatarestaurant_1751706218_3669900209010297573_65649597383.webp',
      alt: 'Dining Ambiance',
      category: 'interior',
      title: 'Sophisticated Atmosphere'
    },
    {
      src: '/sepatarestaurant_1752076851_3673008916742566714_65649597383.webp',
      alt: 'Sea View Dining',
      category: 'views',
      title: 'Adriatic Sea Views'
    },
    {
      src: '/sepatarestaurant_1753090202_3680182292693909471_65649597383.webp',
      alt: 'Fine Dining Experience',
      category: 'interior',
      title: 'Intimate Setting'
    },
    {
      src: '/sepatarestaurant_1753090202_3680182292735638364_65649597383.webp',
      alt: 'Chef at Work',
      category: 'kitchen',
      title: 'Culinary Artistry'
    },
    {
      src: '/sepatarestaurant_1747591912_3635386913221966564_65649597383.webp',
      alt: 'Restaurant Exterior',
      category: 'exterior',
      title: 'Lungomare Location'
    },
    {
      src: '/Hero section.jpg',
      alt: 'Restaurant Hero',
      category: 'interior',
      title: 'Welcome to Sëpata'
    },
    {
      src: '/Screenshot 2025-07-29 175943.jpg',
      alt: 'Restaurant Experience',
      category: 'interior',
      title: 'Dining Excellence'
    },
    {
      src: '/Screenshot 2025-07-29 180021.jpg',
      alt: 'Culinary Artistry',
      category: 'food',
      title: 'Gourmet Creations'
    },
    {
      src: '/Screenshot 2025-07-29 180135.jpg',
      alt: 'Premium Dining',
      category: 'interior',
      title: 'Elegant Atmosphere'
    },
    {
      src: '/Screenshot 2025-07-29 180217.jpg',
      alt: 'Restaurant Ambiance',
      category: 'interior',
      title: 'Sophisticated Setting'
    },
    {
      src: '/Screenshot 2025-07-29 180305.jpg',
      alt: 'Fine Dining Experience',
      category: 'views',
      title: 'Scenic Dining'
    },
    {
      src: '/Screenshot 2025-07-29 180439.jpg',
      alt: 'Restaurant Details',
      category: 'interior',
      title: 'Attention to Detail'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', icon: '📸' },
    { id: 'food', name: 'Cuisine', icon: '🍽️' },
    { id: 'interior', name: 'Interior', icon: '🏛️' },
    { id: 'views', name: 'Sea Views', icon: '🌊' },
    { id: 'kitchen', name: 'Kitchen', icon: '👨‍🍳' },
    { id: 'exterior', name: 'Exterior', icon: '🏢' }
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
          <img src="/sepatarestaurant_1752076851_3673008916742566714_65649597383.webp" alt="Gallery Hero" />
          <div className="gallery-hero-overlay"></div>
        </div>
        <motion.div 
          className="gallery-hero-content"
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <h1>Gallery</h1>
          <p>A visual journey through our culinary world</p>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section section-padding" ref={galleryRef}>
        <div className="container">
          <motion.div 
            className="gallery-content"
            variants={fadeInUp}
            initial="hidden"
            animate={galleryInView ? "visible" : "hidden"}
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
                    initial={{ opacity: 0, scale: 0.8 }}
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
                          <p>Click to view</p>
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
            <h2>Capturing Moments</h2>
            <p>
              Every image tells a story of our commitment to excellence. From the artful presentation 
              of our signature dishes to the elegant ambiance of our dining rooms, these photographs 
              showcase the attention to detail that makes Sëpata a truly special destination.
            </p>
            <p>
              Located along Vlore's stunning Lungomare, our restaurant offers not just exceptional 
              cuisine, but also breathtaking views of the Adriatic Sea. Whether you're celebrating 
              a special occasion or simply enjoying an evening out, Sëpata provides the perfect 
              backdrop for unforgettable memories.
            </p>
            <div className="gallery-stats">
              <div className="stat-item">
                <h3>Premium Ingredients</h3>
                <p>Sourced from the finest suppliers</p>
              </div>
              <div className="stat-item">
                <h3>Artisanal Preparation</h3>
                <p>Crafted by expert chefs</p>
              </div>
              <div className="stat-item">
                <h3>Elegant Presentation</h3>
                <p>Every dish is a work of art</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Gallery;
