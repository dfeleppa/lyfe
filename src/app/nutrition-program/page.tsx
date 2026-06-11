"use client";

import Image from "next/image";
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

const NAV_ITEMS = [
  { label: "Membership & Pricing", href: "/pricing" },
  { label: "Schedule", href: "/schedule" },
  { label: "Location", href: "/#location" },
  { label: "Contact", href: "/#trial" },
  { label: "Member Login", href: "https://app.daneff.com" },
];

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

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "px-3 pt-3 md:px-6" : "px-0 pt-0"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl items-center justify-between border border-white/10 bg-black/70 px-6 py-4 backdrop-blur-xl transition-all duration-300 md:px-8 ${
          scrolled ? "rounded-[28px] shadow-[0_24px_80px_rgba(0,0,0,0.35)]" : "rounded-none border-x-0 border-t-0"
        }`}
      >
        <a href="/" className="flex items-center gap-4">
          <img src="/lflogo1.png" alt="Lyfe Fitness logo" className="h-10 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SIGNUP_URL}
            className="hidden rounded-[4px] bg-pink-500 px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-pink-400 md:block"
          >
            Start Trial
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-[4px] md:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className={`block h-px w-5 bg-white transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-white transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full flex flex-col gap-0 border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/8 px-6 py-5 font-sans text-sm uppercase tracking-widest text-white/60 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href={SIGNUP_URL}
            onClick={() => setOpen(false)}
            className="mx-6 my-4 rounded-[4px] bg-pink-500 px-6 py-3 text-center font-sans text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-black"
          >
            Start Trial
          </a>
        </div>
      )}
    </header>
  );
}

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

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-16 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <img src="/lflogo1.png" alt="Lyfe Fitness logo" className="h-12 w-auto" />
            <p className="mt-5 font-sans text-sm leading-7 text-white/60">
              Coach-led group fitness for people who want structure, momentum, and a community that makes it fun.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-4 lg:grid-cols-3 lg:gap-x-20">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-sm text-white/55 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a href="/#trial" className="font-sans text-sm text-white/55 transition hover:text-white">
              Free Week
            </a>
          </div>

          <div className="space-y-2 font-sans text-sm text-white/55">
            <p>851 Merrick Rd, Baldwin, NY 11510</p>
            <p>
              <a href="tel:5165880532" className="transition hover:text-white">
                Text/Call: (516) 588-0532
              </a>
            </p>
            <p>
              <a href="mailto:daniel@trainlyfe.com" className="transition hover:text-white">
                daniel@trainlyfe.com
              </a>
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.instagram.com/lyfe.fitness/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-white/50 transition hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com/lyfefitness" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-white/50 transition hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-white/35">
            © {new Date().getFullYear()} Lyfe Fitness
          </p>
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-white/35">
            Member login at <a href="https://app.daneff.com" className="transition hover:text-white/50">app.daneff.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function NutritionProgram() {
  useReveal();
  const [claimOpen, setClaimOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Nav />
      <Hero />
      <HowItWorks />
      <Options onClaim={() => setClaimOpen(true)} />
      <Footer />
      <CommitmentModal open={claimOpen} onClose={() => setClaimOpen(false)} />
    </main>
  );
}
