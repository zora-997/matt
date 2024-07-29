import React, { createContext, useState } from 'react';

// Load language JSON files
import en from '../translation/translations-en.json';
import ar from '../translation/translations-ar.json';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language')!=null?localStorage.getItem('language'):'en');
  const texts = language === 'en' ? en : ar;

  const changeLanguage = (lang) => {
    localStorage.setItem('language' , lang )
    setLanguage(lang) 
  };

  return (
    <LanguageContext.Provider value={{ language, texts, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};