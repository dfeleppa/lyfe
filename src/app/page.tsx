"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ─── Scroll reveal hook ───────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 transition-all duration-300 md:px-12 bg-[#0d0d0d]/90 backdrop-blur-sm"
    >
      {/* Logo */}
      <a href="#">
        <img src="/lflogo-white2.png" alt="Logo" className="h-10 w-auto" />
      </a>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-10 md:flex">
        {[
          { label: "Pricing", href: "#pricing" },
          { label: "Membership", href: "#membership" },
          { label: "Schedule", href: "#schedule" },
          { label: "Location", href: "#locations" },
          { label: "Contact", href: "#contact" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="font-sans text-xs font-medium uppercase tracking-widest text-white/50 transition hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <a
        href="#trial"
        className="hidden rounded-none border border-white/20 px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-white hover:text-black md:block"
      >
        Book Free Class
      </a>

      {/* Mobile hamburger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex flex-col gap-1.5 md:hidden"
        aria-label="Menu"
      >
        <span className={`block h-px w-6 bg-white transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`block h-px w-6 bg-white transition-all ${open ? "opacity-0" : ""}`} />
        <span className={`block h-px w-6 bg-white transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute inset-x-0 top-full flex flex-col gap-0 border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
          {["Classes", "Coaches", "Results", "Locations"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="border-b border-white/8 px-6 py-5 font-sans text-sm uppercase tracking-widest text-white/60 transition hover:text-white"
            >
              {item}
            </a>
          ))}
          <a
            href="#trial"
            onClick={() => setOpen(false)}
            className="mx-6 my-4 border border-white/20 px-6 py-3 text-center font-sans text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-white hover:text-black"
          >
            Book Free Class
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: wire to your CRM / email list
    setSubmitted(true);
  }

  return (
    <section className="relative flex min-h-[65vh] flex-col items-center justify-center overflow-hidden bg-black dot-grid noise">
      {/* Radial gradient vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(20,20,20,0.0) 0%, rgba(0,0,0,0.95) 100%)",
        }}
      />

      {/* Hero background image */}
      <img src="/hero.jpg" alt="" className="absolute inset-0 z-0 h-full w-full object-cover opacity-40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl w-full px-6 text-left">
        <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest text-white/80">
          Group Fitness — Reimagined
        </p>

        <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] font-normal leading-[0.95] tracking-tightest text-white">
          The Gym That Works Hard, <em className="italic">Together.</em>
        </h1>

        <p className="mt-8 max-w-xl font-sans text-base font-light leading-relaxed text-white/80 md:text-lg">
          Group fitness in Baldwin, NY for people who want real coaching, purposeful programming, and a community that pushes you and keeps it fun.
        </p>

        {/* CTA */}
        <div className="mt-12 flex max-w-md flex-col gap-3 sm:flex-row">
          <a
            href="#trial"
            className="bg-white px-8 py-4 font-sans text-xs font-bold uppercase tracking-widest text-black transition hover:bg-white/90 active:scale-95"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-sans text-[10px] uppercase tracking-widest text-white/80">Scroll</span>
        <div className="flex h-8 w-px flex-col overflow-hidden">
          <div className="h-full w-px animate-[scrollLine_1.6s_ease_infinite] bg-white/80" />
        </div>
      </div>
    </section>
  );
}

// ─── Trust bar ────────────────────────────────────────────────────────────────
const TRUST_ITEMS = [
  "★★★★★  5.0 Google Rating (61 Reviews)",
  "Strength & Conditioning",
  "Endurance",
  "Hybrid Training",
  "Nutrition",
  "★★★★★  5.0 Google Rating (61 Reviews)",
  "Strength & Conditioning",
  "Endurance",
  "Hybrid Training",
  "Nutrition",
];

function TrustBar() {
  return (
    <div className="overflow-hidden border-y border-white/8 bg-black/60 py-4">
      <div className="flex animate-marquee marquee-track whitespace-nowrap gap-16">
        {TRUST_ITEMS.map((item, i) => (
          <span key={i} className="flex items-center gap-4">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40">
              {item}
            </span>
            <span className="h-px w-8 bg-white/15" />
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Classes ──────────────────────────────────────────────────────────────────
const CLASSES = [
  {
    name: "Strength & Conditioning",
    tag: "45 min",
    description:
      "Barbell work, accessory lifts, and metcons built around proven periodization. Every session has a purpose.",
    bg: "from-zinc-900 to-neutral-950",
  },
  {
    name: "Olympic Lifting",
    tag: "60 min",
    description:
      "Technique-first coaching on the snatch and clean & jerk. Open to all levels — progress is the only metric.",
    bg: "from-stone-900 to-zinc-950",
  },
  {
    name: "Open Gym",
    tag: "Flexible",
    description:
      "Structured free access with programming on the board. Coach present to guide your session.",
    bg: "from-neutral-900 to-stone-950",
  },
  {
    name: "Endurance",
    tag: "50 min",
    description:
      "Running, rowing, and assault bike intervals scaled to your threshold. Engine work that transfers everywhere.",
    bg: "from-zinc-950 to-neutral-900",
  },
  {
    name: "Skills & Gymnastics",
    tag: "45 min",
    description:
      "Handstands, ring work, pull-up progressions. Build the movement quality that changes everything else.",
    bg: "from-stone-950 to-zinc-900",
  },
];

function Classes() {
  const pillars = [
    {
      heading: "No more boring workouts alone!",
      body: "Seeking a gym that fosters a strong sense of community? Look no further than Lyfe Fitness located in Baldwin! We embrace individuals of all fitness levels and are committed to supporting your journey towards self-improvement.",
    },
    {
      heading: "No More Feeling Lost In The Gym!",
      body: "Lyfe Fitness offers an enjoyable training environment where you don't have to be an athlete to join in! Our coaches provide expert guidance and tailor your daily workouts to suit your individual needs.",
    },
    {
      heading: "No more wasting time!",
      body: "Are you prepared to reach your goals and enhance your quality of life? Join us and benefit from professional coaching that will empower your success. We'll assist you in crafting a personalized success plan and offer the necessary support to help you reach your aspirations.",
    },
  ];

  return (
    <section id="classes" className="bg-white py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="reveal mb-16">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-black/40">
            What We Offer
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1}`}>
              <h3 className="font-display text-2xl font-normal leading-snug text-black mb-4">
                {p.heading}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-black/60">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 reveal">
          <a
            href="#trial"
            className="inline-block border border-black/20 px-8 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-black/60 transition hover:border-black/50 hover:text-black"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
const FEATURES = [
  {
    number: "01",
    title: "Expert Programming",
    body: "Every session is designed with intent. No random workouts — a structured system that builds on itself week after week.",
  },
  {
    number: "02",
    title: "Elite Coaches",
    body: "Our coaches don't just run class — they correct your movement, track your progress, and push you when it matters most.",
  },
  {
    number: "03",
    title: "Real Community",
    body: "Train alongside members who are as serious as you are. The room has standards, and it raises yours.",
  },
];

function Features() {
  return (
    <section id="coaches" className="border-t border-white/8 bg-black py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="reveal mb-20">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-white/35">
            The Difference
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[1] tracking-display text-white">
            This isn&rsquo;t just{" "}
            <em className="italic">a gym.</em>
          </h2>
        </div>

        <div className="grid gap-px bg-white/8 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div
              key={f.number}
              className={`reveal reveal-delay-${i + 1} bg-black p-10 lg:p-12`}
            >
              <p className="mb-8 font-sans text-xs font-semibold uppercase tracking-widest text-white/20">
                {f.number}
              </p>
              <h3 className="mb-5 font-display text-3xl font-normal leading-tight text-white">
                {f.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-white/50">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote:
      "I've tried every gym in the city. Elev8 is the only one where I've actually made consistent progress. The programming is serious and the coaches hold you accountable.",
    name: "James R.",
    role: "Managing Director",
    initials: "JR",
  },
  {
    quote:
      "The community here is unlike anything I've experienced. You walk in a stranger and leave feeling like you've trained with a team that actually wants you to win.",
    name: "Sarah M.",
    role: "Founder & CEO",
    initials: "SM",
  },
  {
    quote:
      "Down 14kg and the strongest I've ever been. The coaches know their craft and the programming adapts to where you are, not where you wish you were.",
    name: "Daniel K.",
    role: "Operations Director",
    initials: "DK",
  },
  {
    quote:
      "I've been training for 10 years. Moving to Elev8 was the single best decision I made for my fitness. The Olympic lifting program alone is worth it.",
    name: "Priya N.",
    role: "Entrepreneur",
    initials: "PN",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % TESTIMONIALS.length);
    }, 5000);
  }

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  function go(i: number) {
    if (timerRef.current) clearInterval(timerRef.current);
    setActive(i);
    startTimer();
  }

  return (
    <section id="results" className="border-t border-white/8 bg-black py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-12">
        <div className="reveal mb-16">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-white/35">
            Member Stories
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[1] tracking-display text-white">
            People who{" "}
            <em className="italic">showed up.</em>
          </h2>
          <p className="mt-6 font-sans text-xs uppercase tracking-widest text-white/30">
            ★★★★★ &nbsp; 4.9 · Google Reviews
          </p>
        </div>

        {/* Active testimonial */}
        <div className="reveal mx-auto max-w-2xl">
          <div className="glass-card p-10 md:p-14">
            <p className="font-display text-xl font-normal italic leading-relaxed text-white/80 md:text-2xl">
              &ldquo;{TESTIMONIALS[active].quote}&rdquo;
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-sans text-xs font-semibold text-white">
                {TESTIMONIALS[active].initials}
              </div>
              <div className="text-left">
                <p className="font-sans text-sm font-semibold text-white">{TESTIMONIALS[active].name}</p>
                <p className="font-sans text-xs text-white/40">{TESTIMONIALS[active].role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dot nav */}
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              className={`h-px transition-all duration-300 ${
                i === active ? "w-8 bg-white" : "w-4 bg-white/25"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        <div className="mt-12 reveal">
          <a
            href="#trial"
            className="inline-block border border-white/15 px-8 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-white/70 transition hover:border-white/40 hover:text-white"
          >
            Start Your Free Week
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Lead form ────────────────────────────────────────────────────────────────
function LeadForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Something went wrong.");
      setDone(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="trial" className="border-t border-white/8 bg-black py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
        <div className="reveal">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-white/35">
            Get Started
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[1] tracking-display text-white">
            Your <em className="italic">first class</em> is on us.
          </h2>
          <p className="mx-auto mt-6 max-w-md font-sans text-base font-light text-white/45">
            Reserve your spot. No commitment, no credit card. We&rsquo;ll reach out to
            confirm your free session.
          </p>
        </div>

        <div className="reveal reveal-delay-2 mt-14">
          {!done ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  required
                  className="field w-full px-5 py-4 text-sm"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="field w-full px-5 py-4 text-sm"
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                required
                className="field w-full px-5 py-4 text-sm"
              />
              {error && <p className="font-sans text-sm text-red-400">{error}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-white py-5 font-sans text-xs font-bold uppercase tracking-widest text-black transition hover:bg-white/90 active:scale-[0.99] disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Reserve My Free Class →"}
              </button>
              <p className="font-sans text-xs text-white/25">
                No credit card required. We&rsquo;ll never share your information.
              </p>
            </form>
          ) : (
            <div className="glass-card p-12">
              <p className="font-display text-3xl font-normal italic text-white">
                You&rsquo;re in.
              </p>
              <p className="mt-4 font-sans text-sm text-white/50">
                We&rsquo;ll reach out within 24 hours to confirm your free class. Check your inbox.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Stats strip ─────────────────────────────────────────────────────────────
const STATS = [
  { value: "500+", label: "Active Members" },
  { value: "4.9★", label: "Google Rating" },
  { value: "3", label: "Locations" },
  { value: "8+", label: "Class Types" },
];

function StatsStrip() {
  return (
    <section className="border-t border-white/8 bg-black py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-2 gap-px bg-white/8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`reveal reveal-delay-${i + 1} bg-black px-8 py-10 text-center lg:text-left`}
            >
              <p className="font-display text-[clamp(2.5rem,5vw,4rem)] font-normal tracking-tighter text-white">
                {s.value}
              </p>
              <p className="mt-2 font-sans text-xs uppercase tracking-widest text-white/35">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      id="locations"
      className="border-t border-white/8 bg-black px-6 py-16 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-normal tracking-widest uppercase text-white">
              Elev8
            </p>
            <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-white/35">
              Group fitness built for people who take results seriously.
            </p>
            <div className="mt-6 flex gap-5">
              {["Instagram", "Facebook", "TikTok"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-sans text-xs uppercase tracking-widest text-white/30 transition hover:text-white"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-4 lg:grid-cols-3 lg:gap-x-20">
            {[
              { label: "Classes", href: "#classes" },
              { label: "Coaches", href: "#coaches" },
              { label: "Results", href: "#results" },
              { label: "Locations", href: "#locations" },
              { label: "Get Started", href: "#trial" },
              { label: "Member Login", href: "https://app.daneff.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm text-white/40 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="font-sans text-sm text-white/35 space-y-2">
            <p>hello@daneff.com</p>
            <p>Mon – Sat: 5:30am – 8pm</p>
            <p>Sun: 7am – 12pm</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/8 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-sans text-xs text-white/20">
            © {new Date().getFullYear()} Elev8. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/20">
            Members login at{" "}
            <a href="https://app.daneff.com" className="hover:text-white/50 transition">
              app.daneff.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function LandingPage() {
  useReveal();

  return (
    <>
      <Nav />
      <Hero />
      <Classes />
      <Features />
      <Testimonials />
      <LeadForm />
      <Footer />
    </>
  );
}
