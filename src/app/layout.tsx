import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import GlobalCRMPopup from "./components/GlobalCRMPopup";
import GlobalPricingPopup from "./components/GlobalPricingPopup";
import "./globals.css";

// Display font — stands in for Reckless Neue until font files are added.
// See globals.css for the @font-face block to uncomment once you have the files.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lyfe Fitness | Group Training in Baldwin, NY",
  description:
    "Coach-led group fitness in Baldwin, NY. Purposeful programming, real coaching, and a community that makes consistency easier. Start your free week.",
  openGraph: {
    title: "Lyfe Fitness | Group Training in Baldwin, NY",
    description:
      "Coach-led group fitness in Baldwin, NY with purposeful programming, real coaching, and a strong community.",
    url: "https://daneff.com",
    siteName: "Lyfe Fitness",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyfe Fitness | Group Training in Baldwin, NY",
    description: "Coach-led group fitness in Baldwin, NY. Start your free week.",
  },
  metadataBase: new URL("https://daneff.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-black text-white font-sans antialiased">
        {children}
        <GlobalCRMPopup />
        <GlobalPricingPopup />
      </body>
    </html>
  );
}
