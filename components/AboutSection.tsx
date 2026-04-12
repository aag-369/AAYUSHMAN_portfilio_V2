"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { GlassCard } from "./GlassCard";
import { MapPin, Mail, Phone, Atom, Shield, Brain } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left - Profile Card */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
          <GlassCard className="flex flex-col items-center text-center">
            
            {/* Animated SVG Circuit Placeholder */}
            <div className="w-[200px] h-[200px] mb-8 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_20s_linear_infinite]">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#00FFFF" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
                <rect x="15" y="40" width="20" height="20" fill="none" stroke="#00FFFF" strokeWidth="1" />
                <text x="25" y="54" fontSize="10" fill="#00FFFF" textAnchor="middle" className="font-mono">H</text>
                <line x1="35" y1="50" x2="65" y2="50" stroke="#00FFFF" strokeWidth="1" />
                <rect x="65" y="40" width="20" height="20" fill="none" stroke="#A855F7" strokeWidth="1" />
                <text x="75" y="54" fontSize="10" fill="#A855F7" textAnchor="middle" className="font-mono">X</text>
              </svg>
              <div className="absolute inset-0 bg-gradient-radial from-quantum/10 to-transparent blur-xl" />
            </div>

            <h3 className="font-sans font-bold text-2xl text-white mb-1">Aayushman Ghatak</h3>
            <p className="font-sans text-[13px] text-gray-400 mb-2">Quantum · Cybersecurity · AI Researcher</p>
            <p className="font-sans text-[12px] text-quantum mb-1">SRM Institute of Science & Technology</p>
            <p className="font-mono text-[11px] text-gray-500 mb-4">B.Tech CSE (AI & ML) — Expected May 2027</p>
            
            <div className="flex items-center gap-1 text-[12px] text-gray-400 mb-6">
              <MapPin size={14} /> Chennai, Tamil Nadu
            </div>

            <div className="w-full h-[1px] bg-quantum/10 mb-6" />

            <div className="flex flex-col gap-3 w-full text-left font-sans text-sm text-gray-300 mb-8">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-quantum" /> aayushmanghatakofficial@gmail.com
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-quantum" /> 9002640590
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {['English', 'Bengali', 'Hindi', 'Japanese'].map(lang => (
                <div key={lang} className="border border-neural/30 text-neural/70 rounded-full px-3 py-0.5 text-xs font-mono">
                  {lang}
                </div>
              ))}
            </div>

          </GlassCard>
        </motion.div>

        {/* Right - Summary Block */}
        <div className="flex flex-col justify-center">
          <SectionHeader 
            label="> ABOUT_ME.txt" 
            title="Forward-Thinking Researcher" 
          />
          
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: '100%' }} 
            viewport={{ once: true }} 
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[2px] bg-quantum mb-8 max-w-sm" 
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-gray-300 text-[16px] leading-[1.8] mb-10"
          >
            Forward-thinking Computer Science engineering student specializing in the intersection of Quantum Computing, Artificial Intelligence, and Cybersecurity. Proven experience developing quantum-safe architectures using Qiskit and conducting rigorous network vulnerability assessments. Passionate about advancing research in quantum cryptography and securing next-generation infrastructure against emerging threats.
          </motion.p>

          <div className="flex flex-col md:flex-row gap-4">
            <GlassCard className="!p-4 border-quantum flex-1 hover:-translate-y-2 transition-transform">
              <Atom size={20} className="text-quantum mb-2" />
              <h4 className="font-sans font-bold text-white text-sm mb-1">Quantum Computing</h4>
              <p className="font-mono text-gray-400 text-[10px]">Qiskit · QBER · Teleportation</p>
            </GlassCard>
            <GlassCard className="!p-4 border-cyber flex-1 hover:-translate-y-2 transition-transform">
              <Shield size={20} className="text-cyber mb-2" />
              <h4 className="font-sans font-bold text-white text-sm mb-1">Cybersecurity</h4>
              <p className="font-mono text-gray-400 text-[10px]">Pentesting · Burp Suite · sqlmap</p>
            </GlassCard>
            <GlassCard className="!p-4 border-neural flex-1 hover:-translate-y-2 transition-transform">
              <Brain size={20} className="text-neural mb-2" />
              <h4 className="font-sans font-bold text-white text-sm mb-1">Artificial Intelligence</h4>
              <p className="font-mono text-gray-400 text-[10px]">Deep Learning · CV · YOLO</p>
            </GlassCard>
          </div>
        </div>

      </div>
    </section>
  );
};
