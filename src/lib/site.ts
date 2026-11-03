// The public marketing site's canonical origin after the domain migration.
export const SITE_URL = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://trainlyfe.com",
).origin;
export const MEMBER_APP_URL = "https://app.chalkitpro.com";

export const NAV_ITEMS = [
  { label: "Membership & Pricing", href: "/pricing" },
  { label: "Schedule", href: "/schedule" },
  { label: "Location", href: "/location" },
  { label: "Contact", href: "/#trial" },
  { label: "Member Login", href: MEMBER_APP_URL },
];
