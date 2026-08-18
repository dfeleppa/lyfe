import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

const benefits = [
  {
    title: "You never have to guess what to do",
    body: "Walking into a gym without a plan can make training feel complicated. In a coached group setting, the session is already organized for you. A coach explains the goal, teaches the movements, and helps you choose an appropriate pace or variation.",
  },
  {
    title: "Accountability becomes part of the experience",
    body: "Consistency is easier when people notice that you showed up. Coaches and training partners learn your name, celebrate progress, and help you regain momentum when life interrupts your routine. That support turns exercise from a solo obligation into a shared commitment.",
  },
  {
    title: "The environment feels more welcoming",
    body: "A strong community gym brings together people with different ages, backgrounds, and experience levels. Everyone can work toward an individual goal while still sharing the energy of the room. New members get guidance instead of being left to figure everything out alone.",
  },
  {
    title: "Your training stays varied and purposeful",
    body: "Thoughtful programming can combine strength, conditioning, mobility, and skill work across the week. Variety keeps sessions engaging, while a consistent coaching approach helps you build competence rather than simply chasing random workouts.",
  },
  {
    title: "Progress becomes easier to recognize",
    body: "Progress is more than a number on a scale. Better technique, heavier lifts, improved endurance, more energy, and greater confidence all matter. Regular coaching gives you useful feedback and helps you notice improvements that are easy to miss on your own.",
  },
];

export default function CommunityFitnessArticlePage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <SiteNav />

      <article>
        <header className="border-b border-white/10 pt-36 md:pt-44">
          <div className="mx-auto max-w-4xl px-6 pb-16 md:px-12 md:pb-20">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#f472b6]">
              Coaching · Results · Community
            </p>
            <h1 className="mt-5 font-display text-[clamp(2.8rem,7vw,5.6rem)] leading-[0.95] tracking-tight text-white">
              What are the benefits of joining a community-based fitness gym?
            </h1>
            <p className="mt-7 max-w-2xl font-sans text-base leading-8 text-white/65 md:text-lg">
              The best training plan is one you can follow consistently. A community-based gym combines expert guidance with the relationships and accountability that make showing up easier.
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-6 py-16 md:px-12 md:py-24">
          <div className="space-y-12">
            {benefits.map((benefit, index) => (
              <section key={benefit.title} className="border-t border-white/10 pt-10 first:border-t-0 first:pt-0">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f472b6]">
                  Benefit {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-display text-3xl leading-tight text-white md:text-4xl">{benefit.title}</h2>
                <p className="mt-5 max-w-3xl font-sans text-[15px] leading-8 text-white/72 md:text-base">{benefit.body}</p>
              </section>
            ))}
          </div>

          <section className="mt-16 border border-white/10 bg-white/[0.04] p-7 text-center md:p-10">
            <h2 className="font-display text-3xl text-white md:text-4xl">Experience the difference for yourself.</h2>
            <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-7 text-white/65 md:text-base">
              Lyfe Fitness offers coach-led group training for people who want structure, progress, and a community that makes fitness more enjoyable.
            </p>
            <a
              href="/#trial"
              data-open-crm-popup="true"
              className="mt-7 inline-flex items-center rounded-[4px] bg-[#ec4899] px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-[#db2777]"
            >
              Start Your Free Week
            </a>
          </section>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
