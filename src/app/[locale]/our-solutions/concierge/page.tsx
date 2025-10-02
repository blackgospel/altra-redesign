import { Benefits } from "@/components/sections/our-solutions/benefits";
import { CustomerStory } from "@/components/sections/our-solutions/customer-story";
import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";
import { HowItWorks } from "@/components/sections/our-solutions/how-it-works";
import {
  SpotlightGrid,
  SpotlightItem,
} from "@/components/sections/our-solutions/spotlight-grid";

export default function ConciergePage() {
  const spotlightItems: SpotlightItem[] = [
    {
      id: "offer-clear-centralised",
      icon: "users",
      iconBgColor: "rgba(203, 110, 226, 0.9)",
    },
    {
      id: "keep-teams-aligned",
      icon: "notes",
      iconBgColor: "#ED4789",
    },
    {
      id: "reduce-missed-requests",
      icon: "communication",
      iconBgColor: "#00D39C",
    },
    {
      id: "log-service-activity",
      icon: "graphic",
      iconBgColor: "#4DA8DA",
    },
    {
      id: "improve-satisfaction",
      icon: "smile",
      iconBgColor: "#BDD86C",
    },
  ];

  return (
    <>
      <OurSolutionsHero slug="concierge" />

      <SpotlightGrid
        translationKey="ourSolutions.concierge.spotlight"
        items={spotlightItems}
        gridClass="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        className="pt-24"
      />

      <HowItWorks
        translationKey="ourSolutions.concierge.howItWorks"
        className="pt-24"
      />

      <Benefits
        translationKey="ourSolutions.concierge.benefits"
        className="pt-24"
      />

      <CustomerStory
        translationKey="ourSolutions.concierge.customerStory"
        className="pt-24 pb-20"
      />
    </>
  );
}
