import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://genalfha.com"),
  title: "Prompt Path — Master AI Prompting | Gen Alfha",
  description:
    "Prompt Path is your AI-powered learning companion that teaches you how to craft powerful prompts for ChatGPT, Gemini, Claude, and more. Learn, practice, and master prompt engineering.",
  keywords: [
    "Prompt Path",
    "AI Prompting",
    "Prompt Engineering",
    "ChatGPT Prompts",
    "AI Learning App",
    "Gen Alfha",
    "Learn AI",
    "Prompt Mastery",
  ],
  openGraph: {
    title: "Prompt Path — Master AI Prompting",
    description:
      "Your AI-powered guide to crafting better prompts for ChatGPT, Gemini, Claude, and more.",
    url: "https://genalfha.com/promptpath",
    siteName: "Gen Alfha",
    images: [{ url: "/product-promptpath.png", width: 800, height: 600, alt: "Prompt Path App" }],
    locale: "en_US",
    type: "website",
  },
};

const FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Structured Prompt Lessons",
    desc: "Step-by-step guided lessons that teach prompt engineering from scratch to advanced techniques.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
    title: "Real-World Practice",
    desc: "Hands-on exercises with actual AI models so you can apply what you learn immediately.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Prompt Templates Library",
    desc: "Access hundreds of ready-to-use prompt templates for coding, writing, research, and business.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    title: "Progress Tracking",
    desc: "Track your learning journey with skill levels, streaks, and achievement badges.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Community Challenges",
    desc: "Join weekly prompt challenges and compete with learners from around the world.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Works Offline",
    desc: "Download lessons and templates to learn even without an internet connection.",
  },
];

const MODELS = ["ChatGPT", "Gemini", "Claude", "Llama", "Copilot", "Midjourney"];

export default function PromptPathPage() {
  return (
    <div className="relative min-h-screen bg-[#050816] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#46B5F1] opacity-[0.05] rounded-full blur-[160px]" />
        <div className="absolute bottom-1/3 right-0 w-[600px] h-[400px] bg-[#8A68B7] opacity-[0.04] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[#46B5F1] opacity-[0.03] rounded-full blur-[120px]" />
      </div>

      {/* Nav bar */}
      <header className="relative z-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-6 h-6 flex-shrink-0">
              <Image src="/Gen Alfha Logos.png" alt="Gen Alfha" fill
                className="object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                sizes="24px" />
            </div>
            <span className="font-serif text-base font-bold text-white/70 group-hover:text-white transition-colors duration-300">
              Gen <span className="text-[#b5c1d8]">Alfha</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="font-sans text-xs font-semibold uppercase tracking-wider text-[#b5c1d8]/60 hover:text-white transition-colors duration-200">Features</a>
            <Link href="/promptpath/privacy" className="font-sans text-xs font-semibold uppercase tracking-wider text-[#b5c1d8]/60 hover:text-white transition-colors duration-200">Privacy</Link>
            <Link href="/promptpath/terms" className="font-sans text-xs font-semibold uppercase tracking-wider text-[#b5c1d8]/60 hover:text-white transition-colors duration-200">Terms</Link>
            <Link href="/promptpath/contact" className="font-sans text-xs font-semibold uppercase tracking-wider text-[#b5c1d8]/60 hover:text-white transition-colors duration-200">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 md:px-8 pt-20 pb-24 md:pt-28 md:pb-32 flex flex-col md:flex-row items-center gap-14 md:gap-20">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#46B5F1]/10 border border-[#46B5F1]/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#46B5F1] animate-pulse" />
              <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#46B5F1]">Now Available</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
              Master{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #46B5F1 0%, #8A68B7 100%)" }}
              >
                AI Prompting
              </span>
              <br />
              in Days.
            </h1>

            <p className="font-sans text-base md:text-lg text-[#b5c1d8]/65 leading-relaxed max-w-lg mb-10 mx-auto md:mx-0">
              Prompt Path is the go-to app for anyone who wants to unlock the true power of AI. Learn to craft perfect prompts for ChatGPT, Gemini, Claude, and more — through interactive lessons and real practice.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-[#050816] font-sans text-sm font-bold hover:bg-[#b5c1d8] transition-all duration-300 shadow-lg shadow-white/10"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76a2.5 2.5 0 0 1-.93-.18L13.5 12 2.25.42A2.5 2.5 0 0 1 3.18.24l.06.03 12.62 7.3-3.56 3.56-9.12-9.13zM1.07 1.33C.68 1.73.5 2.26.5 2.8v18.4c0 .54.18 1.07.57 1.47l.12.11L13.5 12l-.01-.01L1.07 1.33zM20.8 10.35l-2.65-1.53-3.96 3.96 3.97 3.97 2.64-1.53A2.5 2.5 0 0 0 22 12.88v-1.76a2.5 2.5 0 0 0-1.2-2.77zM3.24.27 15.85 7.5 12.29 11.07z"/>
                </svg>
                Get it on Google Play
              </a>

              <a
                href="#features"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-sans text-sm font-semibold text-white border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/25 transition-all duration-300"
              >
                See Features
              </a>
            </div>

            {/* AI models chip row */}
            <div className="mt-10 flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="font-sans text-xs text-[#b5c1d8]/40 mr-1 self-center">Works with:</span>
              {MODELS.map((m) => (
                <span key={m} className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/8 font-sans text-xs text-[#b5c1d8]/70">
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* App visual */}
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 rounded-3xl bg-[#46B5F1] opacity-10 blur-3xl scale-110" />
            <div className="relative w-56 md:w-72 aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-[#0a0f1e]">
              <Image
                src="/product-promptpath.png"
                alt="Prompt Path App"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 224px, 288px"
              />
            </div>
          </div>
        </section>

        {/* ── Features ─────────────────────────────────────── */}
        <section id="features" className="border-t border-white/5 py-24">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#46B5F1] mb-3">What You Get</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight">Everything to become an AI Pro</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#46B5F1]/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#46B5F1]/10 border border-[#46B5F1]/20 flex items-center justify-center text-[#46B5F1] mb-4 group-hover:bg-[#46B5F1]/15 transition-colors duration-300">
                    {f.icon}
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-white mb-2">{f.title}</h3>
                  <p className="font-sans text-sm text-[#b5c1d8]/60 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Download CTA ─────────────────────────────────── */}
        <section className="border-t border-white/5 py-24">
          <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
            <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#46B5F1] mb-4">Start Learning Today</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
              Ready to unlock AI&apos;s full potential?
            </h2>
            <p className="font-sans text-base text-[#b5c1d8]/60 leading-relaxed mb-10">
              Download Prompt Path for free and start your journey to becoming an AI power user in minutes.
            </p>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#050816] font-sans text-sm font-bold hover:bg-[#b5c1d8] transition-all duration-300 shadow-lg shadow-white/10"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76a2.5 2.5 0 0 1-.93-.18L13.5 12 2.25.42A2.5 2.5 0 0 1 3.18.24l.06.03 12.62 7.3-3.56 3.56-9.12-9.13zM1.07 1.33C.68 1.73.5 2.26.5 2.8v18.4c0 .54.18 1.07.57 1.47l.12.11L13.5 12l-.01-.01L1.07 1.33zM20.8 10.35l-2.65-1.53-3.96 3.96 3.97 3.97 2.64-1.53A2.5 2.5 0 0 0 22 12.88v-1.76a2.5 2.5 0 0 0-1.2-2.77zM3.24.27 15.85 7.5 12.29 11.07z"/>
              </svg>
              Download Free on Google Play
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-[#b5c1d8]/30">
            © {new Date().getFullYear()} Gen Alfha. Hyderabad, India. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/promptpath/privacy" className="font-sans text-xs text-[#b5c1d8]/40 hover:text-[#46B5F1] transition-colors duration-200">Privacy Policy</Link>
            <Link href="/promptpath/terms" className="font-sans text-xs text-[#b5c1d8]/40 hover:text-[#46B5F1] transition-colors duration-200">Terms</Link>
            <Link href="/promptpath/contact" className="font-sans text-xs text-[#b5c1d8]/40 hover:text-[#46B5F1] transition-colors duration-200">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
