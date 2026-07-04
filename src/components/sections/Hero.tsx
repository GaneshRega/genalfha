"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 1. Particle Canvas System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const particleCount = 40;
    particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.15,
      speedY: (Math.random() - 0.5) * 0.15,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    // Animation Loop
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Reset positions if out of bounds
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(181, 193, 216, ${p.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };
    drawParticles();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // 2. Grid glow tracker
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        // Set custom properties for grid glow utility
        "--x": `${mousePos.x}px`,
        "--y": `${mousePos.y}px`,
      } as React.CSSProperties}
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#050816] bg-grid-pattern"
    >
      {/* 1. Ambient Glow Backdrops */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#3B74BC] opacity-[0.08] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-[#D31A96] opacity-[0.05] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-glow pointer-events-none" />

      {/* 2. Interactive Canvas Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-60"
      />

      {/* 3. Content Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Headlines & Actions */}
        <div className="lg:col-span-7 text-left flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/8 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4.5 h-4.5 text-[#46B5F1]" />
            <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#b5c1d8]">
              Next-Gen AI Agency & Suite
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.08] text-shadow-glow"
          >
            Building the <br />
            <span className="text-white font-semibold">Next Generation</span> <br />
            of AI Products.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-base md:text-lg text-[#b5c1d8] mb-10 leading-relaxed max-w-2xl"
          >
            We create intelligent software that empowers students, professionals,
            creators, and businesses through AI-powered experiences. Crafted with design precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Products <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>

        {/* Right Column: Floating Premium Product Cards */}
        <div className="lg:col-span-5 relative w-full h-[450px] flex items-center justify-center">
          {/* Card 1: Prompt Path (Live) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
            transition={{
              scale: { duration: 0.8 },
              opacity: { duration: 0.8 },
              y: {
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              },
            }}
            className="absolute top-8 left-4 md:left-12 z-20 w-[280px] bg-[#101828]/80 backdrop-blur-xl border border-white/8 rounded-2xl p-5 shadow-2xl shadow-black/40"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-[#46B5F1]/10 border border-[#46B5F1]/20 text-[#46B5F1]">
                  <Terminal className="w-4.5 h-4.5" />
                </div>
                <span className="font-serif text-sm font-bold text-white">Prompt Path</span>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-sans font-bold bg-[#46B5F1]/20 text-[#46B5F1] border border-[#46B5F1]/30">
                LIVE
              </span>
            </div>

            <p className="font-sans text-[11px] text-[#b5c1d8] mb-4">
              Interactive prompt-engineering missions. Master the language of AI.
            </p>

            <div className="bg-[#050816] rounded-lg p-2.5 font-mono text-[9px] text-[#b5c1d8] border border-white/5">
              <span className="text-[#8A68B7]">const</span> prompt = <span className="text-[#D31A96]">&quot;Translate feelings to code&quot;</span>;
            </div>
          </motion.div>

          {/* Card 2: BOOM Mail (Coming Soon) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 80 }}
            animate={{ opacity: 1, scale: 1, y: [0, 15, 0] }}
            transition={{
              scale: { duration: 0.8, delay: 0.15 },
              opacity: { duration: 0.8, delay: 0.15 },
              y: {
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              },
            }}
            className="absolute bottom-8 right-4 md:right-12 z-10 w-[290px] bg-[#101828]/60 backdrop-blur-md border border-white/8 rounded-2xl p-5 shadow-xl shadow-black/30"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-[#D31A96]/10 border border-[#D31A96]/20 text-[#D31A96]">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <span className="font-serif text-sm font-bold text-white">BOOM Mail</span>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-sans font-bold bg-white/5 border border-white/8 text-[#b5c1d8]">
                COMING SOON
              </span>
            </div>

            <div className="flex items-center gap-2 mb-3 bg-white/[0.02] border border-white/5 rounded-lg p-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#8A68B7]" />
              <div className="h-2 w-28 bg-[#b5c1d8]/20 rounded-full" />
            </div>

            <p className="font-sans text-[11px] text-[#b5c1d8]/80">
              Create, automate, and scale intelligent email campaigns.
            </p>
          </motion.div>

          {/* Core Central Orbital Ring Backdrop */}
          <div className="absolute inset-0 border border-white/5 rounded-full w-[360px] h-[360px] m-auto pointer-events-none animate-[spin_40s_linear_infinite]" />
          <div className="absolute inset-0 border border-dashed border-white/10 rounded-full w-[260px] h-[260px] m-auto pointer-events-none animate-[spin_20s_linear_infinite_reverse]" />
        </div>
      </div>
    </section>
  );
};
