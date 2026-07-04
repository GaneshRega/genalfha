import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Gen Alfha",
  description: "Gen Alfha Cookie Policy — how we use cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <div className="relative min-h-screen bg-[#050816] text-white">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#3B74BC] opacity-[0.04] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[300px] bg-[#46B5F1] opacity-[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 py-20 md:py-28">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-[#b5c1d8]/60 hover:text-[#3B74BC] transition-colors duration-200 mb-12 group"
        >
          <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M5 12l7-7M5 12l7 7" /></svg>
          Back to Gen Alfha
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#3B74BC] mb-3">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Cookie Policy
          </h1>
          <p className="font-sans text-sm text-[#b5c1d8]/50">Effective Date: July 1, 2026</p>
        </div>

        <div className="font-sans text-sm leading-relaxed text-[#b5c1d8]/70 space-y-6">
          <p>
            Gen Alfha uses cookies and similar technologies to improve your browsing experience, analyze website traffic, personalize content, and enhance our services.
          </p>

          <div className="border-t border-white/5 pt-8">
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
            <p className="mb-4">Cookies may include:</p>
            <ul className="pl-5 space-y-2 [&_li]:list-disc [&_li]:marker:text-[#3B74BC]/60">
              <li>Essential cookies required for website functionality.</li>
              <li>Analytics cookies to understand visitor behavior.</li>
              <li>Preference cookies to remember your settings.</li>
              <li>Marketing cookies to measure campaign performance.</li>
            </ul>
          </div>

          <div className="border-t border-white/5 pt-8">
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-white mb-4">Managing Cookies</h2>
            <p>
              You can disable cookies through your browser settings. Some website features may not function properly if cookies are disabled.
            </p>
          </div>

          <div className="border-t border-white/5 pt-8">
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-white mb-4">Your Consent</h2>
            <p>
              By continuing to use our website, you consent to the use of cookies as described in this policy.
            </p>
          </div>

          <div className="border-t border-white/5 pt-8">
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-white mb-4">Contact</h2>
            <p>
              For questions about our use of cookies, please contact us through the{" "}
              <Link href="/#contact" className="text-[#3B74BC] hover:text-white transition-colors duration-200">
                Contact page
              </Link>{" "}
              on <strong className="text-white/80">genalfha.com</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="border-t border-white/5 py-6 text-center">
        <p className="font-sans text-xs text-[#b5c1d8]/30">
          © {new Date().getFullYear()} Gen Alfha. Hyderabad, India. All rights reserved.
        </p>
      </div>
    </div>
  );
}
