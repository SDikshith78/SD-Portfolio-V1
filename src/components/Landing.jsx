import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "framer-motion";

import LocationAnimation from "../utils/Location";
import ArrowIcon from "../utils/ArrowIcon ";

// Parallax component to handle the infinite scrolling effect
function ParallaxText({ children, baseVelocity }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1800], [0, 4], {
    clamp: false,
  });

  // Wrap around values to ensure infinite scrolling
  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Toggle direction based on scroll velocity
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);

    // Ensure smooth infinite effect
    if (baseX.get() > 100) baseX.set(-100);
    if (baseX.get() < -100) baseX.set(100);
  });

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden whitespace-nowrap z-20 flex items-center justify-center">
      
      <LocationAnimation />
      
      <motion.div
        className="flex items-center justify-center text-[13em] -mb-[25%] text-white font-neueMontrealregular"
        style={{ x }}
      >
        <span className="tracking-tighter mx-4">{children}</span>
        <span className="tracking-tighter mx-4">{children}</span>
        <span className="tracking-tighter mx-4">{children}</span>
        <span className="tracking-tighter mx-4">{children}</span>
        <span className="tracking-tighter mx-4">{children}</span>
        <span className="tracking-tighter mx-4">{children}</span>
        <span className="tracking-tighter mx-4">{children}</span>
        <span className="tracking-tighter mx-4">{children}</span>
        <span className="tracking-tighter mx-4">{children}</span>
        <span className="tracking-tighter mx-4">{children}</span>
        <span className="tracking-tighter mx-4">{children}</span>
      </motion.div>
    </div>
  );
}

// Main Landing component that uses the ParallaxText component
export default function Landing() {
  return (
    <section className="relative h-screen w-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <img
        src="../../public/images/profile.png"
        alt=""
        className="absolute h-screen w-screen object-contain bg-[#949899]"
      />

      {/* Parallax Text */}
      <ParallaxText baseVelocity={-1}>— Sai Dikshith Ajalade</ParallaxText>

      {/* Arrow Icon at the bottom */}
      <div className="absolute flex justify-center z-30 ">
        <ArrowIcon />
      </div>

    </section>
  );
}
