"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
  magnetic?: boolean;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<any>;
  className?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<any, ButtonProps>(
  ({ className, variant = "primary", size = "md", magnetic = true, href, type = "button", disabled, onClick, children, ...props }, ref) => {
    // Magnetic Effect Coordinates
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 15 };
    const dx = useSpring(x, springConfig);
    const dy = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<any>) => {
      if (!magnetic) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left - width / 2;
      const mouseY = e.clientY - rect.top - height / 2;
      // Cap the movement to 15px max in any direction
      x.set(mouseX * 0.35);
      y.set(mouseY * 0.35);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    // Style classes based on variant
    const variantStyles = {
      primary: "bg-white text-[#050816] hover:bg-white/90 shadow-lg shadow-white/5",
      secondary: "bg-[#101828] text-white hover:bg-slate-800 border border-white/8",
      outline: "bg-transparent text-white border border-white/20 hover:bg-white/5 hover:border-white/40",
      ghost: "bg-transparent text-[#B5C1D8] hover:text-white hover:bg-white/5",
      gradient: "relative bg-white text-[#050816] hover:bg-white/90 shadow-lg shadow-white/5 border-0 overflow-hidden",
    };

    const sizeStyles = {
      sm: "px-4 py-2 text-xs rounded-full font-sans font-medium tracking-wide",
      md: "px-6 py-3 text-sm rounded-full font-sans font-medium tracking-wide",
      lg: "px-8 py-4 text-base rounded-full font-sans font-medium tracking-wide",
    };

    const combinedClasses = cn(
      "inline-flex items-center justify-center cursor-pointer font-sans transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 disabled:pointer-events-none disabled:opacity-50 select-none",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      return (
        <motion.a
          ref={ref}
          href={href}
          onClick={onClick}
          style={{ x: dx, y: dy }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={combinedClasses}
          {...(props as any)}
        >
          {/* Glow element for gradient button */}
          {variant === "gradient" && (
            <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          )}
          <span className="relative z-10 flex items-center gap-2">{children}</span>
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        style={{ x: dx, y: dy }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={combinedClasses}
        {...(props as any)}
      >
        {/* Glow element for gradient button */}
        {variant === "gradient" && (
          <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";
