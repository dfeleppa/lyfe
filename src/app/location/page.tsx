import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Gym in Oceanside, NY | Location & Hours | Lyfe Fitness",
  "Visit Lyfe Fitness at 445 Merrick Road, Oceanside, NY 11572. Previously in Baldwin, now in Oceanside. Find hours, directions and book a free intro class.",
  "/location",
);

const directions = "https://www.google.com/maps/search/?api=1&query=445+Merrick+Road+Oceanside+NY+11572";

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <SiteNav />
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-36 md:px-12 md:pt-44">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f472b6]">Visit Lyfe Fitness</p>
        <h1 className="mt-5 font-display text-4xl leading-tight md:text-6xl">Your gym in Oceanside, NY.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
          Previously in Baldwin, Lyfe Fitness is now at 445 Merrick Road in Oceanside.
          Join us for coach-led group fitness, strength and conditioning, and a welcoming place to start.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <section className="rounded-3xl border border-white/10 p-7">
            <h2 className="font-display text-3xl">Find us</h2>
            <address className="mt-4 not-italic leading-8 text-white/75">Lyfe Fitness<br />445 Merrick Road<br />Oceanside, NY 11572</address>
            <a className="mt-5 inline-block text-[#f472b6] underline underline-offset-4" href={directions} target="_blank" rel="noreferrer">Get directions in Google Maps</a>
            <p className="mt-5 leading-7 text-white/75">Need help finding the entrance or planning your first visit? Call <a className="underline" href="tel:5165880532">(516) 588-0532</a> before you arrive.</p>
          </section>
          <section className="rounded-3xl border border-white/10 p-7">
            <h2 className="font-display text-3xl">Hours</h2>
            <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-5 gap-y-3 text-white/75">
              <dt>Mon–Thu</dt><dd>7:45am–8:10pm</dd>
              <dt>Friday</dt><dd>7:45am–6:30pm</dd>
              <dt>Saturday</dt><dd>9:00am–11:30am</dd>
              <dt>Sunday</dt><dd>9:00am–10:30am</dd>
            </dl>
            <p className="mt-5 leading-7 text-white/75">Check the <a className="text-[#f472b6] underline" href="/schedule">class schedule</a> for individual sessions and book your intro before coming in.</p>
          </section>
        </div>
        <section className="mt-12 max-w-3xl">
          <h2 className="font-display text-3xl">Coming from Baldwin?</h2>
          <p className="mt-4 leading-8 text-white/75">Our gym has moved to Oceanside. Use the Merrick Road address above for your next visit and update any saved directions to our previous location.</p>
          <h2 className="mt-9 font-display text-3xl">Your first class</h2>
          <p className="mt-4 leading-8 text-white/75">Start with a free intro class. Meet your coach, ask questions, and find a starting point that fits your experience. Explore our <a href="/pricing" className="text-[#f472b6] underline">membership options</a> or contact <a href="mailto:daniel@trainlyfe.com" className="text-[#f472b6] underline">daniel@trainlyfe.com</a>.</p>
          <a href="/#trial" className="mt-7 inline-flex rounded bg-pink-700 px-6 py-4 text-sm font-semibold text-white hover:bg-pink-800">Book your free intro class</a>
        </section>
      </section>
      <SiteFooter />
    </main>
  );
}
