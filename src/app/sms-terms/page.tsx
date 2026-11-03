import { pageMetadata } from "@/lib/metadata";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

export const metadata = pageMetadata(
  "SMS Terms | Lyfe Fitness",
  "Terms for the Lyfe Fitness text-messaging program.",
  "/sms-terms",
);

const linkClass = "text-[#f472b6] underline underline-offset-4 hover:text-white";

export default function SmsTermsPage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <SiteNav />
      <article className="mx-auto max-w-3xl space-y-8 px-6 pb-20 pt-36 text-sm leading-8 text-white/75 md:px-12 md:pt-44">
        <header>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f472b6]">Lyfe Fitness · Elevate Fitness Inc</p>
          <h1 className="mt-5 font-display text-5xl leading-tight text-white md:text-6xl">SMS Terms</h1>
          <p className="mt-5">Effective November 1, 2026</p>
        </header>
        <section>
          <h2 className="font-display text-2xl text-white">The program</h2>
          <p className="mt-3">Elevate Fitness Inc, doing business as Lyfe Fitness, operates the text-messaging program at (516) 862-4888. Messages may include trial and appointment reminders, membership support, gym news and promotional offers. Messages may be automated and recurring. Message frequency varies with your interactions and the updates you choose to receive.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-white">Your choice to join</h2>
          <p className="mt-3">Follow the separate disclosures on our <a href="/sms" className={linkClass}>text-message signup page</a>. Text START (or UNSTOP) to (516) 862-4888 for recurring automated informational texts about trials, appointments and membership support. Separately, text YES for recurring automated marketing texts about offers, membership opportunities, events and gym news. Send both keywords as separate messages only if you want both categories. Choosing one category does not enroll you in the other. A coach reviews the recorded keyword and consent before program messages begin.</p>
          <p className="mt-3">You must be authorized to use the mobile number. Each consent is voluntary and is not a condition of purchasing services or becoming a member. You can choose either, both, or neither. General inquiries, free intro class forms and pricing forms do not enroll you in this program.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-white">Charges and delivery</h2>
          <p className="mt-3">Message and data rates may apply under your mobile plan. Check with your mobile provider about charges. Delivery depends on your carrier and mobile service; delivery times are not guaranteed. Carriers are not liable for delayed or undelivered messages.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-white">Stop messages or get help</h2>
          <p className="mt-3">Reply STOP to unsubscribe from both categories. You may receive one final confirmation, after which program texts stop. Reply HELP for assistance, email <a href="mailto:daniel@trainlyfe.com" className={linkClass}>daniel@trainlyfe.com</a>, or call (516) 588-0532. To request enrollment again, revisit the signup disclosure and send the keyword for each category you choose; staff review renewed consent before resuming messages. Tell us if you change or give up your number.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-white">Privacy and contact</h2>
          <p className="mt-3">Our <a href="/privacy-policy" className={linkClass}>Privacy Policy</a> explains collection and use of mobile numbers, messages and consent records. We do not sell or share mobile information or SMS consent with third parties or affiliates for marketing or promotional purposes.</p>
          <p className="mt-3">Lyfe Fitness / Elevate Fitness Inc<br />445 Merrick Road, Oceanside, NY 11572<br /><a href="mailto:daniel@trainlyfe.com" className={linkClass}>daniel@trainlyfe.com</a></p>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
