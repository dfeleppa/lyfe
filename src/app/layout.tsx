import type { Metadata } from "next";
import localFont from "next/font/local";
import AnalyticsScripts from "./components/AnalyticsScripts";
import AnalyticsEvents from "./components/AnalyticsEvents";
import GlobalCRMPopup from "./components/GlobalCRMPopup";
import GlobalPricingPopup from "./components/GlobalPricingPopup";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

// Same Fraunces design and optical sizing, with unused weight variations removed.
const fraunces = localFont({
  src: [
    { path: "../../public/fonts/fraunces-latin-400-regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/fraunces-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const inter = localFont({
  src: "../../public/fonts/inter-latin-400-700.woff2",
  weight: "400 700",
  style: "normal",
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  robots: process.env.VERCEL_ENV === "preview" ? { index: false, follow: false } : undefined,
  metadataBase: new URL(SITE_URL),
  title: "Lyfe Fitness | Group Training in Oceanside, NY",
  description:
    "Coach-led group fitness in Oceanside, NY. Purposeful programming, real coaching, and a community that makes consistency easier. Book your free intro class.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lyfe Fitness | Group Training in Oceanside, NY",
    description:
      "Coach-led group fitness in Oceanside, NY with purposeful programming, real coaching, and a strong community.",
    url: "/",
    siteName: "Lyfe Fitness",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Athletes training at Lyfe Fitness in Oceanside, NY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyfe Fitness | Group Training in Oceanside, NY",
    description: "Coach-led group fitness in Oceanside, NY. Book your free intro class.",
    images: ["/og.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "@id": `${SITE_URL}/#gym`,
  name: "Lyfe Fitness",
  url: SITE_URL,
  image: `${SITE_URL}/og.jpg`,
  logo: `${SITE_URL}/lyfe-logo-uppercase-f.png`,
  hasMap: "https://www.google.com/maps/search/?api=1&query=445+Merrick+Road+Oceanside+NY+11572",
  telephone: "+15165880532",
  email: "daniel@trainlyfe.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "445 Merrick Road",
    addressLocality: "Oceanside",
    addressRegion: "NY",
    postalCode: "11572",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "07:45",
      closes: "20:10",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "07:45", closes: "18:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "11:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:00", closes: "10:30" },
  ],
  sameAs: ["https://www.instagram.com/lyfefitnessli/", "https://www.facebook.com/lyfefitnessli"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-black text-white font-sans antialiased">
        <AnalyticsScripts />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
        <AnalyticsEvents />
        <GlobalCRMPopup />
        <GlobalPricingPopup />
      </body>
    </html>
  );
}
