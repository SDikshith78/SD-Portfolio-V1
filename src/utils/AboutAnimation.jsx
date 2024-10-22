import { Canvas } from "@react-three/fiber";
import Sci from "/about/Sci";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

function AboutAnimation() {
  return (
    <div className="model_style" style={{ width: "100%", height: "100vh", backgroundColor:"red" }}>
      <Canvas camera={{ position: [10, -0.3, 40], fov: 6.8 }} className="model">
        <directionalLight intensity={2} position={[0, 10, 10]} />
        <ambientLight />
        <OrbitControls target={[1, 1.5, 0]} />
        <Suspense fallback={null}>
          <group scale={[1.3, 1.3, 1.3]} rotation={[0, Math.PI / 1.62, 0.2]} position={[3.4, 0, 0.5]}>
            <Sci />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default AboutAnimation;
