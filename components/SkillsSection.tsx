"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { GlassCard } from "./GlassCard";
import { SkillChip } from "./SkillChip";
import { staggerContainer, scrollReveal } from "@/lib/animations";
import { Atom, Shield, Brain } from "lucide-react";
import { programmingLanguages } from "@/lib/constants";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 max-w-7xl mx-auto px-6 relative z-10">
      <SectionHeader 
        label="> TECHNICAL_ARSENAL.json" 
        title="Skills & Expertise" 
        subtitle="A cross-disciplinary stack spanning quantum hardware, cyber offense, and neural architectures."
        color="green"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Column 1 - Quantum */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2 text-white font-sans font-bold text-lg">
            <Atom className="text-quantum" /> Quantum Systems
          </div>
          <SkillChip title="Qiskit" accent="quantum" />
          <SkillChip title="Quantum-Safe Cryptography" accent="quantum" />
          <SkillChip title="Quantum Teleportation" accent="quantum" />
          <SkillChip title="QBER Monitoring" accent="quantum" />
          <SkillChip title="Quantum Gate Design" accent="quantum" />
        </motion.div>

        {/* Column 2 - Cyber */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2 text-white font-sans font-bold text-lg">
            <Shield className="text-cyber" /> Cyber Offense & Defense
          </div>
          <SkillChip title="Vulnerability Assessment" accent="cyber" />
          <SkillChip title='"Black Box" Testing' accent="cyber" />
          <SkillChip title="Penetration Testing" accent="cyber" />
          <SkillChip title="sqlmap" accent="cyber" />
          <SkillChip title="Burp Suite" accent="cyber" />
          <SkillChip title="Metasploitable" accent="cyber" />
          <SkillChip title="Network Layer Analysis" accent="cyber" />
        </motion.div>

        {/* Column 3 - AI/ML */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2 text-white font-sans font-bold text-lg">
            <Brain className="text-neural" /> AI & Machine Learning
          </div>
          <SkillChip title="Deep Learning" accent="neural" />
          <SkillChip title="Computer Vision" accent="neural" />
          <SkillChip title="Ultralytics (YOLO)" accent="neural" />
          <SkillChip title="OpenCV" accent="neural" />
          <SkillChip title="NVIDIA TAO Toolkit" accent="neural" />
          <SkillChip title="GRU Models" accent="neural" />
          <SkillChip title="Multiclass Classification" accent="neural" />
          <SkillChip title="Medical Imaging AI" accent="neural" />
        </motion.div>
      </div>

      <motion.div variants={scrollReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <GlassCard>
          <div className="text-sm font-sans text-gray-400 mb-6 font-medium">Programming Languages</div>
          <div className="flex flex-wrap gap-4">
            {programmingLanguages.map((lang) => (
              <div 
                key={lang.name} 
                className="flex items-center gap-3 px-5 py-3 rounded-xl border border-ghost glassmorphism bg-surface hover:scale-105 transition-transform cursor-default"
                style={{ borderColor: `rgba(var(--${lang.color}), 0.3)` }}
              >
                <div className="w-8 h-8 rounded bg-void flex items-center justify-center font-mono text-xs" style={{ color: `var(--${lang.color})` }}>
                  {lang.name.charAt(0)}
                </div>
                <span className="font-mono text-sm text-gray-200">{lang.name}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
};
