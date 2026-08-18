import { ANALYTICS_ENABLED, GOOGLE_TAG_ID, GTM_ID } from "@/lib/analytics-config";

export type AnalyticsEvent =
  | "page_view"
  | "pricing_view"
  | "schedule_view"
  | "free_week_cta_click"
  | "pricing_form_open"
  | "contact_click"
  | "member_login_click"
  | "membership_registration_click";

type EventParameters = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | unknown[]>;
  }
}

export function trackEvent(event: AnalyticsEvent, parameters: EventParameters = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];

  if (!ANALYTICS_ENABLED) {
    window.dataLayer.push({ event, ...parameters });
    return;
  }

  if (GTM_ID) {
    window.dataLayer.push({ event, ...parameters });
    return;
  }

  // Google Analytics records route changes automatically. Sending another
  // page_view here would double-count them when enhanced measurement is on.
  if (GOOGLE_TAG_ID && event === "page_view") return;

  if (GOOGLE_TAG_ID) {
    window.dataLayer.push(["event", event, parameters]);
    return;
  }

  window.dataLayer.push({ event, ...parameters });
}
