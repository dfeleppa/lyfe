"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";

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
  { label: "Location", href: "#location" },
  { label: "Contact Us", href: "#trial" },
  { label: "Member Login", href: "https://app.daneff.com" },
];

const DIFFERENCE_PILLARS = [
  {
    heading: "A room that pulls you forward",
    body: "You are not left wandering through equipment or guessing the workout. Every class has structure, coaching, and a pace that keeps you moving with purpose.",
    image: "/diff1.jpg",
  },
  {
    heading: "Coaching that meets you where you are",
    body: "Whether you are starting fresh or returning after time away, movements are scaled intelligently so you can improve without feeling lost or out of place.",
    image: "/diff2.jpg",
  },
  {
    heading: "Programming with a point of view",
    body: "Strength, conditioning, recovery, and progression are planned to build momentum over time instead of piling up random hard days.",
    image: "/diff3.jpg",
  },
];

const PROGRAMS = [
  {
    number: "01",
    title: "Group Fitness",
    body: "High-energy sessions that blend strength, cardio, and athletic conditioning into a coached class that keeps everyone working with intent.",
    image: "/offer1.jpg",
  },
  {
    number: "02",
    title: "Personal Training",
    body: "One-on-one sessions for members who want more individualized progressions, closer accountability, or extra support around a specific goal.",
    image: "/offer2.jpg",
  },
  {
    number: "03",
    title: "Nutrition Coaching",
    body: "Simple, practical nutrition guidance that supports your training and helps results last outside the gym walls.",
    image: "/offer3.jpg",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Joining this gym has been one of the best decisions I have ever made. It is so much more than a place to work out. I have improved my skills, pushed past limits, and grown in ways I never expected.",
    name: "Dave A.",
    role: "Google Review",
    initials: "DA",
    image: "/ca.png",
  },
  {
    quote:
      "I tried a few places after moving to the area, but none offered the sense of community and support I was looking for until I found Lyfe Fitness. From day one, I felt welcomed, challenged, and supported.",
    name: "Clairiola E.",
    role: "Google Review",
    initials: "CE",
    image: "/ce.png",
  },
  {
    quote:
      "On my tryout I was blown away by the hospitality and the feeling of a great community. Everyone makes you feel at home. One of the best decisions I have ever made.",
    name: "Nesha B.",
    role: "Google Review",
    initials: "NB",
  },
  {
    quote:
      "With the guidance of the coaches and the encouraging members, I started doing things I thought I could never do. Going as a family became part of our routine, and it has been one of the best decisions we have made.",
    name: "Cathy P.",
    role: "Google Review",
    initials: "CP",
    image: "/cjp.png",
  },
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
        <a href="#top" className="flex items-center gap-4">
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
            href="#trial"
            className="hidden rounded-[4px] bg-pink-500 px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-pink-400 md:block"
          >
            Get Started
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
            href="#trial"
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

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10 pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="hero-orb left-[-12rem] top-[8rem]" />
      <div className="hero-orb hero-orb-alt right-[-8rem] top-[18rem]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_32%),linear-gradient(180deg,rgba(7,7,9,0.2)_0%,rgba(7,7,9,0.95)_72%,rgba(7,7,9,1)_100%)]" />
      <img src="/hero.jpg" alt="Athletes training at Lyfe Fitness" className="absolute inset-0 z-0 h-full w-full object-cover opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="reveal max-w-4xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#f472b6]">
            Group Fitness - Reimagined
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(3.5rem,9vw,8rem)] font-normal leading-[0.92] tracking-tightest text-white">
            Coaching.
            <br />
            Results.
            <br />
            <em className="text-[#ec4899]">Community</em>
          </h1>

          <p className="mt-8 max-w-2xl font-sans text-base leading-8 text-white/72 md:text-lg">
            Lyfe Fitness gives Baldwin members a better way to train: coach-led classes,
            thoughtful programming, and a room full of people who make consistency easier.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#trial"
              className="inline-flex items-center justify-center rounded-[4px] bg-white px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-[#ec4899] hover:text-white"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    "5.0 Google rating",
    "Coach-led group training",
    "Strength and conditioning",
    "Beginner-friendly coaching",
    "Nutrition support",
    "Baldwin, NY",
    "5.0 Google rating",
    "Coach-led group training",
    "Strength and conditioning",
    "Beginner-friendly coaching",
    "Nutrition support",
    "Baldwin, NY",
  ];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#0d0d10] py-4">
      <div className="marquee-track flex animate-marquee gap-16 whitespace-nowrap">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-4">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
              {item}
            </span>
            <span className="h-px w-8 bg-white/15" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Difference() {
  return (
    <section id="difference" className="bg-[#f5f0e8] py-20 text-black md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="reveal">
          <div>
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-black/40">
              Why Lyfe Fitness
            </p>
            <h2 className="font-display text-[clamp(2.75rem,6vw,5.5rem)] font-normal leading-[0.98] tracking-display text-black">
              This isn’t just a <em className="italic text-[#db2777]">gym.</em>
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {DIFFERENCE_PILLARS.map((pillar, index) => (
            <article
              key={pillar.heading}
              className={`reveal ${REVEAL_DELAYS[index + 1]} overflow-hidden rounded-none border border-black/8 bg-black text-white shadow-[0_30px_80px_rgba(0,0,0,0.14)]`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={pillar.image} alt={pillar.heading} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.22)_30%,rgba(0,0,0,0.88)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#f472b6]">
                    0{index + 1}
                  </p>
                  <h3 className="font-display text-4xl leading-tight text-white">{pillar.heading}</h3>
                  <p className="mt-4 font-sans text-sm leading-7 text-white/76">{pillar.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-10 flex justify-center lg:justify-start">
          <a
            href="#trial"
            className="inline-flex items-center justify-center rounded-[4px] border border-black/12 bg-black px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-[#db2777]"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="offerings" className="border-t border-white/10 bg-[#0a0a0d] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="reveal grid gap-8 lg:items-end">
          <div>
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-white/38">
              WHAT WE OFFER
            </p>
            <h2 className="font-display text-[clamp(2.75rem,6vw,5.5rem)] font-normal leading-[0.98] tracking-display text-white">
              Coaching that fits your <em className="italic text-[#f472b6]">next step.</em>
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PROGRAMS.map((program, index) => (
            <article
              key={program.number}
              className={`reveal ${REVEAL_DELAYS[index + 1]} overflow-hidden rounded-none border border-white/10 bg-white/[0.03] shadow-[0_24px_80px_rgba(0,0,0,0.2)]`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={program.image} alt={program.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.2)_30%,rgba(0,0,0,0.9)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#f472b6]">
                    {program.number}
                  </p>
                  <h3 className="font-display text-4xl leading-tight text-white">{program.title}</h3>
                  <p className="mt-4 font-sans text-sm leading-7 text-white/72">{program.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((current) => (current + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  function go(index: number) {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setActive(index);
    timerRef.current = setInterval(() => {
      setActive((current) => (current + 1) % TESTIMONIALS.length);
    }, 5000);
  }

  function next() {
    go((active + 1) % TESTIMONIALS.length);
  }

  function prev() {
    go((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  return (
    <section id="results" className="border-t border-black/10 bg-[#f7f1e8] py-20 text-black md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-12 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-start">
        <div className="reveal lg:sticky lg:top-28">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-black/38">
            Member stories
          </p>
          <h2 className="font-display text-[clamp(2.75rem,6vw,5rem)] font-normal leading-[0.98] tracking-display text-black">
            Proof that the room <em className="italic text-[#db2777]">changes people.</em>
          </h2>
        </div>

        <div className="reveal reveal-delay-2 rounded-[36px] border border-black/10 bg-white p-8 shadow-[0_30px_90px_rgba(0,0,0,0.12)] md:p-12">
          <div className="flex items-start justify-between gap-6 border-b border-black/8 pb-8">
            <div>
              {TESTIMONIALS[active].image && (
                <img
                  src={TESTIMONIALS[active].image}
                  alt={TESTIMONIALS[active].name}
                  className="h-12 w-12 rounded-full object-cover"
                />
              )}
              <p className="mt-3 font-display text-3xl text-black">{TESTIMONIALS[active].name}</p>
              <p className="mt-1 font-sans text-sm text-black/45">{TESTIMONIALS[active].role}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-black/15 text-black/70 transition hover:bg-black hover:text-white"
                aria-label="Previous review"
              >
                &lt;
              </button>
              <button
                type="button"
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-black/15 text-black/70 transition hover:bg-black hover:text-white"
                aria-label="Next review"
              >
                &gt;
              </button>
            </div>
          </div>

          <p className="mt-8 max-w-3xl font-display text-2xl italic leading-[1.6] text-black/78 md:text-[2rem]">
            &ldquo;{TESTIMONIALS[active].quote}&rdquo;
          </p>

          <div className="mt-8 flex items-center gap-2">
            {TESTIMONIALS.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => go(index)}
                className={`h-1 rounded-full transition-all ${index === active ? "w-12 bg-black" : "w-8 bg-black/20 hover:bg-black/40"}`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-sans text-xs uppercase tracking-[0.24em] text-black/60">
              5.0 Google rating across 61 reviews
            </p>
            <a
              href="#trial"
              className="inline-flex items-center justify-center rounded-[4px] border border-black/12 px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:border-black hover:bg-black hover:text-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="border-t border-white/10 bg-[#09090c] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="reveal">
          <div>
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-white/38">
              Visit the gym
            </p>
            <h2 className="font-display text-[clamp(2.75rem,6vw,5.25rem)] font-normal leading-[0.98] tracking-display text-white">
              Schedule your <em className="italic text-[#f472b6]">free</em> intro class. See what makes us so <em className="italic text-[#f472b6]">special</em>.
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_360px] lg:items-stretch">
          <div className="reveal overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
            <div className="overflow-hidden rounded-[28px]" style={{ aspectRatio: "16 / 9" }}>
              <iframe
                src="https://maps.google.com/maps?q=851+Merrick+Rd+Baldwin+NY+11510&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.6)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lyfe Fitness location"
              />
            </div>
          </div>

          <div className="reveal reveal-delay-2 flex flex-col justify-between rounded-[36px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
            <div className="space-y-7 font-sans text-white/72">
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/38">Address</p>
                <p className="text-lg text-white">851 Merrick Rd, Baldwin, NY 11510</p>
              </div>
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/38">Hours</p>
                <p>Mon – Thu: 7:45am – 8:10pm</p>
                <p>Fri: 7:45am – 6:30pm</p>
                <p>Sat: 9:00am – 11:30am</p>
                <p>Sun: 9:00am – 10:30am</p>
              </div>
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/38">Contact</p>
                <a href="tel:5165880532" className="block transition hover:text-white">
                  (516) 588-0532
                </a>
                <a href="mailto:daniel@trainlyfe.com" className="block transition hover:text-white">
                  daniel@trainlyfe.com
                </a>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=851+Merrick+Rd+Baldwin+NY+11510"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-[4px] bg-white px-6 py-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-[#ec4899] hover:text-white"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      setDone(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="trial" className="border-t border-black/10 bg-[#efe5d7] py-20 text-black md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:items-start">
        <div className="reveal">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-black/38">
            Start here
          </p>
          <h2 className="font-display text-[clamp(2.75rem,6vw,5.25rem)] font-normal leading-[0.98] tracking-display text-black">
            Your first week is <em className="italic text-[#db2777]">on us.</em>
          </h2>
          <p className="mt-6 max-w-xl font-sans text-base leading-8 text-black/64 md:text-lg">
            Leave your info and our team will reach out to get you started.
          </p>

        </div>

        <div className="reveal reveal-delay-2 rounded-[36px] border border-black/10 bg-white p-6 shadow-[0_30px_90px_rgba(0,0,0,0.12)] md:p-8">
          {!done ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(event) => update("name", event.target.value)}
                  required
                  className="field-light w-full rounded-2xl px-5 py-4 text-sm"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  className="field-light w-full rounded-2xl px-5 py-4 text-sm"
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={(event) => update("email", event.target.value)}
                required
                className="field-light w-full rounded-2xl px-5 py-4 text-sm"
              />
              {error ? <p className="font-sans text-sm text-red-500">{error}</p> : null}
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-[4px] bg-black py-5 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-[#db2777] disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Submit"}
              </button>
              <p className="font-sans text-xs leading-6 text-black/35">
                We only use your information to coordinate your visit.
              </p>
            </form>
          ) : (
            <div className="rounded-[30px] border border-black/10 bg-[#f7f1e8] p-10 text-center">
              <p className="font-display text-4xl italic text-black">You&apos;re in.</p>
              <p className="mt-4 font-sans text-sm leading-7 text-black/60">
                The team will reach out within 24 hours to confirm your free week and help you pick the right first class.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
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
            <a href="#trial" className="font-sans text-sm text-white/55 transition hover:text-white">
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

export default function LandingPage() {
  useReveal();

  return (
    <>
      <Nav />
      <Hero />
      <TrustBar />
      <Difference />
      <Programs />
      <Testimonials />
      <Location />
      <LeadForm />
      <Footer />
    </>
  );
}
