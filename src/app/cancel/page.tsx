import { pageMetadata } from "@/lib/metadata";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

export const metadata = {
  ...pageMetadata(
    "Membership Cancellation | Lyfe Fitness",
    "Lyfe Fitness membership cancellation page. Contact our team for help with your membership.",
    "/cancel",
  ),
  robots: { index: false, follow: true },
};

export default function CancelPage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <SiteNav />
      <section className="mx-auto max-w-4xl px-6 pb-24 pt-36 md:px-12 md:pt-44">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f472b6]">
          Member support
        </p>
        <h1 className="mt-5 font-display text-5xl leading-tight md:text-6xl">
          Membership cancellation
        </h1>
        <div className="mt-8 border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <h2 className="font-display text-3xl">Coming soon.</h2>
          <p className="mt-4 text-lg leading-8 text-white/75">
            Our online cancellation page is being prepared. For help with your
            membership in the meantime, please contact our team.
          </p>
          <div className="mt-6 flex flex-col items-start gap-4 text-[#f472b6] sm:flex-row sm:gap-8">
            <a className="underline underline-offset-4 transition hover:text-white" href="mailto:daniel@trainlyfe.com">
              daniel@trainlyfe.com
            </a>
            <a className="underline underline-offset-4 transition hover:text-white" href="tel:5165880532">
              (516) 588-0532
            </a>
          </div>
          <p className="mt-6 text-sm leading-7 text-white/65">
            Visiting this page does not submit a cancellation request.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
