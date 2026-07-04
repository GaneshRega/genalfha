"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const LoadingScreen = () => {
  const [phase, setPhase] = useState<"loading" | "done">("loading");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const steps = [20, 45, 70, 88, 100];
    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setProgress(steps[i]);
        i++;
      } else {
        clearInterval(interval);
        // Small pause at 100% then exit
        setTimeout(() => setPhase("done"), 400);
      }
    }, 180);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {phase === "loading" && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050816]"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] opacity-20"
              style={{ background: "radial-gradient(circle, #46B5F1 0%, #8A68B7 50%, transparent 70%)" }} />
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-5 relative z-10"
          >
            <div className="relative w-20 h-20">
              <Image
                src="/Gen Alfha Logos.png"
                alt="Gen Alfha"
                fill
                className="object-contain invert brightness-0 invert"
                priority
                sizes="80px"
              />
            </div>

            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="font-serif text-3xl font-bold text-white tracking-tight"
              >
                Gen <span className="text-[#b5c1d8]">Alfha</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#b5c1d8]/40 mt-1"
              >
                Be Bold · Be You · Be Alfha
              </motion.p>
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 flex flex-col items-center gap-2"
          >
            <div className="w-full h-[1.5px] bg-white/8 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #46B5F1, #8A68B7, #D31A96)",
                  width: `${progress}%`,
                  transition: "width 0.35s cubic-bezier(0.22,1,0.36,1)",
                }}
              />
            </div>
            <span className="font-mono text-[10px] text-[#b5c1d8]/30">{progress}%</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
