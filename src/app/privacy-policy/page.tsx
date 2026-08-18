import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

const linkClass = "text-[#f472b6] underline underline-offset-4 transition hover:text-white";

function PolicySection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/10 pt-10 first:border-t-0 first:pt-0">
      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f472b6]">
        Section {number}
      </p>
      <h2 className="mt-3 font-display text-3xl leading-tight text-white md:text-4xl">{title}</h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <SiteNav />

      <section className="border-b border-white/10 pt-36 md:pt-44">
        <div className="mx-auto max-w-4xl px-6 pb-14 md:px-12 md:pb-16">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#f472b6]">
            Legal
          </p>
          <h1 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.95] text-white">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-8 text-white/65">
            This policy explains what Lyfe Fitness collects, why we use it, and the choices available to you when you visit our website or contact us.
          </p>
          <p className="mt-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Effective and last updated: August 18, 2026
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <aside className="mb-12 border border-white/10 bg-white/[0.04] p-6 font-sans text-sm leading-7 text-white/65 md:p-8">
            <p className="font-semibold text-white">Who this policy covers</p>
            <p className="mt-2">
              This policy applies to the Lyfe Fitness marketing website at trainlyfe.com, the forms embedded on it, and communications that begin through the website. A member app, enrollment flow, or payment service may provide additional terms or notices when you use it.
            </p>
          </aside>

          <article className="space-y-12 font-sans text-sm leading-8 text-white/72 md:text-[15px]">
            <PolicySection number="01" title="Information we collect">
              <p>We may collect the following categories of information:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-[#f472b6]">
                <li>
                  <span className="font-semibold text-white">Information you provide:</span> your name, email address, phone number, referral source, questions, comments, fitness interests, and other details you choose to submit through a form, phone call, text, email, or in-person conversation.
                </li>
                <li>
                  <span className="font-semibold text-white">Membership and transaction information:</span> if you become a member, we or our membership, scheduling, and payment providers may collect account details, attendance information, purchases, billing details, and payment status. Lyfe Fitness does not receive or store your complete payment-card number through this marketing website.
                </li>
                <li>
                  <span className="font-semibold text-white">Website and device information:</span> internet protocol address, browser and device type, approximate location derived from your IP address, referring page, pages viewed, request timestamps, and diagnostic or security logs.
                </li>
                <li>
                  <span className="font-semibold text-white">Communication records:</span> the content and history of emails, calls, texts, form submissions, appointments, and your communication preferences.
                </li>
              </ul>
            </PolicySection>

            <PolicySection number="02" title="How we collect information">
              <p>
                We collect information directly from you when you submit a free-week or pricing form, contact us, schedule an appointment, create a membership account, or purchase services. We also receive limited technical information automatically from our hosting provider and from embedded services when your browser loads or interacts with them.
              </p>
              <p>
                If another person provides information about you, they are responsible for having permission to do so. Please do not submit sensitive medical or health information through the general website forms. Share health information with a coach only through the process Lyfe Fitness designates for that purpose.
              </p>
            </PolicySection>

            <PolicySection number="03" title="How we use information">
              <p>We use information as reasonably necessary to:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-[#f472b6]">
                <li>Respond to inquiries and provide pricing or membership information.</li>
                <li>Schedule introductions, consultations, classes, and other services.</li>
                <li>Create and manage memberships, provide coaching, process payments, and maintain business records.</li>
                <li>Send service-related messages and, where permitted, promotional communications.</li>
                <li>Operate, secure, troubleshoot, and improve our website, services, and customer experience.</li>
                <li>Measure interest in our services and evaluate marketing performance.</li>
                <li>Prevent fraud, enforce agreements, protect safety and legal rights, and comply with applicable law.</li>
              </ul>
            </PolicySection>

            <PolicySection number="04" title="Calls, texts, and email">
              <p>
                When you ask us to contact you, we may respond by phone, text, or email using the information you provide. If a form separately asks for consent to marketing calls or texts, that consent is governed by the disclosure shown with the form. This privacy policy does not itself create consent to receive marketing messages.
              </p>
              <p>
                Where applicable, consent to marketing messages is not a condition of purchasing services. Message frequency may vary, and message and data rates may apply. You may opt out of marketing texts by replying <span className="font-semibold text-white">STOP</span> and request help by replying <span className="font-semibold text-white">HELP</span>. You may unsubscribe from marketing emails using the link in the message or by contacting us. We may still send non-promotional messages about an active membership, appointment, transaction, safety issue, or request you made.
              </p>
              <p>
                Mobile information and text-message opt-in data will not be sold or shared with third parties for their own marketing. We may provide it to telecommunications carriers, messaging aggregators, and service providers only as needed to deliver and support the messaging program or as required by law.
              </p>
            </PolicySection>

            <PolicySection number="05" title="When we disclose information">
              <p>
                We do not sell personal information for money. We may disclose information to the following categories of recipients for the purposes described in this policy:
              </p>
              <ul className="list-disc space-y-2 pl-6 marker:text-[#f472b6]">
                <li>
                  <span className="font-semibold text-white">Form, CRM, and communication providers,</span> including GymnTX and its HighLevel/LeadConnector infrastructure, which host forms and help us manage leads, appointments, email, calls, and text messages. See the{" "}
                  <a href="https://www.gohighlevel.com/privacy-policy" target="_blank" rel="noreferrer" className={linkClass}>
                    HighLevel Privacy Policy
                  </a>.
                </li>
                <li>
                  <span className="font-semibold text-white">Hosting and infrastructure providers,</span> including Vercel, which may process request, device, security, and diagnostic information to deliver the website. See the{" "}
                  <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noreferrer" className={linkClass}>
                    Vercel Privacy Notice
                  </a>.
                </li>
                <li>
                  <span className="font-semibold text-white">Embedded-content providers,</span> including Google for Maps and font delivery. These services may receive technical information when their content loads. See the{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className={linkClass}>
                    Google Privacy Policy
                  </a>.
                </li>
                <li>
                  <span className="font-semibold text-white">Membership, scheduling, billing, and payment providers</span> used to administer services after you enroll.
                </li>
                <li>
                  <span className="font-semibold text-white">Professional advisers and authorities</span> when reasonably necessary for accounting, insurance, legal compliance, safety, fraud prevention, or the protection of rights.
                </li>
                <li>
                  <span className="font-semibold text-white">A successor organization</span> in connection with a merger, financing, reorganization, sale, or transfer of all or part of the business, subject to appropriate protections.
                </li>
              </ul>
              <p>
                Service providers may use information only to perform services for us or as otherwise permitted by their agreements and applicable law. Some providers may process information outside New York or outside the United States.
              </p>
            </PolicySection>

            <PolicySection number="06" title="Cookies and embedded services">
              <p>
                The website and its embedded forms, map, fonts, and infrastructure may use cookies, pixels, local storage, or similar technologies to provide functionality, remember preferences, prevent fraud, diagnose problems, and understand usage. Because the forms and map are provided in embedded frames, those providers may receive information as though you visited their services directly.
              </p>
              <p>
                You can limit cookies through your browser settings, although parts of the website or embedded forms may not work correctly. The site is not currently configured with Lyfe Fitness advertising pixels or cross-context behavioral advertising. If that changes, we will update this policy and provide any notice or choice required by law.
              </p>
            </PolicySection>

            <PolicySection number="07" title="Retention and security">
              <p>
                We retain personal information only for as long as reasonably necessary for the purposes described above, including providing services, maintaining membership and transaction records, honoring communication choices, resolving disputes, enforcing agreements, and meeting legal, tax, accounting, or safety obligations. Retention periods vary by the type of record and our relationship with you.
              </p>
              <p>
                We use reasonable administrative, technical, and physical safeguards designed to protect personal information. No website, transmission, or storage system can be guaranteed to be completely secure, so we cannot promise absolute security.
              </p>
            </PolicySection>

            <PolicySection number="08" title="Your choices and privacy requests">
              <p>
                Depending on where you live, you may have rights concerning your personal information, such as requesting access, correction, deletion, or a copy, or withdrawing consent where processing is based on consent. You may also ask us to update your communication preferences.
              </p>
              <p>
                To make a request, email{" "}
                <a href="mailto:daniel@trainlyfe.com" className={linkClass}>
                  daniel@trainlyfe.com
                </a>. We may need to verify your identity and may retain information when permitted or required by law. We will not discriminate against you for exercising an applicable privacy right.
              </p>
            </PolicySection>

            <PolicySection number="09" title="Children and minors">
              <p>
                The website and its lead forms are not directed to children under 13, and we do not knowingly collect personal information from children under 13 through them. A parent or legal guardian should contact us before providing information about a minor or enrolling a minor in services. If you believe a child under 13 submitted information without appropriate permission, contact us so we can address it.
              </p>
            </PolicySection>

            <PolicySection number="10" title="External links and services">
              <p>
                The website links to third-party services, including our member application, maps, and social-media pages. Those services operate under their own terms and privacy notices. Lyfe Fitness is not responsible for the independent privacy practices of a third party that is not processing information on our behalf.
              </p>
            </PolicySection>

            <PolicySection number="11" title="Policy updates">
              <p>
                We may update this policy as our website, services, providers, or legal obligations change. The effective date at the top shows when the policy was most recently revised. We will provide additional notice when required by law.
              </p>
            </PolicySection>

            <PolicySection number="12" title="Contact Lyfe Fitness">
              <p>Questions, requests, or concerns about this policy may be directed to:</p>
              <address className="not-italic text-white/85">
                <span className="font-semibold text-white">Lyfe Fitness</span>
                <br />
                851 Merrick Rd
                <br />
                Baldwin, NY 11510
                <br />
                <a href="mailto:daniel@trainlyfe.com" className={linkClass}>
                  daniel@trainlyfe.com
                </a>
                <br />
                <a href="tel:5165880532" className={linkClass}>
                  (516) 588-0532
                </a>
              </address>
            </PolicySection>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
