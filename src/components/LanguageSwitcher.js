import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { currentLanguage, languages, changeLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      {Object.keys(languages).map((langCode) => (
        <button
          key={langCode}
          className={`language-button ${currentLanguage === langCode ? 'active' : ''}`}
          onClick={() => changeLanguage(langCode)}
          aria-label={`Switch to ${languages[langCode].name}`}
        >
          <span className="language-flag">{languages[langCode].flag}</span>
          <span className="language-name">{languages[langCode].name}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
