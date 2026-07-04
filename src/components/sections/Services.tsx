"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Layers,
  Smartphone,
  Palette,
  Zap,
  Target,
  Award,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/Card";

const SERVICES = [
  {
    icon: Brain,
    title: "AI Product Development",
    description: "Building AI-powered learning platforms like Prompt Path — integrating LLMs, prompt chains, and intelligent feedback loops that make complex AI accessible.",
    color: "rgba(70, 181, 241, 0.15)",
  },
  {
    icon: Layers,
    title: "Web & SaaS Platforms",
    description: "Crafting lightning-fast Next.js applications — from portfolio builders like Kritifolio to community hubs like Hyd Tech Diaries — optimized for real users.",
    color: "rgba(59, 116, 188, 0.15)",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Creating premium cross-platform mobile apps using Flutter. Every interaction is crafted for stability, fluidity, and a native-grade experience.",
    color: "rgba(138, 104, 183, 0.15)",
  },
  {
    icon: Palette,
    title: "Ohana — Design & Branding",
    description: "Our design service arm. We craft website designs, brand identity systems, logo suites, and marketing materials for startups and businesses that want to stand out.",
    color: "rgba(211, 26, 150, 0.15)",
  },
  {
    icon: Zap,
    title: "Marketing Creatives",
    description: "Designing high-converting social media posters, campaign visuals, pitch decks, and promotional content that communicates your brand at a glance.",
    color: "rgba(138, 104, 183, 0.15)",
  },
  {
    icon: Target,
    title: "Product Strategy",
    description: "From idea to architecture — we help founders define their product scope, validate assumptions, and build a roadmap that aligns with real user needs.",
    color: "rgba(211, 26, 150, 0.15)",
  },
  {
    icon: Cloud,
    title: "Affiliate & Growth Platforms",
    description: "Building referral and affiliate ecosystems like House of Vrika — connecting products with audiences and creating revenue loops that scale organically.",
    color: "rgba(70, 181, 241, 0.15)",
  },
  {
    icon: Award,
    title: "Brand Identity Systems",
    description: "Full brand kits — logos, typography, color systems, and visual language — built to give emerging companies a premium, consistent presence from day one.",
    color: "rgba(59, 116, 188, 0.15)",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-[#050816] relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-brand-gradient opacity-[0.015] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/8 backdrop-blur-sm mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#46B5F1]" />
            <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#b5c1d8]">
              Services & Capabilities
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Powering Digital Innovation <br />
            Through <span className="text-white">Expert Engineering</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-base text-[#b5c1d8] max-w-2xl"
          >
            We partner with ambitious startups and enterprises to design, develop, launch, and scale modern software products.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Card
                  glowColor={service.color}
                  className="h-full flex flex-col items-start p-6 lg:p-8"
                >
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/8 text-[#b5c1d8] group-hover:text-white group-hover:bg-[#101828] group-hover:border-white/15 transition-all duration-300 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-[#b5c1d8]/80 leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
