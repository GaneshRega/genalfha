import React from "react";
import { LiquidGlassHero } from "@/components/ui/liquid-glass-hero";
import { Products } from "@/components/sections/Products";
import FeaturesCards from "@/components/ui/feature-shader-cards";
import { Journey } from "@/components/sections/Journey";
import { TechStack } from "@/components/sections/TechStack";
import { About } from "@/components/sections/About";
import { CinematicBanner } from "@/components/sections/CinematicBanner";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import HeroWave from "@/components/ui/dynamic-wave-canvas-background";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#050816] text-white">
      {/* Global Dynamic Fluid Wave Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.22] w-full h-full">
        <HeroWave />
      </div>

      {/* Immersive Video Liquid-Glass Hero Header (includes integrated Navbar) */}
      <LiquidGlassHero />

      {/* Main content sections */}
      <main className="flex-grow">
        {/* Capability Services Grid with WebGL Shaders */}
        <FeaturesCards />

        {/* Products Catalog (Prompt Path, BOOM Mail) */}
        <Products />

        {/* Development Timeline / Journey */}
        <Journey />

        {/* Technology Ecosystem Stack */}
        <TechStack />

        {/* Cinematic Team Banner */}
        <CinematicBanner />

        {/* Editorial Ethos & Narrative */}
        <About />

        {/* Collaborative Portal / Form */}
        <Contact />
      </main>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
}
