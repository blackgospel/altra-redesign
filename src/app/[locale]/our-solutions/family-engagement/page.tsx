import { Benefits, CustomerStory } from "@/components/sections/our-solutions";
import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";
import { HowItWorks } from "@/components/sections/our-solutions/how-it-works";
import {
  SpotlightGrid,
  SpotlightItem,
} from "@/components/sections/our-solutions/spotlight-grid";

export default function FamilyEngagementPage() {
  const spotlightItems: SpotlightItem[] = [
    {
      id: "stronger-bonds",
      icon: "users",
      iconBgColor: "rgba(203, 110, 226, 0.9)",
    },
    {
      id: "reduce-complaints",
      icon: "checkbox",
      iconBgColor: "#ED4789",
    },
    {
      id: "real-time-visibility",
      icon: "graphic",
      iconBgColor: "#00D39C",
    },
    {
      id: "improve-satisfaction",
      icon: "smile",
      iconBgColor: "#4DA8DA",
    },
    {
      id: "demonstrate-communication",
      icon: "communication",
      iconBgColor: "#BDD86C",
    },
  ];

  return (
    <>
      <OurSolutionsHero slug="familyEngagement" />

      <SpotlightGrid
        translationKey="ourSolutions.familyEngagement.spotlight"
        items={spotlightItems}
        gridClass="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        button={{
          translationKey: "cta",
          showNote: true,
        }}
        className="pt-24"
      />

      <HowItWorks
        translationKey="ourSolutions.familyEngagement.howItWorks"
        className="pt-24"
      />

      <Benefits
        translationKey="ourSolutions.familyEngagement.benefits"
        className="pt-24"
      />

      <CustomerStory
        translationKey="ourSolutions.familyEngagement.customerStory"
        className="pt-24"
      />
    </>
  );
}
