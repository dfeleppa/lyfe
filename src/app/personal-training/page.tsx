import ServicePage from "../components/ServicePage";
import { pageMetadata } from "@/lib/metadata";

const description = "One-on-one personal training at Lyfe Fitness in Oceanside, NY. Get individualized progressions, closer accountability, and coaching focused on your goals.";

export const metadata = pageMetadata("Personal Training in Oceanside, NY | Lyfe Fitness", description, "/personal-training");

export default function PersonalTrainingPage() {
  return (
    <ServicePage title="Personal training in Oceanside, NY." name="Personal Training" path="/personal-training" description={description}>
      <section>
        <h2>Coaching focused on your next step</h2>
        <p>Personal training offers one-on-one sessions for members who want more individualized progressions, closer accountability, or extra support around a specific goal. Working directly with a coach gives you space to ask questions, focus on technique, and discuss what you want from your training.</p>
        <p>Whether you are finding your starting point or looking for more individual attention, begin by telling us about your experience, priorities, and availability. We can talk through whether personal training fits what you need.</p>
      </section>
      <section>
        <h2>Personal training or group fitness?</h2>
        <p>Our <a href="/group-fitness">group fitness classes</a> combine a structured workout with the energy of training alongside other members. Personal training gives you one-on-one coaching and more individualized progressions. If you are unsure which approach to choose, contact us and explain what you would like help with.</p>
      </section>
      <section>
        <h2>Ask about availability and pricing</h2>
        <p>Call <a href="tel:5165880532">(516) 588-0532</a> or email <a href="mailto:daniel@trainlyfe.com?subject=Personal%20training%20inquiry">daniel@trainlyfe.com</a> to discuss personal training, current availability, and pricing. Let us know your goals and the days and times that usually work for you.</p>
        <p>For general membership information, visit our <a href="/pricing">membership and pricing page</a>. Personal training details can be discussed directly with the team.</p>
      </section>
      <section>
        <h2>Visit our Oceanside location</h2>
        <p>Find Lyfe Fitness at 445 Merrick Road, Oceanside, NY 11572. We have moved from Baldwin to Oceanside. Use our <a href="/location">location page for hours and directions</a>, and contact us to arrange your visit.</p>
      </section>
    </ServicePage>
  );
}
