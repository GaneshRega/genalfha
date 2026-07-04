"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Quote, Star, Terminal, Palette, BookOpen } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Arjun Reddy",
    role: "CS Student",
    college: "JNTU Hyderabad",
    product: "Prompt Path",
    productIcon: Terminal,
    productAccent: "#46B5F1",
    avatar: "AR",
    avatarBg: "from-[#46B5F1] to-[#3B74BC]",
    rating: 5,
    quote:
      "Prompt Path completely changed how I think about AI. The mission-based learning felt like a game — I went from knowing nothing about prompt engineering to confidently building my own GPT workflows in two weeks.",
  },
  {
    id: 2,
    name: "Sneha Kulkarni",
    role: "UI/UX Designer",
    college: "Working Professional",
    product: "Kritifolio",
    productIcon: Palette,
    productAccent: "#8A68B7",
    avatar: "SK",
    avatarBg: "from-[#8A68B7] to-[#D31A96]",
    rating: 5,
    quote:
      "I had been procrastinating on building my portfolio for months. With Kritifolio I had a stunning bento-style portfolio live in literally under an hour. Clients actually comment on how polished it looks.",
  },
  {
    id: 3,
    name: "Karthik Sharma",
    role: "Software Engineer",
    college: "3 Years Experience",
    product: "Hyd Tech Diaries",
    productIcon: BookOpen,
    productAccent: "#3B74BC",
    avatar: "KS",
    avatarBg: "from-[#3B74BC] to-[#46B5F1]",
    rating: 5,
    quote:
      "Hyd Tech Diaries is the community I always wished existed in Hyderabad. Found two freelance projects and attended three amazing meetups — all through one platform. The job board is genuinely useful.",
  },
  {
    id: 4,
    name: "Priya Nair",
    role: "Fresher — Job Seeking",
    college: "Osmania University",
    product: "Prompt Path",
    productIcon: Terminal,
    productAccent: "#46B5F1",
    avatar: "PN",
    avatarBg: "from-[#46B5F1] to-[#8A68B7]",
    rating: 5,
    quote:
      "As a fresher, learning AI felt overwhelming. Prompt Path made it structured and actually fun. The challenges pushed me out of my comfort zone. I added it to my resume and got interview calls specifically asking about it.",
  },
  {
    id: 5,
    name: "Rahul Mehta",
    role: "Startup Founder",
    college: "BITS Pilani Alumni",
    product: "Kritifolio",
    productIcon: Palette,
    productAccent: "#8A68B7",
    avatar: "RM",
    avatarBg: "from-[#D31A96] to-[#8A68B7]",
    rating: 5,
    quote:
      "We used Kritifolio to create pitch decks and our founder profile pages before our seed round. The speed was unreal. Gen Alfha is clearly building for real people with real problems.",
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

export const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((p) => (p + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[active];
  const Icon = t.productIcon;

  return (
    <section className="py-32 bg-transparent relative overflow-hidden border-t border-white/5">
      {/* Ambient */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-[#8A68B7] opacity-[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-[#46B5F1] opacity-[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/8 mb-5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#46B5F1]" />
              <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#b5c1d8]">
                What People Say
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
            >
              Loved by{" "}
              <span className="text-[#b5c1d8]">Real People</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-sm text-[#b5c1d8]/60 max-w-xs md:text-right leading-relaxed"
          >
            Students, professionals & founders using our products every day.
          </motion.p>
        </div>

        {/* Main testimonial display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left: avatar stack / selector */}
          <div className="lg:col-span-3 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {TESTIMONIALS.map((item, i) => {
              const isActive = i === active;
              return (
                <button
                  key={item.id}
                  onClick={() => setActive(i)}
                  className={`flex-shrink-0 flex items-center gap-3 p-3 rounded-2xl border transition-all duration-300 text-left cursor-pointer w-full ${
                    isActive
                      ? "bg-white/[0.05] border-white/15"
                      : "bg-transparent border-white/5 hover:border-white/10"
                  }`}
                >
                  {/* Avatar */}
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.avatarBg} flex items-center justify-center flex-shrink-0`}>
                    <span className="font-serif text-sm font-bold text-white">{item.avatar}</span>
                  </div>
                  <div className="min-w-0 hidden lg:block">
                    <p className="font-sans text-xs font-bold text-white truncate">{item.name}</p>
                    <p className="font-sans text-[10px] text-[#b5c1d8]/50 truncate">{item.role}</p>
                  </div>
                  {isActive && (
                    <div className="ml-auto hidden lg:flex w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: item.productAccent }} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: featured testimonial card */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-3xl border border-white/8 bg-[#080f1e]/70 backdrop-blur-sm p-8 md:p-12 overflow-hidden"
              >
                {/* Accent top bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${t.productAccent}, transparent)`, opacity: 0.6 }} />

                {/* Ambient glow */}
                <div className="absolute top-0 right-0 w-[300px] h-[200px] rounded-full blur-[100px] pointer-events-none opacity-10"
                  style={{ background: t.productAccent }} />

                {/* Quote icon */}
                <Quote className="w-10 h-10 text-white/5 mb-6" />

                {/* Quote text */}
                <p className="font-serif text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-medium mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.avatarBg} flex items-center justify-center flex-shrink-0`}>
                      <span className="font-serif text-base font-bold text-white">{t.avatar}</span>
                    </div>
                    <div>
                      <p className="font-serif text-base font-bold text-white">{t.name}</p>
                      <p className="font-sans text-xs text-[#b5c1d8]/55">{t.role} · {t.college}</p>
                      <StarRating count={t.rating} />
                    </div>
                  </div>

                  {/* Product badge */}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full border self-start sm:self-auto"
                    style={{ borderColor: `${t.productAccent}30`, background: `${t.productAccent}10` }}>
                    <Icon className="w-3.5 h-3.5" style={{ color: t.productAccent }} />
                    <span className="font-sans text-xs font-bold" style={{ color: t.productAccent }}>
                      {t.product}
                    </span>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3 mt-8">
                  <button onClick={prev}
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#b5c1d8] hover:text-white hover:border-white/25 transition-all duration-200 cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button onClick={next}
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#b5c1d8] hover:text-white hover:border-white/25 transition-all duration-200 cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                  <div className="flex gap-1.5 ml-2">
                    {TESTIMONIALS.map((_, i) => (
                      <button key={i} onClick={() => setActive(i)}
                        className="rounded-full transition-all duration-300 cursor-pointer"
                        style={{
                          width: i === active ? "20px" : "6px",
                          height: "6px",
                          background: i === active ? t.productAccent : "rgba(255,255,255,0.18)",
                        }} />
                    ))}
                  </div>
                  <span className="ml-auto font-mono text-[10px] text-[#b5c1d8]/35">
                    {String(active + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
