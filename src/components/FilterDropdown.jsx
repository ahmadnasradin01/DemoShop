import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FilterDropdown = ({ label, options, onSelect, selectedValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const selectedOptionLabel = options.find(opt => opt.value === selectedValue)?.label;

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    onSelect(option.value);
    setIsOpen(false);
  };

  
  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: { 
        duration: 0.2,
        ease: "easeInOut" 
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: { 
        duration: 0.2,
        ease: "easeInOut" 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex h-8 shrink-0 items-center justify-center gap-x-1 sm:gap-x-2 rounded-xl bg-secondary pl-2 sm:pl-4 pr-1 sm:pr-2 text-nowrap theme-transition"
      >
        <p className="text-primary text-xs sm:text-sm font-medium leading-normal theme-transition">
          <span className="text-secondary mr-1">{label}:</span> {selectedOptionLabel}
        </p>
        <div className="text-primary theme-transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className={`sm:w-[20px] sm:h-[20px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 256 256">
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full mt-2 w-48 bg-primary border border-theme rounded-lg shadow-lg z-10 theme-transition overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
          >
            <ul className="py-1">
              {options.map(option => (
                <motion.li 
                  key={option.value}
                  variants={itemVariants}
                  onClick={() => handleSelect(option)}
                  className={`px-4 py-2 text-primary hover:bg-secondary cursor-pointer transition-all duration-200 theme-transition ${selectedValue === option.value ? 'bg-secondary/60' : ''}`}
                >
                  <motion.span
                    initial={false}
                    animate={{
                      fontWeight: selectedValue === option.value ? 600 : 400,
                      color: selectedValue === option.value ? 'var(--text-accent)' : 'inherit'
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {option.label}
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterDropdown; 