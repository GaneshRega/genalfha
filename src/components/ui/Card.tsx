"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: string;
  className?: string;
  animateHover?: boolean;
}

export const Card = ({
  children,
  className,
  glowColor = "rgba(70, 181, 241, 0.12)",
  animateHover = true,
  ...props
}: CardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative rounded-2xl border border-white/8 bg-[#101828] p-6 lg:p-8 overflow-hidden transition-all duration-500",
        animateHover && "hover:border-white/15 hover:shadow-2xl hover:shadow-[#000000]/50 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {/* Background Radial Glow that follows mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              ${glowColor},
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Dynamic Border Glow on Hover */}
      <div className="absolute inset-0 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">{children}</div>
    </div>
  );
};
