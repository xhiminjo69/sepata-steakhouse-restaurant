import React, { createContext, useState, useContext, useEffect } from 'react';
import enTranslations from '../translations/en/translations';
import sqTranslations from '../translations/sq/translations';

// Create language context
const LanguageContext = createContext();

// Available languages
const languages = {
  en: {
    name: 'English',
    translations: enTranslations,
    flag: '🇺🇸'
  },
  sq: {
    name: 'Albanian',
    translations: sqTranslations,
    flag: '🇦🇱'
  }
};

// Language provider component
export const LanguageProvider = ({ children }) => {
  // Get saved language from localStorage or default to English
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage && languages[savedLanguage] ? savedLanguage : 'en';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  // Function to change language
  const changeLanguage = (languageCode) => {
    if (languages[languageCode]) {
      setCurrentLanguage(languageCode);
    }
  };

  // Translation function
  const translate = (key) => {
    const translations = languages[currentLanguage].translations;
    return translations[key] || key;
  };

  // Context value
  const contextValue = {
    currentLanguage,
    languages,
    changeLanguage,
    translate,
    t: translate // Shorthand for translate
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
