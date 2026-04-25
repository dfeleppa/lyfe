"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS } from "./nav-config";

export default function Nav() {
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
