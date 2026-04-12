"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Check } from "lucide-react";
import { GlassCard } from "./GlassCard";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 w-full max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="font-mono text-[11px] text-cyber mb-4">&gt; INITIATE_CONTACT.sh</div>
        <h2 className="font-orbitron text-5xl md:text-[52px] text-white">Let&apos;s Build the Future</h2>
        <p className="font-sans text-gray-400 mt-4">Open to research collaborations, internships, and quantum-cyber projects.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="w-full"
      >
        <GlassCard className="w-full flex flex-col items-center p-8 md:p-12 mb-8">
           
           <div className="flex flex-col gap-6 w-full items-center font-sans text-white text-lg">
             <a href="mailto:aayushmanghatakofficial@gmail.com" className="flex items-center gap-3 hover:text-quantum transition-colors">
               <Mail className="text-quantum" /> aayushmanghatakofficial@gmail.com
             </a>
             <div className="flex items-center gap-3">
               <Phone className="text-quantum" /> +91-9002640590
             </div>
             <div className="flex items-center gap-3">
               <MapPin className="text-quantum" /> Chennai, Tamil Nadu
             </div>
           </div>

           <div className="w-full h-px bg-quantum/10 my-8" />

           <div className="flex gap-4">
              <a href="#" className="w-11 h-11 rounded-full glassmorphism flex items-center justify-center text-white hover:text-quantum hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all">
                 <Github size={20} />
              </a>
              <a href="#" className="w-11 h-11 rounded-full glassmorphism flex items-center justify-center text-white hover:text-quantum hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all">
                 <Linkedin size={20} />
              </a>
           </div>

        </GlassCard>

        {/* Fake Terminal */}
        <div className="w-full bg-surface/80 glassmorphism rounded-xl p-4 font-mono text-[13px] text-gray-300">
           <div className="text-cyber mb-2">$ check_availability --user=aayushman</div>
           <div className="flex items-center gap-2 mb-1"><span className="text-green-500">[<Check size={12} className="inline ml-[-2px]"/>]</span> STATUS: Available for Research Collaboration</div>
           <div className="flex items-center gap-2 mb-1"><span className="text-green-500">[<Check size={12} className="inline ml-[-2px]"/>]</span> DOMAINS: Quantum Computing | Cybersecurity | AI/ML</div>
           <div className="flex items-center gap-2"><span className="text-green-500">[<Check size={12} className="inline ml-[-2px]"/>]</span> RESPONSE_TIME: &lt; 24 hours <span className="inline-block w-2 h-4 bg-gray-400 animate-pulse ml-1 align-middle" /></div>
        </div>
      </motion.div>
    </section>
  );
};
