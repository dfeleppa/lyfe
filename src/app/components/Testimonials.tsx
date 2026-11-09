"use client";

import Image from "next/image";
import { useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Joining this gym has been one of the best decisions I have ever made. It is so much more than a place to work out. I have improved my skills, pushed past limits, and grown in ways I never expected.",
    name: "Dave A.",
    role: "Google Review",
    initials: "DA",
    image: "/CA.png",
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

export default function Testimonials() {
  const [active, setActive] = useState(0);
  function go(index: number) { setActive(index); }
  function next() { go((active + 1) % TESTIMONIALS.length); }
  function prev() { go((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length); }

  return (
    <section id="results" className="border-t border-black/10 bg-[#f7f1e8] py-20 text-black md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-12 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-black/65">
            Member stories
          </p>
          <h2 className="font-display text-[clamp(2.75rem,6vw,5rem)] font-normal leading-[0.98] tracking-display text-black">
            Proof that the room <em className="italic">changes people.</em>
          </h2>
        </div>

        <div
          className="rounded-[36px] border border-black/10 bg-white p-8 shadow-[0_30px_90px_rgba(0,0,0,0.12)] md:p-12"
        >
          <div className="flex items-start justify-between gap-6 border-b border-black/8 pb-8">
            <div>
              {TESTIMONIALS[active].image ? (
                <Image
                  src={TESTIMONIALS[active].image!}
                  alt={TESTIMONIALS[active].name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
              ) : (
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black font-sans text-sm font-semibold tracking-wide text-white">
                  {TESTIMONIALS[active].initials}
                </span>
              )}
              <p className="mt-3 font-display text-3xl text-black">{TESTIMONIALS[active].name}</p>
              <p className="mt-1 font-sans text-sm text-black/65">{TESTIMONIALS[active].role}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                className="flex h-11 w-11 items-center justify-center rounded-[4px] border border-black/15 text-black/70 outline-none transition focus-visible:ring-2 focus-visible:ring-[#db2777] hover:bg-black hover:text-white"
                aria-label="Previous review"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                type="button"
                onClick={next}
                className="flex h-11 w-11 items-center justify-center rounded-[4px] border border-black/15 text-black/70 outline-none transition focus-visible:ring-2 focus-visible:ring-[#db2777] hover:bg-black hover:text-white"
                aria-label="Next review"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
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
                className="flex h-11 w-11 items-center justify-center rounded outline-none focus-visible:ring-2 focus-visible:ring-[#db2777] focus-visible:ring-offset-2"
                aria-pressed={index === active}
                aria-label={`Go to review ${index + 1}`}
              >
                <span aria-hidden="true" className={`h-1 rounded-full transition-all ${index === active ? "w-10 bg-black" : "w-7 bg-black/30"}`} />
              </button>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-sans text-xs uppercase tracking-[0.24em] text-black/60">
              5.0 Google rating across 61 reviews
            </p>
            <a
              href="#trial"
              data-open-crm-popup="true"
              className="intro-cta"
            >
              Book Your Free Intro Class
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

