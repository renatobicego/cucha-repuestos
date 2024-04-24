'use client'
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Carousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const screenWidth = window.innerWidth


  useEffect(() => {
    let indexToReturn = 8
    if(screenWidth >= 1700){
        indexToReturn = 9
    }else if (screenWidth >= 768 && screenWidth < 1020){
        indexToReturn = 5
    }else if (screenWidth < 768 && screenWidth >= 450){
        indexToReturn = 3
    }else if(screenWidth < 450){
        indexToReturn = 1
    }

    const interval = setInterval(() => {

      const nextIndex = (currentIndex + 1) % (images.length - indexToReturn);
      setCurrentIndex(nextIndex);

      // Animate the motion.div to translate on the x-axis
      controls.start({
        x: -nextIndex * 104,
        transition: { duration: 1 } // Animation duration in seconds
      });
    }, 1500); 

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [controls, currentIndex, images.length, screenWidth]); // Re-run effect when currentIndex changes

  return (
    <motion.div
      className="flex items-center gap-6 w-full overflow-hidden"
      style={{ width: `${images.length * 104}px` }} 
      animate={controls}
    >
      {images.map((image, i) => (
        <Image
          key={i}
          width={100}
          height={100}
          src={`/marcas/${image}`}
          className="w-20 h-auto"
          alt={`Logo de marca ${image.split(".")[0]}`}
        />
      ))}
    </motion.div>
  );
};

export default Carousel;
