import { useRef, useState, useContext } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import "./TiltedCard.css";

const springValues = {
  damping: 25,
  stiffness: 180,
  mass: 1.2,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
}) {
  const ref = useRef(null);
  const glowRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  const x = useMotionValue();
  const y = useMotionValue();
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });
  
  const glowOpacity = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });

  
  const overlayTranslateX = useTransform(rotateY, [-rotateAmplitude, rotateAmplitude], [-15, 15]);
  const overlayTranslateY = useTransform(rotateX, [-rotateAmplitude, rotateAmplitude], [15, -15]);

  const [lastY, setLastY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    
    const relativeX = e.clientX - rect.left;
    const relativeY = e.clientY - rect.top;
    setMousePosition({ 
      x: (relativeX / rect.width) * 100, 
      y: (relativeY / rect.height) * 100 
    });

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
    glowOpacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
    glowOpacity.set(0);
  }

  
  const glowOpacityHigh = theme === 'dark' ? 0.5 : 0.6;
  const glowOpacityMed = theme === 'dark' ? 0.25 : 0.3;
  const glowOpacityLow = 0;

  return (
    <figure
      ref={ref}
      className="tilted-card-figure"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="tilted-card-mobile-alert">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <motion.div
        className="tilted-card-inner"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <motion.div 
          className="tilted-card-glow"
          style={{
            opacity: glowOpacity,
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,${glowOpacityHigh}) 0%, rgba(255,255,255,${glowOpacityMed}) 20%, rgba(255,255,255,${glowOpacityLow}) 50%)`,
          }}
          animate={{
            boxShadow: [
              `0 0 10px 0px rgba(255,255,255,${glowOpacityMed})`,
              `0 0 15px 2px rgba(255,255,255,${glowOpacityMed/1.5})`,
              `0 0 10px 0px rgba(255,255,255,${glowOpacityMed})`
            ]
          }}
          transition={{
            boxShadow: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }
          }}
        />
        
        <motion.img
          src={imageSrc}
          alt={altText}
          className="tilted-card-img"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        />

        {}
        <div className="tilted-card-gradient-overlay" />

        {displayOverlayContent && overlayContent && (
          <motion.div
            className="tilted-card-text-container"
            style={{
              translateX: overlayTranslateX,
              translateY: overlayTranslateY,
            }}
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="tilted-card-caption"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
} 