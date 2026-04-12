"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";
import { GlassCard } from "./GlassCard";
import { Calendar, MapPin } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 max-w-7xl mx-auto px-6 relative z-10">
       <SectionHeader 
         label="> ACADEMIC_RECORDS.db"
         title="Education"
       />

       <div className="flex flex-col gap-6 w-full">
         {education.map((item, idx) => (
           <motion.div 
             key={idx}
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: '-50px' }}
             transition={{ delay: idx * 0.1, duration: 0.5 }}
           >
             <GlassCard className="relative pl-6 md:pl-10 !p-6 flex flex-col md:flex-row justify-between md:items-center gap-6">
               
               {/* Accent Left Border */}
               <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-quantum to-neural rounded-l-xl" />
               
               <div>
                 <h3 className="font-sans font-bold text-[20px] text-white mb-1">{item.institution}</h3>
                 <div className="font-sans text-[14px] text-quantum mb-3">{item.degree}</div>
                 
                 <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-gray-400 font-mono text-[12px]">
                   <div className="flex items-center gap-1.5"><Calendar size={14} /> {item.date}</div>
                   <div className="flex items-center gap-1.5"><MapPin size={14} /> {item.location}</div>
                 </div>
               </div>
               
               {item.coursework.length > 0 && (
                 <div className="flex flex-col gap-2 mt-4 md:mt-0 max-w-xs justify-start md:justify-end">
                   <div className="font-mono text-[10px] text-gray-500 text-left md:text-right">RELATED COURSEWORK</div>
                   <div className="flex flex-wrap gap-2 md:justify-end">
                      {item.coursework.map(course => (
                        <div key={course} className="glassmorphism font-mono text-[10px] px-2 py-1 border-neural/20 text-neural">
                           {course}
                        </div>
                      ))}
                   </div>
                 </div>
               )}

             </GlassCard>
           </motion.div>
         ))}
       </div>
    </section>
  );
};
