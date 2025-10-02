import { Benefits } from "@/components/sections/our-solutions/benefits";
import { CustomerStory } from "@/components/sections/our-solutions/customer-story";
import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";
import { HowItWorks } from "@/components/sections/our-solutions/how-it-works";
import {
  SpotlightGrid,
  SpotlightItem,
} from "@/components/sections/our-solutions/spotlight-grid";

export default function SurveysPage() {
  const spotlightItems: SpotlightItem[] = [
    {
      id: "collect-feedback",
      icon: "messageOne",
      iconBgColor: "rgba(203, 110, 226, 0.9)",
    },
    {
      id: "identify-trends",
      icon: "graphic",
      iconBgColor: "#ED4789",
    },
    {
      id: "improve-communication",
      icon: "communication",
      iconBgColor: "#00D39C",
    },
    {
      id: "offer-accessible",
      icon: "notes",
      iconBgColor: "#4DA8DA",
    },
    {
      id: "centralise-activity",
      icon: "dashboard",
      iconBgColor: "#BDD86C",
    },
  ];

  return (
    <>
      <OurSolutionsHero slug="surveys" />

      <SpotlightGrid
        translationKey="ourSolutions.surveys.spotlight"
        items={spotlightItems}
        gridClass="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        className="pt-24"
      />

      <HowItWorks
        translationKey="ourSolutions.surveys.howItWorks"
        className="pt-24"
      />

      <Benefits
        translationKey="ourSolutions.surveys.benefits"
        className="pt-24"
      />

      <CustomerStory
        translationKey="ourSolutions.surveys.customerStory"
        className="pt-24 pb-20"
      />
    </>
  );
}
