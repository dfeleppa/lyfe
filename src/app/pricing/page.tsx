"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Membership & Pricing", href: "/pricing" },
  { label: "Schedule", href: "/schedule" },
  { label: "Location", href: "/#location" },
  { label: "Contact Us", href: "/#trial" },
  { label: "Member Login", href: "https://app.daneff.com" },
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
            href="/#trial"
            data-open-crm-popup="true"
            className="hidden rounded-[4px] bg-pink-500 px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-pink-400 md:block"
          >
            Get Started
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
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
            href="/#trial"
            data-open-crm-popup="true"
            onClick={() => setOpen(false)}
            className="mx-6 my-4 rounded-[4px] bg-pink-500 px-6 py-3 text-center font-sans text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-black"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-36 md:pb-24 md:pt-44">
        <img
          src="/hero2.jpg"
          alt="Lyfe Fitness members training"
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-60"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#f472b6]">
            Membership & Pricing
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] font-normal leading-[0.92] tracking-tighter text-white">
            Simple plans.<br />
            <em className="text-[#ec4899]">No contracts.</em>
          </h1>
          <p className="mt-8 max-w-xl font-sans text-base leading-8 text-white/60 md:text-lg">
            Pick the membership that fits how often you want to train. Pricing varies based on commitment length — reach out and we'll find the right fit.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="relative flex flex-col rounded-none border border-[#ec4899]/40 bg-[#FFFFFF0D] p-10 shadow-[0_0_60px_rgba(236,72,153,0.08)] md:p-12">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                Membership
              </p>
              <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[0.95] text-white">
                Lyfe Membership
              </h2>
              <p className="mt-4 font-sans text-base text-white/70">As low as</p>
              <p className="mt-1 font-display text-[clamp(3rem,6vw,4.5rem)] font-normal leading-none text-white">
                $5<span className="ml-2 font-sans text-base text-white/70">/class</span>
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "Flexible & Unlimited Plans",
                  "Coach-led group sessions",
                  "Access to all class types",
                  "Beginner-friendly onboarding",
                  "Nutrition Consulting (addon)",
                  "Personal Programming (addon)",
                  "1:1 Private Sessions (addon)",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 font-sans text-sm text-white/78">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ec4899]/15 text-[#ec4899]">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="/#trial"
                data-open-pricing-popup="true"
                className="mt-10 inline-flex items-center justify-center rounded-[4px] bg-[#ec4899] px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-[#db2777]"
              >
                Get Pricing
              </a>

              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
                  No long-term lock-in
                </p>
                <p className="mt-2 font-sans text-sm leading-7 text-white/70">
                  Month-to-month options available. We&apos;d rather earn your membership every month. Discounts offered for prepayment.
                </p>
              </div>
            </div>

            <div className="relative flex flex-col rounded-[28px] border border-white/10 bg-[#FFFFFF0D] p-10 md:p-12">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                Start Here
              </p>
              <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[0.95] text-white">
                Joining is Simple
              </h2>
              <p className="mt-4 font-sans text-sm leading-7 text-white/65">
                Three quick steps and you are in the room.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  {
                    step: "01",
                    title: "Let's Talk",
                    body: "We'll set up a quick call or come in to meet the team - no pressure, just a real conversation to make sure we're the right fit for you.",
                  },
                  {
                    step: "02",
                    title: "Try It Out",
                    body: "Experience Lyfe Fitness before you commit. We'll set you up with a free intro session or a personalized 1-on-1 to get you moving, answer your questions, and make sure you feel confident from day one.",
                  },
                  {
                    step: "03",
                    title: "Pick Your Plan",
                    body: "No complicated packages, no pushy sales pitch. Just choose the membership that fits your life and your goals - and we'll take it from there.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 border-t border-white/10 pt-6 first:border-t-0 first:pt-0">
                    <span className="font-sans text-xs font-semibold tracking-[0.24em] text-[#f472b6]">{item.step}</span>
                    <div>
                      <p className="font-display text-2xl text-white">{item.title}</p>
                      <p className="mt-2 font-sans text-sm leading-7 text-white/65">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/#trial"
                data-open-crm-popup="true"
                className="mt-10 inline-flex items-center justify-center rounded-[4px] bg-[#ec4899] px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-[#db2777]"
              >
                Get Started
              </a>
            </div>
          </div>

          <p className="mt-10 text-center font-sans text-sm text-white/35">
            Pricing varies based on commitment length. Contact us to find the right option for you.
          </p>
        </div>
      </section>

      {/* FAQ / note strip */}
      <section className="border-t border-black/10 bg-[#f5f0e8] py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex justify-center">
            {[
              { heading: "Questions?", body: "Reach out at daniel@trainlyfe.com or call (516) 588-0532 and we'll walk you through everything." },
            ].map((item) => (
              <div key={item.heading} className="max-w-2xl text-center">
                <h3 className="font-display text-2xl text-black">{item.heading}</h3>
                <p className="mt-3 font-sans text-sm leading-7 text-black/60">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </main>
  );
}
