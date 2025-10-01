import { Benefits, CustomerStory } from "@/components/sections/our-solutions";
import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";
import { HowItWorks } from "@/components/sections/our-solutions/how-it-works";
import {
  SpotlightGrid,
  SpotlightItem,
} from "@/components/sections/our-solutions/spotlight-grid";

export default function ActivityCalendarPage() {
  const spotlightItems: SpotlightItem[] = [
    {
      id: "time-planning",
      icon: "clock",
      iconBgColor: "rgba(203, 110, 226, 0.9)",
    },
    {
      id: "track-participation",
      icon: "smile",
      iconBgColor: "#ED4789",
    },
    {
      id: "print-calendars",
      icon: "calendar",
      iconBgColor: "#00D39C",
    },
    {
      id: "tailor-activities",
      icon: "graphic",
      iconBgColor: "#4DA8DA",
    },
    {
      id: "family-updates",
      icon: "messageOne",
      iconBgColor: "#BDD86C",
    },
  ];

  return (
    <>
      <OurSolutionsHero slug="activityCalendar" />

      <SpotlightGrid
        translationKey="ourSolutions.activityCalendar.spotlight"
        items={spotlightItems}
        gridClass="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
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
        className="pt-24"
      />
    </>
  );
}
