import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
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
  title: "Elev8 | Group Fitness Built for Results",
  description:
    "Premium group fitness for people who are serious about performance. Expert programming, elite coaches, real community. Book your first class free.",
  openGraph: {
    title: "Elev8 | Group Fitness Built for Results",
    description:
      "Premium group fitness for people who are serious about performance. Expert programming, elite coaches, real community.",
    url: "https://daneff.com",
    siteName: "Elev8",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elev8 | Group Fitness Built for Results",
    description: "Premium group fitness for people who are serious about performance.",
  },
  metadataBase: new URL("https://daneff.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-black text-white font-sans antialiased">{children}</body>
    </html>
  );
}
