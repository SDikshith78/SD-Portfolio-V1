import { useEffect, useRef } from "react";
import "./style.css";
import MouseAnimation from "../utils/MouseAnimation";
import { useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const ProfessionalLinks = () => {
  const hoverref = useRef(null);
  const parentref = useRef(null);
  const cursorBlue = useRef(null);
  const cursorLabel = useRef(null);
  const [imageScroll, setImageScroll] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const linksArray = [
    { name: "Gmail", url: "mailto:sdikshith7885@gmail.com" },
    { name: "Github", url: "https://github.com/SDikshith78" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/sai-dikshith-a-876151227/" },
    { name: "Behance", url: "https://www.behance.net/sdikshith78" }
  ];

  function hoverEnter() {
    hoverref.current.style.transform = "translate(-50%,-50%) scale(1)";
    cursorBlue.current.style.opacity = 1; // Make cursorBlue visible
    cursorLabel.current.style.opacity = 1; // Make cursorLabel visible
    setIsHovered(true);
  }

  function hoverLeave() {
    hoverref.current.style.transform = "translate(-50%,-50%) scale(0)";
    cursorBlue.current.style.opacity = 0; // Hide cursorBlue
    cursorLabel.current.style.opacity = 0; // Hide cursorLabel
    setIsHovered(false);
  }

  function hoverMove(e) {
    const xposition = e.clientX - parentref.current.getBoundingClientRect().x;
    const yposition = e.clientY - parentref.current.getBoundingClientRect().y;

    // Instantly move the hoverref (image div)
    hoverref.current.style.left = `${xposition}px`;
    hoverref.current.style.top = `${yposition}px`;

    // Apply delay using gsap for cursorBlue and cursorLabel
    gsap.to(cursorBlue.current, {
      left: `${xposition}px`,
      top: `${yposition}px`,
      duration: 0.2, // Slight delay
      ease: "power2.out",
    });

    gsap.to(cursorLabel.current, {
      left: `${xposition}px`,
      top: `${yposition}px`,
      duration: 0.3, // Slightly longer delay
      ease: "power2.out",
    });
  }

  useEffect(() => {
    // Initialize hoverref position at the start
    hoverref.current.style.transform = "scale(0)";
    cursorBlue.current.style.position = "absolute";
    cursorLabel.current.style.position = "absolute";
    cursorBlue.current.style.opacity = 0; // Initially hidden
    cursorLabel.current.style.opacity = 0; // Initially hidden
  
    const images = hoverref.current.querySelectorAll("img");
    let rotate = 0;
  
    const handleMouseMove = (e) => {
      // Calculate the rotation difference for all images
      const diffrot = e.clientX - rotate; // Calculate rotation difference
      rotate = e.clientX; // Update rotate for the next move
  
      // Apply rotation to each image
      images.forEach((img) => {
        gsap.to(img, {
          rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5), // Rotate based on mouse movement
          ease: "power3.out",
        });
      });
    };
  
    // Add mousemove listener to the parent element
    parentref.current.addEventListener("mousemove", handleMouseMove);
  
    return () => {
      parentref.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  

  return (
    <div className="h-full text-white ">
      <h1 className="title2 font-neueMontrealbold font-bold text-6xl px-24 py-7 ">
        Professional Links
      </h1>

      <div
        className="h-screen relative"
        ref={parentref}
        onMouseMove={hoverMove}
      >
        <>
          <div
            ref={hoverref}
            id="imagediv"
            className={`mouse-animation overflow-hidden z-10 h-[35vh] w-[35vh] flex justify-center items-center absolute -translate-x-1/2 -translate-y-1/2 ${
              isHovered ? "scale-100" : "scale-0"
            }`} // Control visibility with CSS class
          >
            <motion.div
              animate={{
                transform: `translateY(-${imageScroll}%)`,
              }}
              transition={{
                duration: 0.3,
              }}
              className="h-full w-full"
            >
              <img
                className="h-full w-full object-cover"
                src="/images/gmail.png"
                alt=""
              />
              <img
                className="h-full w-full object-cover"
                src="/images/github.png"
                alt=""
              />
              <img
                className="h-full w-full object-cover"
                src="/images/linkedin.png"
                alt=""
              />
              <img
                className="h-full w-full object-cover"
                src="/images/behance.png"
                alt=""
              />
            </motion.div>
          </div>
          <div ref={cursorBlue} className="cursorBlue"></div>
          <div ref={cursorLabel} className="cursorLabel">
            View
          </div>
        </>
        <div className="font-neueMontrealmedium relative  ">
          {linksArray.map((e, id) => (
            <a 
              href={e.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={id}
            >
              <div className="hover:text-red-700">
              <MouseAnimation
                h1={e.name}
                translate={id * 100}
                key={id}
                setImageScroll={setImageScroll}
                onMouseEnter={hoverEnter}
                onMouseLeave={hoverLeave}
              />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalLinks;
