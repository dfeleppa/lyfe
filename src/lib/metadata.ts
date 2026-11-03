import type { Metadata } from "next";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title, description, url: path, siteName: "Lyfe Fitness", locale: "en_US", type: "website",
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Lyfe Fitness in Oceanside, NY" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
  };
}
