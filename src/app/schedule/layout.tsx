import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Schedule | Lyfe Fitness",
  description:
    "Coach-led group fitness classes seven days a week in Baldwin, NY. Morning and evening sessions — find the class time that fits your day.",
};

export default function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
