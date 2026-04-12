"use client";

import { SectionHeader } from "./SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/constants";
import { motion } from "framer-motion";

export const ProjectsSection = () => {
  const featuredProject = projects.find(p => (p as any).featured);
  const gridProjects = projects.filter(p => !(p as any).featured);

  return (
    <section id="projects" className="py-32 max-w-7xl mx-auto px-6 relative z-10">
      <SectionHeader 
        label="> PROTOCOLS_AND_SYSTEMS.md"
        title="Featured Research & Projects"
        color="cyan"
      />

      {/* Featured Project Spotlight */}
      {featuredProject && (
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="w-full relative glassmorphism mb-12 p-1 overflow-hidden"
        >
          {/* SVG Background */}
          <div className="absolute inset-0 z-0 opacity-20 flex items-center justify-center overflow-hidden">
            <svg className="w-[150%] h-[150%] animate-[spin_60s_linear_infinite]" viewBox="0 0 200 200">
               <circle cx="100" cy="100" r="80" fill="none" stroke="#00FFFF" strokeWidth="0.5" strokeDasharray="10 10"/>
               <rect x="80" y="80" width="40" height="40" fill="none" transform="rotate(45 100 100)" stroke="#A855F7" strokeWidth="0.5"/>
               <line x1="20" y1="100" x2="180" y2="100" stroke="#10B981" strokeWidth="0.5" strokeDasharray="2 4" />
               <line x1="100" y1="20" x2="100" y2="180" stroke="#10B981" strokeWidth="0.5" strokeDasharray="2 4" />
            </svg>
          </div>
          
          {/* Featured Content overlay on SVG */}
          <div className="relative z-10 backdrop-blur-md bg-void/40 w-full h-full p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-quantum/20 rounded-xl">
             <div className="flex-1">
               <div className="font-mono text-quantum text-xs mb-3 text-shadow-[0_0_10px_rgba(0,255,255,0.8)]">{"/// FEATURED_RESEARCH ///"}</div>
               <h3 className="font-orbitron font-bold text-4xl text-white mb-2">{featuredProject.title}</h3>
               <p className="font-mono text-quantum mb-6">{featuredProject.subtitle}</p>
               <p className="font-sans text-gray-300 leading-relax max-w-2xl mb-8">{featuredProject.description}</p>
               
               <div className="flex flex-wrap gap-2">
                 {featuredProject.tags.map(tag => (
                   <span key={tag} className="border border-quantum/30 bg-quantum/10 text-quantum px-3 py-1 rounded-full font-mono text-xs">
                     {tag}
                   </span>
                 ))}
               </div>
             </div>
             
             {/* Large icon visual block */}
             <div className="hidden md:flex flex-1 justify-end opacity-80 mix-blend-screen">
                <featuredProject.icon size={180} className="text-quantum filter drop-shadow-[0_0_50px_rgba(0,255,255,0.6)]" />
             </div>
          </div>

        </motion.div>
      )}

      {/* Masonry Grid for rest */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-max">
        {gridProjects.map((project, idx) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: idx * 0.1 }}
          >
            <ProjectCard project={project} index={idx + 1} />
          </motion.div>
        ))}
      </div>

    </section>
  );
};
