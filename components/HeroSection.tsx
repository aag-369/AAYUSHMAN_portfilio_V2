"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Mail, Atom, ChevronDown, MapPin } from "lucide-react";
import dynamic from "next/dynamic";

const HeroOrbital = dynamic(() => import("./HeroOrbital"), { ssr: false });

export const HeroSection = () => {
  const name = "AAYUSHMAN GHATAK";
  const metrics = ["5+ Projects", "3 Domains", "15+ Certifications", "Open to Research"];

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center pt-24 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto w-full flex relative z-10">
        
        {/* Left Column */}
        <div className="w-full lg:w-[60%] flex flex-col gap-6 relative z-20">
          
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2, duration: 0.4 }}
            className="font-mono text-cyber text-[12px]"
          >
            &gt; INITIALIZING QUANTUM INTERFACE...
          </motion.div>

          <h1 className="font-orbitron font-bold text-[36px] md:text-[56px] lg:text-[62px] text-white leading-tight whitespace-nowrap" style={{ textShadow: '0 0 60px rgba(0,255,255,0.4)' }}>
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04, duration: 0.5, ease: [0.21, 0.61, 0.35, 1] }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          <div className="font-sans text-[22px] md:text-[28px] text-quantum h-10 flex items-center">
            <TypeAnimation
              sequence={[
                "Quantum Computing Researcher", 2000,
                "Cybersecurity Engineer", 2000,
                "AI/ML Systems Architect", 2000,
                "Quantum-Safe Cryptographer", 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="font-sans text-[#94A3B8] text-[16px] leading-[1.8] max-w-[560px]"
          >
            Architecting the intersection of Quantum Computing, Artificial Intelligence, and Cybersecurity. Building quantum-safe architectures and advancing research in quantum cryptography to secure next-generation infrastructure.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <a href="#projects" className="group flex items-center justify-center gap-2 bg-quantum/10 border border-quantum text-quantum hover:bg-quantum hover:text-void px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] font-sans font-medium">
              <Atom size={18} className="group-hover:hidden" />
              <span>Explore Research</span>
              <ArrowRight size={18} className="hidden group-hover:block" />
            </a>
            <a href="#contact" className="flex items-center justify-center gap-2 border border-ghost text-slate-300 hover:border-quantum hover:text-quantum px-6 py-3 rounded-lg transition-all duration-300 font-sans font-medium">
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex flex-wrap gap-3 mt-6"
          >
            {metrics.map((m, i) => (
              <div key={i} className="glassmorphism font-mono text-[11px] px-3 py-1.5 text-gray-300 rounded-full">
                {m}
              </div>
            ))}
          </motion.div>

        </div>

      </div>

      <HeroOrbital />

      {/* Floating HUD Elements */}
      <div className="absolute top-24 right-6 font-mono text-[9px] text-gray-400 text-right hidden md:block pointer-events-none">
        LAT: 13.0827° N | LON: 80.2707° E | Chennai, TN
      </div>
      
      <div className="absolute bottom-8 left-6 font-mono text-[10px] text-quantum flex items-center gap-2 pointer-events-none">
        <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-2 h-2 rounded-full bg-cyber" />
        SYS_STATUS: QUANTUM_READY
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-gray-500" />
        </motion.div>
        <span className="font-mono text-[9px] tracking-[4px] text-gray-500">SCROLL</span>
      </div>

    </section>
  );
};
