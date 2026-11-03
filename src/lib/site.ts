// Keep the current host until the migration is approved. Set this at build time
// to https://trainlyfe.com for the cutover (metadata, sitemap and schema).
export const SITE_URL = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.daneff.com",
).origin;
export const MEMBER_APP_URL = "https://app.chalkitpro.com";

export const NAV_ITEMS = [
  { label: "Membership & Pricing", href: "/pricing" },
  { label: "Schedule", href: "/schedule" },
  { label: "Location", href: "/#location" },
  { label: "Contact", href: "/#trial" },
  { label: "Member Login", href: MEMBER_APP_URL },
];
