import Image from "next/image";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <SiteNav />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-36 md:pb-24 md:pt-44">
        <Image
          src="/hero2.jpg"
          alt="Lyfe Fitness members training"
          fill
          priority
          quality={60}
          sizes="100vw"
          className="z-0 object-cover opacity-60"
        />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_32%),linear-gradient(180deg,rgba(7,7,9,0.2)_0%,rgba(7,7,9,0.95)_72%,rgba(7,7,9,1)_100%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#f472b6]">
            Membership & Pricing
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] font-normal leading-[0.92] tracking-tighter text-white">
            Simple plans.<br />
            <em className="text-[#ec4899]">No contracts.</em>
          </h1>
          <p className="mt-8 max-w-xl font-sans text-base leading-8 text-white/60 md:text-lg">
            Pick the membership that fits how often you want to train. Memberships start at $120 per month with flexible month-to-month billing.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="relative flex min-w-0 flex-col rounded-none border border-[#ec4899]/40 bg-[#FFFFFF0D] p-6 shadow-[0_0_60px_rgba(236,72,153,0.08)] sm:p-10 md:p-12">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-white/65">
                Membership
              </p>
              <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[0.95] text-white">
                Lyfe Membership
              </h2>
              <p className="mt-4 font-sans text-base text-white/70">Starting at</p>
              <p className="mt-1 font-display text-[clamp(3rem,6vw,4.5rem)] font-normal leading-none text-white">
                $120<span className="ml-2 font-sans text-base text-white/70">/mo</span>
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "Flexible & Unlimited Plans",
                  "Coach-led group sessions",
                  "Access to all class types",
                  "Beginner-friendly onboarding",
                  "Nutrition Consulting (add-on)",
                  "Personal Programming (add-on)",
                  "1:1 Private Sessions (add-on)",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 font-sans text-sm text-white/78">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ec4899]/15 text-[#ec4899]">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="/#trial"
                data-open-pricing-popup="true"
                className="mt-10 inline-flex items-center justify-center rounded-[4px] bg-[#be185d] px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-[#9d174d]"
              >
                Get Pricing
              </a>

              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
                  Simple, flexible billing
                </p>
                <p className="mt-2 font-sans text-sm leading-7 text-white/70">
                  Memberships are billed month to month with no sign-up fee or long-term commitment. Prefer to pay ahead? Discounted prepaid options are also available.
                </p>
              </div>
            </div>

            <div className="relative flex min-w-0 flex-col rounded-[28px] border border-white/10 bg-[#FFFFFF0D] p-6 sm:p-10 md:p-12">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-white/65">
                Start Here
              </p>
              <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[0.95] text-white">
                Joining is Simple
              </h2>
              <p className="mt-4 font-sans text-sm leading-7 text-white/65">
                Three quick steps and you are in the room.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  {
                    step: "01",
                    title: "Let's Talk",
                    body: "We'll set up a quick call, or you can come in to meet the team - no pressure, just a real conversation to make sure we're the right fit for you.",
                  },
                  {
                    step: "02",
                    title: "Try It Out",
                    body: "Start with a free intro class. Meet your coach, ask questions, and find the right starting point before joining a class.",
                  },
                  {
                    step: "03",
                    title: "Pick Your Plan",
                    body: "No complicated packages, no pushy sales pitch. Just choose the membership that fits your life and your goals - and we'll take it from there.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 border-t border-white/10 pt-6 first:border-t-0 first:pt-0">
                    <span className="font-sans text-xs font-semibold tracking-[0.24em] text-[#f472b6]">{item.step}</span>
                    <div className="min-w-0">
                      <p className="font-display text-2xl text-white">{item.title}</p>
                      <p className="mt-2 font-sans text-sm leading-7 text-white/65">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/#trial"
                data-open-crm-popup="true"
                className="mt-10 inline-flex items-center justify-center rounded-[4px] bg-[#be185d] px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-[#9d174d]"
              >
                Get Started
              </a>
            </div>
          </div>

          <p className="mt-10 text-center font-sans text-sm text-white/65">
            Memberships start at $120 per month. Month-to-month billing has no sign-up fee or long-term commitment; discounted prepaid options are also available.
          </p>
        </div>
      </section>

      {/* FAQ / note strip */}
      <section className="border-t border-black/10 bg-[#f5f0e8] py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex justify-center">
            {[
              { heading: "Questions?", body: "Reach out at daniel@trainlyfe.com or call (516) 588-0532 and we'll walk you through everything." },
            ].map((item) => (
              <div key={item.heading} className="max-w-2xl text-center">
                <h3 className="font-display text-2xl text-black">{item.heading}</h3>
                <p className="mt-3 font-sans text-sm leading-7 text-black/60">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
