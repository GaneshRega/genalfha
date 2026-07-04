"use client"

import type React from "react"
import { Warp } from "@paper-design/shaders-react"
import { Brain, Cloud, Layers, Smartphone, Palette, Zap } from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: "AI Product Development",
    description:
      "Architecting custom LLMs, fine-tuning models, and integrating advanced cognitive processing pipelines into production environments.",
    icon: <Brain className="w-10 h-10 text-white" />,
  },
  {
    title: "SaaS Development",
    description:
      "Building scalable, multi-tenant software-as-a-service platforms with secure subscription frameworks and high uptime.",
    icon: <Cloud className="w-10 h-10 text-white" />,
  },
  {
    title: "Web Applications",
    description:
      "Crafting lightning-fast Next.js apps optimized for SEO, accessibility, first paint performance, and core web vitals.",
    icon: <Layers className="w-10 h-10 text-white" />,
  },
  {
    title: "Mobile Applications",
    description:
      "Creating premium native mobile platforms using Flutter for cross-platform visual stability and performance.",
    icon: <Smartphone className="w-10 h-10 text-white" />,
  },
  {
    title: "UI/UX Design",
    description:
      "High-end visual systems, layout grids, motion prototype curves, and responsive mock-ups built for modern branding.",
    icon: <Palette className="w-10 h-10 text-white" />,
  },
  {
    title: "Automation & APIs",
    description:
      "Streamlining system workloads via AI workflows, secure custom API bridges, and autonomous worker cron daemons.",
    icon: <Zap className="w-10 h-10 text-white" />,
  },
]

export default function FeaturesCards() {
  const getShaderConfig = (index: number) => {
    const configs = [
      {
        proportion: 0.3,
        softness: 0.8,
        distortion: 0.15,
        swirl: 0.6,
        swirlIterations: 8,
        shape: "checks" as const,
        shapeScale: 0.08,
        colors: ["hsl(280, 100%, 30%)", "hsl(320, 100%, 60%)", "hsl(340, 90%, 40%)", "hsl(300, 100%, 70%)"],
      },
      {
        proportion: 0.4,
        softness: 1.2,
        distortion: 0.2,
        swirl: 0.9,
        swirlIterations: 12,
        shape: "stripes" as const,
        shapeScale: 0.12,
        colors: ["hsl(200, 100%, 25%)", "hsl(180, 100%, 65%)", "hsl(160, 90%, 35%)", "hsl(190, 100%, 75%)"],
      },
      {
        proportion: 0.35,
        softness: 0.9,
        distortion: 0.18,
        swirl: 0.7,
        swirlIterations: 10,
        shape: "checks" as const,
        shapeScale: 0.1,
        colors: ["hsl(120, 100%, 25%)", "hsl(140, 100%, 60%)", "hsl(100, 90%, 30%)", "hsl(130, 100%, 70%)"],
      },
      {
        proportion: 0.45,
        softness: 1.1,
        distortion: 0.22,
        swirl: 0.8,
        swirlIterations: 15,
        shape: "stripes" as const,
        shapeScale: 0.09,
        colors: ["hsl(30, 100%, 35%)", "hsl(50, 100%, 65%)", "hsl(40, 90%, 40%)", "hsl(45, 100%, 75%)"],
      },
      {
        proportion: 0.38,
        softness: 0.95,
        distortion: 0.16,
        swirl: 0.85,
        swirlIterations: 11,
        shape: "checks" as const,
        shapeScale: 0.11,
        colors: ["hsl(250, 100%, 30%)", "hsl(270, 100%, 65%)", "hsl(260, 90%, 35%)", "hsl(265, 100%, 70%)"],
      },
      {
        proportion: 0.42,
        softness: 1.0,
        distortion: 0.19,
        swirl: 0.75,
        swirlIterations: 9,
        shape: "stripes" as const,
        shapeScale: 0.13,
        colors: ["hsl(330, 100%, 30%)", "hsl(350, 100%, 60%)", "hsl(340, 90%, 35%)", "hsl(345, 100%, 75%)"],
      },
    ]
    return configs[index % configs.length]
  }

  return (
    <section id="services" className="min-h-screen py-32 px-6 md:px-8 bg-transparent relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-gradient opacity-[0.01] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-left mb-20 max-w-3xl">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#46b5f1] block mb-4">
            Capabilities & Scope
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Services Powering <br />
            <span className="text-white font-semibold">Digital Execution</span>
          </h2>
          <p className="text-base text-[#b5c1d8] max-w-2xl leading-relaxed">
            We operate at the intersection of deep engineering and visual design, integrating custom WebGL shader states behind our operational panels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const shaderConfig = getShaderConfig(index)
            return (
              <div key={index} className="relative h-80 group">
                {/* WebGL Canvas Background */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-85 group-hover:opacity-100 transition-opacity duration-500">
                  <Warp
                    style={{ height: "100%", width: "100%" }}
                    proportion={shaderConfig.proportion}
                    softness={shaderConfig.softness}
                    distortion={shaderConfig.distortion}
                    swirl={shaderConfig.swirl}
                    swirlIterations={shaderConfig.swirlIterations}
                    shape={shaderConfig.shape}
                    shapeScale={shaderConfig.shapeScale}
                    scale={1}
                    rotation={0}
                    speed={0.6}
                    colors={shaderConfig.colors}
                  />
                </div>

                {/* Glassmorphic Front Content Panel */}
                <div className="relative z-10 p-8 rounded-3xl h-full flex flex-col justify-between bg-[#101828]/85 backdrop-blur-[2px] border border-white/5 hover:border-white/12 transition-all duration-500">
                  <div>
                    <div className="mb-6 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] text-white/95">
                      {feature.icon}
                    </div>

                    <h3 className="text-2xl font-serif font-bold mb-3 text-white">
                      {feature.title}
                    </h3>

                    <p className="leading-relaxed text-xs text-[#b5c1d8] font-sans">
                      {feature.description}
                    </p>
                  </div>

                  <a href="#contact" className="mt-6 flex items-center text-xs font-bold text-white/90 hover:text-white transition-colors">
                    <span className="mr-2">Initiate project</span>
                    <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
