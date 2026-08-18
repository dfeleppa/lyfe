import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pricing" },
  title: "Membership & Pricing | Lyfe Fitness",
  description:
    "Coach-led group fitness memberships in Baldwin, NY starting at $152.99 per month, with no sign-up fee or long-term commitment. Discounted prepaid options are available.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
