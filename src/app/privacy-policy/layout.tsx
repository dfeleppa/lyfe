import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Privacy Policy | Lyfe Fitness",
  "How Lyfe Fitness collects, uses, and protects your personal information.",
  "/privacy-policy",
);

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
