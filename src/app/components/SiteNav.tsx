"use client";

import { useEffect, useRef, useState } from "react";
import BrandLogo from "./BrandLogo";
import { NAV_ITEMS } from "@/lib/site";

type SiteNavProps = {
  cta?: { label: string; href: string; openCrmPopup?: boolean };
};

const DEFAULT_CTA = { label: "Book Your Free Intro Class", href: "/#trial", openCrmPopup: true };

export default function SiteNav({ cta = DEFAULT_CTA }: SiteNavProps) {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const desktop = window.matchMedia("(min-width: 1280px)");
    const onDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    onDesktop();

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onDesktop);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/95"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-8">
        <a href="/" className="flex min-w-0 shrink-0 items-center">
          <BrandLogo sizes="(min-width: 640px) 192px, 160px" className="w-40 max-w-full sm:w-48" />
        </a>

        <nav className="hidden items-center gap-6 xl:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={cta.href}
            data-open-crm-popup={cta.openCrmPopup ? "true" : undefined}
            className="intro-cta hidden whitespace-nowrap xl:inline-flex"
          >
            {cta.label}
          </a>

          <button
            ref={menuButtonRef}
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-[4px] outline-none focus-visible:ring-2 focus-visible:ring-pink-400 xl:hidden"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <span className={`block h-px w-5 bg-white transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-white transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-navigation" className="absolute inset-x-0 top-full flex max-h-[calc(100dvh-6rem)] flex-col overflow-y-auto overscroll-contain gap-0 border-t border-white/10 bg-black/95 backdrop-blur-xl xl:hidden">
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
            href={cta.href}
            data-open-crm-popup={cta.openCrmPopup ? "true" : undefined}
            data-dialog-return-focus="mobile-menu-toggle"
            onClick={() => setOpen(false)}
            className="intro-cta mx-6 my-4"
          >
            {cta.label}
          </a>
        </div>
      )}
    </header>
  );
}
