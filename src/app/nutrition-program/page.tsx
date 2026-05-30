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
          scrolled
            ? "rounded-[28px] shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
            : "rounded-none border-x-0 border-t-0"
        }`}
      >
        <a href="/" className="flex items-center gap-4">
          <img
            src="/lflogo1.png"
            alt="Lyfe Fitness logo"
            className="h-10 w-auto"
          />
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
            <span
              className={`block h-px w-5 bg-white transition-all ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-all ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
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

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-16 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <img
              src="/lflogo1.png"
              alt="Lyfe Fitness logo"
              className="h-12 w-auto"
            />
            <p className="mt-5 font-sans text-sm leading-7 text-white/60">
              Coach-led group fitness for people who want structure, momentum,
              and a community that makes it fun.
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
            <a
              href="/#trial"
              className="font-sans text-sm text-white/55 transition hover:text-white"
            >
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
              <a
                href="mailto:daniel@trainlyfe.com"
                className="transition hover:text-white"
              >
                daniel@trainlyfe.com
              </a>
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/lyfe.fitness/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-white/50 transition hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/lyfefitness"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-white/50 transition hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-white/35">
            © {new Date().getFullYear()} Lyfe Fitness
          </p>
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-white/35">
            Member login at{" "}
            <a
              href="https://app.daneff.com"
              className="transition hover:text-white/50"
            >
              app.daneff.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

const PILLARS = [
  {
    title: "Personalized Plan",
    desc: "A nutrition strategy built around your goals, your preferences, and your schedule — not a one-size-fits-all template.",
  },
  {
    title: "1-on-1 Coaching",
    desc: "Ongoing support and accountability from a dedicated coach who keeps you on track every step of the way.",
  },
  {
    title: "Habit Building",
    desc: "Sustainable changes that fit your life. No crash diets, no guilt — just steady, lasting progress.",
  },
];

export default function NutritionProgram() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-40 pb-24 md:px-12 md:pt-48 md:pb-32">
        <div className="hero-orb" aria-hidden />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.32em] text-pink-400">
            Lyfe Nutrition
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Fuel your body.
            <br />
            <span className="text-pink-500">Transform your life.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl font-sans text-lg leading-8 text-white/60">
            A coaching-led nutrition program built to help you eat with
            confidence, build habits that last, and finally reach the goals
            you&apos;ve been chasing.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/#trial"
              data-open-crm-popup="true"
              className="rounded-[4px] bg-pink-500 px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-pink-400"
            >
              Get Started
            </a>
            <a
              href="#how-it-works"
              className="rounded-[4px] border border-white/15 px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-white/70 transition hover:border-white/40 hover:text-white"
            >
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section
        id="how-it-works"
        className="border-t border-white/10 px-6 py-24 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.32em] text-pink-400">
              What&apos;s Included
            </p>
            <h2 className="mt-5 font-display text-4xl tracking-tight md:text-5xl">
              A complete system to take the guesswork out of eating well.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="glass-card rounded-2xl p-8"
              >
                <h3 className="font-display text-2xl tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-4 font-sans text-sm leading-7 text-white/60">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl tracking-tight md:text-5xl">
            Ready to <span className="text-pink-500">transform</span> your
            nutrition?
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-sans text-lg leading-8 text-white/60">
            Take the first step today and let&apos;s build a plan that actually
            works for you.
          </p>
          <a
            href="/#trial"
            data-open-crm-popup="true"
            className="mt-10 inline-block rounded-[4px] bg-pink-500 px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-pink-400"
          >
            Get Started
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
