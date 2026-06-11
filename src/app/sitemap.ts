import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://daneff.com";

  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/pricing`, priority: 0.9 },
    { url: `${base}/schedule`, priority: 0.8 },
    { url: `${base}/nutrition-program`, priority: 0.7 },
    { url: `${base}/privacy-policy`, priority: 0.2 },
  ];
}
