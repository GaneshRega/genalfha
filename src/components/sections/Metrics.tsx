"use client";

import React from "react";
import { motion } from "framer-motion";
import { MetricCard } from "@/components/ui/MetricCard";
import { LampContainer } from "@/components/ui/lamp";

export const Metrics = () => {
  return (
    <LampContainer className="py-20 border-y border-white/5">
      {/* Scroll-triggered spotlight heading */}
      <motion.h2
        initial={{ opacity: 0.3, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-white to-[#b5c1d8] py-4 bg-clip-text text-center text-4xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight text-transparent mb-16"
      >
        Ecosystem Metrics & Stats <br />
        <span className="text-white font-semibold">Engineered to Scale</span>
      </motion.h2>

      {/* Grid of Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <MetricCard
            value={4}
            suffix="+"
            label="Years Experience"
            description="Crafting high-end digital products since inception."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <MetricCard
            value={100}
            suffix="%"
            label="AI-First Products"
            description="Intelligent solutions designed from the ground up."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <MetricCard
            value={6}
            suffix="+"
            label="Active Ecosystem"
            description="Growing suite of productivity applications."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <MetricCard
            value={2030}
            label="Built for the Future"
            description="Committed to long-term technological progress."
          />
        </motion.div>
      </div>
    </LampContainer>
  );
};
