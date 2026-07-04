"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Terminal, Palette, BookOpen, Globe, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const PRODUCTS = [
  { name: "Prompt Path",      href: "#products", icon: Terminal, accent: "#46B5F1", status: "LIVE" },
  { name: "Kritifolio",       href: "#products", icon: Palette,  accent: "#8A68B7", status: "LIVE" },
  { name: "Hyd Tech Diaries", href: "#products", icon: BookOpen, accent: "#3B74BC", status: "BETA" },
  { name: "House of Vrika",   href: "#products", icon: Globe,    accent: "#D97752", status: "LIVE" },
];

const SERVICES = [
  { name: "AI Product Development", href: "#services" },
  { name: "Web & SaaS Platforms",   href: "#services" },
  { name: "Mobile Applications",    href: "#services" },
  { name: "Ohana — Design & Brand", href: "#services" },
  { name: "Marketing Creatives",    href: "#services" },
];

const COMPANY = [
  { name: "About Us",    href: "#about" },
  { name: "Journey",     href: "#journey" },
  { name: "Tech Stack",  href: "#" },
  { name: "Careers",     href: "#contact" },
  { name: "Blog",        href: "#" },
];

export const Footer = () => {
  const [email, setEmail]       = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="relative bg-transparent overflow-hidden">

      {/* ── Big Closing CTA Banner ──────────────────────────────── */}
      <div className="border-t border-white/5 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#46B5F1] opacity-[0.04] rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[200px] bg-[#8A68B7] opacity-[0.03] rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 py-28 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/8 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#46B5F1]" />
            <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#b5c1d8]">
              Ready to build something great?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6"
          >
            Let&apos;s Build the{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #46B5F1 0%, #8A68B7 50%, #D31A96 100%)" }}
            >
              Next Big Thing
            </span>
            <br />
            Together.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-base text-[#b5c1d8]/65 max-w-xl mx-auto leading-relaxed mb-10"
          >
            Whether you have a product idea, need design & branding, or want to join our ecosystem — we&apos;re ready to execute.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-sans text-sm font-bold text-[#050816] bg-white hover:bg-[#b5c1d8] transition-all duration-300 group shadow-lg shadow-white/10"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-sans text-sm font-semibold text-white border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/25 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Products
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Footer Links ─────────────────────────────────────────── */}
      <div className="border-t border-white/5 pt-16 pb-10 relative">
        <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[300px] bg-[#8A68B7] opacity-[0.02] rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-8 mb-14">

            {/* Brand block */}
            <div className="col-span-2">
              {/* Logo + wordmark */}
              <a href="#" className="flex items-center gap-2.5 mb-4 group w-fit">
                <div className="relative w-7 h-7 flex-shrink-0">
                  <Image src="/Gen Alfha Logos.png" alt="Gen Alfha" fill
                    className="object-contain invert brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    sizes="28px" />
                </div>
                <span className="font-serif text-lg font-bold text-white tracking-tight">Gen <span className="text-[#b5c1d8]">Alfha</span></span>
              </a>

              <p className="font-sans text-sm text-[#b5c1d8]/65 leading-relaxed mb-5 max-w-[220px]">
                Intelligent software, crafted to empower students, creators, and businesses.
              </p>

              {/* Newsletter */}
              <form onSubmit={handleSubscribe} className="relative max-w-[220px]">
                <input
                  type="email"
                  placeholder="Get product updates"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#101828]/60 border border-white/8 rounded-full px-4 py-2.5 text-xs font-sans text-white focus:outline-none focus:border-white/20 transition-all duration-300"
                  required
                />
                <button type="submit"
                  className="absolute right-1.5 top-1.5 p-1.5 rounded-full bg-white text-[#050816] hover:bg-[#b5c1d8] transition-colors duration-200 cursor-pointer"
                  aria-label="Subscribe">
                  {subscribed
                    ? <span className="text-[10px] px-1 font-bold">✓</span>
                    : <ArrowRight className="w-3 h-3" />}
                </button>
              </form>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-sans text-[10px] font-bold uppercase tracking-wider text-white mb-5">Products</h4>
              <ul className="space-y-3.5">
                {PRODUCTS.map((p) => {
                  const Icon = p.icon;
                  return (
                    <li key={p.name}>
                      <a href={p.href}
                        className="font-sans text-sm text-[#b5c1d8]/70 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                        <Icon className="w-3 h-3 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity duration-200" style={{ color: p.accent }} />
                        {p.name}
                        {p.status === "BETA" && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/20 font-bold">BETA</span>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-sans text-[10px] font-bold uppercase tracking-wider text-white mb-5">Services</h4>
              <ul className="space-y-3.5">
                {SERVICES.map((s) => (
                  <li key={s.name}>
                    <a href={s.href} className="font-sans text-sm text-[#b5c1d8]/70 hover:text-white transition-colors duration-200">
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-sans text-[10px] font-bold uppercase tracking-wider text-white mb-5">Company</h4>
              <ul className="space-y-3.5">
                {COMPANY.map((c) => (
                  <li key={c.name}>
                    <a href={c.href} className="font-sans text-sm text-[#b5c1d8]/70 hover:text-white transition-colors duration-200">
                      {c.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-sans text-[10px] font-bold uppercase tracking-wider text-white mb-5">Legal</h4>
              <ul className="space-y-3.5">
                <li>
                  <Link href="/privacy-policy" className="font-sans text-sm text-[#b5c1d8]/70 hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="font-sans text-sm text-[#b5c1d8]/70 hover:text-white transition-colors duration-200">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a href="#" className="font-sans text-sm text-[#b5c1d8]/70 hover:text-white transition-colors duration-200">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#contact" className="font-sans text-sm text-[#b5c1d8]/70 hover:text-white transition-colors duration-200">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-[#b5c1d8]/40">
              © {new Date().getFullYear()} Gen Alfha. Hyderabad, India. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {[
                { label: "X", href: "https://x.com", Icon: TwitterIcon },
                { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedinIcon },
                { label: "GitHub", href: "https://github.com", Icon: GithubIcon },
                { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
              ].map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="p-2 border border-white/8 rounded-full text-[#b5c1d8] hover:text-white hover:border-white/20 transition-all duration-300 bg-white/[0.02]"
                  aria-label={label}>
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
