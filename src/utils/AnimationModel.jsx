import { Canvas } from "@react-three/fiber";
import Cypher from "../../public/Cypher";
import CypherTwo from "../../public/CypherTwo";
import CypherThree from "../../public/CypherThree";
import CypherFour from "../../public/CypherFour";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";

function AnimationModel() {
    const [visibleModel, setVisibleModel] = useState(0); // Track which model is visible

  useEffect(() => {
    // Timing for the animations in sequence
    const timers = [
      setTimeout(() => setVisibleModel(1), 2000), // Show CypherTwo after 4.5 seconds
      setTimeout(() => setVisibleModel(2), 4300), // Show CypherThree after another 4.5 seconds
      setTimeout(() => setVisibleModel(3), 7000), // Show CypherFour after another 4.5 seconds
    ];

    // If we want CypherFour to loop indefinitely, we leave it showing
    // Optional: stop CypherFour after 12 seconds (for example):
    // timers.push(setTimeout(() => setVisibleModel(null), 25500));

    // Clear timers if the component unmounts
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div className="model_style" style={{ width: "100%", height: "100vh"}}>
      <Canvas camera={{ position: [10, -0.3, 40], fov: 7 }} className="model">
        <directionalLight intensity={11} position={[0, 10, 10]} />
        <ambientLight />
        <OrbitControls target={[1,1.5, 0]} enableZoom={false}/>
        <Suspense fallback={null}>
          <group scale={[1.5, 1.5, 1.5]} position={[3, 0, 0]}>
          {visibleModel === 0 && <Cypher />}       {/* First Animation */}
          {visibleModel === 1 && <CypherTwo />}    {/* Second Animation */}
          {visibleModel === 2 && <CypherThree />}  {/* Third Animation */}
          {visibleModel === 3 && <CypherFour />}   {/* Final Animation */}
          </group>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default AnimationModel
