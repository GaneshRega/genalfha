"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

/* ─── Stage Data ─────────────────────────────────────────────────── */
const STAGES = [
  {
    id: "strategy",
    num: "01",
    label: "Idea & Scoping",
    title: "Strategic Blueprinting",
    description:
      "Every breakthrough starts with a problem. We align product aspirations with user needs, defining key features, technical architectures, and success vectors before a single line of code is written.",
    accent: "#46B5F1",
    accentRgb: "70,181,241",
    shapes: [
      { w: 140, h: 140, x: 55, y: 60, rotate: -15, opacity: 1.0 },
      { w: 140, h: 140, x: 80, y: 80, rotate: -5, opacity: 0.55 },
      { w: 140, h: 140, x: 105, y: 100, rotate: 5, opacity: 0.28 },
    ],
  },
  {
    id: "research",
    num: "02",
    label: "Deep Research",
    title: "Intelligence & Context",
    description:
      "We conduct competitive landscape analysis, select appropriate foundational models, and outline technical limitations — building a full intelligence map before any architecture is committed.",
    accent: "#8A68B7",
    accentRgb: "138,104,183",
    shapes: [
      { w: 160, h: 100, x: 45, y: 80, rotate: -10, opacity: 1.0 },
      { w: 160, h: 100, x: 70, y: 100, rotate: 0, opacity: 0.5 },
      { w: 160, h: 100, x: 95, y: 120, rotate: 10, opacity: 0.25 },
    ],
  },
  {
    id: "design",
    num: "03",
    label: "Premium UI/UX Design",
    title: "High-Fidelity Craftsmanship",
    description:
      "We craft custom design systems, typography grids, motion prototypes, and pixel-perfect dark-mode interfaces mimicking premium SaaS platforms. Every component is intention-first.",
    accent: "#D31A96",
    accentRgb: "211,26,150",
    shapes: [
      { w: 120, h: 170, x: 60, y: 50, rotate: -12, opacity: 1.0 },
      { w: 120, h: 170, x: 85, y: 70, rotate: 0, opacity: 0.5 },
      { w: 120, h: 170, x: 110, y: 90, rotate: 12, opacity: 0.25 },
    ],
  },
  {
    id: "develop",
    num: "04",
    label: "Full-Stack Development",
    title: "Clean Modular Execution",
    description:
      "Our engineers build using Next.js, TypeScript, and state-of-the-art databases for optimized speed. We write typed, modular code — built to be read, extended, and scaled by teams.",
    accent: "#3B74BC",
    accentRgb: "59,116,188",
    shapes: [
      { w: 150, h: 150, x: 50, y: 55, rotate: -20, opacity: 1.0 },
      { w: 150, h: 150, x: 80, y: 80, rotate: -8, opacity: 0.52 },
      { w: 150, h: 150, x: 110, y: 105, rotate: 4, opacity: 0.26 },
    ],
  },
  {
    id: "launch",
    num: "05",
    label: "Production Launch",
    title: "Global Deployment",
    description:
      "Deploying to production with absolute reliability — CI/CD pipelines, caching schemas, CDN configs, and Lighthouse performance audits ensure your product hits the ground running.",
    accent: "#46B5F1",
    accentRgb: "70,181,241",
    shapes: [
      { w: 130, h: 130, x: 60, y: 65, rotate: 0, opacity: 1.0 },
      { w: 130, h: 130, x: 88, y: 88, rotate: 12, opacity: 0.5 },
      { w: 130, h: 130, x: 116, y: 111, rotate: 24, opacity: 0.25 },
    ],
  },
  {
    id: "scale",
    num: "06",
    label: "Continuous Scale",
    title: "Optimization & Growth",
    description:
      "Iterating based on real-world usage patterns, running core vitals diagnostics, and fine-tuning product features. We don't ship and forget — we evolve with your audience.",
    accent: "#8A68B7",
    accentRgb: "138,104,183",
    shapes: [
      { w: 155, h: 110, x: 45, y: 75, rotate: -8, opacity: 1.0 },
      { w: 155, h: 110, x: 75, y: 98, rotate: 4, opacity: 0.5 },
      { w: 155, h: 110, x: 105, y: 121, rotate: 16, opacity: 0.25 },
    ],
  },
];

/* ─── Layered Geometric Visual ────────────────────────────────────── */
const StageVisual = ({ stage }: { stage: typeof STAGES[0] }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ambient glow blob */}
      <div
        className="absolute w-[260px] h-[260px] rounded-full blur-[90px] pointer-events-none transition-all duration-700"
        style={{ background: `rgba(${stage.accentRgb}, 0.12)` }}
      />

      {/* Stacked layered shapes (isometric feel like the reference) */}
      <div className="relative w-[300px] h-[300px]">
        {stage.shapes.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 + i * 10 }}
            animate={{ opacity: s.opacity, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
            className="absolute border rounded-2xl backdrop-blur-sm"
            style={{
              width: s.w,
              height: s.h,
              left: s.x,
              top: s.y,
              rotate: `${s.rotate}deg`,
              borderColor: `rgba(${stage.accentRgb}, ${0.35 - i * 0.08})`,
              background: i === 0
                ? `rgba(${stage.accentRgb}, 0.10)`
                : i === 1
                ? `rgba(${stage.accentRgb}, 0.04)`
                : `rgba(${stage.accentRgb}, 0.02)`,
              boxShadow: i === 0
                ? `0 0 30px rgba(${stage.accentRgb}, 0.12), inset 0 0 20px rgba(${stage.accentRgb}, 0.05)`
                : "none",
            }}
          >
            {/* Inner cutout on first shape */}
            {i === 0 && (
              <div
                className="absolute rounded-xl border"
                style={{
                  width: s.w * 0.4,
                  height: s.h * 0.4,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  borderColor: `rgba(${stage.accentRgb}, 0.3)`,
                  background: "rgba(5, 8, 22, 0.7)",
                }}
              />
            )}
          </motion.div>
        ))}

        {/* Stage number watermark */}
        <div
          className="absolute bottom-4 left-4 font-serif text-8xl font-bold leading-none select-none pointer-events-none"
          style={{ color: `rgba(${stage.accentRgb}, 0.08)` }}
        >
          {stage.num}
        </div>
      </div>
    </div>
  );
};

/* ─── Main Section ────────────────────────────────────────────────── */
export const Journey = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  // Default to showing first item's visual when nothing is hovered
  const activeVisual = STAGES[hoveredIdx ?? 0];

  return (
    <section
      id="journey"
      className="py-32 bg-transparent relative overflow-hidden border-t border-white/5"
    >
      {/* Background ambient glows */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#8A68B7] opacity-[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[#3B74BC] opacity-[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* ── Top Header Row ─────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/8 backdrop-blur-sm mb-5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#8A68B7]" />
              <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#b5c1d8]">
                Methodology & Philosophy
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
            >
              From Spark to System: <br />
              <span className="text-[#b5c1d8]">The Product Journey</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:text-right flex-shrink-0"
          >
            <p className="font-sans text-sm text-[#b5c1d8]/60 max-w-xs md:max-w-[240px] leading-relaxed">
              We don&apos;t build isolated tools. We engineer coherent workflows — from abstract idea to world-class digital product.
            </p>
          </motion.div>
        </div>

        {/* ── Two-Column Body ────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/6 rounded-3xl overflow-hidden bg-[#080f1e]/60 backdrop-blur-sm">

          {/* LEFT: Hover-to-expand numbered list */}
          {/* onMouseLeave is on the PARENT so crossing row borders doesn't reset state */}
          <div
            className="border-r border-white/6"
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {STAGES.map((stage, idx) => {
              const isHovered = hoveredIdx === idx;
              const isOtherHovered = hoveredIdx !== null && hoveredIdx !== idx;

              return (
                <motion.div
                  key={stage.id}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className={`relative border-b border-white/5 last:border-b-0 cursor-pointer overflow-hidden transition-colors duration-300 ${
                    isHovered ? "bg-white/[0.03]" : "bg-transparent"
                  }`}
                  animate={{ opacity: isOtherHovered ? 0.42 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Accent left border — CSS transition, no layout impact */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[2px] rounded-r-full transition-all duration-300 origin-top"
                    style={{
                      background: stage.accent,
                      transform: isHovered ? "scaleY(1)" : "scaleY(0)",
                      opacity: isHovered ? 1 : 0,
                    }}
                  />

                  <div className="px-8 py-5">

                    {/* ── Compact row (always visible) ── */}
                    <div className="flex items-center gap-5">
                      {/* Number */}
                      <span
                        className="font-mono text-[13px] font-bold flex-shrink-0 transition-colors duration-250"
                        style={{ color: isHovered ? stage.accent : "rgba(181,193,216,0.35)" }}
                      >
                        {stage.num}
                      </span>

                      {/* Arrow — CSS transition, no unmount flash */}
                      <ArrowRight
                        className="w-4 h-4 flex-shrink-0 transition-all duration-200"
                        style={{
                          color: stage.accent,
                          opacity: isHovered ? 1 : 0,
                          transform: isHovered ? "translateX(0)" : "translateX(-10px)",
                        }}
                      />

                      {/* Label sits below, title is absolutely positioned to avoid height shift */}
                      <div className="flex-1 min-w-0 relative">
                        {/* Compact label — always rendered, fades out */}
                        <span
                          className="font-sans text-xs font-semibold uppercase tracking-widest text-[#b5c1d8]/45 block transition-all duration-200"
                          style={{
                            opacity: isHovered ? 0 : 1,
                            transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                          }}
                        >
                          {stage.label}
                        </span>
                        {/* Expanded title — overlaps compact label */}
                        <span
                          className="font-serif text-xl md:text-2xl font-bold text-white tracking-tight block absolute top-0 left-0 right-0 transition-all duration-200"
                          style={{
                            opacity: isHovered ? 1 : 0,
                            transform: isHovered ? "translateY(0)" : "translateY(6px)",
                            pointerEvents: "none",
                          }}
                        >
                          {stage.title}
                        </span>
                      </div>
                    </div>

                    {/* ── Description: CSS max-height, no JS layout reflow ── */}
                    <div
                      className="overflow-hidden transition-all duration-350"
                      style={{
                        maxHeight: isHovered ? "120px" : "0px",
                        opacity: isHovered ? 1 : 0,
                        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    >
                      <p className="font-sans text-sm text-[#b5c1d8]/65 leading-relaxed pt-4 pb-1 pl-[60px] max-w-md">
                        {stage.description}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT: Animated visual panel */}
          <div className="relative flex items-center justify-center min-h-[420px] p-8 overflow-hidden">
            {/* Grid dot background */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* Corner label */}
            <div className="absolute top-6 right-7 text-right">
              <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#b5c1d8]/30">
                Effective software
              </p>
              <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#b5c1d8]/30">
                development process
              </p>
            </div>

            {/* Animated visual switcher */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVisual.id}
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -15 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full absolute inset-0 flex items-center justify-center"
              >
                <StageVisual stage={activeVisual} />
              </motion.div>
            </AnimatePresence>

            {/* Bottom label */}
            <div className="absolute bottom-6 left-7">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeVisual.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-[10px] uppercase tracking-widest"
                  style={{ color: activeVisual.accent }}
                >
                  Stage {activeVisual.num} — {activeVisual.label}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

        </div>
        {/* End two-col */}

      </div>
    </section>
  );
};
