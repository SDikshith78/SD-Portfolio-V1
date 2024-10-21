import { Canvas } from "@react-three/fiber";
import Cypher from "../../../public/models/Cypher/Cypher";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import "./Model.css"

const ModelViewer = () => {
  return (
    <div className="model_style" style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [0, 5, 30], fov: 50 }} className="model">
      <directionalLight intensity={11} position={[0, 10, 5]} />

        <ambientLight />
        <OrbitControls target={[0, 5, 0]}/>
        <Suspense fallback={null}>
          <Cypher />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
