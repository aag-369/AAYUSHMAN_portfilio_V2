"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const links = ["About", "Skills", "Projects", "Experience", "Certifications", "Contact"];

export const NavBar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 80);
  });

  return (
    <>
      <motion.nav
        className={twMerge(clsx(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled ? "py-4 glassmorphism !rounded-none !border-t-0 !border-x-0 !border-b !border-b-quantum/20 !bg-void/80" : "py-6 bg-transparent"
        ))}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="font-orbitron text-quantum text-xl font-bold">AG</span>
              <motion.span 
                animate={{ opacity: [1, 0, 1] }} 
                transition={{ duration: 1, repeat: Infinity }}
                className="w-2 h-5 bg-quantum ml-1 block"
              />
            </div>
            <span className="font-mono text-[10px] text-ghost tracking-widest mt-0.5">quantum.cyber.ai</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="relative font-sans text-[13px] uppercase tracking-[1.5px] text-gray-300 hover:text-quantum hover:tracking-[2.5px] transition-all duration-300 group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-quantum group-hover:w-full transition-all duration-300 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
              </a>
            ))}
          </div>

          {/* Status + Mobile Toggle */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2">
              <motion.div 
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-cyber"
              />
              <span className="font-mono text-[11px] text-gray-400">Available for Research</span>
            </div>
            
            <button className="md:hidden text-quantum" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-void/95 glassmorphism flex flex-col justify-center items-center gap-8"
        >
          {links.map((item, idx) => (
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="font-orbitron text-2xl text-white hover:text-quantum"
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      )}
    </>
  );
};
