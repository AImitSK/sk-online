import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ImageTextBox({
  imageSrc,
  imageAlt,
  imageBgColor,
  textBgColor,
  title,
  text,
  link,
  linkText,
  animationType,
  position = 'left' // 'left' or 'right' for desktop
}) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  // Intersection Observer to trigger the animation when the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const animationVariants = {
    zoom: { scale: 1 },
    rotationZoom: { rotate: 180, scale: 1 }, // Rotation and Zoom settings
  };

  const initialVariants = {
    zoom: { scale: 0.6 },
    rotationZoom: { scale: 0, rotate: 0 }, // Initial state for rotation zoom
  };

  const transitionSettings = {
    type: "spring",
    stiffness: 260,
    damping: 20,
  };

  return (
    <div
      ref={containerRef}
      className={`w-full h-auto md:h-[720px] flex flex-col ${
        position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
      } justify-between items-center mb-16`}
    >
      {/* Text Container */}
      <div
        className={`w-full md:w-1/2 h-full flex flex-col justify-center items-start p-10 md:p-10 lg:p-20 xl:p-40 ${textBgColor}`}
      >
        <h2 className="font-bricolage text-4xl md:text-5xl font-normal leading-none mb-6 text-dunkel">
          {title}
        </h2>
        <p className="font-inter text-xl md:text-lg font-light leading-relaxed mb-6 text-dunkel">
          {text}
        </p>
        <Link href={link} legacyBehavior>
        <a className="inline-block px-6 py-3 bg-transparent text-dunkel rounded-md hover:bg-dunkel hover:text-lightblue border border-dunkel transition-colors">
  {linkText}
</a>

        </Link>
      </div>

      {/* Bild Container */}
      <div
        className={`w-full md:w-1/2 h-full flex justify-center items-center p-12 md:py-0 ${imageBgColor}`}
      >
        <motion.div
          initial={initialVariants[animationType]}
          animate={isInView ? animationVariants[animationType] : {}}
          transition={transitionSettings}
          className="flex justify-center items-center h-full w-full"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={540}
            height={540}
            className="md:w-[540px] md:h-[540px] object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}
