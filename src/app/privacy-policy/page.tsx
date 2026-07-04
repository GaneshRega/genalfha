import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Gen Alfha",
  description: "Gen Alfha Privacy Policy — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-[#050816] text-white">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#46B5F1] opacity-[0.04] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[300px] bg-[#8A68B7] opacity-[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 py-20 md:py-28">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-[#b5c1d8]/60 hover:text-[#46B5F1] transition-colors duration-200 mb-12 group"
        >
          <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M5 12l7-7M5 12l7 7" /></svg>
          Back to Gen Alfha
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#46B5F1] mb-3">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="font-sans text-sm text-[#b5c1d8]/50">Effective Date: July 1, 2026</p>
        </div>

        <div className="prose-legal">
          <p className="font-sans text-sm leading-relaxed text-[#b5c1d8]/70 mb-10">
            Welcome to Gen Alfha (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit <strong className="text-white/80">genalfha.com</strong> or use any of our products, services, applications, or websites.
          </p>

          <Section title="Information We Collect">
            <p>We may collect:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company or organization name</li>
              <li>Messages submitted through contact forms</li>
              <li>Account information (if registration is available)</li>
              <li>Payment information (processed securely by third-party payment providers)</li>
              <li>Device information</li>
              <li>Browser type</li>
              <li>IP address</li>
              <li>Cookies and analytics data</li>
            </ul>
          </Section>

          <Section title="How We Use Your Information">
            <p>We use your information to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Respond to inquiries</li>
              <li>Process purchases</li>
              <li>Deliver customer support</li>
              <li>Send important service updates</li>
              <li>Send marketing communications (only where permitted)</li>
              <li>Improve website performance and user experience</li>
              <li>Detect fraud and maintain security</li>
            </ul>
          </Section>

          <Section title="Cookies">
            <p>We use cookies and similar technologies to:</p>
            <ul>
              <li>Remember your preferences</li>
              <li>Improve website functionality</li>
              <li>Analyze traffic</li>
              <li>Measure marketing performance</li>
            </ul>
            <p>You may disable cookies through your browser settings, although some website features may not function properly.</p>
          </Section>

          <Section title="Third-Party Services">
            <p>We may use trusted third-party providers including:</p>
            <ul>
              <li>Google Analytics</li>
              <li>Payment gateways</li>
              <li>Cloud hosting providers</li>
              <li>Email service providers</li>
              <li>Authentication services</li>
            </ul>
            <p>These providers process information only to deliver their respective services.</p>
          </Section>

          <Section title="Data Security">
            <p>We implement reasonable technical and organizational measures to protect your personal information. However, no internet transmission or electronic storage method is completely secure.</p>
          </Section>

          <Section title="Your Rights">
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent where applicable</li>
              <li>Request a copy of your data</li>
            </ul>
            <p>To exercise these rights, contact us using the information below.</p>
          </Section>

          <Section title="Children&apos;s Privacy">
            <p>Our services are not directed toward children under 13 years of age. We do not knowingly collect personal information from children.</p>
          </Section>

          <Section title="Changes to This Policy">
            <p>We may update this Privacy Policy periodically. Updated versions will be posted on this page with a revised Effective Date.</p>
          </Section>

          <Section title="Contact">
            <p>If you have questions regarding this Privacy Policy, please contact us through the <Link href="/#contact" className="text-[#46B5F1] hover:text-white transition-colors duration-200">Contact page</Link> available on <strong className="text-white/80">genalfha.com</strong>.</p>
          </Section>
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 border-t border-white/5 pt-8">
      <h2 className="font-serif text-xl md:text-2xl font-semibold text-white mb-4">{title}</h2>
      <div className="font-sans text-sm leading-relaxed text-[#b5c1d8]/70 space-y-3 [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:list-disc [&_li]:marker:text-[#46B5F1]/50 [&_strong]:text-white/80">
        {children}
      </div>
    </div>
  );
}
