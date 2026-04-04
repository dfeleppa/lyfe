"use client";

import { useEffect, useState } from "react";

export default function GlobalPricingPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const trigger = target.closest("[data-open-pricing-popup='true']") as HTMLElement | null;
      if (!trigger) return;

      event.preventDefault();
      setOpen(true);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-[14px] bg-white"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close form"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 bg-white/90 text-black/70 transition hover:text-black"
        >
          ×
        </button>

        <div className="border-b border-black/10 bg-white px-6 pb-6 pt-8 md:px-8">
          <img src="/lflogo.png" alt="Lyfe Fitness logo" className="h-11 w-auto" />
          <p className="mt-5 font-display text-[clamp(1.8rem,3.5vw,2.5rem)] leading-[1] text-black">
            OUR PRICING IS SIMPLE
          </p>
          <p className="mt-4 font-sans text-sm leading-7 text-black/70 md:text-[15px]">
            We Want To Offer You The PERFECT Membership For Your NEEDS.
          </p>
          <p className="mt-2 font-sans text-sm leading-7 text-black/70 md:text-[15px]">
            Simply fill out the form below and one of our amazing coaches will send you our current membership information.
          </p>
        </div>

        <iframe
          src="https://link.gymntx.com/widget/form/oDAXnrNskuGDbGMfCwa9"
          style={{ display: "block", width: "100%", height: "min(68vh, 700px)", minHeight: "403px", border: "none", borderRadius: "4px", background: "#ffffff" }}
          id="inline-oDAXnrNskuGDbGMfCwa9"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="WEBSITE - Pricing Form*"
          data-height="403"
          data-layout-iframe-id="inline-oDAXnrNskuGDbGMfCwa9"
          data-form-id="oDAXnrNskuGDbGMfCwa9"
          title="WEBSITE - Pricing Form*"
        />
      </div>
    </div>
  );
}
