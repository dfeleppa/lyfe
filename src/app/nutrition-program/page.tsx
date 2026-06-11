"use client";

import Image from "next/image";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import { useEffect, useState } from "react";

// ──────────────────────────────────────────────────────────────────────────
// TODO: paste your signup form URL here. Every "Start my trial week" button
// (hero, options, final CTA) points at this. Leave as "#" until you have it.
const SIGNUP_URL = "#";
// ──────────────────────────────────────────────────────────────────────────

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (typeof IntersectionObserver === "undefined") {
      elements.forEach((element) => element.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

const REVEAL_DELAYS = ["", "reveal-delay-1", "reveal-delay-2", "reveal-delay-3", "reveal-delay-4"];

const STEPS = [
  {
    number: "01",
    title: "Log daily",
    body: "Track your food in our app or your app of choice and enter your macros/bodyweight in our app.",
  },
  {
    number: "02",
    title: "Community",
    body: "Show up in the group chat via Chalk-It Pro. Ask questions, share wins, keep each other honest.",
  },
  {
    number: "03",
    title: "Weekly check-in",
    body: "Once a week we touch base by text or in person — answer questions and confirm you're on track.",
  },
];

const FREE_FEATURES = [
  "App access — beta, feedback encouraged",
  "Weekly check-ins by text or in person",
  "Group chat via Chalk-It Pro",
  "Daily tracking required — Lyfe app or your own, macros and body weight every day",
  "For people ready to make a serious change",
];

const ACCOUNTABILITY_FEATURES = [
  "Everything in the free group, plus:",
  "Direct access to me, one-on-one",
  "I keep you accountable, personally",
  "For those who struggle with being consistent",
];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10 pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="hero-orb left-[-12rem] top-[8rem]" />
      <div className="hero-orb hero-orb-alt right-[-8rem] top-[18rem]" />
      <Image src="/bw_nutrition_hero.jpg" alt="Training at Lyfe Fitness" fill priority sizes="100vw" className="z-0 object-cover opacity-50" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_32%),linear-gradient(180deg,rgba(7,7,9,0.2)_0%,rgba(7,7,9,0.95)_72%,rgba(7,7,9,1)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="reveal max-w-4xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#f472b6]">
            Lyfe Nutrition · Now in Beta
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(3.5rem,9vw,8rem)] font-normal leading-[0.92] tracking-tightest text-white">
            Track it daily.
            <br />
            <em className="text-[#ec4899]">Change for real.</em>
          </h1>

          <p className="mt-8 max-w-2xl font-sans text-base leading-8 text-white/72 md:text-lg">
            A group program for people serious about tracking their nutrition.
            <br />
            Completely free — your payment is feedback testing the app.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-[4px] bg-[#ec4899] px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-[#db2777]"
            >
              How it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="bg-[#f5f0e8] py-20 text-black md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="reveal">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-black/40">
            How it works
          </p>
          <h2 className="font-display text-[clamp(2.75rem,6vw,5.5rem)] font-normal leading-[0.98] tracking-display text-black">
            Here&apos;s the <em className="italic text-[#db2777]">deal.</em>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <article
              key={step.number}
              className={`reveal ${REVEAL_DELAYS[index + 1]} flex flex-col rounded-none border border-black/8 bg-black p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.14)] md:p-10`}
            >
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#f472b6]">
                {step.number}
              </p>
              <h3 className="mt-4 font-display text-4xl leading-tight text-white">{step.title}</h3>
              <p className="mt-4 font-sans text-sm leading-7 text-white/72">{step.body}</p>
            </article>
          ))}
        </div>

        <div className="reveal reveal-delay-2 mt-12 flex justify-center">
          <a
            href="#options"
            className="group inline-flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-black/70 transition hover:text-[#db2777]"
          >
            Pick your lane
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
              className="transition-transform group-hover:translate-y-0.5"
            >
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ec4899]/15 text-[#ec4899]">
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden>
        <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function Options({ onClaim }: { onClaim: () => void }) {
  return (
    <section id="options" className="scroll-mt-24 border-t border-white/10 bg-[#09090c] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="reveal">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-white/40">
            Two ways in
          </p>
          <h2 className="font-display text-[clamp(2.75rem,6vw,5.5rem)] font-normal leading-[0.98] tracking-display text-white">
            Pick your <em className="italic text-[#ec4899]">lane.</em>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Option 1 — The Group */}
          <div className="reveal reveal-delay-1 flex flex-col rounded-none border border-white/10 bg-[#101014] p-10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:p-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
              The Group
            </p>
            <p className="mt-3 font-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-none text-white">
              Free
            </p>
            <p className="mt-3 font-sans text-sm text-white/55">Payment is your feedback.</p>

            <ul className="mt-8 space-y-4">
              {FREE_FEATURES.map((feature) => (
                <li key={feature} className="flex gap-3 font-sans text-sm leading-7 text-white/72">
                  <Check />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={onClaim}
              className="mt-10 inline-flex items-center justify-center rounded-[4px] bg-white px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-[#ec4899] hover:text-white"
            >
              Claim my spot
            </button>
          </div>

          {/* Option 2 — Accountability */}
          <div className="reveal reveal-delay-2 relative flex flex-col rounded-none border border-[#ec4899]/45 bg-[#101014] p-10 shadow-[0_0_60px_rgba(236,72,153,0.18)] md:p-12">
            <div className="absolute right-8 top-8 rounded-full border border-[#ec4899]/40 bg-[#ec4899]/10 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f472b6]">
              Very limited spots
            </div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
              Accountability
            </p>
            <p className="mt-3 font-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-none text-white">
              $50<span className="ml-2 align-middle font-sans text-base text-white/55">/month</span>
            </p>
            <p className="mt-3 font-sans text-sm text-white/55">When you know you need someone on you.</p>

            <ul className="mt-8 space-y-4">
              {ACCOUNTABILITY_FEATURES.map((feature) => (
                <li key={feature} className="flex gap-3 font-sans text-sm leading-7 text-white/72">
                  <Check />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={onClaim}
              className="mt-10 inline-flex items-center justify-center rounded-[4px] bg-[#ec4899] px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-[#db2777]"
            >
              Claim a spot
            </button>
          </div>
        </div>

        <div className="reveal reveal-delay-2 mt-6 rounded-none border border-[#ec4899]/30 bg-[#ec4899]/[0.06] p-8 md:p-10">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#f472b6]">
            Read this first — the app is in beta
          </p>
          <p className="mt-5 font-sans text-base leading-8 text-white/70 md:text-lg">
            This is an early version. You&apos;ll hit bugs. Things will change week to week. Feedback isn&apos;t
            just welcome — it&apos;s the whole reason the group is free. You&apos;re a tester helping me build
            something, not a customer. If you&apos;d rather wait for a finished product, this round isn&apos;t for you.
          </p>
        </div>
      </div>
    </section>
  );
}

function CommitmentModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [agreed, setAgreed] = useState(false);

  // Reset the checkbox each time the modal is opened.
  useEffect(() => {
    if (open) setAgreed(false);
  }, [open]);

  // Close on Escape and lock background scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="commitment-title"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-lg rounded-2xl bg-[#efe5d7] p-6 text-black shadow-[0_40px_120px_rgba(0,0,0,0.55)] md:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-black/45 transition hover:bg-black/5 hover:text-black"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Required commitment card */}
        <div className="relative rounded-2xl border border-[#ec4899]/30 bg-[#ec4899]/[0.07] p-6 md:p-8">
          <span className="absolute right-5 top-5 inline-flex items-center rounded-full border border-[#ec4899]/40 bg-[#ec4899]/10 px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#db2777] md:right-6 md:top-6">
            Required
          </span>
          <label htmlFor="modalAcknowledged" className="flex cursor-pointer gap-4">
            <input
              id="modalAcknowledged"
              type="checkbox"
              checked={agreed}
              onChange={(event) => setAgreed(event.target.checked)}
              className="mt-1.5 h-5 w-5 shrink-0 rounded accent-[#ec4899]"
            />
            <span className="flex-1">
              <span
                id="commitment-title"
                className="block pr-20 font-display text-2xl leading-tight text-black md:text-[1.75rem]"
              >
                Tracking is not optional.
              </span>
              <span className="mt-3 block font-sans text-sm leading-7 text-black/65">
                Log your macros and body weight every day. Use the Lyfe app or your own tracker, but your
                numbers must be logged. No tracking = removed from the group.
              </span>
            </span>
          </label>
        </div>

        {/* Create account — disabled until the box is checked */}
        <a
          href="https://app.daneff.com/register"
          aria-disabled={!agreed}
          tabIndex={agreed ? undefined : -1}
          onClick={(event) => {
            if (!agreed) event.preventDefault();
          }}
          className={`mt-6 flex h-[58px] w-full items-center justify-center rounded-xl px-8 font-sans text-xs font-semibold uppercase tracking-[0.22em] transition-all duration-200 ${
            agreed
              ? "bg-black text-white hover:bg-[#db2777] hover:shadow-[0_12px_34px_rgba(219,39,119,0.35)] active:scale-[0.99]"
              : "pointer-events-none cursor-not-allowed bg-black/15 text-black/40"
          }`}
        >
          Create an account
        </a>
      </div>
    </div>
  );
}

export default function NutritionProgram() {
  useReveal();
  const [claimOpen, setClaimOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <SiteNav cta={{ label: "Start Trial", href: SIGNUP_URL }} />
      <Hero />
      <HowItWorks />
      <Options onClaim={() => setClaimOpen(true)} />
      <SiteFooter />
      <CommitmentModal open={claimOpen} onClose={() => setClaimOpen(false)} />
    </main>
  );
}
