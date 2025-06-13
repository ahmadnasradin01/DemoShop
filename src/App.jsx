import React, { useContext, useState } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import { LanguageContext } from './context/LanguageContext'
import { ThemeContext } from './context/ThemeContext'
import LoadingSpinner from './components/LoadingSpinner'
import { translations } from './data/translations'

function App() {
  const { language, isLoading } = useContext(LanguageContext)
  const { theme, isTransitioning } = useContext(ThemeContext)
  const [activeCategory, setActiveCategory] = useState('clothes'); 
  const t = translations[language];

  let loadingText = '';
  if (isTransitioning) {
    loadingText = theme === 'dark' ? t.switchingToLightMode : t.switchingToDarkMode;
  } else if (isLoading) {
    loadingText = t.changingLanguage;
  }

  return (
    <div 
      className="relative flex size-full min-h-screen flex-col bg-primary group/design-root overflow-x-hidden theme-transition"
      dir={language === 'ku' ? 'rtl' : 'ltr'}
      style={{
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      {}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-5 backdrop-blur-[1px] z-50 flex items-center justify-center transition-all duration-300 ease-in-out ${isLoading || isTransitioning ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="bg-primary py-5 px-8 rounded-xl shadow-md flex flex-col items-center transform transition-transform duration-300 ease-in-out theme-transition">
          <LoadingSpinner size={36} color="var(--text-secondary)" secondaryColor="var(--bg-secondary)" />
          <p className="mt-3 font-medium text-primary theme-transition">
            {loadingText}
          </p>
        </div>
      </div>

      <div className="layout-container flex h-full grow flex-col">
        <Header activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <ProductList activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      </div>
    </div>
  )
}

export default App
