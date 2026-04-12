"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TorusKnot } from "@react-three/drei";
import * as THREE from "three";

const OrbitalMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <TorusKnot ref={meshRef} args={[1.2, 0.35, 200, 20]}>
      <meshStandardMaterial 
        emissive="#00FFFF" 
        wireframe={true} 
        transparent={true}
        opacity={0.18}
      />
    </TorusKnot>
  );
};

const HeroOrbital = () => {
  return (
    <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[52vw] h-[90vh]" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%)' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[3, 3, 3]} color="#00FFFF" intensity={2} />
        <OrbitalMesh />
      </Canvas>
    </div>
  );
};

export default HeroOrbital;
