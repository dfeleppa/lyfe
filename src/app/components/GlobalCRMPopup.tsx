"use client";

import { useEffect, useState } from "react";

export default function GlobalCRMPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const trigger = target.closest("[data-open-crm-popup='true']") as HTMLElement | null;
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
            GETTING STARTED IS EASY!
          </p>
          <p className="mt-4 font-sans text-sm leading-7 text-black/70 md:text-[15px]">
            Simply fill out the form below and then schedule Your FREE intro session on the next page.
          </p>
          <p className="mt-2 font-sans text-sm leading-7 text-black/70 md:text-[15px]">
            Shortly after we will be in touch with you to confirm your intro session. We are excited to meet you!
          </p>
        </div>

        <iframe
          src="https://link.gymntx.com/widget/form/qtz9BpzFGxwbX54pvvKx"
          style={{ display: "block", width: "100%", height: "min(68vh, 700px)", minHeight: "566px", border: "none", borderRadius: "4px", background: "#ffffff" }}
          id="popup-qtz9BpzFGxwbX54pvvKx"
          data-layout="{'id':'POPUP'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="WEBSITE - Getting Started Optin*"
          data-height="566"
          data-layout-iframe-id="popup-qtz9BpzFGxwbX54pvvKx"
          data-form-id="qtz9BpzFGxwbX54pvvKx"
          title="WEBSITE - Getting Started Optin*"
        />
      </div>
    </div>
  );
}
