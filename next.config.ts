import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      // Consolidate only the website aliases; app and other subdomains are unaffected.
      ...["daneff.com", "www.daneff.com", "www.trainlyfe.com"].map((host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host }],
        destination: "https://trainlyfe.com/:path*",
        permanent: true,
      })),
      { source: "/location/", destination: "/location", permanent: true },
      { source: "/sms/", destination: "/sms", permanent: true },
      { source: "/sms-terms/", destination: "/sms-terms", permanent: true },
      { source: "/get-started", destination: "/#trial", permanent: true },
      { source: "/home/how-to-join", destination: "/#trial", permanent: true },
      { source: "/home/how-to-join/", destination: "/#trial", permanent: true },
      { source: "/get-started/", destination: "/#trial", permanent: true },
      { source: "/consult", destination: "/#trial", permanent: true },
      { source: "/consult/", destination: "/#trial", permanent: true },
      { source: "/intro", destination: "/#trial", permanent: true },
      { source: "/intro/", destination: "/#trial", permanent: true },
      { source: "/member-reviews", destination: "/#results", permanent: true },
      { source: "/member-reviews/", destination: "/#results", permanent: true },
      // Temporarily hide the nutrition program while retaining its page source.
      { source: "/nutrition", destination: "/", permanent: false },
      { source: "/nutrition/", destination: "/", permanent: false },
      { source: "/nutrition-program", destination: "/", permanent: false },
      { source: "/nutrition-program/", destination: "/", permanent: false },
      { source: "/pricing/", destination: "/pricing", permanent: true },
      { source: "/schedule/", destination: "/schedule", permanent: true },
      { source: "/privacy-policy/", destination: "/privacy-policy", permanent: true },
      {
        source: "/what-are-the-benefits-of-joining-a-community-based-fitness-gym/",
        destination: "/what-are-the-benefits-of-joining-a-community-based-fitness-gym",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
