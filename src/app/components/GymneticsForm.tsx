"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const FORMS = {
  crm: { id: "qtz9BpzFGxwbX54pvvKx", name: "WEBSITE - Getting Started Optin*", height: 840 },
  pricing: { id: "oDAXnrNskuGDbGMfCwa9", name: "WEBSITE - Pricing Form*", height: 680 },
};

export default function GymneticsForm({ kind, placement }: { kind: keyof typeof FORMS; placement: "inline" | "popup" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(placement === "popup");
  const form = FORMS[kind];
  const frameId = `${placement}-${form.id}`;

  useEffect(() => {
    if (active) return;
    const container = containerRef.current;
    if (!container) return;
    if (!("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActive(true);
        observer.disconnect();
      }
    }, { rootMargin: "200px" });
    observer.observe(container);
    return () => observer.disconnect();
  }, [active]);

  return (
    <div ref={containerRef} className="bg-white" style={{ minHeight: active ? undefined : form.height }}>
      {active ? <>
        <iframe src={`https://link.gymntx.com/widget/form/${form.id}`} id={frameId} title={form.name}
          style={{ display: "block", width: "100%", height: form.height, border: 0, background: "#fff" }}
          data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value=""
          data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value=""
          data-form-name={form.name} data-height={form.height} data-layout-iframe-id={frameId} data-form-id={form.id} />
        <Script src="https://link.gymntx.com/js/form_embed.js" strategy="afterInteractive" />
      </> : <p className="p-6 text-base text-black/75" role="status">Loading signup form…</p>}
      <p className="px-5 pb-5 text-sm leading-6 text-black/75">
        Trouble with the form? <a className="underline underline-offset-2" href={`https://link.gymntx.com/widget/form/${form.id}`} target="_blank" rel="noreferrer">Open it in a new tab</a> or <a className="underline underline-offset-2" href="tel:+15165880532">call (516) 588-0532</a>.
      </p>
    </div>
  );
}
