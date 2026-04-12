import { motion } from "framer-motion";
import { scrollReveal } from "@/lib/animations";

export const SectionHeader = ({ label, title, subtitle, color = "cyan" }: { label: string, title: string, subtitle?: string, color?: "cyan" | "green" | "purple" }) => {
  const colorMap = { cyan: "text-quantum", green: "text-cyber", purple: "text-neural" };
  
  return (
    <motion.div variants={scrollReveal} className="flex flex-col gap-4 mb-16">
      <div className={`font-mono text-[11px] ${colorMap[color]}`}>{label}</div>
      <h2 className="font-orbitron text-5xl md:text-[52px] text-white tracking-wide">{title}</h2>
      {subtitle && <p className="font-sans text-[#94A3B8] max-w-2xl text-[15px]">{subtitle}</p>}
    </motion.div>
  );
};
