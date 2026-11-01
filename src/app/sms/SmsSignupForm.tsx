"use client";

import { useState } from "react";

const linkClass = "text-[#f472b6] underline underline-offset-4";
const buttonClass = "inline-flex rounded-full bg-[#f472b6] px-6 py-3 font-semibold text-black transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export default function SmsSignupForm() {
  const [phone, setPhone] = useState("");
  const [informational, setInformational] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [error, setError] = useState("");
  const [choice, setChoice] = useState<{ phone: string; informational: boolean; marketing: boolean } | null>(null);

  if (choice) {
    const any = choice.informational || choice.marketing;
    return (
      <section className="mt-10 rounded-2xl border border-white/15 bg-white/[0.04] p-6 md:p-8" aria-live="polite">
        <h2 className="font-display text-3xl">{any ? "Step 2: Confirm from your phone" : "No texts selected"}</h2>
        {any ? (
          <>
            <p className="mt-5 text-sm leading-7 text-white/80">Use <strong>{choice.phone}</strong> to send the keyword for each category you chose to <strong>(516) 862-4888</strong>. You are not subscribed until you send the keyword. Opening a draft does not send it.</p>
            <ul className="mt-5 space-y-5">
              {choice.informational && <li><p className="mb-3">Reminders &amp; support: send <strong>START</strong>.</p><a className={buttonClass} href="sms:+15168624888?body=START">Open START text for reminders</a></li>}
              {choice.marketing && <li><p className="mb-3">Offers &amp; gym news: send <strong>YES</strong>.</p><a className={buttonClass} href="sms:+15168624888?body=YES">Open YES text for offers</a></li>}
            </ul>
            <p className="mt-5 text-sm leading-7 text-white/80">If you selected both, send two separate messages. Use the mobile line shown above if your phone has more than one line. We record consent for the number that actually sends the keyword, then confirm receipt by text. A coach reviews the choice before program messages begin.</p>
            <p className="mt-4 text-sm leading-7 text-white/80">Message frequency varies. Message and data rates may apply. Reply STOP to cancel all program texts or HELP for help. <a href="/privacy-policy" className={linkClass}>Privacy Policy</a> · <a href="/sms-terms" className={linkClass}>SMS Terms</a></p>
          </>
        ) : <p className="mt-5 text-sm leading-7 text-white/80">You have not subscribed to any texts. You can still <a href="/pricing" className={linkClass}>get pricing</a> or <a href="/#trial" className={linkClass}>book a trial</a>.</p>}
        <button type="button" className="mt-6 text-sm underline underline-offset-4" onClick={() => setChoice(null)}>Change my choices</button>
      </section>
    );
  }

  return (
    <form className="mt-10 space-y-6" onSubmit={(event) => {
      event.preventDefault();
      const digits = phone.replace(/\D/g, "");
      const normalized = digits.length === 10 ? `+1${digits}` : digits.length === 11 && digits.startsWith("1") ? `+${digits}` : "";
      if ((informational || marketing) && !normalized) {
        setError("Enter the 10-digit mobile number you will use to send your confirmation text.");
        return;
      }
      setError("");
      setChoice({ phone: normalized, informational, marketing });
    }}>
      <div>
        <h2 className="font-display text-3xl">Step 1: Choose your categories</h2>
        <p className="mt-4 text-sm leading-7 text-white/80">Enter the mobile number you will text from and choose either, both, or neither category below. Continue to see the keyword instructions for your choices. Your number stays in this page until you send a text; this form alone does not enroll you.</p>
        <label className="mt-5 block font-semibold" htmlFor="sms-mobile">Mobile number for this signup</label>
        <input id="sms-mobile" name="phone" type="tel" autoComplete="tel" placeholder="(516) 555-0123" value={phone} onChange={(event) => setPhone(event.target.value)} aria-describedby="sms-mobile-help sms-form-error" className="mt-2 w-full rounded-xl border border-white/25 bg-black/30 px-4 py-3 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f472b6]" />
        <p id="sms-mobile-help" className="mt-2 text-xs leading-6 text-white/60">Needed only if you choose a text category. Use a number you are authorized to use.</p>
      </div>
      <fieldset className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 md:p-8">
        <legend className="px-2 font-display text-2xl">Optional: Appointment reminders &amp; support</legend>
        <label className="flex items-start gap-3 text-sm leading-7 text-white/80">
          <input name="informationalConsent" type="checkbox" checked={informational} onChange={(event) => setInformational(event.target.checked)} className="mt-2 h-5 w-5 shrink-0 accent-[#f472b6]" />
          <span>I agree to receive recurring automated informational texts from Lyfe Fitness about my trial or appointments and membership support at the mobile number above. This does not give consent to marketing texts. Consent is optional and is not a condition of purchase or membership. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe from all program texts or HELP for help.</span>
        </label>
        <p className="mt-4 text-sm leading-7"><a href="/privacy-policy" className={linkClass}>Privacy Policy</a> · <a href="/sms-terms" className={linkClass}>SMS Terms</a></p>
        <p className="mt-4 text-sm leading-7 text-white/70">Complete this choice by texting START to (516) 862-4888 from that mobile number. UNSTOP is an alternative keyword for this informational category.</p>
      </fieldset>
      <fieldset className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 md:p-8">
        <legend className="px-2 font-display text-2xl">Optional: Offers &amp; gym news</legend>
        <label className="flex items-start gap-3 text-sm leading-7 text-white/80">
          <input name="marketingConsent" type="checkbox" checked={marketing} onChange={(event) => setMarketing(event.target.checked)} className="mt-2 h-5 w-5 shrink-0 accent-[#f472b6]" />
          <span>I agree to receive recurring automated marketing texts from Lyfe Fitness about promotional offers, membership opportunities, events and gym news at the mobile number above. This is a separate choice from appointment reminders and support. Consent is optional and is not a condition of purchase or membership. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe from all program texts or HELP for help.</span>
        </label>
        <p className="mt-4 text-sm leading-7"><a href="/privacy-policy" className={linkClass}>Privacy Policy</a> · <a href="/sms-terms" className={linkClass}>SMS Terms</a></p>
        <p className="mt-4 text-sm leading-7 text-white/70">Complete this choice by separately texting YES to (516) 862-4888 from that mobile number. Sending YES does not subscribe you to appointment reminders.</p>
      </fieldset>
      <p id="sms-form-error" role="alert" className="text-sm text-rose-300">{error}</p>
      <button type="submit" className={buttonClass}>Continue to keyword confirmation</button>
    </form>
  );
}
