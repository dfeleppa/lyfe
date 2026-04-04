"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Membership & Pricing", href: "/pricing" },
  { label: "Schedule", href: "/schedule" },
  { label: "Location", href: "/#location" },
  { label: "Contact Us", href: "/#trial" },
  { label: "Member Login", href: "https://app.daneff.com" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "px-3 pt-3 md:px-6" : "px-0 pt-0"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl items-center justify-between border border-white/10 bg-black/70 px-6 py-4 backdrop-blur-xl transition-all duration-300 md:px-8 ${
          scrolled ? "rounded-[28px] shadow-[0_24px_80px_rgba(0,0,0,0.35)]" : "rounded-none border-x-0 border-t-0"
        }`}
      >
        <a href="/" className="flex items-center gap-4">
          <img src="/lflogo1.png" alt="Lyfe Fitness logo" className="h-10 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/#trial"
            data-open-crm-popup="true"
            className="hidden rounded-[4px] bg-pink-500 px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-pink-400 md:block"
          >
            Get Started
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-[4px] md:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className={`block h-px w-5 bg-white transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-white transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full flex flex-col gap-0 border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/8 px-6 py-5 font-sans text-sm uppercase tracking-widest text-white/60 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#trial"
            data-open-crm-popup="true"
            onClick={() => setOpen(false)}
            className="mx-6 my-4 rounded-[4px] bg-pink-500 px-6 py-3 text-center font-sans text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-black"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Nav />

      <section className="border-b border-white/10 pt-36 md:pt-44">
        <div className="mx-auto max-w-4xl px-6 pb-14 md:px-12 md:pb-16">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#f472b6]">
            Legal
          </p>
          <h1 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.95] text-white">
            Privacy Policy
          </h1>
          <p className="mt-5 font-sans text-sm text-white/55">
            Last updated: April 4, 2026
          </p>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <article className="space-y-8 font-sans text-sm leading-8 text-white/75">
            {/* PASTE YOUR PRIVACY POLICY TEXT BELOW THIS LINE */}
            <section>
              <h2 className="font-display text-3xl text-white">1. What Personal Data We Collect and Why</h2>

              <h3 className="mt-6 font-display text-2xl text-white">Comments</h3>
              <p className="mt-2">
                When visitors leave comments on the site, we collect the data shown in the comments form, and also the visitor&apos;s IP address and
                browser user agent string to help spam detection.
              </p>
              <p className="mt-2">
                An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are
                using it. The Gravatar service privacy policy is available at https://automattic.com/privacy/. After approval of your comment, your
                profile picture is visible to the public in the context of your comment.
              </p>

              <h3 className="mt-6 font-display text-2xl text-white">Media</h3>
              <p className="mt-2">
                If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to
                the website can download and extract any location data from images on the website.
              </p>

              <h3 className="mt-6 font-display text-2xl text-white">Contact Forms</h3>
              <p className="mt-2">
                Our contact forms collect your data only for the intent of following up with you if you show interest in joining our business as a
                paying client. We will not share your information with any third parties, and it will never be sold.
              </p>

              <h3 className="mt-6 font-display text-2xl text-white">Cookies</h3>
              <p className="mt-2">
                If you leave a comment on our site, you may opt in to saving your name, email address, and website in cookies. These are for your
                convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one
                year.
              </p>
              <p className="mt-2">
                If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no
                personal data and is discarded when you close your browser.
              </p>
              <p className="mt-2">
                When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies
                last for two days, and screen options cookies last for a year. If you select Remember Me, your login will persist for two weeks. If
                you log out of your account, the login cookies will be removed.
              </p>
              <p className="mt-2">
                If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and
                simply indicates the post ID of the article you just edited. It expires after one day.
              </p>

              <h3 className="mt-6 font-display text-2xl text-white">Embedded Content from Other Websites</h3>
              <p className="mt-2">
                Articles on this site may include embedded content (for example videos, images, and articles). Embedded content from other websites
                behaves in the exact same way as if the visitor has visited the other website.
              </p>
              <p className="mt-2">
                These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that
                embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that
                website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-white">2. Notice to Individual Clients</h2>
              <p className="mt-3">
                Your privacy is important to us, and maintaining your trust and confidence is one of our highest priorities. We respect your right to
                keep your personal information confidential and understand your desire to avoid unwanted solicitations. Providing personal information
                is an act of trust and it is taken seriously.
              </p>
              <p className="mt-2">
                Unless given consent to do otherwise, Lyfe Fitness will only collect and use personal information as set out below. We are disclosing
                this policy so that you have a better understanding of what we do with the information you provide and how we keep it private and
                secure. Except as otherwise described in this notice, we restrict access to nonpublic personal information about you to employees of
                our gym who must use that information to provide services to you.
              </p>
              <p className="mt-2">
                Thank you for allowing us to serve your fitness needs. We value your business and are committed to protecting your privacy. Please
                call us if you have any questions or if we can be of further service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-white">3. Types of Information We Collect</h2>
              <p className="mt-3">
                We collect certain personal and billing information about you only when that information is provided by you or obtained by us with
                your authorization. We use that information solely for the purpose of setting up your account in our business management software,
                which collects scheduled payments and supports merchandising.
              </p>
              <p className="mt-2">
                This information is required to set up an account with our facility and is used only to create your Lyfe Fitness membership. As a
                general rule, we do not disclose personal information about our clients or former clients to anyone for any reason without your
                consent or authorization.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-white">4. Using and Disclosing Your Personal Information</h2>
              <p className="mt-3">Personal information may be used for the following primary purposes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>To fulfill obligations under your membership agreement and/or any other contract between you and Lyfe Fitness.</li>
                <li>To render services under your membership agreement.</li>
                <li>To provide information about products, services, and/or special offers.</li>
                <li>To obtain opinions or comments about products and/or services.</li>
                <li>To record statistical data for marketing analysis.</li>
              </ul>
              <p className="mt-3">
                Lyfe Fitness may employ other companies or individuals to assist us in providing our services, or to provide certain services such as
                marketing assistance or consulting services. These third parties may have access to information needed to perform their function, but
                cannot use that information for other purposes.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-white">5. Service Providers</h2>
              <p className="mt-3">
                We use third-party business management software to bill you for services and an email service provider to send emails on our behalf.
                We may also use discussion board and forum software to give you an opportunity to communicate with other members while using our site.
                You will always be asked to sign up for any of our third-party software, and we do not give your information to them for any reason
                outside the services they provide.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-white">6. Access to Personal Information</h2>
              <p className="mt-3">
                If your collected information changes, or if you no longer desire our service, you may correct, update, and
                delete/deactivate it by emailing our customer support. We will respond to your request promptly.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-white">7. Storage and Security of Personal Information</h2>
              <p className="mt-3">
                Lyfe Fitness will take all reasonable steps to keep any recorded personal information secure and up to date. Information is stored on
                secure servers in digital format, or in locked areas if in hardcopy format. Lyfe Fitness employees are required to respect the
                confidentiality of personal information.
              </p>
              <p className="mt-2">
                However, security of communications over the internet cannot be guaranteed, and therefore absolute assurance that information will be
                secure at all times cannot be given. Lyfe Fitness will not be held responsible for events arising from unauthorized access to personal
                information.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl text-white">8. Links to Other Websites</h2>
              <p className="mt-3">
                Lyfe Fitness may provide links to websites outside of the Lyfe Fitness site. These linked sites are not under the control of Lyfe
                Fitness, and Lyfe Fitness is not responsible for the conduct of companies linked to the Lyfe Fitness website, nor for the performance
                or other handling of any content and/or software contained in such external websites.
              </p>
            </section>
            {/* PASTE YOUR PRIVACY POLICY TEXT ABOVE THIS LINE */}
          </article>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-sm">
              <img src="/lflogo1.png" alt="Lyfe Fitness logo" className="h-12 w-auto" />
              <p className="mt-5 font-sans text-sm leading-7 text-white/60">
                Coach-led group fitness for people who want structure, momentum, and a community that makes it fun.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-16 gap-y-4 lg:grid-cols-3 lg:gap-x-20">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-sans text-sm text-white/55 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a href="/privacy-policy" className="font-sans text-sm text-white/55 transition hover:text-white">
                Privacy Policy
              </a>
              <a href="/#trial" className="font-sans text-sm text-white/55 transition hover:text-white">
                Free Week
              </a>
            </div>

            <div className="space-y-2 font-sans text-sm text-white/55">
              <p>851 Merrick Rd, Baldwin, NY 11510</p>
              <p>
                <a href="tel:5165880532" className="transition hover:text-white">
                  Text/Call: (516) 588-0532
                </a>
              </p>
              <p>
                <a href="mailto:daniel@trainlyfe.com" className="transition hover:text-white">
                  daniel@trainlyfe.com
                </a>
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
            <p className="font-sans text-xs uppercase tracking-[0.22em] text-white/35">
              © {new Date().getFullYear()} Lyfe Fitness
            </p>
            <p className="font-sans text-xs uppercase tracking-[0.22em] text-white/35">
              Member login at <a href="https://app.daneff.com" className="transition hover:text-white/50">app.daneff.com</a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
