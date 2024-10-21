import React from 'react';
import { motion } from 'framer-motion';
import './Navigation.css'; 
import { slide, scale } from './anim'; // Assuming you have these animations defined
import Curve from './Curve';

const navItems = [
  { title: "Home", href: "home" },
  { title: "Projects", href: "projects" },
  { title: "Skills", href: "skills" },
  { title: "About", href: "about" },
  { title: "Resume", href: "resume" },
  { title: "Professional Links", href: "professional-links" },
  { title: "Connect", href: "connect" },
];

const Navigation = ({ selectedIndicator, setSelectedIndicator, setIsActive }) => {
  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setSelectedIndicator(id);
      setIsActive(false); // Close the menu after clicking a nav link
    }
  };

  return (
    <motion.div
      variants={scale}
      initial="closed"
      animate="open"
      exit="closed"
      className="menu menu2"
    >
      <div className="body">
        <div className="nav">
          <div className="header">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <motion.div
              key={index}
              variants={slide}
              initial="initial"
              animate="enter"
              exit="exit"
              custom={index}
            >
              <div
                className={`nav-link ${selectedIndicator === data.href ? 'active' : ''}`}
                onClick={() => handleNavClick(data.href)}
              >
                {data.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Navigation;
