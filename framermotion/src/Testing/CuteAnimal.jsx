import React from "react";
import CuteAnimalModel from "./CuteAnimalModel";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
const CuteAnimal = () => {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} castShadow />
      <CuteAnimalModel position={[0, -1.5, 0]} rotation={[0, Math.PI / 2, 0]} />
      <OrbitControls />
    </Canvas>
  );
};

export default CuteAnimal;
