import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ku' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setIsLoading(true);
    
    
    setTimeout(() => {
      setLanguage(prevLanguage => (prevLanguage === 'en' ? 'ku' : 'en'));
      setIsLoading(false);
    }, 800); 
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
}; 