import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Footer from "./components/Footer";
import FormPopup from "./components/FormPopup";
import Nav from "./components/Nav";
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
        <Nav />
        {children}
        <Footer />
        <FormPopup
          triggerSelector="[data-open-crm-popup='true']"
          formId="qtz9BpzFGxwbX54pvvKx"
          formName="WEBSITE - Getting Started Optin*"
          titleId="crm-popup-title"
          title="GETTING STARTED IS EASY!"
          description={
            <>
              <p>Simply fill out the form below and then schedule Your FREE intro session on the next page.</p>
              <p>Shortly after we will be in touch with you to confirm your intro session. We are excited to meet you!</p>
            </>
          }
        />
        <FormPopup
          triggerSelector="[data-open-pricing-popup='true']"
          formId="oDAXnrNskuGDbGMfCwa9"
          formName="WEBSITE - Pricing Form*"
          titleId="pricing-popup-title"
          title="OUR PRICING IS SIMPLE"
          description={
            <>
              <p>We Want To Offer You The PERFECT Membership For Your NEEDS.</p>
              <p>Simply fill out the form below and one of our amazing coaches will send you our current membership information.</p>
            </>
          }
        />
      </body>
    </html>
  );
}
