import Script from "next/script";
import { ANALYTICS_ENABLED, GOOGLE_TAG_ID, GTM_ID } from "@/lib/analytics-config";

export default function AnalyticsScripts() {
  if (!ANALYTICS_ENABLED) return null;

  // Initialize the queue immediately so early clicks are retained. Download
  // Google's library after window.load, when the browser has idle time.
  if (GTM_ID) {
    return <>
      <Script id="analytics-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
      `}</Script>
      <Script id="analytics-library" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`} />
    </>;
  }

  if (!GOOGLE_TAG_ID) return null;
  return <>
    <Script id="analytics-init" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', ${JSON.stringify(GOOGLE_TAG_ID).replace(/</g, "\\u003c")});
    `}</Script>
    <Script id="analytics-library" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GOOGLE_TAG_ID)}`} />
  </>;
}
