"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

function linkDetails(element: Element) {
  const link = element.closest("a");

  return {
    link_text: element.textContent?.replace(/\s+/g, " ").trim() || undefined,
    link_url: link?.href,
    page_path: window.location.pathname,
  };
}

export default function AnalyticsEvents() {
  const pathname = usePathname();

  useEffect(() => {
    trackEvent("page_view", {
      page_path: pathname,
      page_title: document.title,
    });

    if (pathname === "/pricing") {
      trackEvent("pricing_view", { page_path: pathname });
    }

    if (pathname === "/schedule") {
      trackEvent("schedule_view", { page_path: pathname });
    }
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const trigger = event.target.closest(
        "a, button, [data-open-crm-popup='true'], [data-open-pricing-popup='true']",
      );
      if (!trigger) return;

      const details = linkDetails(trigger);

      if (trigger.closest("[data-open-pricing-popup='true']")) {
        trackEvent("pricing_form_open", details);
        return;
      }

      if (trigger.closest("[data-open-crm-popup='true']")) {
        trackEvent("free_week_cta_click", details);
        return;
      }

      const link = trigger.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) {
        trackEvent("contact_click", { ...details, contact_method: "call" });
        return;
      }

      if (href.startsWith("sms:")) {
        trackEvent("contact_click", { ...details, contact_method: "text" });
        return;
      }

      try {
        const destination = new URL(link.href);
        if (destination.hostname !== "app.trainlyfe.com") return;

        trackEvent(
          destination.pathname.startsWith("/register")
            ? "membership_registration_click"
            : "member_login_click",
          details,
        );
      } catch {
        // Ignore non-URL link targets such as page fragments.
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
