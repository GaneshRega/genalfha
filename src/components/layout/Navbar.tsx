"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown, Terminal, Palette, BookOpen, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";

/* ─── Products dropdown data ─────────────────────────────────────── */
const PRODUCTS = [
  { name: "Prompt Path",       subtitle: "AI Prompt Learning",         href: "#products", icon: Terminal, accent: "#46B5F1" },
  { name: "Kritifolio",        subtitle: "Portfolio in 60 Seconds",    href: "#products", icon: Palette,  accent: "#8A68B7" },
  { name: "Hyd Tech Diaries",  subtitle: "Hyderabad Tech Community",   href: "#products", icon: BookOpen, accent: "#3B74BC" },
  { name: "House of Vrika",    subtitle: "Gen Alfha Affiliate Hub",    href: "#products", icon: Globe,    accent: "#D97752" },
];

const NAV_ITEMS = [
  { name: "Products", href: "#products", hasDropdown: true },
  { name: "Services", href: "#services", hasDropdown: false },
  { name: "Journey",  href: "#journey",  hasDropdown: false },
  { name: "About",    href: "#about",    hasDropdown: false },
  { name: "Contact",  href: "#contact",  hasDropdown: false },
];

/* ─── Products Dropdown ──────────────────────────────────────────── */
const ProductsDropdown = () => (
  <motion.div
    initial={{ opacity: 0, y: 10, scale: 0.97 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 8, scale: 0.97 }}
    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[340px] rounded-2xl border border-white/10 bg-[#080f1e]/90 backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden z-50"
  >
    {/* Top accent line */}
    <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#46B5F1]/60 to-transparent" />

    <div className="p-2">
      {PRODUCTS.map((p) => {
        const Icon = p.icon;
        return (
          <a
            key={p.name}
            href={p.href}
            className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/[0.05] transition-all duration-200 group"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border transition-all duration-200"
              style={{
                background: `${p.accent}18`,
                borderColor: `${p.accent}30`,
                color: p.accent,
              }}
            >
              <Icon className="w-3.5 h-3.5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-serif text-sm font-bold text-white leading-tight">{p.name}</p>
              <p className="font-sans text-[10px] text-[#b5c1d8]/50">{p.subtitle}</p>
            </div>
            <ArrowUpRight
              className="w-3.5 h-3.5 text-white/20 group-hover:text-white/60 transition-colors duration-200 flex-shrink-0"
            />
          </a>
        );
      })}
    </div>

    {/* Footer */}
    <div className="border-t border-white/5 px-4 py-3 flex items-center justify-between">
      <span className="font-sans text-[10px] text-[#b5c1d8]/35 uppercase tracking-widest">4 Live Products</span>
      <a href="#products" className="font-sans text-[10px] font-bold text-[#46B5F1] hover:text-white transition-colors duration-200 flex items-center gap-1">
        View All <ArrowUpRight className="w-3 h-3" />
      </a>
    </div>
  </motion.div>
);

/* ─── Navbar ─────────────────────────────────────────────────────── */
export const Navbar = () => {
  const [isOpen, setIsOpen]       = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible]  = useState(true);
  const [showProducts, setShowProducts] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setIsScrolled(latest > 50);
    if (latest > 150 && latest > previous) {
      setIsVisible(false);
      setIsOpen(false);
      setShowProducts(false);
    } else {
      setIsVisible(true);
    }
  });

  return (
    <>
      <motion.header
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full border-b border-transparent",
          isScrolled
            ? "py-3 bg-[#050816]/80 backdrop-blur-md border-white/8 shadow-lg shadow-black/20"
            : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">

          {/* ── Logo ── */}
          <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src="/Gen Alfha Logos.png"
                alt="Gen Alfha"
                fill
                className="object-contain invert brightness-0 invert group-hover:opacity-80 transition-opacity duration-300"
                sizes="32px"
                priority
              />
            </div>
            <span className="font-serif text-lg font-bold tracking-tight text-white group-hover:text-[#46b5f1] transition-colors duration-300 leading-none">
              Gen <span className="text-[#b5c1d8]">Alfha</span>
            </span>
          </a>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setShowProducts(true)}
                  onMouseLeave={() => setShowProducts(false)}
                >
                  <button
                    className="flex items-center gap-1 font-sans text-sm text-[#b5c1d8] hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/[0.04] cursor-pointer"
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        showProducts ? "rotate-180" : ""
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {showProducts && <ProductsDropdown />}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-sans text-sm text-[#b5c1d8] hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/[0.04] relative group"
                >
                  {item.name}
                  <span className="absolute bottom-1 left-3 right-3 h-[1px] bg-gradient-to-r from-[#46B5F1] to-[#8A68B7] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </a>
              )
            )}
          </nav>

          {/* ── CTA + mobile toggle ── */}
          <div className="flex items-center gap-3">
            <Button variant="primary" size="sm" className="hidden md:inline-flex">
              Get Started <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#b5c1d8] hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[60px] z-40 bg-[#050816]/97 backdrop-blur-xl md:hidden flex flex-col px-6 py-8 border-t border-white/5"
          >
            <nav className="flex flex-col gap-2 mb-8">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-2xl text-[#b5c1d8] hover:text-white py-3 border-b border-white/5 flex items-center justify-between group"
                >
                  {item.name}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </motion.a>
              ))}
            </nav>

            {/* Mobile product pills */}
            <div className="mb-8">
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#b5c1d8]/40 mb-3">Our Products</p>
              <div className="flex flex-wrap gap-2">
                {PRODUCTS.map((p) => (
                  <a
                    key={p.name}
                    href={p.href}
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs text-[#b5c1d8] hover:text-white hover:border-white/20 transition-all duration-200"
                    style={{ color: p.accent }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.accent }} />
                    {p.name}
                  </a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: NAV_ITEMS.length * 0.05 }}
              className="mt-auto"
            >
              <Button variant="primary" size="lg" className="w-full justify-center" onClick={() => setIsOpen(false)}>
                Get Started <ArrowUpRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
