import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import AnalyticsEvents from "./components/AnalyticsEvents";
import GlobalCRMPopup from "./components/GlobalCRMPopup";
import GlobalPricingPopup from "./components/GlobalPricingPopup";
import { ANALYTICS_ENABLED, GOOGLE_TAG_ID, GTM_ID } from "@/lib/analytics-config";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

// Display font — stands in for Reckless Neue until font files are added.
// See globals.css for the @font-face block to uncomment once you have the files.
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Lyfe Fitness | Group Training in Baldwin, NY",
  description:
    "Coach-led group fitness in Baldwin, NY. Purposeful programming, real coaching, and a community that makes consistency easier. Start your free week.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lyfe Fitness | Group Training in Baldwin, NY",
    description:
      "Coach-led group fitness in Baldwin, NY with purposeful programming, real coaching, and a strong community.",
    url: "/",
    siteName: "Lyfe Fitness",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Athletes training at Lyfe Fitness in Baldwin, NY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyfe Fitness | Group Training in Baldwin, NY",
    description: "Coach-led group fitness in Baldwin, NY. Start your free week.",
    images: ["/og.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "Lyfe Fitness",
  url: SITE_URL,
  image: `${SITE_URL}/og.jpg`,
  logo: `${SITE_URL}/lflogo.png`,
  telephone: "+15165880532",
  email: "daniel@trainlyfe.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "851 Merrick Rd",
    addressLocality: "Baldwin",
    addressRegion: "NY",
    postalCode: "11510",
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
      {ANALYTICS_ENABLED && GTM_ID ? <GoogleTagManager gtmId={GTM_ID} /> : null}
      <body className="bg-black text-white font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
        <AnalyticsEvents />
        <GlobalCRMPopup />
        <GlobalPricingPopup />
      </body>
      {ANALYTICS_ENABLED && !GTM_ID && GOOGLE_TAG_ID ? <GoogleAnalytics gaId={GOOGLE_TAG_ID} /> : null}
    </html>
  );
}
