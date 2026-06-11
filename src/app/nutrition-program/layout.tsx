import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nutrition Program | Lyfe Fitness",
  description:
    "Daily-tracking nutrition coaching with weekly check-ins and real accountability from Lyfe Fitness in Baldwin, NY. Start your trial week.",
};

export default function NutritionProgramLayout({ children }: { children: React.ReactNode }) {
  return children;
}
