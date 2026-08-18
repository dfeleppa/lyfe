export const GOOGLE_TAG_ID =
  process.env.NEXT_PUBLIC_GOOGLE_TAG_ID?.trim() || "GT-KT9J4LQ";

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim();

export const ANALYTICS_ENABLED = process.env.NODE_ENV === "production";
