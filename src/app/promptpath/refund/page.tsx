import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy — Prompt Path | Gen Alfha",
  description:
    "Prompt Path Refund Policy — understand your options for refunds on subscriptions and in-app purchases.",
};

export default function PromptPathRefundPage() {
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
          <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#46B5F1] mb-3">Policy · Prompt Path</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Refund Policy
          </h1>
          <p className="font-sans text-sm text-[#b5c1d8]/50">Effective Date: July 1, 2026</p>
        </div>

        {/* Intro */}
        <p className="font-sans text-sm leading-relaxed text-[#b5c1d8]/70 mb-10">
          At <strong className="text-white/80">Gen Alfha</strong>, we want you to be completely satisfied with your experience using <strong className="text-white/80">Prompt Path</strong>. This Refund Policy explains how refunds work for in-app purchases and subscriptions made through the Google Play Store. Please read this carefully before making a purchase.
        </p>

        {/* Quick summary card */}
        <div className="mb-10 p-6 rounded-2xl border border-[#46B5F1]/15 bg-[#46B5F1]/[0.04]">
          <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#46B5F1] mb-3">Quick Summary</p>
          <ul className="space-y-2.5">
            {[
              "Purchases are processed by Google Play — refunds follow Google's policy.",
              "Request a refund within 48 hours of purchase for the best outcome.",
              "Subscriptions can be cancelled any time; access continues to the period end.",
              "For special cases, contact us directly — we review them individually.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 font-sans text-sm text-[#b5c1d8]/70">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#46B5F1] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Section title="How Purchases Work">
            <p>All payments for Prompt Path — including subscriptions and one-time in-app purchases — are processed exclusively through the <strong className="text-white/80">Google Play Store</strong>. Gen Alfha does not directly process or store your payment information.</p>
            <p>Because Google Play manages all transactions, refund requests are primarily handled through Google&apos;s platform and governed by the <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer" className="text-[#46B5F1] hover:text-white transition-colors duration-200">Google Play Refund Policy</a>.</p>
          </Section>

          <Section title="Google Play Refunds (Recommended Path)">
            <p>The fastest way to get a refund is directly through Google Play:</p>
            <ol>
              <li>Open the <strong className="text-white/80">Google Play Store</strong> app on your device.</li>
              <li>Tap your profile picture → <strong className="text-white/80">Payments &amp; subscriptions</strong> → <strong className="text-white/80">Budget &amp; history</strong>.</li>
              <li>Locate the Prompt Path purchase you wish to refund.</li>
              <li>Tap the order → <strong className="text-white/80">Request a refund</strong> and follow the prompts.</li>
            </ol>
            <p>Alternatively, visit <a href="https://play.google.com/store/account/orderhistory" target="_blank" rel="noopener noreferrer" className="text-[#46B5F1] hover:text-white transition-colors duration-200">play.google.com/store/account/orderhistory</a> to manage your orders directly.</p>
            <p><strong className="text-white/80">Time window:</strong> Google typically processes refund requests submitted within 48 hours of purchase most favorably. After this window, refund approval is at Google&apos;s discretion.</p>
          </Section>

          <Section title="Subscription Refunds">
            <p>Prompt Path offers optional auto-renewing subscription plans. Please note:</p>
            <ul>
              <li><strong className="text-white/80">Cancellation:</strong> You can cancel your subscription at any time via Google Play → Subscriptions → Prompt Path → Cancel. Your access to premium features continues until the end of the current billing period.</li>
              <li><strong className="text-white/80">No mid-period refunds:</strong> We do not offer partial refunds for unused days in a subscription period, except where required by applicable law.</li>
              <li><strong className="text-white/80">Auto-renewal:</strong> Subscriptions renew automatically unless cancelled at least 24 hours before the renewal date.</li>
              <li><strong className="text-white/80">First-time subscribers:</strong> If you are a first-time subscriber and have not used any premium features, contact us within 48 hours of your first charge and we will do our best to assist.</li>
            </ul>
          </Section>

          <Section title="One-Time In-App Purchases">
            <p>For one-time purchases (e.g., individual lesson packs or template bundles):</p>
            <ul>
              <li>Refunds are available through Google Play within 48 hours of purchase if the content has not been substantially accessed.</li>
              <li>Once a digital item has been fully downloaded or accessed, refunds may not be available as the content has been delivered.</li>
              <li>If you experience a technical issue that prevented you from accessing purchased content, contact us — we will investigate and resolve the issue or issue a refund where appropriate.</li>
            </ul>
          </Section>

          <Section title="Eligible Refund Circumstances">
            <p>We will make every effort to resolve refund requests favourably in the following situations:</p>
            <ul>
              <li>You were charged due to a technical error or duplicate transaction.</li>
              <li>You did not receive access to the purchased content or features due to a verified app-side bug.</li>
              <li>A subscription renewed after you had already cancelled (verifiable via Google Play records).</li>
              <li>A minor was charged without parental consent (parental controls should be enabled on your Google Play account).</li>
              <li>You are a first-time subscriber and contact us within 48 hours of being charged.</li>
            </ul>
          </Section>

          <Section title="Non-Refundable Circumstances">
            <p>Refunds will generally <strong className="text-white/80">not</strong> be issued in the following cases:</p>
            <ul>
              <li>You changed your mind after accessing or using the purchased content.</li>
              <li>You forgot to cancel a subscription before it renewed.</li>
              <li>The refund request is made more than 30 days after purchase.</li>
              <li>You have violated our Terms of Service and your account has been terminated.</li>
              <li>The request is for a promotional, discounted, or gifted purchase.</li>
            </ul>
          </Section>

          <Section title="How to Contact Us for Refunds">
            <p>If you were unable to obtain a refund through Google Play, or if your situation falls under the eligible circumstances above, please reach out to us directly:</p>
            <ul>
              <li><strong className="text-white/80">Contact Form:</strong>{" "}
                <Link href="/promptpath/contact" className="text-[#46B5F1] hover:text-white transition-colors duration-200">genalfha.com/promptpath/contact</Link>
                {" "}— select <em>&ldquo;Account or Billing&rdquo;</em> as the subject.
              </li>
              <li><strong className="text-white/80">Email:</strong> support@genalfha.com</li>
            </ul>
            <p>Please include the following in your message to help us process your request quickly:</p>
            <ul>
              <li>Your registered email address</li>
              <li>Google Play order ID (found in your Google Play purchase history or email receipt)</li>
              <li>Date of purchase</li>
              <li>Reason for the refund request</li>
            </ul>
            <p>We aim to respond to all refund inquiries within <strong className="text-white/80">2 business days</strong>.</p>
          </Section>

          <Section title="Changes to This Policy">
            <p>We may update this Refund Policy from time to time. Any changes will be posted on this page with a revised Effective Date. Continued use of Prompt Path after changes are posted constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="Contact">
            <p>For all billing or refund questions, please use our{" "}
              <Link href="/promptpath/contact" className="text-[#46B5F1] hover:text-white transition-colors duration-200">Contact page</Link>{" "}
              or email us at <strong className="text-white/80">support@genalfha.com</strong>. We are committed to resolving every issue fairly and promptly.
            </p>
          </Section>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-white/5 py-6 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="font-sans text-xs text-[#b5c1d8]/30">
            © {new Date().getFullYear()} Gen Alfha. Hyderabad, India. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/promptpath/privacy" className="font-sans text-xs text-[#b5c1d8]/40 hover:text-[#46B5F1] transition-colors duration-200">Privacy</Link>
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
      <div className="font-sans text-sm leading-relaxed text-[#b5c1d8]/70 space-y-3 [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:list-disc [&_li]:marker:text-[#46B5F1]/50 [&_ol]:pl-5 [&_ol]:space-y-2 [&_ol>li]:list-decimal [&_strong]:text-white/80">
        {children}
      </div>
    </div>
  );
}
