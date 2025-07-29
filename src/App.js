import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Reservation from './pages/Reservation';
import Contact from './pages/Contact';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

function App() {
  // Conditionally set the basename based on the environment
  const basename = process.env.NODE_ENV === 'production' ? '/sepata-steakhouse-restaurant' : '';
  
  return (
    <LanguageProvider>
      <Router basename={basename}>
        <div className="App">
          <ScrollToTop />
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
