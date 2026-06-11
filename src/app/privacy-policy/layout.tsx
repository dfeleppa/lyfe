import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Lyfe Fitness",
  description: "How Lyfe Fitness collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
