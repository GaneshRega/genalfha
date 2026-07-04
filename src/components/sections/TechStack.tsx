"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

/* ─── Tech Data ──────────────────────────────────────────────────── */
const ROW_1 = [
  { name: "Next.js",      type: "Framework",          color: "#FFFFFF" },
  { name: "React",        type: "Frontend Library",   color: "#61DAFB" },
  { name: "TypeScript",   type: "Language",            color: "#3178C6" },
  { name: "Tailwind CSS", type: "Styling Engine",      color: "#06B6D4" },
  { name: "Flutter",      type: "Mobile Engine",       color: "#54C5F8" },
  { name: "Supabase",     type: "Backend Database",    color: "#3ECF8E" },
];

const ROW_2 = [
  { name: "Firebase",     type: "Realtime Store",      color: "#FFCA28" },
  { name: "OpenAI",       type: "Cognitive Models",    color: "#10A37F" },
  { name: "Claude",       type: "Linguistic Reasoning",color: "#D97752" },
  { name: "Figma",        type: "Visual Systems",      color: "#F24E1E" },
  { name: "Vercel",       type: "Edge Deployment",     color: "#FFFFFF" },
  { name: "PostgreSQL",   type: "Relational DB",       color: "#336791" },
];

/* ─── Single Marquee Strip ───────────────────────────────────────── */
const MarqueeRow = ({
  items,
  direction = "left",
  speed = 35,
}: {
  items: typeof ROW_1;
  direction?: "left" | "right";
  speed?: number;
}) => {
  // Duplicate enough times for seamless looping
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden w-full group">
      {/* Left fade mask */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #050816 0%, transparent 100%)" }} />
      {/* Right fade mask */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #050816 0%, transparent 100%)" }} />

      {/* Scrolling track */}
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: direction === "left" ? [0, "-50%"] : ["-50%", 0] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        // Pause on hover of the whole row
        whileHover={{ animationPlayState: "paused" } as any}
        style={{ willChange: "transform" }}
      >
        {repeated.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl border border-white/6 bg-[#0c1220]/80 backdrop-blur-sm cursor-default select-none transition-all duration-300 hover:border-white/14 hover:bg-[#101828]/90 group/pill"
            style={{
              boxShadow: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px rgba(${hexToRgb(tech.color)}, 0.12)`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            {/* Color dot */}
            <span
              className="w-2 h-2 rounded-full flex-shrink-0 shadow-lg"
              style={{
                backgroundColor: tech.color,
                boxShadow: `0 0 8px ${tech.color}60`,
              }}
            />
            {/* Name */}
            <span className="font-serif text-sm font-bold text-white whitespace-nowrap">
              {tech.name}
            </span>
            {/* Type badge */}
            <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-[#b5c1d8]/40 whitespace-nowrap">
              {tech.type}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

/* ─── Hex → RGB helper ───────────────────────────────────────────── */
function hexToRgb(hex: string): string {
  const h = hex.replace("#", "");
  if (h.length === 3) {
    const r = parseInt(h[0] + h[0], 16);
    const g = parseInt(h[1] + h[1], 16);
    const b = parseInt(h[2] + h[2], 16);
    return `${r},${g},${b}`;
  }
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `${r},${g},${b}`;
}

/* ─── Section ────────────────────────────────────────────────────── */
export const TechStack = () => {
  return (
    <section className="py-32 bg-transparent relative overflow-hidden border-t border-white/5">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-1/2 left-[10%] w-[500px] h-[500px] bg-[#3B74BC] opacity-[0.03] rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute bottom-1/2 right-[10%] w-[500px] h-[500px] bg-[#D31A96] opacity-[0.025] rounded-full blur-[160px]" />

      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

          {/* Left: heading */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/8 backdrop-blur-sm mb-5"
            >
              <Terminal className="w-3.5 h-3.5 text-[#46B5F1]" />
              <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#b5c1d8]">
                The Core Engine
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
            >
              Built on a Foundation of{" "}
              <span className="text-white">Modern Tech</span>
            </motion.h2>
          </div>

          {/* Right: description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-sm text-[#b5c1d8]/65 max-w-sm leading-relaxed md:text-right"
          >
            We curate the most robust, highly scalable, and future-proof technologies to compose our application ecosystem. No legacies. No overhead. Only speed and reliability.
          </motion.p>
        </div>
      </div>

      {/* ── Marquee Rows ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col gap-3"
      >
        {/* Row 1 → scrolls left */}
        <MarqueeRow items={ROW_1} direction="left" speed={40} />

        {/* Row 2 → scrolls right (opposite direction) */}
        <MarqueeRow items={ROW_2} direction="right" speed={45} />
      </motion.div>

      {/* ── Bottom tagline ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-7xl mx-auto px-6 md:px-8 mt-12 flex items-center gap-3"
      >
        <div className="h-px flex-1 bg-white/5" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#b5c1d8]/30">
          Edge functions · Serverless backends · Multi-modal AI
        </span>
        <div className="h-px flex-1 bg-white/5" />
      </motion.div>
    </section>
  );
};
