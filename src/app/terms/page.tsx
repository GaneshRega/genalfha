import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions — Gen Alfha",
  description: "Gen Alfha Terms and Conditions — rules governing the use of our website and services.",
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-[#050816] text-white">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#8A68B7] opacity-[0.04] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[300px] bg-[#46B5F1] opacity-[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 py-20 md:py-28">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-[#b5c1d8]/60 hover:text-[#8A68B7] transition-colors duration-200 mb-12 group"
        >
          <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M5 12l7-7M5 12l7 7" /></svg>
          Back to Gen Alfha
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#8A68B7] mb-3">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Terms and Conditions
          </h1>
          <p className="font-sans text-sm text-[#b5c1d8]/50">Effective Date: July 1, 2026</p>
        </div>

        <div>
          <p className="font-sans text-sm leading-relaxed text-[#b5c1d8]/70 mb-10">
            Welcome to Gen Alfha. By accessing or using <strong className="text-white/80">genalfha.com</strong>, you agree to these Terms and Conditions.
          </p>

          <Section title="Acceptance of Terms" accent="#8A68B7">
            <p>By using our website or services, you agree to comply with these Terms.</p>
          </Section>

          <Section title="Services" accent="#8A68B7">
            <p>Gen Alfha provides digital products, AI-powered applications, software solutions, design services, web development, marketing solutions, educational content, and other technology services.</p>
            <p>We reserve the right to modify, suspend, or discontinue any service without prior notice.</p>
          </Section>

          <Section title="User Responsibilities" accent="#8A68B7">
            <p>You agree that you will not:</p>
            <ul>
              <li>Use the website for unlawful purposes</li>
              <li>Attempt unauthorized access to our systems</li>
              <li>Upload malicious software</li>
              <li>Copy or redistribute our content without permission</li>
              <li>Violate applicable laws or regulations</li>
            </ul>
          </Section>

          <Section title="Intellectual Property" accent="#8A68B7">
            <p>All content on this website, including logos, branding, software, graphics, designs, text, and code, is owned by Gen Alfha unless otherwise stated.</p>
            <p>No content may be copied, reproduced, or distributed without written permission.</p>
          </Section>

          <Section title="User Content" accent="#8A68B7">
            <p>If you submit content to Gen Alfha, you grant us a non-exclusive license to use it for providing our services.</p>
            <p>You remain responsible for the legality of your submitted content.</p>
          </Section>

          <Section title="Payments" accent="#8A68B7">
            <p>Where applicable:</p>
            <ul>
              <li>Prices may change without notice.</li>
              <li>Payments are processed securely through third-party providers.</li>
              <li>Refunds are subject to the specific refund policy for each product or service.</li>
            </ul>
          </Section>

          <Section title="Disclaimer" accent="#8A68B7">
            <p>Our services are provided &ldquo;as is&rdquo; without warranties of any kind. While we strive for accuracy and reliability, we do not guarantee uninterrupted or error-free operation.</p>
          </Section>

          <Section title="Limitation of Liability" accent="#8A68B7">
            <p>To the maximum extent permitted by law, Gen Alfha shall not be liable for indirect, incidental, or consequential damages arising from the use of our website or services.</p>
          </Section>

          <Section title="Third-Party Links" accent="#8A68B7">
            <p>Our website may contain links to external websites. We are not responsible for their content or privacy practices.</p>
          </Section>

          <Section title="Termination" accent="#8A68B7">
            <p>We reserve the right to suspend or terminate access to our services if these Terms are violated.</p>
          </Section>

          <Section title="Governing Law" accent="#8A68B7">
            <p>These Terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of the competent courts in India.</p>
          </Section>

          <Section title="Changes to These Terms" accent="#8A68B7">
            <p>We may revise these Terms at any time. Continued use of our website constitutes acceptance of the revised Terms.</p>
          </Section>

          <Section title="Contact" accent="#8A68B7">
            <p>For any questions regarding these Terms, please contact us through the <Link href="/#contact" className="text-[#8A68B7] hover:text-white transition-colors duration-200">Contact page</Link> on <strong className="text-white/80">genalfha.com</strong>.</p>
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

function Section({ title, accent, children }: { title: string; accent: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 border-t border-white/5 pt-8">
      <h2 className="font-serif text-xl md:text-2xl font-semibold text-white mb-4">{title}</h2>
      <div
        className="font-sans text-sm leading-relaxed text-[#b5c1d8]/70 space-y-3 [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:list-disc [&_strong]:text-white/80"
        style={{ ["--accent" as string]: accent }}
      >
        {children}
      </div>
    </div>
  );
}
