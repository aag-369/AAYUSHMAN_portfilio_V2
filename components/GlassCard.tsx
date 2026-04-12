import { ReactNode } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const GlassCard = ({ children, className, interactive = false, style }: { children: ReactNode, className?: string, interactive?: boolean, style?: React.CSSProperties }) => {
  return (
    <div style={style} className={twMerge(clsx("glassmorphism p-6 md:p-8 relative overflow-hidden", interactive && "interactive-card cursor-pointer", className))}>
      {children}
    </div>
  );
};
