"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import { certifications } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-32 max-w-7xl mx-auto px-6 relative z-10">
      <SectionHeader 
        label="> TRAINING_&_CERTIFICATES"
        title="Certifications"
        color="cyan"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => {
          const [name, issuer] = cert.split(" — ");
          const isCheck = idx % 2 === 0;

          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative glassmorphism p-6 overflow-hidden hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] transition-all duration-300 rounded-xl"
            >
              {/* Holographic Shimmer Effect using pseudo element injected via arbitrary styles */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, transparent 40%, rgba(0,255,255,0.08) 50%, transparent 60%)',
                  backgroundSize: '200% 200%',
                  animation: 'shimmer 1.5s infinite linear'
                }}
              />
              
              <style jsx>{`
                @keyframes shimmer {
                  from { background-position: -100% -100%; }
                  to { background-position: 200% 200%; }
                }
              `}</style>
              
              <div className="relative z-10 flex flex-col gap-3 h-full justify-center">
                 {isCheck ? (
                   <BadgeCheck size={28} className="text-quantum mb-2" />
                 ) : (
                   <Award size={28} className="text-cyber mb-2" />
                 )}
                 <div>
                   <h4 className="font-sans font-bold text-[15px] text-white leading-snug mb-1">{name}</h4>
                   {issuer && (
                     <p className="font-mono text-[12px] text-gray-500">Issued by {issuer}</p>
                   )}
                 </div>
              </div>

            </motion.div>
          )
        })}
      </div>
    </section>
  );
};
