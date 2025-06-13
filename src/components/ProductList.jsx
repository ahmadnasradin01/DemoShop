import React, { useState, useEffect, useContext } from 'react'
import ProductCard from './ProductCard'
import productsData from '../data/products'
import FilterDropdown from './FilterDropdown'
import Pagination from './Pagination'
import { LanguageContext } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { motion, AnimatePresence } from 'framer-motion'

const ProductList = ({ activeCategory, onCategoryChange }) => {
  const { language } = useContext(LanguageContext)
  const t = translations[language]
  const [products] = useState(productsData)
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState('default')
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;  

  
  useEffect(() => {
    let categoryProducts = products.filter(p => p.category === activeCategory);
    
    if (searchTerm) {
      categoryProducts = categoryProducts.filter(product =>
        product.name[language].toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOrder === 'low-to-high') {
      categoryProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high-to-low') {
      categoryProducts.sort((a, b) => b.price - a.price);
    } else {
      
      categoryProducts.sort((a, b) => a.id - b.id);
    }
    
    setFilteredProducts(categoryProducts);
    setCurrentPage(1); 
  }, [activeCategory, searchTerm, sortOrder, products, language]);

  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }

  
  const handleSortChange = (order) => {
    setSortOrder(order);
  }

  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const priceOptions = [
    { value: 'default', label: t.default },
    { value: 'low-to-high', label: t.lowestPrice },
    { value: 'high-to-low', label: t.highestPrice },
  ];

  
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
        when: "beforeChildren"
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-full max-w-7xl flex-1">
        {}
        <div className="px-2 sm:px-4 py-3">
          <label className="flex flex-col w-full h-12">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <div
                className="text-secondary flex border-none bg-secondary items-center justify-center ps-4 rounded-s-xl border-e-0 theme-transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                  ></path>
                </svg>
              </div>
              <input
                placeholder={t.searchForProducts}
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-primary focus:outline-0 focus:ring-0 border-none bg-secondary focus:border-none h-full placeholder-accent px-4 rounded-s-none border-s-0 ps-2 text-base font-normal leading-normal theme-transition"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </label>
        </div>

        {}
        <div className="flex gap-2 sm:gap-3 p-2 sm:p-3 flex-wrap pr-4">
          <FilterDropdown
            label={t.filter}
            options={priceOptions}
            selectedValue={sortOrder}
            onSelect={handleSortChange}
          />
        </div>

        {}
        <h2 className="text-primary text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 pt-5 theme-transition">{t.featuredProducts}</h2>
        
        {}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`${activeCategory}-${currentPage}-${sortOrder}`}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-2 sm:p-4"
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            layout
          >
            {currentProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {}
        <AnimatePresence>
          {filteredProducts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center p-8 text-center"
            >
              <p className="text-primary text-lg font-medium mb-2 theme-transition">{t.noProductsFound}</p>
              <p className="text-secondary text-sm theme-transition">{t.tryAdjusting}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {}
        {filteredProducts.length > 0 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  )
}

export default ProductList