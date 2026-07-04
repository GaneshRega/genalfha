"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PromptPathContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#050816] text-white">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#46B5F1] opacity-[0.04] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#8A68B7] opacity-[0.03] rounded-full blur-[140px]" />
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
          <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#46B5F1] mb-3">Support · Prompt Path</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Contact Us
          </h1>
          <p className="font-sans text-base text-[#b5c1d8]/60 leading-relaxed max-w-xl">
            Have a question, bug report, feature request, or need help with Prompt Path? We&apos;re here to help. Fill out the form below or reach us directly.
          </p>
        </div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          {[
            {
              icon: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              ),
              label: "Email Support",
              value: "support@genalfha.com",
            },
            {
              icon: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              ),
              label: "Response Time",
              value: "Within 24–48 hours",
            },
            {
              icon: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              ),
              label: "Based In",
              value: "Hyderabad, India",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] flex flex-col gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-[#46B5F1]/10 border border-[#46B5F1]/20 flex items-center justify-center text-[#46B5F1]">
                {item.icon}
              </div>
              <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#b5c1d8]/40">{item.label}</p>
              <p className="font-sans text-sm text-white/80">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="border-t border-white/5 pt-10">
          <h2 className="font-serif text-2xl font-semibold text-white mb-8">Send a Message</h2>

          {submitted ? (
            <div className="py-16 flex flex-col items-center gap-4 text-center">
              <div className="w-14 h-14 rounded-full bg-[#46B5F1]/15 border border-[#46B5F1]/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#46B5F1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-white">Message Received!</h3>
              <p className="font-sans text-sm text-[#b5c1d8]/60 max-w-sm">
                Thank you for reaching out. Our team will get back to you within 24–48 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                className="mt-4 font-sans text-xs font-semibold text-[#46B5F1] hover:text-white transition-colors duration-200 uppercase tracking-wider"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#b5c1d8]/50 mb-2">
                    Your Name <span className="text-[#46B5F1]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-[#b5c1d8]/25 focus:outline-none focus:border-[#46B5F1]/40 focus:bg-white/[0.05] transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#b5c1d8]/50 mb-2">
                    Email Address <span className="text-[#46B5F1]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-[#b5c1d8]/25 focus:outline-none focus:border-[#46B5F1]/40 focus:bg-white/[0.05] transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#b5c1d8]/50 mb-2">
                  Subject <span className="text-[#46B5F1]">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-[#46B5F1]/40 focus:bg-white/[0.05] transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0a0f1e] text-[#b5c1d8]">Select a topic…</option>
                  <option value="general" className="bg-[#0a0f1e]">General Inquiry</option>
                  <option value="bug" className="bg-[#0a0f1e]">Bug Report</option>
                  <option value="feature" className="bg-[#0a0f1e]">Feature Request</option>
                  <option value="account" className="bg-[#0a0f1e]">Account or Billing</option>
                  <option value="privacy" className="bg-[#0a0f1e]">Privacy or Data Request</option>
                  <option value="partnership" className="bg-[#0a0f1e]">Partnership or Press</option>
                  <option value="other" className="bg-[#0a0f1e]">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#b5c1d8]/50 mb-2">
                  Message <span className="text-[#46B5F1]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your question or issue in detail…"
                  className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-[#b5c1d8]/25 focus:outline-none focus:border-[#46B5F1]/40 focus:bg-white/[0.05] transition-all duration-200 resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <p className="font-sans text-xs text-[#b5c1d8]/35">
                  We reply to every message within 24–48 hours.
                </p>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-sans text-sm font-bold text-[#050816] bg-white hover:bg-[#b5c1d8] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-white/10"
                >
                  {sending ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* FAQ teaser */}
        <div className="mt-16 border-t border-white/5 pt-10">
          <h2 className="font-serif text-xl font-semibold text-white mb-6">Common Questions</h2>
          <div className="space-y-5">
            {[
              {
                q: "How do I delete my Prompt Path account?",
                a: "Go to Settings → Account → Delete Account inside the app, or contact us using the form above and we will process your request within 30 days.",
              },
              {
                q: "How do I cancel my subscription?",
                a: "Open the Google Play Store → Subscriptions → Prompt Path → Cancel. Your access continues until the end of the billing period.",
              },
              {
                q: "Can I request a refund?",
                a: "Refunds are processed through the Google Play Store. You can request a refund within 48 hours of purchase directly from Google Play. For other cases, contact us.",
              },
              {
                q: "How do I report a privacy concern?",
                a: "Email us at support@genalfha.com with the subject line 'Privacy Request' or use the contact form above and select 'Privacy or Data Request'.",
              },
            ].map((item) => (
              <div key={item.q} className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <p className="font-sans text-sm font-semibold text-white mb-2">{item.q}</p>
                <p className="font-sans text-sm text-[#b5c1d8]/60 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-white/5 py-6 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="font-sans text-xs text-[#b5c1d8]/30">
            © {new Date().getFullYear()} Gen Alfha. Hyderabad, India. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/promptpath/privacy" className="font-sans text-xs text-[#b5c1d8]/40 hover:text-[#46B5F1] transition-colors duration-200">Privacy Policy</Link>
            <Link href="/promptpath/terms" className="font-sans text-xs text-[#b5c1d8]/40 hover:text-[#46B5F1] transition-colors duration-200">Terms</Link>
            <Link href="/" className="font-sans text-xs text-[#b5c1d8]/40 hover:text-[#46B5F1] transition-colors duration-200">Gen Alfha</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
