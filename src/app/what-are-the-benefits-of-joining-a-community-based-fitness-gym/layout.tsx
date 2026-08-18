import type { Metadata } from "next";

const articlePath = "/what-are-the-benefits-of-joining-a-community-based-fitness-gym";

export const metadata: Metadata = {
  title: "Benefits of a Community-Based Fitness Gym | Lyfe Fitness",
  description:
    "Discover how coaching, accountability, variety, and a supportive local community can make consistent training easier at Lyfe Fitness in Baldwin, NY.",
  alternates: { canonical: articlePath },
  openGraph: {
    title: "Benefits of a Community-Based Fitness Gym | Lyfe Fitness",
    description:
      "How expert coaching and a supportive local community can help you train consistently and make meaningful progress.",
    url: articlePath,
    type: "article",
  },
};

export default function CommunityFitnessArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
