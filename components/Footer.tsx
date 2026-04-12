"use client";

import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-quantum/10 py-8 relative z-10 bg-void">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="font-orbitron text-[14px] text-white">Aayushman Ghatak</span>
          <span className="font-sans text-[11px] text-gray-500">Quantum · Cyber · AI</span>
        </div>

        <div className="font-sans text-[11px] text-gray-500 text-center">
          © 2025 — Built with Next.js, Three.js & Quantum Ambition
        </div>

        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="glassmorphism w-11 h-11 rounded-full flex items-center justify-center text-quantum hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all"
        >
          <ArrowUp size={18} />
        </button>

      </div>
    </footer>
  );
};
