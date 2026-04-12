"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; 
import { particleConfig } from "@/lib/particleConfig";

const QuantumParticleField = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-[-1] pointer-events-none" style={{
        background: `radial-gradient(ellipse 80% 50% at 20% 40%, rgba(0, 255, 255, 0.05) 0%, transparent 60%),
                     radial-gradient(ellipse 60% 80% at 80% 20%, rgba(168, 85, 247, 0.05) 0%, transparent 60%),
                     radial-gradient(ellipse 70% 60% at 50% 90%, rgba(16, 185, 129, 0.05) 0%, transparent 60%),
                     #030712`,
        animation: "meshDrift 20s ease-in-out infinite alternate"
      }} />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleConfig as any}
        className="fixed inset-0 opacity-100 mix-blend-screen"
        style={{ zIndex: 0 }}
      />
    </>
  );
};

export default QuantumParticleField;
