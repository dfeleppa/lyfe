import type { Metadata } from "next";

const articlePath = "/what-are-the-benefits-of-joining-a-community-based-fitness-gym";

export const metadata: Metadata = {
  title: "Benefits of a Community-Based Fitness Gym | Lyfe Fitness",
  description:
    "Discover how coaching, accountability, variety, and a supportive local community can make consistent training easier at Lyfe Fitness in Oceanside, NY.",
  alternates: { canonical: articlePath },
  twitter: { card: "summary_large_image", title: "Benefits of a Community-Based Fitness Gym | Lyfe Fitness", description: "How coaching and community support consistent training in Oceanside, NY.", images: ["/og.jpg"] },
  openGraph: {
    title: "Benefits of a Community-Based Fitness Gym | Lyfe Fitness",
    description:
      "How expert coaching and a supportive local community can help you train consistently and make meaningful progress.",
    url: articlePath,
    type: "article",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Lyfe Fitness in Oceanside, NY" }],
  },
};

export default function CommunityFitnessArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
