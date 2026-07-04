import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Prompt Path | Gen Alfha",
  description:
    "Prompt Path Terms of Service — the rules and agreements governing your use of the Prompt Path mobile application.",
};

export default function PromptPathTermsPage() {
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
            Terms of Service
          </h1>
          <p className="font-sans text-sm text-[#b5c1d8]/50">Effective Date: July 1, 2026</p>
        </div>

        <div>
          <p className="font-sans text-sm leading-relaxed text-[#b5c1d8]/70 mb-10">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the <strong className="text-white/80">Prompt Path</strong> mobile application (&ldquo;App&rdquo;), developed and operated by <strong className="text-white/80">Gen Alfha</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By downloading, installing, or using Prompt Path, you agree to be bound by these Terms. If you do not agree, please do not use the App.
          </p>

          <Section title="Acceptance of Terms">
            <p>By creating an account or using the Prompt Path app, you confirm that:</p>
            <ul>
              <li>You are at least 13 years of age.</li>
              <li>You have the legal capacity to enter into a binding agreement.</li>
              <li>You agree to comply with these Terms and all applicable laws.</li>
            </ul>
            <p>If you are using the App on behalf of an organization, you represent that you have authority to bind that organization to these Terms.</p>
          </Section>

          <Section title="Description of Service">
            <p>Prompt Path is an AI-powered educational mobile application that helps users learn prompt engineering — the skill of crafting effective instructions for AI models such as ChatGPT, Gemini, Claude, and others. The App includes:</p>
            <ul>
              <li>Interactive lessons and learning modules</li>
              <li>Prompt templates and a personal template library</li>
              <li>Practice challenges and exercises</li>
              <li>Progress tracking, streaks, and achievement badges</li>
              <li>Community challenges and leaderboards</li>
              <li>Offline access to downloaded content</li>
            </ul>
            <p>We reserve the right to modify, suspend, or discontinue any feature or the entire App at any time, with or without notice.</p>
          </Section>

          <Section title="Account Registration">
            <p>Certain features of the App require you to create an account. You agree to:</p>
            <ul>
              <li>Provide accurate, current, and complete information during registration.</li>
              <li>Maintain the confidentiality of your account credentials.</li>
              <li>Notify us immediately of any unauthorized use of your account.</li>
              <li>Accept responsibility for all activities that occur under your account.</li>
            </ul>
            <p>We reserve the right to terminate accounts that violate these Terms or that remain inactive for extended periods.</p>
          </Section>

          <Section title="User Conduct">
            <p>You agree that you will not, in connection with the App:</p>
            <ul>
              <li>Use the App for any unlawful purpose or in violation of any applicable law or regulation.</li>
              <li>Upload, share, or create content that is harmful, offensive, abusive, defamatory, or violates the rights of others.</li>
              <li>Attempt to gain unauthorized access to any part of the App, our servers, or any related system.</li>
              <li>Reverse engineer, decompile, or disassemble any part of the App.</li>
              <li>Use automated tools, bots, or scripts to access or interact with the App.</li>
              <li>Impersonate any person or entity.</li>
              <li>Upload or distribute malicious software or harmful code.</li>
              <li>Circumvent, disable, or interfere with security features of the App.</li>
            </ul>
          </Section>

          <Section title="Intellectual Property">
            <p>All content within the Prompt Path App — including but not limited to text, graphics, user interface design, lesson content, icons, code, audio, video, and trademarks — is the property of Gen Alfha or its licensors and is protected by applicable intellectual property laws.</p>
            <p>You are granted a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes in accordance with these Terms. You may not:</p>
            <ul>
              <li>Copy, reproduce, or redistribute any content from the App without written permission.</li>
              <li>Create derivative works based on the App or its content.</li>
              <li>Use our trademarks, logos, or branding without prior written consent.</li>
            </ul>
          </Section>

          <Section title="User-Generated Content">
            <p>If you create or share prompts, templates, or other content within the App (&ldquo;User Content&rdquo;), you retain ownership of your content. By submitting User Content, you grant Gen Alfha a worldwide, royalty-free, non-exclusive license to use, reproduce, and display your content solely for the purpose of operating and improving the App.</p>
            <p>You represent and warrant that:</p>
            <ul>
              <li>Your User Content does not infringe the intellectual property rights of any third party.</li>
              <li>Your User Content does not violate any applicable law or these Terms.</li>
            </ul>
            <p>We reserve the right to remove any User Content that violates these Terms.</p>
          </Section>

          <Section title="In-App Purchases and Subscriptions">
            <p>Prompt Path may offer optional paid features, subscriptions, or one-time purchases. Where applicable:</p>
            <ul>
              <li>All purchases are processed through the Google Play Store. Gen Alfha does not directly store your payment information.</li>
              <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing period.</li>
              <li>Prices are subject to change with reasonable notice.</li>
              <li>Refunds are subject to the{" "}
                <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer" className="text-[#46B5F1] hover:text-white transition-colors duration-200">Google Play refund policy</a>.
              </li>
              <li>We do not offer refunds for partially used subscription periods, except where required by law.</li>
            </ul>
          </Section>

          <Section title="Disclaimer of Warranties">
            <p>The Prompt Path App is provided <strong className="text-white/80">&ldquo;as is&rdquo;</strong> and <strong className="text-white/80">&ldquo;as available&rdquo;</strong> without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
            <p>We do not warrant that:</p>
            <ul>
              <li>The App will be uninterrupted, error-free, or free of viruses.</li>
              <li>The results obtained from using the App will be accurate or reliable.</li>
              <li>Any defects will be corrected.</li>
            </ul>
          </Section>

          <Section title="Limitation of Liability">
            <p>To the maximum extent permitted by applicable law, Gen Alfha and its directors, employees, partners, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:</p>
            <ul>
              <li>Your use of or inability to use the App</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Any content obtained through the App</li>
              <li>Any other matter relating to the App</li>
            </ul>
            <p>Our total liability to you for all claims shall not exceed the amount you paid us in the three months preceding the claim.</p>
          </Section>

          <Section title="Third-Party Services">
            <p>The App may link to or integrate with third-party services (e.g., AI providers, analytics). These services are governed by their own terms and privacy policies. Gen Alfha is not responsible for the content, policies, or practices of any third-party services.</p>
          </Section>

          <Section title="Termination">
            <p>We may suspend or terminate your access to the App at any time, with or without cause, if:</p>
            <ul>
              <li>You violate these Terms.</li>
              <li>We are required to do so by law.</li>
              <li>We discontinue the App or any of its features.</li>
            </ul>
            <p>You may stop using the App and delete your account at any time. Upon termination, your license to use the App ends immediately.</p>
          </Section>

          <Section title="Governing Law and Disputes">
            <p>These Terms are governed by and construed in accordance with the laws of India, without regard to conflict-of-law principles. Any disputes arising from these Terms or the use of the App shall be subject to the exclusive jurisdiction of the competent courts in Hyderabad, Telangana, India.</p>
          </Section>

          <Section title="Changes to These Terms">
            <p>We may revise these Terms from time to time. Material changes will be communicated through in-app notifications or by updating the Effective Date. Continued use of the App after changes are posted constitutes your acceptance of the revised Terms.</p>
          </Section>

          <Section title="Contact Us">
            <p>If you have any questions or concerns about these Terms, please contact us:</p>
            <ul>
              <li><strong className="text-white/80">App:</strong> Prompt Path</li>
              <li><strong className="text-white/80">Developer:</strong> Gen Alfha</li>
              <li><strong className="text-white/80">Contact Page:</strong>{" "}
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
            <Link href="/promptpath/privacy" className="font-sans text-xs text-[#b5c1d8]/40 hover:text-[#46B5F1] transition-colors duration-200">Privacy Policy</Link>
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
