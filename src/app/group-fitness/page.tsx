import ServicePage from "../components/ServicePage";
import { pageMetadata } from "@/lib/metadata";

const description = "Coach-led group fitness at Lyfe Fitness in Oceanside, NY. Build strength and conditioning with structured workouts, scaled movements, and a supportive community.";

export const metadata = pageMetadata("Group Fitness Classes in Oceanside, NY | Lyfe Fitness", description, "/group-fitness");

export default function GroupFitnessPage() {
  return (
    <ServicePage title="Group fitness in Oceanside, NY." name="Group Fitness" path="/group-fitness" description={description}>
      <section>
        <h2>A plan to follow. A coach to guide you.</h2>
        <p>Each class brings strength, cardio, and athletic conditioning into a coached session. You arrive with a workout to follow, instead of having to decide what to do on your own. Your coach explains the movements and helps you find a pace and variation that fit your experience.</p>
        <p>Programming connects strength, conditioning, recovery, and progression over time. The aim is to build a routine you can keep returning to, with guidance and training partners who make showing up easier.</p>
      </section>
      <section>
        <h2>Do I need experience to join?</h2>
        <p>No. Whether you are new to training or coming back after time away, movements can be scaled to your starting point. Tell your coach about your experience and goals so you can find an appropriate place to begin.</p>
        <p>If you prefer one-on-one attention or want extra support toward a particular goal, explore <a href="/personal-training">personal training</a> as well.</p>
      </section>
      <section>
        <h2>Find a class that fits your week</h2>
        <p>Check our <a href="/schedule">current class schedule</a> for session times and our <a href="/pricing">membership and pricing page</a> for options. Read more about <a href="/what-are-the-benefits-of-joining-a-community-based-fitness-gym">training in a community-based gym</a> if you are comparing a coached class with training on your own.</p>
      </section>
      <section>
        <h2>Try your first class in Oceanside</h2>
        <p>Lyfe Fitness is at 445 Merrick Road, Oceanside, NY 11572. We previously trained in Baldwin and now welcome members at our Oceanside location. Find <a href="/location">hours and directions</a> before your visit.</p>
        <p>Start with a free intro class: fill out the signup form, then choose your intro class time on the next page. <a href="/#trial" data-open-crm-popup="true">Book your free intro class</a> or call <a href="tel:5165880532">(516) 588-0532</a> with questions.</p>
      </section>
    </ServicePage>
  );
}
