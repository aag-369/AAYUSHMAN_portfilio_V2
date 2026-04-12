"use client";

import { useRef, MouseEvent, useState } from "react";
import { Github } from "lucide-react";
import { StatusBadge } from "./StatusBadge";
import { Project } from "@/lib/constants";

export const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const borderColors: Record<string, string> = {
    quantum: "border-quantum",
    cyber: "border-cyber",
    neural: "border-neural",
  };
  
  const textColors: Record<string, string> = {
    quantum: "text-quantum",
    cyber: "text-cyber",
    neural: "text-neural",
  };

  const IconComponent = project.icon;

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glassmorphism flex flex-col p-6 border-t-4 transition-transform duration-500 ease-out`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        borderTopColor: `var(--color-${project.accentColor})`,
        borderTopWidth: '3px' // Wait, tailwind config doesn't export CSS vars for colors by default. I will use the mapping.
      }}
    >
      <div className={`absolute top-0 w-full h-[3px] left-0 bg-${project.accentColor}`} />
      
      {/* Top Row */}
      <div className="flex justify-between items-center mb-6">
        <div className={`p-3 rounded-xl bg-surface ${borderColors[project.accentColor]} border-opacity-30 border`}>
          <IconComponent size={24} className={textColors[project.accentColor]} />
        </div>
        <div className="font-mono text-gray-500 font-bold text-lg">
          #{String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Content */}
      <h3 className="font-sans font-bold text-[22px] text-white mb-2">{project.title}</h3>
      <div className={`font-mono text-[13px] mb-4 ${textColors[project.accentColor]}`}>
        {project.subtitle}
      </div>
      <p className="font-sans text-[14px] text-[#94A3B8] leading-[1.7] mb-6 flex-grow">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map(tag => (
          <div key={tag} className={`font-mono text-[11px] px-2 py-0.5 rounded-full border border-opacity-30 ${borderColors[project.accentColor]} bg-opacity-5 ${textColors[project.accentColor]}`}>
            {tag}
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="flex justify-between items-center mt-auto border-t border-ghost/50 pt-4">
        <StatusBadge status={project.status} />
        <button className="text-gray-400 hover:text-white transition-colors">
          <Github size={20} />
        </button>
      </div>

    </div>
  );
};
