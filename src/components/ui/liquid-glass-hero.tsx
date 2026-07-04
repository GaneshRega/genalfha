"use client";

import { useEffect, useRef } from "react";
import { Globe, ArrowRight } from "lucide-react";

/* ---------------- Glass Style ---------------- */
const glass =
  "bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.2)]";

/* ---------------- Constants ---------------- */
const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4";

const FADE_DURATION = 500;
const FADE_OUT_BEFORE_END = 0.55;

/* ---------------- Custom Social SVGs ---------------- */
const TwitterIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

/* ---------------- Main Component ---------------- */
const LiquidGlassHero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const cancelRaf = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const animateOpacity = (target: number, duration: number) => {
      cancelRaf();
      const start = performance.now();
      const from = parseFloat(video.style.opacity || "0");

      const step = (now: number) => {
        const elapsed = now - start;
        const t = Math.min(1, elapsed / duration);
        video.style.opacity = String(from + (target - from) * t);

        if (t < 1) rafRef.current = requestAnimationFrame(step);
        else rafRef.current = null;
      };

      rafRef.current = requestAnimationFrame(step);
    };

    const fadeIn = () => {
      fadingOutRef.current = false;
      animateOpacity(1, FADE_DURATION);
    };

    const handleLoaded = () => {
      video.style.opacity = "0";
      video.play().catch(() => {});
      fadeIn();
    };

    const handleTimeUpdate = () => {
      if (fadingOutRef.current) return;
      const remaining = video.duration - video.currentTime;

      if (!isNaN(remaining) && remaining <= FADE_OUT_BEFORE_END) {
        fadingOutRef.current = true;
        animateOpacity(0, FADE_DURATION);
      }
    };

    const handleEnded = () => {
      cancelRaf();
      video.style.opacity = "0";

      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
        fadeIn();
      }, 100);
    };

    video.style.opacity = "0";
    video.addEventListener("loadeddata", handleLoaded);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    if (video.readyState >= 2) handleLoaded();

    return () => {
      cancelRaf();
      video.removeEventListener("loadeddata", handleLoaded);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col justify-between">
      
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_URL}
        autoPlay
        muted
        playsInline
        loop={false}
        style={{ opacity: 0 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

      {/* Nav */}
      <nav className="relative z-20 px-4 sm:px-6 md:px-10 py-6 w-full">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Adapted Brand Name */}
          <a href="#" className="flex items-center gap-2 text-white font-serif text-xl font-bold tracking-tight">
            <span>Gen Alfha</span>
          </a>

          {/* Adapted Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { name: "Products", href: "#products" },
              { name: "Services", href: "#services" },
              { name: "About", href: "#about" },
              { name: "Contact", href: "#contact" }
            ].map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="text-white/80 hover:text-white transition text-sm font-medium"
              >
                {l.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:block text-white text-sm font-medium">
              Contact Us
            </a>

            <a href="#products" className={`${glass} rounded-full px-5 py-2 text-white text-sm hover:bg-white/20 transition`}>
              Launch Products
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 text-center max-w-4xl mx-auto">
        
        {/* Adapted Heading */}
        <h1
          className="text-white mb-6 tracking-tight leading-[1.1] font-serif
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          We build things <br />
          people actually use.
        </h1>

        <div className="w-full max-w-xl space-y-6">
          
          <p className="text-white/80 text-base sm:text-lg leading-relaxed px-2 font-sans">
            Gen Alfha is a small studio crafting intelligent products.
          </p>

          <div className="flex justify-center gap-4">
            <a href="#products" className={`${glass} rounded-full px-6 py-2.5 text-white text-sm hover:bg-white/15 transition`}>
              Explore Products
            </a>
          </div>
        </div>
      </div>

      {/* Footer Icons */}
      <div className="relative z-10 flex justify-center gap-4 pb-10 sm:pb-12">
        {[InstagramIcon, TwitterIcon, Globe].map((Icon, i) => (
          <button
            key={i}
            className={`${glass} rounded-full p-3 sm:p-4 text-white hover:bg-white/15 transition cursor-pointer`}
          >
            <Icon size={18} />
          </button>
        ))}
      </div>
    </div>
  );
};

export { LiquidGlassHero };
export default LiquidGlassHero;
