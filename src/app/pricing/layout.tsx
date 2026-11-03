import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Membership & Pricing in Oceanside, NY | Lyfe Fitness",
  "Coach-led group fitness memberships in Oceanside, NY starting at $120 per month, with no sign-up fee or long-term commitment. Discounted prepaid options are available.",
  "/pricing",
);

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
