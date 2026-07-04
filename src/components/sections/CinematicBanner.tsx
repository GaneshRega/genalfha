"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Users, Cpu, Rocket } from "lucide-react";

/* ─── Stat Card Slides ────────────────────────────────────────────── */
const SLIDES = [
  {
    stat: "4+",
    label: "Years",
    sub: "Of combined experience in software development and digital solutions.",
    icon: Cpu,
    accent: "#46B5F1",
  },
  {
    stat: "5+",
    label: "Products",
    sub: "Live AI-powered products built and shipped across global markets.",
    icon: Rocket,
    accent: "#8A68B7",
  },
  {
    stat: "100%",
    label: "AI-First",
    sub: "Every product we build is grounded in intelligent automation from day one.",
    icon: Sparkles,
    accent: "#D31A96",
  },
];

/* ─── Main Component ──────────────────────────────────────────────── */
export const CinematicBanner = () => {
  const [slide, setSlide] = useState(0);

  return (
    <section className="py-20 bg-transparent relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full rounded-3xl overflow-hidden"
          style={{ minHeight: "420px" }}
        >
          {/* ── Background image ── */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/team-bg.png')" }}
          />

          {/* ── Multi-layer dark overlay ── */}
          {/* Base darkening */}
          <div className="absolute inset-0 bg-[#050816]/55" />
          {/* Left-heavy gradient for text legibility */}
          <div className="absolute inset-0"
            style={{
              background: "linear-gradient(105deg, rgba(5,8,22,0.88) 0%, rgba(5,8,22,0.60) 45%, rgba(5,8,22,0.15) 100%)"
            }}
          />
          {/* Bottom gradient */}
          <div className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(5,8,22,0.80) 0%, transparent 60%)"
            }}
          />
          {/* Subtle brand color tint */}
          <div className="absolute inset-0 opacity-10"
            style={{
              background: "radial-gradient(ellipse at 20% 80%, #3B74BC 0%, transparent 60%)"
            }}
          />

          {/* ── Content layer ── */}
          <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12"
            style={{ minHeight: "420px" }}>

            {/* Top bar */}
            <div className="flex items-start justify-between">
              {/* Brand mark */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="font-serif text-sm font-bold text-white tracking-wide">
                  Gen Alfha
                </span>
              </div>

              {/* Top-right badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-sm font-sans text-[10px] font-bold uppercase tracking-wider text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AI Product Studio
              </span>
            </div>

            {/* Bottom content row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-auto">

              {/* Left: headline + description */}
              <div className="max-w-lg">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
                >
                  Powering the Next Generation<br />
                  of <span className="text-[#46B5F1]">Intelligent Software</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="font-sans text-sm text-white/65 leading-relaxed max-w-md"
                >
                  At Gen Alfha, we are more than just a software company — we are
                  innovators, problem-solvers, and tech enthusiasts dedicated to
                  building digital solutions that drive real impact. With a deep
                  passion for clean, modern, and scalable software, we help ideas
                  stay ahead in an ever-evolving digital landscape.
                </motion.p>
              </div>

              {/* Right: floating stat card */}
              <div className="flex-shrink-0 w-[230px] md:w-[260px]">
                <div className="rounded-2xl overflow-hidden border border-white/15 backdrop-blur-xl bg-white/[0.06] shadow-2xl shadow-black/60">

                  {/* Card body */}
                  <div className="p-5">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={slide}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Icon */}
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border"
                          style={{
                            background: `rgba(${hexToRgb(SLIDES[slide].accent)}, 0.15)`,
                            borderColor: `rgba(${hexToRgb(SLIDES[slide].accent)}, 0.25)`,
                            color: SLIDES[slide].accent,
                          }}
                        >
                          {React.createElement(SLIDES[slide].icon, { className: "w-4.5 h-4.5" })}
                        </div>

                        {/* Stat number */}
                        <div className="flex items-end gap-1.5 mb-1">
                          <span
                            className="font-serif text-5xl font-bold leading-none"
                            style={{ color: SLIDES[slide].accent }}
                          >
                            {SLIDES[slide].stat}
                          </span>
                          <span className="font-sans text-base font-semibold text-white/70 mb-1">
                            {SLIDES[slide].label}
                          </span>
                        </div>

                        {/* Sub text */}
                        <p className="font-sans text-[11px] text-white/50 leading-relaxed">
                          {SLIDES[slide].sub}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Pagination dots */}
                  <div className="flex items-center justify-center gap-1.5 pb-4">
                    {SLIDES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSlide(i)}
                        className="cursor-pointer transition-all duration-300 rounded-full"
                        style={{
                          width: slide === i ? "20px" : "6px",
                          height: "6px",
                          background: slide === i
                            ? SLIDES[i].accent
                            : "rgba(255,255,255,0.20)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Helper ─────────────────────────────────────────────────────── */
function hexToRgb(hex: string): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `${r},${g},${b}`;
}
