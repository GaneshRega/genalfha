"use client";

import React, { useState } from "react";
import Link from "next/link";

type Step = "info" | "form" | "confirm" | "done";

export default function PromptPathDeleteAccountPage() {
  const [step, setStep] = useState<Step>("info");
  const [form, setForm] = useState({ email: "", reason: "", confirm: "", message: "" });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleFormNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.reason) return;
    setStep("confirm");
  };

  const handleConfirmDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.confirm.trim().toLowerCase() !== "delete my account") {
      setError("Please type exactly: delete my account");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setStep("done");
  };

  return (
    <div className="relative min-h-screen bg-[#050816] text-white">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E05A5A] opacity-[0.03] rounded-full blur-[160px]" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[300px] bg-[#46B5F1] opacity-[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-8 py-20 md:py-28">
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
          <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#b5c1d8]/50 mb-3">Account · Prompt Path</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Delete Account
          </h1>
          <p className="font-sans text-sm text-[#b5c1d8]/50">Your data, your choice — we make deletion simple and transparent.</p>
        </div>

        {/* ── Step: Info ───────────────────────────────────── */}
        {step === "info" && (
          <div className="space-y-8">
            {/* What gets deleted */}
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#b5c1d8]/40 mb-4">What will be permanently deleted</p>
              <ul className="space-y-3">
                {[
                  "Your Prompt Path account and profile",
                  "All saved prompts and personal template library",
                  "Progress data, streaks, and achievement badges",
                  "Any in-app notes or customizations",
                  "Email address and name associated with your account",
                  "Usage history and analytics tied to your account",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-red-500/10 border border-red-500/25 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </span>
                    <span className="font-sans text-sm text-[#b5c1d8]/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What is NOT deleted */}
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#b5c1d8]/40 mb-4">What is NOT deleted</p>
              <ul className="space-y-3">
                {[
                  "Purchase records held by Google Play (managed by Google, not us)",
                  "Anonymized, aggregated analytics data that cannot identify you",
                  "Records we are legally required to retain (e.g., financial transactions for tax purposes)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-[#46B5F1]/10 border border-[#46B5F1]/25 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-[#46B5F1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="font-sans text-sm text-[#b5c1d8]/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline */}
            <div className="p-6 rounded-2xl border border-[#46B5F1]/12 bg-[#46B5F1]/[0.03]">
              <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#46B5F1] mb-3">Deletion Timeline</p>
              <p className="font-sans text-sm text-[#b5c1d8]/70 leading-relaxed">
                Once your request is submitted and verified, your account and personal data will be permanently deleted within <strong className="text-white/80">30 days</strong>. You will receive a confirmation email when the deletion is complete. This action is <strong className="text-white/80">irreversible</strong> — your data cannot be recovered after deletion.
              </p>
            </div>

            {/* Before you go */}
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#b5c1d8]/40 mb-4">Before you go — consider these alternatives</p>
              <ul className="space-y-3">
                {[
                  { title: "Cancel subscription only", desc: "You can cancel your subscription while keeping your account and all saved data intact." },
                  { title: "Take a break", desc: "Simply stop using the app. Your data stays safe and you can return anytime." },
                  { title: "Export your prompts", desc: "In-app, go to Settings → Export to download all your saved prompts before deleting." },
                  { title: "Contact support first", desc: "If you experienced an issue, we'd love to fix it. Reach us at support@genalfha.com." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#46B5F1]/60" />
                    <div>
                      <span className="font-sans text-sm font-semibold text-white/80">{item.title} — </span>
                      <span className="font-sans text-sm text-[#b5c1d8]/60">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => setStep("form")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-sans text-sm font-bold text-white border border-red-500/30 bg-red-500/[0.08] hover:bg-red-500/[0.15] hover:border-red-500/50 transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4h6v2" />
                </svg>
                Proceed to Delete Account
              </button>
              <Link
                href="/promptpath/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-sans text-sm font-semibold text-white border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300"
              >
                Contact Support Instead
              </Link>
            </div>
          </div>
        )}

        {/* ── Step: Form ───────────────────────────────────── */}
        {step === "form" && (
          <div>
            <div className="mb-8 p-4 rounded-xl border border-amber-500/20 bg-amber-500/[0.05] flex items-start gap-3">
              <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <p className="font-sans text-xs text-amber-300/80 leading-relaxed">
                <strong>Warning:</strong> Deleting your account is permanent and cannot be undone. All your data, progress, and saved prompts will be erased.
              </p>
            </div>

            <form onSubmit={handleFormNext} className="space-y-5">
              <div>
                <label htmlFor="email" className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#b5c1d8]/50 mb-2">
                  Registered Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="The email you used to sign up"
                  className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-[#b5c1d8]/25 focus:outline-none focus:border-[#46B5F1]/40 focus:bg-white/[0.05] transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#b5c1d8]/50 mb-2">
                  Reason for Leaving <span className="text-red-400">*</span>
                </label>
                <select
                  id="reason"
                  name="reason"
                  required
                  value={form.reason}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-[#46B5F1]/40 focus:bg-white/[0.05] transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0a0f1e] text-[#b5c1d8]">Select a reason…</option>
                  <option value="not-useful" className="bg-[#0a0f1e]">Not useful for my needs</option>
                  <option value="too-expensive" className="bg-[#0a0f1e]">Subscription is too expensive</option>
                  <option value="found-alternative" className="bg-[#0a0f1e]">Found a better alternative</option>
                  <option value="privacy" className="bg-[#0a0f1e]">Privacy concerns</option>
                  <option value="technical-issues" className="bg-[#0a0f1e]">Too many technical issues</option>
                  <option value="no-longer-needed" className="bg-[#0a0f1e]">No longer need the app</option>
                  <option value="other" className="bg-[#0a0f1e]">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#b5c1d8]/50 mb-2">
                  Additional Comments <span className="text-[#b5c1d8]/30">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Help us improve — tell us more…"
                  className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-[#b5c1d8]/25 focus:outline-none focus:border-[#46B5F1]/40 focus:bg-white/[0.05] transition-all duration-200 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-sans text-sm font-bold text-white border border-red-500/30 bg-red-500/[0.08] hover:bg-red-500/[0.15] hover:border-red-500/50 transition-all duration-300"
                >
                  Continue to Confirm
                </button>
                <button
                  type="button"
                  onClick={() => setStep("info")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-sans text-sm font-semibold text-[#b5c1d8]/60 border border-white/8 hover:text-white hover:border-white/15 transition-all duration-300"
                >
                  Go Back
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ── Step: Confirm ────────────────────────────────── */}
        {step === "confirm" && (
          <div>
            <div className="mb-8 p-5 rounded-2xl border border-red-500/20 bg-red-500/[0.05]">
              <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-red-400 mb-3">Final Confirmation Required</p>
              <p className="font-sans text-sm text-[#b5c1d8]/70 leading-relaxed mb-4">
                You are about to permanently delete the account associated with{" "}
                <strong className="text-white/90">{form.email}</strong>. All data tied to this account will be erased within 30 days. This cannot be undone.
              </p>
              <p className="font-sans text-sm text-[#b5c1d8]/70">
                To confirm, type <strong className="text-white/80 select-none">delete my account</strong> in the field below:
              </p>
            </div>

            <form onSubmit={handleConfirmDelete} className="space-y-5">
              <div>
                <input
                  name="confirm"
                  type="text"
                  required
                  value={form.confirm}
                  onChange={handleChange}
                  placeholder="delete my account"
                  autoComplete="off"
                  className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-[#b5c1d8]/25 focus:outline-none transition-all duration-200 ${
                    error ? "border-red-500/50 focus:border-red-500/70" : "border-white/8 focus:border-red-500/40"
                  }`}
                />
                {error && (
                  <p className="mt-2 font-sans text-xs text-red-400">{error}</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-sans text-sm font-bold text-white border border-red-500/40 bg-red-500/10 hover:bg-red-500/20 hover:border-red-500/60 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {sending ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Submitting Request…
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" />
                      </svg>
                      Permanently Delete My Account
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => { setStep("form"); setError(""); }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-sans text-sm font-semibold text-[#b5c1d8]/60 border border-white/8 hover:text-white hover:border-white/15 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ── Step: Done ───────────────────────────────────── */}
        {step === "done" && (
          <div className="py-10 flex flex-col items-center gap-5 text-center">
            <div className="w-16 h-16 rounded-full bg-[#46B5F1]/10 border border-[#46B5F1]/25 flex items-center justify-center">
              <svg className="w-7 h-7 text-[#46B5F1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="font-serif text-3xl font-semibold text-white">Request Submitted</h2>
            <p className="font-sans text-sm text-[#b5c1d8]/60 max-w-sm leading-relaxed">
              Your account deletion request has been received. We will permanently delete your data within <strong className="text-white/80">30 days</strong> and send a confirmation to <strong className="text-white/80">{form.email}</strong>.
            </p>
            <div className="mt-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-left max-w-sm w-full">
              <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#b5c1d8]/40 mb-3">What happens next</p>
              <ul className="space-y-2.5">
                {[
                  "Your account access will be revoked immediately.",
                  "All personal data will be deleted within 30 days.",
                  "You'll receive a confirmation email once complete.",
                  "Active subscriptions should be cancelled via Google Play.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#46B5F1]/60 flex-shrink-0" />
                    <span className="font-sans text-xs text-[#b5c1d8]/60">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/"
              className="mt-2 font-sans text-xs font-semibold text-[#46B5F1] hover:text-white transition-colors duration-200 uppercase tracking-wider"
            >
              Return to Gen Alfha →
            </Link>
          </div>
        )}
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
          </div>
        </div>
      </div>
    </div>
  );
}
