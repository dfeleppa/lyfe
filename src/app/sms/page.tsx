import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

export const metadata: Metadata = {
  title: "Text Updates | Lyfe Fitness",
  description: "Choose to receive Lyfe Fitness text updates, reminders and offers.",
  alternates: { canonical: "/sms" },
};

export default function SmsSignupPage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <SiteNav />
      <section className="mx-auto max-w-3xl px-6 pb-20 pt-36 md:px-12 md:pt-44">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f472b6]">Lyfe Fitness · Elevate Fitness Inc</p>
        <h1 className="mt-5 font-display text-5xl leading-tight md:text-6xl">Stay in the loop.</h1>
        <p className="mt-6 text-lg leading-8 text-white/75">Get trial and appointment reminders, membership support, gym news and offers from Lyfe Fitness.</p>
        <div className="mt-10 rounded-2xl border border-white/15 bg-white/[0.04] p-6 md:p-8">
          <h2 className="font-display text-3xl">Text START to (516) 862-4888</h2>
          <p className="mt-5 text-sm leading-7 text-white/80">
            By sending START to (516) 862-4888, you agree to receive recurring automated texts from Lyfe Fitness, including marketing offers and the updates listed above, at the number you use to text us. Consent is optional and is not a condition of purchase or membership. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe or HELP for help.
          </p>
          <p className="mt-4 text-sm leading-7 text-white/80">
            Read our <a className="text-[#f472b6] underline underline-offset-4" href="/privacy-policy">Privacy Policy</a> and <a className="text-[#f472b6] underline underline-offset-4" href="/sms-terms">SMS Terms</a> before signing up.
          </p>
          <a href="sms:+15168624888?body=START" className="mt-6 inline-flex rounded-full bg-[#f472b6] px-6 py-3 font-semibold text-black transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Open a text to sign up</a>
          <p className="mt-3 text-xs leading-6 text-white/60">This opens your messaging app. You choose whether to send the message.</p>
        </div>
        <p className="mt-7 text-sm leading-7 text-white/65">Our new text program is being activated. Routine messages will begin after carrier approval. You can still call (516) 588-0532 or email <a href="mailto:daniel@trainlyfe.com" className="text-[#f472b6] underline underline-offset-4">daniel@trainlyfe.com</a> for help today.</p>
        <p className="mt-4 text-sm leading-7 text-white/65">Our free-week and pricing forms remain separate. Filling out those forms does not subscribe you to this text program.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
