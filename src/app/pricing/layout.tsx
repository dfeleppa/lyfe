import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership & Pricing | Lyfe Fitness",
  description:
    "Flexible group fitness memberships in Baldwin, NY — as low as $5 per class with no contracts. Find the plan that fits how often you want to train.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
