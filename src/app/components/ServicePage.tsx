import type { ReactNode } from "react";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import { SITE_URL } from "@/lib/site";

type Props = {
  title: string;
  name: string;
  path: string;
  description: string;
  children: ReactNode;
};

export default function ServicePage({ title, name, path, description, children }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    name,
    description,
    url: `${SITE_URL}${path}`,
    serviceType: name,
    provider: { "@id": `${SITE_URL}/#gym` },
    areaServed: { "@type": "Place", name: "Oceanside, NY" },
  };

  return (
    <>
      <SiteNav />
      <main className="min-h-screen bg-[#07070a] text-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
        <article className="mx-auto max-w-5xl px-6 pb-20 pt-36 md:px-12 md:pt-44">
          <nav aria-label="Breadcrumb" className="text-sm text-white/70">
            <a href="/" className="underline underline-offset-4">Home</a>
            <span aria-hidden="true"> / </span><span aria-current="page">{name}</span>
          </nav>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-[#f472b6]">Lyfe Fitness · Oceanside, NY</p>
          <h1 className="mt-5 font-display text-4xl leading-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">{description}</p>
          <div className="mt-12 max-w-3xl space-y-10 [&_h2]:font-display [&_h2]:text-3xl [&_p]:mt-4 [&_p]:leading-8 [&_p]:text-white/75 [&_a]:text-[#f472b6] [&_a]:underline [&_a]:underline-offset-4">
            {children}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
