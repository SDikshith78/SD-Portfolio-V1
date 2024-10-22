import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Cypher from "/public/Cypher";
import CypherTwo from "/public/CypherTwo";
import CypherThree from "/public/CypherThree";
import CypherFour from "/public/CypherFour";
import Sci from "/public/about/Sci";
import { OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [visibleModel, setVisibleModel] = useState(null); 
  const containerRef = useRef(); // Reference to the container for scroll-trigger

  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 40%", // Adjust when to trigger
      onEnter: () => {
        setVisibleModel(0); // Start showing models when the scroll reaches
        startCypherAnimations();
      },
      // markers: true, // Optional for debugging, remove later
    });

    return () => {
      trigger.kill(); // Cleanup on component unmount
    };
  }, []);

  const startCypherAnimations = () => {
    // Timing for the animations in sequence
    setTimeout(() => setVisibleModel(1), 1490); // Show CypherTwo after 2 seconds
    setTimeout(() => setVisibleModel(2), 3600); // Show CypherThree after 4.3 seconds
    setTimeout(() => setVisibleModel(3), 5800); // Show CypherFour after 7 seconds
  };

  return (
    <div ref={containerRef} className="model_style bg-black" style={{ width: "100%", height: "100vh", display: "flex" }}>
      <h1 className="title text-5xl absolute left-[7%]  mt-20 ">About Me</h1>
      <Canvas camera={{ position: [10, -0.3, 40], fov: 7 }} className="model">
        <directionalLight intensity={4} position={[0, 10, 10]} />
        <ambientLight />
        <OrbitControls target={[1, 1.5, 0]} enableZoom={false} />

        <Suspense fallback={null}>
          {/* First section: Cypher animation sequence */}
          <group scale={[1.5, 1.5, 1.5]} position={[-0.5, 0, 0]}>
            {/* Only show Cypher models once the scroll trigger is activated */}
            {visibleModel === 0 && <Cypher />}
            {visibleModel === 1 && <CypherTwo />}
            {visibleModel === 2 && <CypherThree />}
            {visibleModel === 3 && <CypherFour />}
          </group>

          {/* Second section: Sci model */}
          <group scale={[1.81, 1.81, 1.81]} rotation={[0, Math.PI / 1.7, 0.2]} position={[5.58, -1, 0.5]}>
            <Sci />
            
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default About;
