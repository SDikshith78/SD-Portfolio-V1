import React, { useEffect, useState } from 'react';
import './BurgerMenu.css'; 
import { motion, AnimatePresence } from 'framer-motion';
import { menuSlide } from './anim'; // Assuming you have this animation defined
import Navigation from './Navigation';

const BurgerMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedIndicator, setSelectedIndicator] = useState("/");
  const [scrollTop, setScrollTop] = useState(0);

  const handleClick = () => {
    setScrollTop(window.scrollY); // Capture current scroll position
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsActive(false); // Close menu on larger screens
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='absolute z-50'>
      <>
        <div className="headers">
          <div onClick={handleClick} className="button">
            <div className={`burger ${isActive ? 'burgerActive' : ''}`}></div>
          </div>
        </div>
        <AnimatePresence>
          {isActive && (
            <motion.div
              variants={menuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
              className="menu-container"
              style={{ top: `${scrollTop}px` }} // Dynamically set top position
            >
              <Navigation
                setSelectedIndicator={setSelectedIndicator}
                setIsActive={setIsActive} // Close menu after clicking a nav link
                selectedIndicator={selectedIndicator}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </div>
  );
};

export default BurgerMenu;
