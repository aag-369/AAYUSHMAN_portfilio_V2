"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { experience } from "@/lib/constants";
import { GlassCard } from "./GlassCard";
import { SectionHeader } from "./SectionHeader";

const TimelineNode = ({ accent }: { accent: string }) => {
  const shadowMap: Record<string, string> = {
    quantum: "hover:shadow-[0_0_16px_#00FFFF]",
    cyber: "hover:shadow-[0_0_16px_#10B981]",
    neural: "hover:shadow-[0_0_16px_#A855F7]",
  };
  const borderMap: Record<string, string> = {
    quantum: "border-quantum text-quantum",
    cyber: "border-cyber text-cyber",
    neural: "border-neural text-neural",
  };

  return (
    <div className={`w-3 h-3 rounded-full bg-surface border-2 ${borderMap[accent]} ${shadowMap[accent]} transition-all duration-300 hover:scale-[1.5] absolute left-1/2 -ml-1.5 mt-8 hidden md:block`} />
  );
};

export const ExperienceSection = () => {
  const textColors: Record<string, string> = {
    quantum: "text-quantum",
    cyber: "text-cyber",
    neural: "text-neural",
  };

  const bgColors: Record<string, string> = {
    quantum: "bg-quantum",
    cyber: "bg-cyber",
    neural: "bg-neural",
  };

  return (
    <section id="experience" className="py-32 max-w-7xl mx-auto px-6 relative z-10">
      <SectionHeader 
        label="> CAREER_TRAJECTORY.log"
        title="Experience"
        color="purple"
      />

      <div className="relative mt-12 w-full">
        {/* Center line desktop */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] origin-top bg-gradient-to-b from-quantum via-cyber to-neural z-0 hidden md:block" 
        />
        
        {/* Mobile line */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          className="absolute left-[15px] top-0 bottom-0 w-[1px] origin-top bg-gradient-to-b from-quantum to-neural z-0 md:hidden" 
        />

        <div className="flex flex-col gap-12 w-full relative z-10">
          {experience.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div 
                 key={idx}
                 initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 30 }}
                 whileInView={{ opacity: 1, x: 0, y: 0 }}
                 viewport={{ once: true, margin: '-50px' }}
                 transition={{ duration: 0.6 }}
                 className={`flex w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'} pl-10 md:pl-0 relative`}
              >
                <TimelineNode accent={item.accent} />
                
                {/* Connector line desktop */}
                <div className={`hidden md:block absolute top-[38px] w-8 border-t border-dashed border-gray-600 ${isLeft ? 'right-[50%] mr-3' : 'left-[50%] ml-3'}`} />
                
                <div className="w-full md:w-[45%]">
                  <GlassCard className="!p-6 group hover:-translate-y-2 relative overflow-visible">
                    
                    {/* Domain badge */}
                    <div className={`absolute -top-3 right-4 font-mono text-[9px] px-2 py-0.5 rounded-full border border-${item.accent}/30 ${bgColors[item.accent]}/10 ${textColors[item.accent]}`}>
                      {item.badge}
                    </div>

                    <h4 className="font-sans font-bold text-white text-[18px] mb-1">{item.title}</h4>
                    <div className={`font-mono text-[14px] ${textColors[item.accent]} mb-4`}>@ {item.company}</div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-gray-400 text-xs mb-4">
                      <div className="flex items-center gap-1.5"><Calendar size={14} /> {item.dates}</div>
                      <div className="flex items-center gap-1.5"><MapPin size={14} /> {item.location}</div>
                    </div>

                    <ul className="flex flex-col gap-2">
                       {item.bullets.map((bullet, i) => (
                         <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                           <ChevronRight size={16} className="text-cyber shrink-0 mt-0.5" />
                           <span className="leading-relaxed">{bullet}</span>
                         </li>
                       ))}
                    </ul>

                  </GlassCard>
                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
};
