"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
  className?: string;
}

export const MetricCard = ({
  value,
  suffix = "",
  prefix = "",
  label,
  description,
  className
}: MetricCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useMotionValue(0);
  // Configure smooth spring counting motion
  const rounded = useSpring(count, { stiffness: 40, damping: 15 });
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isInView) {
      // Trigger count animation when in viewport
      count.set(value);
    }
  }, [isInView, count, value]);

  useEffect(() => {
    // Direct DOM writing on spring update avoids React component updates on every frame
    return rounded.on("change", (latest) => {
      if (spanRef.current) {
        spanRef.current.textContent = prefix + Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [rounded, prefix, suffix]);

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center p-6 text-center bg-[#101828]/50 border border-white/5 rounded-2xl backdrop-blur-sm hover:border-white/10 transition-all duration-300",
        className
      )}
    >
      <span
        ref={spanRef}
        className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-white mb-2 text-shadow-glow"
      >
        {prefix}0{suffix}
      </span>
      <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#46b5f1] mb-2">
        {label}
      </span>
      {description && (
        <span className="font-sans text-sm text-[#b5c1d8]/80 max-w-[220px]">
          {description}
        </span>
      )}
    </div>
  );
};
