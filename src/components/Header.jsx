import React, { useState, useContext, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LanguageContext } from '../context/LanguageContext'
import { translations } from '../data/translations'
import ThemeToggle from './ThemeToggle'

const Header = ({ activeCategory, onCategoryChange }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, toggleLanguage, isLoading } = useContext(LanguageContext)
  const t = translations[language];

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.getElementById('mobile-menu');
      const menuButton = document.getElementById('menu-button');
      
      if (menuOpen && mobileMenu && !mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  const categories = ['clothes', 'shoes', 'accessories', 'bags'];

  
  const menuVariants = {
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      x: "0%",
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <header className="flex flex-col md:flex-row items-center justify-between whitespace-nowrap border-b border-solid border-theme px-4 sm:px-6 md:px-10 py-3 theme-transition relative">
      {}
      <div className="flex w-full md:w-auto items-center justify-between md:justify-start z-20">
        <div className="flex items-center gap-4 text-primary theme-transition">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-primary text-lg font-bold leading-tight tracking-[-0.015em] theme-transition">{t.shopAll}</h2>
        </div>
        
        {}
        <button 
          id="menu-button"
          className="md:hidden text-primary theme-transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
          )}
        </button>
      </div>

      {}
      <div className="hidden md:flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:flex-row w-auto items-center justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`relative text-sm font-medium leading-normal px-3 py-1.5 transition-colors duration-200 ${activeCategory !== category ? 'text-secondary hover:text-primary' : ''}`}
          >
            {activeCategory === category && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-secondary rounded-full"
                style={{ borderRadius: 9999 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
              />
            )}
            <span className={`relative z-10 ${activeCategory === category ? 'text-accent' : 'text-primary'}`}>{t[category]}</span>
          </button>
        ))}
      </div>

      {}
      <div className="hidden md:flex gap-3 z-10">
        <button
          className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-secondary text-primary px-4 text-sm font-medium leading-normal relative transition-all duration-200 hover:opacity-90 theme-transition"
          onClick={toggleLanguage}
          disabled={isLoading}
        >
          <div className="flex items-center gap-2">
            <span className={`${language === 'en' ? 'font-bold text-accent' : 'text-primary opacity-60'} transition-all duration-200`}>English</span>
            <span className="mx-1 text-secondary">|</span>
            <span className={`${language === 'ku' ? 'font-bold text-accent' : 'text-primary opacity-60'} font-['Noto_Sans_Arabic'] transition-all duration-200`}>کوردی</span>
          </div>
        </button>
        <ThemeToggle />
      </div>

      {}
      <AnimatePresence>
        {menuOpen && (
          <>
            {}
            <motion.div 
              className="fixed inset-0 bg-black/30 z-30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            
            {}
            <motion.div
              id="mobile-menu"
              className="fixed top-0 left-0 bottom-0 w-4/5 max-w-xs bg-primary shadow-lg z-40 md:hidden flex flex-col p-5 theme-transition"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3 text-primary theme-transition">
                  <div className="size-4">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-primary text-lg font-bold leading-tight tracking-[-0.015em] theme-transition">{t.shopAll}</h2>
                </div>
                <button 
                  className="text-primary theme-transition"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                </button>
              </div>
              
              {}
              <div className="flex flex-col gap-4 mb-8">
                <h3 className="text-primary font-semibold text-sm uppercase tracking-wider opacity-70 mb-1">{t.categories}</h3>
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => {
                      onCategoryChange(category);
                      setMenuOpen(false);
                    }}
                    className={`relative text-sm font-medium leading-normal px-3 py-2 transition-colors duration-200 text-left rounded-lg ${
                      activeCategory === category ? 'bg-secondary text-accent' : 'text-primary hover:bg-secondary/50'
                    }`}
                    variants={itemVariants}
                  >
                    {t[category]}
                  </motion.button>
                ))}
              </div>
              
              {}
              <div className="mt-auto">
                <h3 className="text-primary font-semibold text-sm uppercase tracking-wider opacity-70 mb-3">{t.settings || "Settings"}</h3>
                <div className="flex flex-col gap-3">
                  <motion.div variants={itemVariants}>
                    <button
                      className="flex w-full cursor-pointer items-center justify-between overflow-hidden rounded-lg bg-secondary text-primary px-4 py-3 text-sm font-medium leading-normal relative transition-all duration-200"
                      onClick={toggleLanguage}
                      disabled={isLoading}
                    >
                      <span>{t.language || "Language"}</span>
                      <div className="flex items-center gap-2">
                        <span className={`${language === 'en' ? 'font-bold text-accent' : 'text-primary opacity-60'} transition-all duration-200`}>EN</span>
                        <span className="mx-1 text-secondary">|</span>
                        <span className={`${language === 'ku' ? 'font-bold text-accent' : 'text-primary opacity-60'} font-['Noto_Sans_Arabic'] transition-all duration-200`}>KU</span>
                      </div>
                    </button>
                  </motion.div>
                  <motion.div variants={itemVariants} className="flex justify-between items-center rounded-lg bg-secondary px-4 py-3">
                    <span className="text-sm font-medium text-primary">{t.theme || "Theme"}</span>
                    <ThemeToggle compact={true} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header 