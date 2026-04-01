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
        <img src="/lflogo1.png" alt="Logo" className="h-10 w-auto" />
      </a>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-10 md:flex">
        {[
          { label: "Pricing", href: "#pricing" },
          { label: "Membership", href: "#membership" },
          { label: "Schedule", href: "#schedule" },
          { label: "Location", href: "#locations" },
          { label: "Member Login", href: "https://app.daneff.com" },
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
        className="hidden rounded-none bg-pink-500 px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-pink-400 md:block"
      >
        Get Started
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
          {[
            { label: "Pricing", href: "#pricing" },
            { label: "Membership", href: "#membership" },
            { label: "Schedule", href: "#schedule" },
            { label: "Location", href: "#locations" },
            { label: "Member Login", href: "https://app.daneff.com" },
          ].map((item) => (
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
            href="#trial"
            onClick={() => setOpen(false)}
            className="mx-6 my-4 border border-white/20 px-6 py-3 text-center font-sans text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-white hover:text-black"
          >
            Get Started
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
    <section id="classes" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="reveal mb-8">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-black/40">
            The Difference
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[1] tracking-display text-black">
            This isn&rsquo;t just{" "}
            <em className="italic">a gym.</em>
          </h2>
        </div>

        <div className="grid gap-px bg-black/8 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1} overflow-hidden`}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={`/diff${i + 1}.jpg`}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-white/80">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mb-4 font-display text-4xl font-bold leading-tight text-white">
                    {p.heading}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-white/90">
                    {p.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 reveal flex justify-center">
          <a
            href="#trial"
            className="inline-block bg-black px-8 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-black/80"
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
    title: "Group Fitness",
    body: "Our coach-led group fitness class is for everyone! We use a combination of cardio, bodyweight and weights to maximize your hour with us. The workouts are different every day with a huge emphasis on getting you started safely whatever your current age or ability.",
  },
  {
    number: "02",
    title: "Personal Training",
    body: "Achieve your goals one-on-one with our coaches who provide personalized programming and in-person sessions tailored to your specific needs. Benefit from targeted training that is designed to help you reach your desired goals.",
  },
  {
    number: "03",
    title: "Nutrition",
    body: "Our coaches are in your corner — bringing the accountability, knowledge, and motivation to help you dial in a nutrition approach that actually works for your body.",
  },
];

function Features() {
  return (
    <section id="coaches" className="border-t border-white/8 bg-black py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="reveal mb-8">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-white/35">
            What We Offer
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[1] tracking-display text-white">
            Every class.{" "}
            <em className="italic">Built to push</em> you.
          </h2>
        </div>

        <div className="grid gap-px bg-white/8 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div key={f.number} className={`reveal reveal-delay-${i + 1} overflow-hidden`}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={`/offer${i + 1}.jpg`}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-white/80">
                    {f.number}
                  </p>
                  <h3 className="mb-4 font-display text-4xl font-bold leading-tight text-white">
                    {f.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-white/90">{f.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 reveal flex justify-center">
          <a
            href="#trial"
            className="inline-block bg-white px-8 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-black transition hover:bg-white/90"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote:
      "More Than Just a Gym – A Place to Grow. Joining this gym has been one of the best decisions I've ever made. From the start, it's been so much more than just a place to work out — it's a space where I've genuinely improved my skills, pushed past limits, & grown in ways I never expected. Whether it's refining technique, learning new movements, or pushing through a grueling workout, Lyfe has been nothing short of phenomenal...",
    name: "Dave A.",
    role: "Google Review",
    initials: "DA",
  },
  {
    quote:
      "I recently moved to the area and had been searching for a home gym. I tried a few places, but none offered the sense of community and support I was looking for.... until I found LYFE Fitness. You don't often find gyms where the owners and coaches genuinely care about their members and emphasize proper form, warm-ups, and overall well-being. From day one, I've felt welcomed, challenged, and supported. This has been one of the best fitness experiences I've ever had, and I'd recommend LYFE to anyone looking not just for results, but for a positive, encouraging community. LYFE is hands down the best gym in Baldwin!",
    name: "Clairiola E.",
    role: "Google Review",
    initials: "CE",
  },
  {
    quote:
      "A year ago I was looking for a gym and came across Lyfe fitness. On my tryout I was blown away by the hospitality and the feeling of a great community, everyone makes you feel like home/family. One of the best decisions I've ever made.",
    name: "Nesha B.",
    role: "Google Review",
    initials: "NB",
  },
  {
    quote:
      "Me and my Wife started a year ago OUR life has changed tremendously. Mentally and physically we have gotten better and stronger. Thank you so Much Dan u changed our lives. Lyfe Fitness is so much fun the members are so supportive and friendly. It's definitely 1 of the best life decisions we have made — definitely looking forward to continuing our journey together in CrossFit. DAN u are truly an inspiration and amazing person THANKS a million to everyone that supported us at LYFE FITNESS.",
    name: "Steve P.",
    role: "Google Review",
    initials: "SP",
  },
  {
    quote:
      "For many years I've been guilty of paying for gym memberships and failed to go consistently because honestly, it starts to get boring. I've also spent on home exercise equipment which ends up becoming a designated clothing rack — but I can proudly say, I've consistently been going to Lyfe Fitness since 12/2021. I used to lack motivation and confidence but with the guidance of the amazing coaches (especially Coach Dan) and the encouraging fellow members, I started to do things I thought I could never do. The highlight for me is seeing how much stronger and healthier my husband and son are now since we've joined. Going as a family has become a routine and our quality bonding time together. We've grown stronger as a family and it's been so fun. We are Lyfers for life!",
    name: "Cathy P.",
    role: "Google Review",
    initials: "CP",
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
    <section id="results" className="border-t border-white/8 bg-black py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-12">
        <div className="reveal mb-8">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-white/35">
            Member Stories
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[1] tracking-display text-white">
            People who{" "}
            <em className="italic">showed up.</em>
          </h2>
          <p className="mt-6 font-sans text-xs uppercase tracking-widest text-white/30">
            ★★★★★ &nbsp; 5.0 · Google Reviews · 61 Reviews
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
    <section id="trial" className="border-t border-white/8 bg-black py-16 md:py-24">
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
            <p>851 Merrick Rd, Baldwin, NY 11510</p>
            <p>
              <a href="tel:5165880532" className="hover:text-white transition">
                Text or Call: (516) 588-0532
              </a>
            </p>
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
