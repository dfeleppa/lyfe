import Image from "next/image";
import GymneticsForm from "./components/GymneticsForm";
import Testimonials from "./components/Testimonials";
import SiteFooter from "./components/SiteFooter";
import SiteNav from "./components/SiteNav";

const DIFFERENCE_PILLARS = [
  {
    heading: "People who help you show up",
    body: "A planned workout, a coach to guide you, and a group that makes consistency easier.",
    image: "/diff1.jpg",
  },
  {
    heading: "Coaching for your starting point",
    body: "Starting fresh or coming back? Your coach helps you find movements and a pace that fit.",
    image: "/offer3.jpg",
  },
  {
    heading: "A plan to get stronger",
    body: "Build strength and conditioning with purposeful programming that helps you progress over time.",
    image: "/diff3.jpg",
  },
];

const PROGRAMS = [
  {
    number: "01",
    title: "Group Fitness",
    href: "/group-fitness",
    body: "High-energy sessions that blend strength, cardio, and athletic conditioning into a coached class that keeps everyone working with intent.",
    image: "/offer1.jpg",
  },
  {
    number: "02",
    title: "Personal Training",
    href: "/personal-training",
    body: "One-on-one sessions for members who want more individualized progressions, closer accountability, or extra support around a specific goal.",
    image: "/offer2.jpg",
  },
  {
    number: "03",
    title: "Nutrition Coaching",
    body: "Simple, practical nutrition guidance that supports your training and helps results last outside the gym walls.",
    image: "/diff2.jpg",
  },
];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10 pb-14 pt-32 md:pb-20 md:pt-40">
      <Image src="/hero.jpg" alt="Members together at Lyfe Fitness" fill priority fetchPriority="high" decoding="sync" quality={60} sizes="100vw" className="z-0 object-cover object-[65%_center] opacity-65" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(7,7,9,0.9)_0%,rgba(7,7,9,0.65)_55%,rgba(7,7,9,0.25)_100%),linear-gradient(0deg,rgba(7,7,9,1),transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="max-w-3xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Coach-led group fitness · Oceanside, NY
          </p>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,6.4vw,5.5rem)] font-normal leading-[1.08] tracking-tightest text-white">
            Get stronger.<br /><span className="text-[#ec4899]">Feel supported.</span><br /><em>Keep showing up.</em>
          </h1>
          <p className="mt-6 max-w-xl font-sans text-base leading-7 text-white/80 md:text-lg md:leading-8">
            Workouts adapted to your starting point. Coaches who guide you.
            A community that makes it easier to stay consistent.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <a href="#trial" data-open-crm-popup="true" className="intro-cta">
              Book Your Free Intro Class
            </a>
            <a href="#first-visit" className="text-sm font-medium text-white underline underline-offset-4 hover:text-white/80">
              What to expect
            </a>
          </div>
          <p className="mt-4 text-sm leading-6 text-white/75">One free class. Beginners and returning exercisers welcome.</p>
          <div className="mt-8 max-w-xl border-t border-white/20 pt-5">
            <p className="text-sm font-semibold text-white">5.0 Google rating <span className="font-normal text-white/70">· 61 reviews</span></p>
            <figure className="mt-3">
              <blockquote className="text-sm leading-6 text-white/80">“From day one, I felt welcomed, challenged, and supported.”</blockquote>
              <figcaption className="mt-1 text-xs text-white/60">Clairiola E. · Google Review</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="border-y border-white/10 bg-[#0d0d10]">
      <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-6 py-5 text-center text-xs font-medium uppercase tracking-[0.14em] text-white/75 sm:grid-cols-3 md:px-12">
        <li>Coach-led from start to finish</li>
        <li>Strength &amp; conditioning</li>
        <li>Adapted to your experience</li>
      </ul>
    </div>
  );
}

function FirstVisit() {
  const steps = [
    { title: "Choose your class", body: "Fill out the short signup form, then choose your intro class time on the next page." },
    { title: "Meet your coach", body: "Let your coach know you’re new. Share your experience and ask questions before you get started." },
    { title: "Try one class, on us", body: "Follow a coached workout with movements adapted to your experience. Bring water and clothes you can move in." },
  ];
  return (
    <section id="first-visit" className="border-b border-black/10 bg-[#f5f0e8] py-16 text-black md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">Your first visit</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <h2 className="max-w-xl font-display text-4xl leading-tight md:text-5xl">You don’t have to figure it out alone.</h2>
          <p className="max-w-xl text-base leading-7 text-black/70">You don’t need to know every movement or already be in shape. We’ll help you find your starting point.</p>
        </div>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t border-black/20 pt-5">
              <span className="text-xs font-semibold text-black/50">0{index + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-black/70">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <a href="#trial" data-open-crm-popup="true" className="intro-cta">Book Your Free Intro Class</a>
          <a href="/schedule" className="text-sm font-medium underline underline-offset-4">View the class schedule</a>
        </div>
      </div>
    </section>
  );
}

function Difference() {
  return (
    <section id="difference" className="bg-[#f5f0e8] py-20 text-black md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div >
          <div>
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-black/65">
              Why Lyfe Fitness
            </p>
            <h2 className="font-display text-[clamp(2.75rem,6vw,5.5rem)] font-normal leading-[0.98] tracking-display text-black">
              This isn’t just a <em className="italic">gym.</em>
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {DIFFERENCE_PILLARS.map((pillar, index) => (
            <article
              key={pillar.heading}
              className={`overflow-hidden rounded-none border border-black/10 bg-white text-black`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={pillar.image} alt={pillar.heading} fill fetchPriority="low" sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6 sm:p-8">
                <p className="mb-3 text-xs font-semibold text-black/50">0{index + 1}</p>
                <h3 className="font-display text-3xl leading-tight text-black">{pillar.heading}</h3>
                <p className="mt-4 text-sm leading-7 text-black/70">{pillar.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center lg:justify-start">
          <a
            href="#trial"
            data-open-crm-popup="true"
            className="intro-cta"
          >
            Book Your Free Intro Class
          </a>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="offerings" className="border-t border-white/10 bg-[#0a0a0d] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-8 lg:items-end">
          <div>
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-white/65">
              WHAT WE OFFER
            </p>
            <h2 className="font-display text-[clamp(2.75rem,6vw,5.5rem)] font-normal leading-[0.98] tracking-display text-white">
              Coaching that fits your <em className="italic">next step.</em>
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PROGRAMS.map((program) => (
            <article
              key={program.number}
              className={`overflow-hidden rounded-none border border-white/10 bg-white/[0.03] shadow-[0_24px_80px_rgba(0,0,0,0.2)]`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={program.image} alt={program.title} fill fetchPriority="low" sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6 sm:p-8">
                <p className="mb-3 text-xs font-semibold text-white/60">{program.number}</p>
                <h3 className="font-display text-3xl leading-tight text-white">{program.href ? <a href={program.href} className="underline decoration-white/30 underline-offset-4 hover:decoration-white">{program.title}</a> : program.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/75">{program.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationContact() {
  return (
    <section id="location" className="border-t border-white/10 bg-[#09090c] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div >
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-white/65">
            Visit us &amp; get started
          </p>
          <h2 className="font-display text-[clamp(2.75rem,6vw,5.25rem)] font-normal leading-[0.98] tracking-display text-white">
            Oceanside&rsquo;s home for <em className="italic">coach-led training.</em>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
            Previously in Baldwin, now at 445 Merrick Road in Oceanside, NY 11572.
            Visit our new home for coach-led group fitness and a free intro class.
          </p>
          <a href="/location" className="mt-4 inline-block text-white/70 underline underline-offset-4">Oceanside location, hours and directions</a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_360px] lg:items-start">
          {/* Map */}
          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
            <div className="overflow-hidden rounded-[28px]" style={{ aspectRatio: "16 / 9" }}>
              <iframe
                src="https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1s445+Merrick+Road+Oceanside+NY+11572"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.6)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lyfe Fitness location"
              />
            </div>
            <div className="border-t border-white/10 px-6 py-4 font-sans text-sm leading-6 text-white/75">
              <p>445 Merrick Road, Oceanside, NY 11572</p>
              <a
                href="https://maps.google.com/?q=445+Merrick+Road+Oceanside+NY+11572"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-white underline underline-offset-4 hover:text-white/70"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Right column: info card + form card */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6 rounded-[36px] border border-white/10 bg-white/[0.04] p-8 font-sans text-white/72 shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65">Address</p>
                <p className="text-base text-white">445 Merrick Road, Oceanside, NY 11572</p>
              </div>
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65">Hours</p>
                <p>Mon – Thu: 7:45am – 8:10pm</p>
                <p>Fri: 7:45am – 6:30pm</p>
                <p>Sat: 9:00am – 11:30am</p>
                <p>Sun: 9:00am – 10:30am</p>
              </div>
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65">Contact</p>
                <a href="tel:5165880532" className="block transition hover:text-white">
                  (516) 588-0532
                </a>
                <a href="mailto:daniel@trainlyfe.com" className="block transition hover:text-white">
                  daniel@trainlyfe.com
                </a>
              </div>
              <a
                href="https://maps.google.com/?q=445+Merrick+Road+Oceanside+NY+11572"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-[4px] bg-white px-6 py-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-[#be185d] hover:text-white"
              >
                Get Directions
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


function LeadForm() {
  return (
    <section id="trial" className="bg-[#efe5d7] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div className="lg:pt-4">
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-black/65">
              Start here
            </p>
            <h2 className="font-display text-[clamp(2.75rem,6vw,5.25rem)] font-normal leading-[0.98] tracking-display text-black">
              Your intro class is <em className="italic">on us.</em>
            </h2>
            <p className="mt-6 max-w-md font-sans text-base leading-7 text-black/65">
              Start with a free intro class. Fill out the form, then choose your intro class time on the next page.
            </p>
            <p className="mt-8 font-sans text-base font-semibold uppercase tracking-[0.18em] text-black/60">
              Contact Us Directly
            </p>
            <a href="tel:5165880532" className="mt-3 inline-block font-sans text-lg font-semibold text-black transition hover:text-[#ec4899]">
              (516) 588-0532
            </a>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="tel:5165880532"
                className="inline-flex items-center justify-center rounded-[4px] bg-black px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#be185d]"
              >
                Call
              </a>
              <a
                href="sms:+15165880532"
                className="inline-flex items-center justify-center rounded-[4px] bg-black px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#be185d]"
              >
                Text
              </a>
            </div>
            <p className="mt-7 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-black/65">
              Follow Us
            </p>
            <div className="mt-3 flex items-center gap-4">
              <a
                href="https://www.instagram.com/lyfefitnessli/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/20 text-black/70 transition hover:border-black hover:text-black"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="https://www.facebook.com/lyfefitnessli"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/20 text-black/70 transition hover:border-black hover:text-black"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
          <div className="rounded-[24px] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.15)]">
            <GymneticsForm kind="crm" placement="inline" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <>
      <SiteNav />
      <main>
      <Hero />
      <TrustBar />
      <FirstVisit />
      <Difference />
      <Programs />
      <Testimonials />
      <LocationContact />
      <LeadForm />
      </main>
      <SiteFooter />
    </>
  );
}
