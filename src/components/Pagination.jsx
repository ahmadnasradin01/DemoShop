import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center p-2 sm:p-4">
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
        className="flex size-8 sm:size-10 items-center justify-center disabled:opacity-50"
      >
        <div className="text-primary theme-transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="sm:w-[18px] sm:h-[18px]" fill="currentColor" viewBox="0 0 256 256">
            <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
          </svg>
        </div>
      </button>
      
      {pageNumbers.map(number => (
        <button 
          key={number}
          onClick={() => onPageChange(number)}
          className={`text-xs sm:text-sm leading-normal flex size-8 sm:size-10 items-center justify-center rounded-full theme-transition ${currentPage === number ? 'font-bold text-primary bg-secondary' : 'font-normal text-primary'}`}
        >
          {number}
        </button>
      ))}

      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
        className="flex size-8 sm:size-10 items-center justify-center disabled:opacity-50"
      >
        <div className="text-primary theme-transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="sm:w-[18px] sm:h-[18px]" fill="currentColor" viewBox="0 0 256 256">
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
          </svg>
        </div>
      </button>
    </div>
  )
}

export default Pagination 