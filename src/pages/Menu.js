import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [menuRef, menuInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const menuCategories = [
    { id: 'starters', name: 'Starters', icon: '🥗' },
    { id: 'steaks', name: 'Premium Steaks', icon: '🥩' },
    { id: 'mains', name: 'Main Courses', icon: '🍽️' },
    { id: 'seafood', name: 'Fresh Seafood', icon: '🦞' },
    { id: 'sides', name: 'Sides', icon: '🥔' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'beverages', name: 'Beverages', icon: '🍷' }
  ];

  const menuItems = {
    starters: [
      {
        name: 'Carpaccio di Manzo',
        description: 'Thinly sliced raw beef tenderloin with arugula, parmesan, and truffle oil',
        price: '€18'
      },
      {
        name: 'Burrata Pugliese',
        description: 'Fresh burrata cheese with roasted tomatoes, basil, and aged balsamic',
        price: '€16'
      },
      {
        name: 'Antipasto Sëpata',
        description: 'Selection of cured meats, artisanal cheeses, and marinated vegetables',
        price: '€22'
      },
      {
        name: 'Tuna Tartare',
        description: 'Fresh Adriatic tuna with avocado, citrus, and sesame seeds',
        price: '€20'
      },
      {
        name: 'Foie Gras',
        description: 'Pan-seared foie gras with fig compote and brioche toast',
        price: '€28'
      }
    ],
    steaks: [
      {
        name: 'Ribeye Premium',
        description: '400g dry-aged ribeye steak, perfectly marbled and grilled to perfection',
        price: '€45'
      },
      {
        name: 'Filet Mignon',
        description: '300g tender beef tenderloin with herb butter and roasted garlic',
        price: '€42'
      },
      {
        name: 'T-Bone Steak',
        description: '500g premium T-bone with both tenderloin and strip steak',
        price: '€48'
      },
      {
        name: 'Wagyu Sirloin',
        description: '250g Japanese Wagyu sirloin with black truffle sauce',
        price: '€65'
      },
      {
        name: 'Tomahawk Steak',
        description: '800g bone-in ribeye, perfect for sharing (serves 2-3)',
        price: '€85'
      }
    ],
    mains: [
      {
        name: 'Lamb Rack',
        description: 'Herb-crusted rack of lamb with rosemary jus and roasted vegetables',
        price: '€38'
      },
      {
        name: 'Duck Breast',
        description: 'Pan-seared duck breast with cherry sauce and potato gratin',
        price: '€34'
      },
      {
        name: 'Pork Tenderloin',
        description: 'Stuffed pork tenderloin with prosciutto and sage, apple compote',
        price: '€28'
      },
      {
        name: 'Chicken Supreme',
        description: 'Free-range chicken breast with wild mushroom risotto',
        price: '€26'
      },
      {
        name: 'Veal Osso Buco',
        description: 'Slow-braised veal shank with saffron risotto and gremolata',
        price: '€36'
      }
    ],
    seafood: [
      {
        name: 'Adriatic Sea Bass',
        description: 'Whole grilled sea bass with Mediterranean herbs and lemon',
        price: '€32'
      },
      {
        name: 'Lobster Thermidor',
        description: 'Fresh lobster with cognac cream sauce and gruyere cheese',
        price: '€55'
      },
      {
        name: 'Grilled Octopus',
        description: 'Tender octopus with olive oil, herbs, and roasted peppers',
        price: '€28'
      },
      {
        name: 'Salmon Fillet',
        description: 'Norwegian salmon with dill sauce and seasonal vegetables',
        price: '€30'
      },
      {
        name: 'Seafood Platter',
        description: 'Mixed grilled seafood with prawns, calamari, and mussels',
        price: '€42'
      }
    ],
    sides: [
      {
        name: 'Truffle Mac & Cheese',
        description: 'Creamy macaroni with black truffle and aged parmesan',
        price: '€14'
      },
      {
        name: 'Grilled Asparagus',
        description: 'Fresh asparagus with hollandaise sauce and almonds',
        price: '€10'
      },
      {
        name: 'Roasted Potatoes',
        description: 'Herb-roasted baby potatoes with rosemary and garlic',
        price: '€8'
      },
      {
        name: 'Sautéed Spinach',
        description: 'Fresh spinach with garlic, pine nuts, and parmesan',
        price: '€9'
      },
      {
        name: 'Wild Mushrooms',
        description: 'Mixed wild mushrooms sautéed with herbs and white wine',
        price: '€12'
      }
    ],
    desserts: [
      {
        name: 'Tiramisu Classico',
        description: 'Traditional Italian tiramisu with espresso and mascarpone',
        price: '€12'
      },
      {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center and vanilla ice cream',
        price: '€14'
      },
      {
        name: 'Panna Cotta',
        description: 'Vanilla panna cotta with berry compote and mint',
        price: '€10'
      },
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla custard with caramelized sugar crust',
        price: '€11'
      },
      {
        name: 'Gelato Selection',
        description: 'Three scoops of artisanal gelato (vanilla, chocolate, pistachio)',
        price: '€9'
      }
    ],
    beverages: [
      {
        name: 'House Wine Selection',
        description: 'Carefully curated Albanian and international wines by the glass',
        price: '€8-15'
      },
      {
        name: 'Premium Wine Collection',
        description: 'Exclusive bottles from renowned vineyards worldwide',
        price: '€45-200'
      },
      {
        name: 'Craft Cocktails',
        description: 'Signature cocktails crafted by our expert mixologists',
        price: '€12-18'
      },
      {
        name: 'Fresh Juices',
        description: 'Freshly squeezed orange, apple, or seasonal fruit juices',
        price: '€6'
      },
      {
        name: 'Premium Coffee',
        description: 'Espresso, cappuccino, or specialty coffee drinks',
        price: '€4-8'
      }
    ]
  };

  return (
    <motion.div 
      className="menu-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="menu-hero" ref={heroRef}>
        <div className="menu-hero-background">
          <img src="/sepata-steakhouse-restaurant/sepatarestaurant_1747758600_3636673091845828801_65649597383.jpg" alt="Gourmet Dishes" />
          <div className="menu-hero-overlay"></div>
        </div>
        <motion.div 
          className="menu-hero-content"
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <h1>Our Menu</h1>
          <p>Culinary excellence meets Albanian tradition</p>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section className="menu-section section-padding" ref={menuRef}>
        <div className="container">
          <motion.div 
            className="menu-content"
            variants={fadeInUp}
            initial="hidden"
            animate={menuInView ? "visible" : "hidden"}
          >
            {/* Category Navigation */}
            <div className="menu-categories">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Menu Items */}
            <motion.div 
              className="menu-items"
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="category-header">
                <h2>
                  {menuCategories.find(cat => cat.id === activeCategory)?.icon}
                  {menuCategories.find(cat => cat.id === activeCategory)?.name}
                </h2>
              </div>
              <div className="items-grid">
                {menuItems[activeCategory]?.map((item, index) => (
                  <motion.div
                    key={index}
                    className="menu-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="item-header">
                      <h3 className="item-name">{item.name}</h3>
                      <span className="item-price">{item.price}</span>
                    </div>
                    <p className="item-description">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Wine Pairing Section */}
      <section className="wine-section section-padding">
        <div className="container">
          <motion.div 
            className="wine-content"
            variants={fadeInUp}
            initial="hidden"
            animate={menuInView ? "visible" : "hidden"}
          >
            <h2>Wine Pairings</h2>
            <p>
              Our sommelier has carefully selected wines to complement each dish. 
              Ask your server about our recommended pairings to enhance your dining experience.
            </p>
            <div className="wine-features">
              <div className="wine-feature">
                <h3>Albanian Wines</h3>
                <p>Discover exceptional local vintages from Albania's emerging wine regions</p>
              </div>
              <div className="wine-feature">
                <h3>International Selection</h3>
                <p>Premium wines from renowned vineyards across Europe and beyond</p>
              </div>
              <div className="wine-feature">
                <h3>Expert Pairings</h3>
                <p>Our sommelier's recommendations for the perfect food and wine combinations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Menu;
