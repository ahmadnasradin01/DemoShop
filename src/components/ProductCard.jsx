import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import TiltedCard from './TiltedCard'
import { motion } from 'framer-motion'

const ProductCard = ({ product, index }) => {
  const { language } = useContext(LanguageContext)

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: index * 0.05
      }
    }
  };

  return (
    <motion.div 
      variants={cardVariants}
      className="flex flex-col pb-3"
    >
      <div className="aspect-square w-full">
        <TiltedCard
          imageSrc={product.image}
          altText={product.name[language]}
          captionText={`${product.name[language]} - $${product.price.toFixed(2)}`}
          containerHeight="100%"
          containerWidth="100%"
          imageHeight="100%"
          imageWidth="100%"
          rotateAmplitude={14}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <div className="w-full h-full flex flex-col justify-end p-3">
              <p className="text-white text-sm sm:text-base font-medium leading-tight truncate" style={{ textShadow: '0px 1px 3px rgba(0, 0, 0, 0.9)' }}>
                {product.name[language]}
              </p>
              <p className="text-white/95 text-xs sm:text-sm font-normal" style={{ textShadow: '0px 1px 3px rgba(0, 0, 0, 0.9)' }}>
                ${product.price.toFixed(2)}
              </p>
            </div>
          }
        />
      </div>
    </motion.div>
  )
}

export default ProductCard