"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Terminal, Palette, BookOpen, Globe } from "lucide-react";
import Image from "next/image";

/* ─── Product Data ───────────────────────────────────────────────── */
const FEATURED = [
  {
    id: "prompt-path",
    name: "Prompt Path",
    subtitle: "AI Prompt Learning Platform",
    icon: Terminal,
    accent: "#46B5F1",
    accentRgb: "70,181,241",
    status: "LIVE",
    image: "/product-promptpath.png",
    pills: [
      "Learn prompt engineering by doing",
      "Built for students & professionals",
    ],
    description: "An interactive learning platform where students, working professionals, and AI enthusiasts master prompt engineering through real-world missions, chain-of-thought exercises, and few-shot challenges.",
    link: "https://promptpath.in",
  },
  {
    id: "kritifolio",
    name: "Kritifolio",
    subtitle: "Portfolio Builder in 60 Seconds",
    icon: Palette,
    accent: "#8A68B7",
    accentRgb: "138,104,183",
    status: "LIVE",
    image: "/product-kritifolio.png",
    pills: [
      "Build your portfolio in 60 seconds",
      "No code needed — students to pros",
    ],
    description: "A lightning-fast bento portfolio builder. Students, developers, and designers can create a stunning portfolio in under 60 seconds. No code, no complexity — just drag, customize, and go live.",
    link: "#kritifolio",
  },
  {
    id: "hyd-tech-diaries",
    name: "Hyd Tech Diaries",
    subtitle: "Hyderabad Tech Community Hub",
    icon: BookOpen,
    accent: "#3B74BC",
    accentRgb: "59,116,188",
    status: "BETA",
    image: "/product-hydtech.png",
    pills: [
      "Events, jobs & community — Hyderabad",
      "For students, pros & job seekers",
    ],
    description: "A thriving community platform for Hyderabad's tech ecosystem. Discover upcoming events, explore job opportunities, connect with local professionals, and share knowledge — all in one place.",
    link: "#hyd-tech-diaries",
  },
  {
    id: "house-of-vrika",
    name: "House of Vrika",
    subtitle: "Gen Alfha Affiliate Platform",
    icon: Globe,
    accent: "#D97752",
    accentRgb: "217,119,82",
    status: "LIVE",
    image: "/product-vrika.png",
    pills: [
      "Affiliate hub for all Gen Alfha products",
      "Earn by referring Kritifolio & Prompt Path",
    ],
    description: "The official affiliate marketing platform for the Gen Alfha ecosystem. Creators and community members can earn by promoting Prompt Path, Kritifolio, and Hyd Tech Diaries — building a reward loop around every product.",
    link: "#house-of-vrika",
  },
];

/* ─── Status Badge ───────────────────────────────────────────────── */
const StatusBadge = ({ status }: { status: string }) => {
  const isLive = status === "LIVE";
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-sans text-[10px] font-bold tracking-wider ${
      isLive
        ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/25"
        : "bg-amber-500/15 text-amber-400 border-amber-500/25"
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full ${isLive ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
      {status}
    </span>
  );
};

/* ─── Product Card ───────────────────────────────────────────────── */
const ProductCard = ({ product, index, wide = false }: {
  product: typeof FEATURED[0];
  index: number;
  wide?: boolean;
}) => {
  const Icon = product.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-3xl overflow-hidden cursor-pointer flex flex-col ${wide ? "md:col-span-2" : ""}`}
      style={{ minHeight: wide ? "420px" : "500px" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes={wide ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#050816]/35 transition-opacity duration-500 group-hover:bg-[#050816]/20" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,8,22,0.97) 0%, rgba(5,8,22,0.50) 50%, rgba(5,8,22,0.08) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,8,22,0.60) 0%, transparent 35%)" }} />
      <div
        className="absolute bottom-0 left-0 right-0 h-[50%] opacity-15 transition-opacity duration-500 group-hover:opacity-30"
        style={{ background: `linear-gradient(to top, rgba(${product.accentRgb}, 0.5), transparent)` }}
      />

      {/* Accent top line */}
      <div className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, transparent, ${product.accent}, transparent)`, opacity: 0.6 }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-7" style={{ minHeight: wide ? "420px" : "500px" }}>

        {/* Top pills */}
        <div className="flex flex-col gap-2">
          {product.pills.map((pill, i) => (
            <span
              key={i}
              className="inline-flex items-center self-start px-3 py-1.5 rounded-full text-[10px] font-sans font-semibold text-white/80 border border-white/15 backdrop-blur-md"
              style={{ background: "rgba(5,8,22,0.55)" }}
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Bottom identity */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl border flex items-center justify-center backdrop-blur-sm"
              style={{ background: `rgba(${product.accentRgb}, 0.15)`, borderColor: `rgba(${product.accentRgb}, 0.30)`, color: product.accent }}>
              <Icon className="w-4.5 h-4.5" />
            </div>
            <div className="flex items-center gap-2">
              <StatusBadge status={product.status} />
              <a href={product.link}
                className="w-8 h-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-[#050816] transition-all duration-300"
                onClick={(e) => e.stopPropagation()}>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <h3 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-1">{product.name}</h3>
          <p className="font-sans text-xs text-white/45 mb-3">{product.subtitle}</p>

          {/* Description - shown on wide cards always, on normal cards on hover */}
          <p className={`font-sans text-xs text-white/60 leading-relaxed max-w-md transition-all duration-300 ${
            wide ? "opacity-100" : "opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20 overflow-hidden"
          }`}>
            {product.description}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm font-sans font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
            style={{ color: product.accent }}>
            <span>Explore {product.name}</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Border glow */}
      <div className="absolute inset-0 rounded-3xl border border-white/8 transition-all duration-500 group-hover:border-white/18 pointer-events-none"
        style={{ boxShadow: `inset 0 -1px 0 rgba(${product.accentRgb}, 0.12)` }} />
    </motion.div>
  );
};

/* ─── Main Section ───────────────────────────────────────────────── */
export const Products = () => {
  return (
    <section id="products" className="py-32 bg-transparent relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/4 left-[-8%] w-[600px] h-[600px] bg-[#46B5F1] opacity-[0.03] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-8%] w-[600px] h-[600px] bg-[#8A68B7] opacity-[0.03] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/8 backdrop-blur-sm mb-5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#46B5F1]" />
              <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#b5c1d8]">Product Ecosystem</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              Featured{" "}<span className="text-[#b5c1d8]">Products</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-sm text-[#b5c1d8]/60 max-w-sm leading-relaxed md:text-right"
          >
            Four live platforms empowering students, professionals, and creators across learning, portfolios, community, and growth.
          </motion.p>
        </div>

        {/* Grid — top row: 3 equal cards, bottom row: 1 wide + 1 normal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Row 1: Prompt Path, Kritifolio, Hyd Tech */}
          <ProductCard product={FEATURED[0]} index={0} />
          <ProductCard product={FEATURED[1]} index={1} />
          <ProductCard product={FEATURED[2]} index={2} />
        </div>

        {/* Row 2: House of Vrika (full-width accent card) */}
        <div className="mt-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-3xl overflow-hidden cursor-pointer"
            style={{ minHeight: "320px" }}
          >
            <div className="absolute inset-0">
              <Image src={FEATURED[3].image} alt={FEATURED[3].name} fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="100vw" />
            </div>
            <div className="absolute inset-0 bg-[#050816]/45" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(5,8,22,0.95) 0%, rgba(5,8,22,0.65) 40%, rgba(5,8,22,0.15) 100%)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,8,22,0.5) 0%, transparent 40%)" }} />
            <div className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: `linear-gradient(90deg, transparent, ${FEATURED[3].accent}, transparent)`, opacity: 0.7 }} />
            <div className="absolute bottom-0 left-0 right-0 h-[50%] opacity-10 group-hover:opacity-20 transition-opacity duration-500"
              style={{ background: `linear-gradient(to top, rgba(${FEATURED[3].accentRgb}, 0.5), transparent)` }} />

            <div className="relative z-10 p-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8 h-full" style={{ minHeight: "320px" }}>
              {/* Left */}
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl border flex items-center justify-center backdrop-blur-sm"
                    style={{ background: `rgba(${FEATURED[3].accentRgb}, 0.15)`, borderColor: `rgba(${FEATURED[3].accentRgb}, 0.30)`, color: FEATURED[3].accent }}>
                    <Globe className="w-4.5 h-4.5" />
                  </div>
                  <StatusBadge status={FEATURED[3].status} />
                </div>
                <h3 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-tight mb-2">{FEATURED[3].name}</h3>
                <p className="font-sans text-sm text-white/50 mb-4">{FEATURED[3].subtitle}</p>
                <p className="font-sans text-sm text-white/60 leading-relaxed max-w-lg">{FEATURED[3].description}</p>
              </div>

              {/* Right: pills + CTA */}
              <div className="flex flex-col gap-3 flex-shrink-0">
                {FEATURED[3].pills.map((pill, i) => (
                  <span key={i} className="inline-flex items-center self-start px-3 py-1.5 rounded-full text-[10px] font-sans font-semibold text-white/80 border border-white/15 backdrop-blur-md"
                    style={{ background: "rgba(5,8,22,0.55)" }}>
                    {pill}
                  </span>
                ))}
                <a href={FEATURED[3].link}
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-sans font-semibold transition-all duration-300 hover:bg-white/10 group/btn"
                  style={{ borderColor: `rgba(${FEATURED[3].accentRgb}, 0.35)`, color: FEATURED[3].accent }}>
                  Visit House of Vrika
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-8 border-t border-white/5"
        >
          <div className="flex items-center gap-8">
            {[
              { val: "4", label: "Live Products" },
              { val: "1.2k+", label: "Active Users" },
              { val: "Hyd", label: "Based Community" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-2xl font-bold text-white">{s.val}</p>
                <p className="font-sans text-[10px] text-[#b5c1d8]/45 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
          <a href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-sm text-white font-sans text-sm font-semibold hover:bg-white/[0.08] hover:border-white/25 transition-all duration-300 group">
            Work With Us
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
