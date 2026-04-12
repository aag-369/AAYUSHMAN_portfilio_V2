import { motion } from "framer-motion";

export const SkillChip = ({ title, accent }: { title: string, accent: "quantum" | "cyber" | "neural" }) => {
  const colorMap = {
    quantum: "border-quantum/30 bg-quantum/5 text-quantum hover:border-quantum",
    cyber: "border-cyber/30 bg-cyber/5 text-cyber hover:border-cyber",
    neural: "border-neural/30 bg-neural/5 text-neural hover:border-neural"
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      className={`font-mono text-[12px] px-4 py-2 rounded-full border ${colorMap[accent]} transition-all duration-300 hover:scale-105 inline-flex items-center justify-center whitespace-nowrap`}
    >
      {title}
    </motion.div>
  );
};
