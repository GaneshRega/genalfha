"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Send, CheckCircle, Mail, Globe } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

// Custom inline SVG icons for brands (removed in recent Lucide versions)
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

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) tempErrors.name = "Name is required.";
    if (!form.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) tempErrors.message = "Message cannot be empty.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear errors as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: "", email: "", company: "", message: "" });
      
      // Reset success state after a few seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-transparent relative overflow-hidden border-t border-white/5">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D31A96] opacity-[0.03] rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] bg-[#46B5F1] opacity-[0.02] rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Context Details */}
        <div className="lg:col-span-5 text-left">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#46b5f1] block mb-4">
            Connect With Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Let&apos;s Build the <span className="text-white">Next Product</span> Together
          </h2>
          <p className="font-sans text-sm md:text-base text-[#b5c1d8] leading-relaxed mb-12">
            Have a product vision, technical bottleneck, or partnership concept? Get in touch. Our team responds within 24 hours.
          </p>

          {/* Quick contact list */}
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 text-[#b5c1d8] hover:text-white transition-colors">
              <div className="p-3 bg-white/[0.02] border border-white/8 rounded-full">
                <Mail className="w-5 h-5 text-[#8A68B7]" />
              </div>
              <div>
                <span className="font-sans text-[10px] uppercase font-bold tracking-wider text-[#b5c1d8]/40 block">Email us</span>
                <span className="font-sans text-sm">hello@genalfha.com</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[#b5c1d8] hover:text-white transition-colors">
              <div className="p-3 bg-white/[0.02] border border-white/8 rounded-full">
                <Globe className="w-5 h-5 text-[#46B5F1]" />
              </div>
              <div>
                <span className="font-sans text-[10px] uppercase font-bold tracking-wider text-[#b5c1d8]/40 block">HQ Operations</span>
                <span className="font-sans text-sm">Distributed Lab (Global)</span>
              </div>
            </div>
          </div>

          {/* Social Links Portal */}
          <div>
            <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-[#b5c1d8]/45 block mb-4">
              FOLLOW OUR WORK
            </span>
            <div className="flex items-center gap-3">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/8 rounded-full text-[#b5c1d8] hover:text-white hover:border-white/20 transition-all duration-300 bg-white/[0.02]" aria-label="X">
                <TwitterIcon className="w-4.5 h-4.5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/8 rounded-full text-[#b5c1d8] hover:text-white hover:border-white/20 transition-all duration-300 bg-white/[0.02]" aria-label="LinkedIn">
                <LinkedinIcon className="w-4.5 h-4.5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/8 rounded-full text-[#b5c1d8] hover:text-white hover:border-white/20 transition-all duration-300 bg-white/[0.02]" aria-label="GitHub">
                <GithubIcon className="w-4.5 h-4.5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/8 rounded-full text-[#b5c1d8] hover:text-white hover:border-white/20 transition-all duration-300 bg-white/[0.02]" aria-label="Instagram">
                <InstagramIcon className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Interactive Form */}
        <div className="lg:col-span-7 w-full">
          <Card glowColor="rgba(70, 181, 241, 0.12)" className="relative p-8 lg:p-10">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 bg-[#3ECF8E]/10 border border-[#3ECF8E]/20 text-[#3ECF8E] rounded-full flex items-center justify-center mb-6 animate-[bounce_1s_infinite]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">Message Dispatched</h3>
                <p className="font-sans text-sm text-[#b5c1d8] max-w-sm">
                  Thank you! Your inquiry was successfully encrypted and submitted. Our product team will follow up soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col items-start">
                    <label htmlFor="name" className="font-sans text-xs font-semibold text-[#b5c1d8] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={`w-full bg-[#050816]/70 border rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-300 ${
                        errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/8 focus:border-white/25"
                      }`}
                    />
                    {errors.name && (
                      <span className="font-sans text-[10px] text-red-500 mt-1">{errors.name}</span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col items-start">
                    <label htmlFor="email" className="font-sans text-xs font-semibold text-[#b5c1d8] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={`w-full bg-[#050816]/70 border rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-300 ${
                        errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/8 focus:border-white/25"
                      }`}
                    />
                    {errors.email && (
                      <span className="font-sans text-[10px] text-red-500 mt-1">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Company Name Input */}
                <div className="flex flex-col items-start">
                  <label htmlFor="company" className="font-sans text-xs font-semibold text-[#b5c1d8] mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="e.g. Stripe, Inc."
                    className="w-full bg-[#050816]/70 border border-white/8 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-white/25 focus:ring-1 focus:ring-white/20 transition-all duration-300"
                  />
                </div>

                {/* Message Input */}
                <div className="flex flex-col items-start">
                  <label htmlFor="message" className="font-sans text-xs font-semibold text-[#b5c1d8] mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your product goals, timelines, or engineering scope..."
                    className={`w-full bg-[#050816]/70 border rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-300 resize-none ${
                      errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/8 focus:border-white/25"
                    }`}
                  />
                  {errors.message && (
                    <span className="font-sans text-[10px] text-red-500 mt-1">{errors.message}</span>
                  )}
                </div>

                {/* Submit Action Button */}
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="w-full py-4 text-sm font-bold flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Encrypting & Dispatching...</span>
                  ) : (
                    <>
                      Submit Inquiry <Send className="w-4.5 h-4.5" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </div>

      </div>
    </section>
  );
};
