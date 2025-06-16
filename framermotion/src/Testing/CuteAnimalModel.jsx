import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function CuteAnimalModel(props) {
  const modelRef = useRef();

  // Rotate the model every frame
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust rotation speed as needed
    }
  });
  const { nodes, materials } = useGLTF("/animale.glb");
  return (
    <group ref={modelRef} {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[0, 127.158, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={28.026}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Material002_0.geometry}
            material={materials["Material.002"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/animale.glb");
