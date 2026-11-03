import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Group Fitness Class Schedule in Oceanside, NY | Lyfe Fitness",
  "Coach-led group fitness classes seven days a week in Oceanside, NY. Morning and evening sessions \u2014 find the class time that fits your day.",
  "/schedule",
);

export default function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
