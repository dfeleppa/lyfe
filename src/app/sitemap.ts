import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, priority: 1 },
    { url: `${SITE_URL}/pricing`, priority: 0.9 },
    { url: `${SITE_URL}/schedule`, priority: 0.8 },
    { url: `${SITE_URL}/nutrition-program`, priority: 0.7 },
    { url: `${SITE_URL}/privacy-policy`, priority: 0.2 },
  ];
}
