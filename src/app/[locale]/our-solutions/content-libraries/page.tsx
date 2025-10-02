import { Benefits } from "@/components/sections/our-solutions/benefits";
import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";
import { HowItWorks } from "@/components/sections/our-solutions/how-it-works";
import {
  SpotlightGrid,
  SpotlightItem,
} from "@/components/sections/our-solutions/spotlight-grid";

export default function ContentLibrariesPage() {
  const spotlightItems: SpotlightItem[] = [
    {
      id: "0",
      icon: "users",
      iconBgColor: "rgba(203, 110, 226, 0.9)",
    },
    {
      id: "1",
      icon: "document",
      iconBgColor: "#ED4789",
    },
    {
      id: "2",
      icon: "communication",
      iconBgColor: "#00D39C",
    },
    {
      id: "3",
      icon: "aim",
      iconBgColor: "#4DA8DA",
    },
    {
      id: "4",
      icon: "dashboard",
      iconBgColor: "#BDD86C",
    },
  ];

  return (
    <>
      <OurSolutionsHero slug="contentLibraries" />

      <SpotlightGrid
        translationKey="ourSolutions.contentLibraries.spotlight"
        items={spotlightItems}
        gridClass="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        className="pt-24"
      />

      <HowItWorks
        translationKey="ourSolutions.contentLibraries.howItWorks"
        className="pt-24"
      />

      <Benefits
        translationKey="ourSolutions.contentLibraries.benefits"
        className="pt-24 pb-20"
      />
    </>
  );
}
