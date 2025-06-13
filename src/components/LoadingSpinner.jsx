import React from 'react';

const LoadingSpinner = ({ size = 24, color = "#886364", secondaryColor = "#f7f4f4" }) => {
  return (
    <div className="flex items-center justify-center">
      <svg 
        className="animate-spin" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {}
        <circle 
          cx="12" 
          cy="12" 
          r="10" 
          stroke={secondaryColor} 
          strokeWidth="3" 
          opacity="0.3" 
        />
        
        {}
        <path 
          d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5"
          strokeWidth="3"
          strokeLinecap="round"
          stroke={color}
          opacity="0.9"
        />
      </svg>
    </div>
  );
};

export default LoadingSpinner; 