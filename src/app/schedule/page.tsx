"use client";

import Image from "next/image";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

type ScheduleSlot = {
  time: string;
  name: "Fitness" | "Hybrid";
};

const WEEK_COLUMNS: { day: string; slots: ScheduleSlot[] }[] = [
  {
    day: "Monday",
    slots: [
      { time: "7:45 am", name: "Fitness" },
      { time: "4:30 pm", name: "Fitness" },
      { time: "6:10 pm", name: "Fitness" },
      { time: "7:10 pm", name: "Fitness" },
    ],
  },
  {
    day: "Tuesday",
    slots: [
      { time: "7:45 am", name: "Fitness" },
      { time: "4:30 pm", name: "Fitness" },
      { time: "6:10 pm", name: "Fitness" },
      { time: "7:10 pm", name: "Fitness" },
    ],
  },
  {
    day: "Wednesday",
    slots: [
      { time: "7:45 am", name: "Fitness" },
      { time: "4:30 pm", name: "Fitness" },
      { time: "6:10 pm", name: "Fitness" },
      { time: "7:10 pm", name: "Fitness" },
    ],
  },
  {
    day: "Thursday",
    slots: [
      { time: "7:45 am", name: "Fitness" },
      { time: "4:30 pm", name: "Fitness" },
      { time: "6:10 pm", name: "Fitness" },
      { time: "7:10 pm", name: "Fitness" },
    ],
  },
  {
    day: "Friday",
    slots: [
      { time: "7:45 am", name: "Fitness" },
      { time: "4:30 pm", name: "Fitness" },
      { time: "5:30 pm", name: "Fitness" },
    ],
  },
  {
    day: "Saturday",
    slots: [{ time: "9:00 am", name: "Fitness" }],
  },
  {
    day: "Sunday",
    slots: [{ time: "9:00 am", name: "Hybrid" }],
  },
];

function DayCard({ day, slots }: { day: string; slots: ScheduleSlot[] }) {
  return (
    <article className="flex h-full flex-col border border-white/10 bg-white/[0.03] p-5 md:p-6 xl:p-5">
      <div className="flex items-end justify-between gap-3 border-b border-white/10 pb-4 xl:block">
        <h3 className="font-display text-2xl leading-none text-white xl:text-xl 2xl:text-2xl">
          {day}{day === "Sunday" ? "*" : ""}
        </h3>
        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35 xl:mt-2">
          {slots.length} {slots.length === 1 ? "class" : "classes"}
        </p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-4 xl:grid-cols-1">
        {slots.map((slot) => (
          <div key={`${day}-${slot.time}-${slot.name}`} className="min-w-0">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#ec4899]">
              {slot.time}
            </p>
            <p className="mt-1 font-sans text-sm text-white/75">{slot.name}</p>
            <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.16em] text-white/30">1 hour</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <SiteNav />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-36 md:pb-24 md:pt-44">
        <Image
          src="/hero.jpg"
          alt="Lyfe Fitness class in session"
          fill
          priority
          sizes="100vw"
          className="z-0 object-cover opacity-60"
        />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_32%),linear-gradient(180deg,rgba(7,7,9,0.2)_0%,rgba(7,7,9,0.95)_72%,rgba(7,7,9,1)_100%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#f472b6]">
            Class Schedule
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] font-normal leading-[0.92] tracking-tighter text-white">
            Find your class.<br />
            <em className="text-[#ec4899]">Show up ready.</em>
          </h1>
          <p className="mt-8 max-w-xl font-sans text-base leading-8 text-white/60 md:text-lg">
            New to Lyfe? Come in for a free intro and we&apos;ll get you started right.
          </p>
          <a
            href="https://app.daneff.com"
            data-open-crm-popup="true"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center rounded-[4px] bg-[#ec4899] px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-[#db2777]"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h2 className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">
            Weekly Schedule
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {WEEK_COLUMNS.map((column) => (
              <DayCard key={column.day} day={column.day} slots={column.slots} />
            ))}
          </div>

          {/* Holiday note */}
          <p className="mt-6 text-center font-sans text-sm leading-7 text-white/35">
            Schedule may vary on holidays and special events. Check{" "}
            <a href="https://app.daneff.com" target="_blank" rel="noreferrer" className="text-white/50 underline underline-offset-2 transition hover:text-white">
              app.daneff.com
            </a>{" "}
            or follow us on Instagram for any changes.
          </p>
          <p className="mt-2 text-center font-sans text-xs uppercase tracking-[0.16em] text-white/30">
            *Sunday availability varies
          </p>
        </div>
      </section>

      {/* Note strip */}
      <section className="border-t border-black/10 bg-[#f5f0e8] py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex justify-center">
            <div className="max-w-2xl text-center">
              <h3 className="font-display text-2xl text-black">Ready to start?</h3>
              <p className="mt-3 font-sans text-sm leading-7 text-black/60">
                First class is free. Reach out at daniel@trainlyfe.com or call (516) 588-0532 to set it up.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
