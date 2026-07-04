"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Users, Compass, Eye } from "lucide-react";

export const About = () => {
  return (
    <section className="py-32 bg-transparent relative overflow-hidden border-t border-white/5">
      {/* Visual backgrounds */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8A68B7] opacity-[0.02] rounded-full blur-[140px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Premium Philosophy Accent & Custom Animated Core */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/8 backdrop-blur-sm mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D31A96]" />
              <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#b5c1d8]">
                Company Ethos
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.1] text-shadow-glow"
            >
              We don&apos;t build for the hype. <br />
              <span className="text-white">We build for the people.</span>
            </motion.h2>

            {/* Glowing Orb Planet Simulation Representing AI Ecosystem */}
            <div className="relative w-full h-[280px] bg-[#101828]/35 border border-white/5 rounded-2xl overflow-hidden flex items-center justify-center p-8">
              {/* Grid lines */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30" />
              
              {/* Planetary elements */}
              <div className="absolute w-[80px] h-[80px] bg-brand-gradient rounded-full blur-[30px] opacity-40 animate-pulse" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="absolute w-[200px] h-[200px] border border-dashed border-white/10 rounded-full"
              >
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#46B5F1] rounded-full shadow-[0_0_10px_#46B5F1]" />
              </motion.div>

              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="absolute w-[120px] h-[120px] border border-white/5 rounded-full"
              >
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#D31A96] rounded-full shadow-[0_0_10px_#D31A96]" />
              </motion.div>
              
              <span className="font-serif text-sm font-semibold tracking-wide text-[#b5c1d8] relative z-10 bg-[#050816]/80 px-4 py-2 rounded-full border border-white/8 backdrop-blur-sm">
                Intelligent Ecosystem
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="flex gap-4 items-start"
            >
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/8 text-[#b5c1d8] mt-1 shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">Students &amp; Professionals First</h3>
                <p className="font-sans text-sm text-[#b5c1d8]/85 leading-relaxed">
                  Every product we build — Prompt Path, Kritifolio, Hyd Tech Diaries — is designed around the needs of students, working professionals, and job seekers. Real tools. Real impact. Zero noise.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-4 items-start"
            >
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/8 text-[#b5c1d8] mt-1 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">Rooted in Hyderabad, Built for the World</h3>
                <p className="font-sans text-sm text-[#b5c1d8]/85 leading-relaxed">
                  Gen Alfha is a distributed product lab founded in Hyderabad. We operate at the intersection of design precision, AI engineering, and community building — crafting digital experiences that scale globally from a local foundation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-4 items-start"
            >
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/8 text-[#b5c1d8] mt-1 shrink-0">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">Products &amp; Services, Together</h3>
                <p className="font-sans text-sm text-[#b5c1d8]/85 leading-relaxed">
                  Beyond our platforms, we offer Ohana — a premium design &amp; branding service helping clients craft websites, brand identities, and marketing visuals. We're both a product studio and a creative agency, under one roof.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
