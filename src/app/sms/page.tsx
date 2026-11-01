import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

export const metadata: Metadata = {
  title: "Text Updates | Lyfe Fitness",
  description: "Choose Lyfe Fitness appointment texts, marketing texts, both, or neither. Each has its own optional signup.",
  alternates: { canonical: "/sms" },
};

export default function SmsSignupPage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <SiteNav />
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-36 md:px-12 md:pt-44">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f472b6]">Lyfe Fitness · Elevate Fitness Inc</p>
        <h1 className="mt-5 font-display text-5xl leading-tight md:text-6xl">Choose your texts.</h1>
        <p className="mt-6 text-lg leading-8 text-white/75">Choose reminders and support, marketing offers, both, or neither. Each choice is separate and optional. You can book a trial, get pricing and become a member without subscribing to any texts.</p>
        <p className="mt-4 text-sm leading-7 text-white/65">This is the official Lyfe Fitness SMS signup, operated by Elevate Fitness Inc at 445 Merrick Road, Oceanside, NY 11572. Our SMS program is hosted at daneff.com during our website transition.</p>
        <div id="reminders" className="mt-10 rounded-2xl border border-white/15 bg-white/[0.04] p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f472b6]">Optional · Informational texts</p>
          <h2 className="mt-3 font-display text-3xl">Appointment reminders &amp; support</h2>
          <p className="mt-4 font-semibold">Text START to (516) 862-4888</p>
          <p className="mt-5 text-sm leading-7 text-white/80">
            By sending START, you agree to receive recurring automated informational texts from Lyfe Fitness about your trial or appointments and membership support at the number you use to text us. This does not give consent to marketing texts. Consent is optional and is not a condition of purchase or membership. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe from all program texts or HELP for help.
          </p>
          <p className="mt-4 text-sm leading-7 text-white/80">
            Read our <a className="text-[#f472b6] underline underline-offset-4" href="/privacy-policy">Privacy Policy</a> and <a className="text-[#f472b6] underline underline-offset-4" href="/sms-terms">SMS Terms</a> before signing up.
          </p>
          <a href="sms:+15168624888?body=START" className="mt-6 inline-flex rounded-full bg-[#f472b6] px-6 py-3 font-semibold text-black transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Open START text for reminders</a>
          <p className="mt-3 text-xs leading-6 text-white/60">Opens a draft only. Send START yourself to choose this category. UNSTOP is an alternative keyword for this informational category.</p>
        </div>
        <div id="offers" className="mt-6 rounded-2xl border border-white/15 bg-white/[0.04] p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f472b6]">Optional · Marketing texts</p>
          <h2 className="mt-3 font-display text-3xl">Offers &amp; gym news</h2>
          <p className="mt-4 font-semibold">Text YES to (516) 862-4888</p>
          <p className="mt-5 text-sm leading-7 text-white/80">By sending YES, you agree to receive recurring automated marketing texts from Lyfe Fitness about promotional offers, membership opportunities, events and gym news at the number you use to text us. This is a separate choice from appointment reminders and support. Consent is optional and is not a condition of purchase or membership. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe from all program texts or HELP for help.</p>
          <p className="mt-4 text-sm leading-7 text-white/80">Read our <a className="text-[#f472b6] underline underline-offset-4" href="/privacy-policy">Privacy Policy</a> and <a className="text-[#f472b6] underline underline-offset-4" href="/sms-terms">SMS Terms</a> before signing up.</p>
          <a href="sms:+15168624888?body=YES" className="mt-6 inline-flex rounded-full bg-[#f472b6] px-6 py-3 font-semibold text-black transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Open YES text for offers</a>
          <p className="mt-3 text-xs leading-6 text-white/60">Opens a draft only. Send YES yourself to choose this category. To choose both categories, send START and YES as separate messages.</p>
        </div>
        <p className="mt-7 text-sm leading-7 text-white/65">We confirm receipt by text and keep your category choices separately. A coach reviews consent before program messages begin. STOP cancels both categories. After an opt-out, any renewed consent is reviewed before messages resume.</p>
        <p className="mt-7 text-sm leading-7 text-white/65">Our new text program is being activated. Routine messages will begin after carrier approval. You can still call (516) 588-0532 or email <a href="mailto:daniel@trainlyfe.com" className="text-[#f472b6] underline underline-offset-4">daniel@trainlyfe.com</a> for help today.</p>
        <p className="mt-4 text-sm leading-7 text-white/65">Our free-week and pricing forms remain separate. Filling out those forms does not subscribe you to this text program.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
