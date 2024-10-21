import React, { Suspense } from "react";
import Experience from "./preloader/Experience";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import UiButton from "./preloader/UiButton";

const PreLoader = ({ onButtonClick }) => {
  return (
    <div className="w-screen h-screen">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
        <color attach="background" args={["#171720"]} />
        <fog attach="fog" args={["#171720", 10, 30]} />
        <Suspense>
          <Experience />
        </Suspense>
        <EffectComposer>
          <Bloom mipmapBlur intensity={1.2} />
        </EffectComposer>
      </Canvas>
      <UiButton onClick={onButtonClick} /> {/* Pass the onClick handler */}
    </div>
  );
};

export default PreLoader;
