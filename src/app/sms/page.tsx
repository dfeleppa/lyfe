import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import SmsSignupForm from "./SmsSignupForm";

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
        <SmsSignupForm />
        <p className="mt-7 text-sm leading-7 text-white/65">We confirm receipt by text and keep your category choices separately. A coach reviews consent before program messages begin. STOP cancels both categories. After an opt-out, any renewed consent is reviewed before messages resume.</p>
        <p className="mt-7 text-sm leading-7 text-white/65">Our new text program is being activated. Routine messages will begin after carrier approval. You can still call (516) 588-0532 or email <a href="mailto:daniel@trainlyfe.com" className="text-[#f472b6] underline underline-offset-4">daniel@trainlyfe.com</a> for help today.</p>
        <p className="mt-4 text-sm leading-7 text-white/65">Our free-week and pricing forms remain separate. Filling out those forms does not subscribe you to this text program.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
