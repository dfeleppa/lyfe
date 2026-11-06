"use client";

import { useEffect, useRef, useState } from "react";
import GymneticsForm from "./GymneticsForm";
import BrandLogo from "./BrandLogo";

type Props = { kind: "crm" | "pricing"; title: string; description: string };

export default function InquiryDialog({ kind, title, description }: Props) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const trigger = event.target instanceof Element
        ? event.target.closest<HTMLElement>(`[data-open-${kind}-popup='true']`)
        : null;
      if (!trigger) return;
      event.preventDefault();
      // Mobile menu links unmount when selected; return focus to their persistent toggle.
      const returnFocusId = trigger.dataset.dialogReturnFocus;
      openerRef.current = (returnFocusId ? document.getElementById(returnFocusId) : null) ?? trigger;
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [kind]);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    // Native modal focus containment includes the cross-origin form iframe.
    dialog.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      openerRef.current?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <dialog ref={dialogRef} aria-labelledby={`${kind}-popup-title`} aria-describedby={`${kind}-popup-description`}
      className="inquiry-dialog rounded-2xl bg-white p-0 text-black shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      onCancel={() => setOpen(false)} onClose={() => setOpen(false)}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) setOpen(false);
      }}>
      {open && (
        <div className="flex max-h-[inherit] min-h-0 flex-col">
          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-black/10 px-4 py-2 sm:px-6">
            <div className="p-2">
              <BrandLogo sizes="219px" className="w-48" tone="dark" />
            </div>
            <button autoFocus type="button" aria-label="Close form" onClick={() => setOpen(false)} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/20 text-2xl text-black/80 hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700">×</button>
          </div>
          <div className="min-h-0 overflow-y-auto overscroll-contain" data-dialog-scroll>
            <div className="px-5 pb-2 pt-4 sm:px-8 sm:pt-5">
              <h2 id={`${kind}-popup-title`} className="font-display text-[clamp(1.5rem,3.5vw,2rem)] leading-tight">{title}</h2>
              <p id={`${kind}-popup-description`} className="mt-2 text-base leading-6 text-black/75">{description}</p>
            </div>
            <GymneticsForm kind={kind} placement="popup" />
          </div>
        </div>
      )}
    </dialog>
  );
}
