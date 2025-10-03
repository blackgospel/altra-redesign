import { Benefits, CustomerStory } from "@/components/sections/our-solutions";
import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";
import { HowItWorks } from "@/components/sections/our-solutions/how-it-works";
import { SpotlightGrid } from "@/components/sections/our-solutions/spotlight-grid";

export default function ActivityCalendarPage() {
  return (
    <main>
      <OurSolutionsHero slug="activityCalendar" />

      <SpotlightGrid
        translationKey="ourSolutions.activityCalendar.spotlight"
        gridClass="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6"
        className="pt-24"
      />

      <HowItWorks
        translationKey="ourSolutions.activityCalendar.howItWorks"
        className="pt-24"
      />

      <Benefits
        translationKey="ourSolutions.activityCalendar.benefits"
        className="pt-24"
      />

      <CustomerStory
        translationKey="ourSolutions.activityCalendar.customerStory"
        className="pt-0 lg:pt-24"
      />
    </main>
  );
}
