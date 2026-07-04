import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Prompt Path | Gen Alfha",
  description:
    "Prompt Path Privacy Policy — how we collect, use, and protect your information when you use the Prompt Path app.",
};

export default function PromptPathPrivacyPage() {
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
          href="/promptpath"
          className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-[#b5c1d8]/60 hover:text-[#46B5F1] transition-colors duration-200 mb-12 group"
        >
          <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          Back to Prompt Path
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#46B5F1] mb-3">Legal · Prompt Path</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="font-sans text-sm text-[#b5c1d8]/50">Effective Date: July 1, 2026</p>
        </div>

        <div>
          <p className="font-sans text-sm leading-relaxed text-[#b5c1d8]/70 mb-10">
            Welcome to <strong className="text-white/80">Prompt Path</strong>, an application developed and operated by{" "}
            <strong className="text-white/80">Gen Alfha</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We are committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use the Prompt Path mobile application and any associated services.
          </p>
          <p className="font-sans text-sm leading-relaxed text-[#b5c1d8]/70 mb-10">
            By downloading, installing, or using Prompt Path, you agree to the practices described in this Privacy Policy. If you do not agree, please do not use the app.
          </p>

          <Section title="Information We Collect">
            <p>We may collect the following categories of information:</p>
            <p><strong className="text-white/80">Information You Provide Directly:</strong></p>
            <ul>
              <li>Name and display name</li>
              <li>Email address (for account registration or sign-in)</li>
              <li>Profile photo (optional)</li>
              <li>Prompts, templates, and notes you create within the app</li>
              <li>Messages submitted through our support or contact forms</li>
            </ul>
            <p><strong className="text-white/80">Information Collected Automatically:</strong></p>
            <ul>
              <li>Device type, model, and operating system version</li>
              <li>App version and usage data (features used, session duration)</li>
              <li>Crash reports and error logs</li>
              <li>Approximate location (country/region) derived from IP address</li>
              <li>Advertising ID (if applicable and permitted)</li>
              <li>Analytics events (lesson completions, challenge participation)</li>
            </ul>
          </Section>

          <Section title="How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve the Prompt Path app and its features</li>
              <li>Create and manage your account</li>
              <li>Personalize your learning experience and recommendations</li>
              <li>Track your progress, streaks, and achievements</li>
              <li>Respond to support requests and inquiries</li>
              <li>Send important service notifications and updates</li>
              <li>Send optional promotional or educational communications (only with your consent)</li>
              <li>Analyze usage patterns to improve app performance and content quality</li>
              <li>Detect, prevent, and address fraud, abuse, or security issues</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
          </Section>

          <Section title="Data Sharing and Disclosure">
            <p>We do <strong className="text-white/80">not sell</strong> your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul>
              <li><strong className="text-white/80">Service Providers:</strong> Trusted third-party companies that help us operate the app (e.g., cloud hosting, analytics, crash reporting, email delivery). These providers are bound by confidentiality obligations.</li>
              <li><strong className="text-white/80">Legal Requirements:</strong> When required by law, court order, or government authority.</li>
              <li><strong className="text-white/80">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with appropriate confidentiality protections.</li>
              <li><strong className="text-white/80">Safety:</strong> To protect the rights, property, or safety of Gen Alfha, our users, or the public.</li>
            </ul>
          </Section>

          <Section title="Third-Party Services">
            <p>Prompt Path may integrate or use the following types of third-party services:</p>
            <ul>
              <li>Firebase (Google) — analytics, crash reporting, authentication</li>
              <li>Google Play Services — app distribution and billing</li>
              <li>Cloud infrastructure providers — secure data storage</li>
              <li>Email service providers — transactional and notification emails</li>
            </ul>
            <p>These third parties operate under their own privacy policies. We encourage you to review them.</p>
          </Section>

          <Section title="Data Retention">
            <p>We retain your personal information for as long as your account is active or as needed to provide the service. You may request deletion of your data at any time. We will delete or anonymize your information within 30 days of a verified deletion request, unless retention is required by law.</p>
          </Section>

          <Section title="Data Security">
            <p>We implement industry-standard technical and organizational security measures to protect your personal information, including encryption in transit (TLS) and at rest. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
          </Section>

          <Section title="Children&apos;s Privacy">
            <p>Prompt Path is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently collected such information, we will delete it promptly.</p>
            <p>If you believe a child under 13 has provided us with personal information, please contact us immediately using the details in the Contact section below.</p>
          </Section>

          <Section title="Your Rights and Choices">
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul>
              <li><strong className="text-white/80">Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong className="text-white/80">Correction:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong className="text-white/80">Deletion:</strong> Request that we delete your personal data.</li>
              <li><strong className="text-white/80">Portability:</strong> Request a portable copy of your data in a machine-readable format.</li>
              <li><strong className="text-white/80">Opt-out:</strong> Unsubscribe from marketing emails at any time via the unsubscribe link.</li>
              <li><strong className="text-white/80">Withdraw Consent:</strong> Withdraw consent where processing is based on consent.</li>
            </ul>
            <p>To exercise any of these rights, contact us at <Link href="/promptpath/contact" className="text-[#46B5F1] hover:text-white transition-colors duration-200">our contact page</Link>.</p>
          </Section>

          <Section title="Cookies and Tracking">
            <p>The Prompt Path app may use anonymous analytics identifiers and app-level tracking to measure feature usage and improve the experience. These are not browser cookies but function similarly. You may opt out of analytics collection through the in-app settings.</p>
          </Section>

          <Section title="International Users">
            <p>Prompt Path is operated from India. If you are accessing the app from outside India, please be aware that your information may be transferred to and processed in India or in the countries where our service providers operate. By using the app, you consent to this transfer.</p>
          </Section>

          <Section title="Changes to This Privacy Policy">
            <p>We may update this Privacy Policy from time to time. When we make material changes, we will notify you through an in-app notification or by updating the Effective Date at the top of this page. Continued use of the app after changes constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="Contact Us">
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:</p>
            <ul>
              <li><strong className="text-white/80">App:</strong> Prompt Path</li>
              <li><strong className="text-white/80">Developer:</strong> Gen Alfha</li>
              <li><strong className="text-white/80">Website:</strong>{" "}
                <Link href="/promptpath/contact" className="text-[#46B5F1] hover:text-white transition-colors duration-200">
                  genalfha.com/promptpath/contact
                </Link>
              </li>
              <li><strong className="text-white/80">Location:</strong> Hyderabad, Telangana, India</li>
            </ul>
          </Section>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="border-t border-white/5 py-6 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="font-sans text-xs text-[#b5c1d8]/30">
            © {new Date().getFullYear()} Gen Alfha. Hyderabad, India. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/promptpath/terms" className="font-sans text-xs text-[#b5c1d8]/40 hover:text-[#46B5F1] transition-colors duration-200">Terms</Link>
            <Link href="/promptpath/contact" className="font-sans text-xs text-[#b5c1d8]/40 hover:text-[#46B5F1] transition-colors duration-200">Contact</Link>
            <Link href="/" className="font-sans text-xs text-[#b5c1d8]/40 hover:text-[#46B5F1] transition-colors duration-200">Gen Alfha</Link>
          </div>
        </div>
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
