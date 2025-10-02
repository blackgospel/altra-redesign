import { Benefits } from "@/components/sections/our-solutions/benefits";
import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";
import { HowItWorks } from "@/components/sections/our-solutions/how-it-works";
import {
  SpotlightGrid,
  SpotlightItem,
} from "@/components/sections/our-solutions/spotlight-grid";

export default function MenuPage() {
  const spotlightItems: SpotlightItem[] = [
    {
      id: "0",
      icon: "notes",
      iconBgColor: "rgba(203, 110, 226, 0.9)",
    },
    {
      id: "1",
      icon: "food",
      iconBgColor: "#ED4789",
    },
    {
      id: "2",
      icon: "smile",
      iconBgColor: "#00D39C",
    },
    {
      id: "3",
      icon: "food",
      iconBgColor: "#4DA8DA",
    },
  ];

  return (
    <>
      <OurSolutionsHero slug="menu" />

      <SpotlightGrid
        translationKey="ourSolutions.menu.spotlight"
        items={spotlightItems}
        gridClass="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        className="pt-24"
      />

      <HowItWorks
        translationKey="ourSolutions.menu.howItWorks"
        className="pt-24"
      />

      <Benefits
        translationKey="ourSolutions.menu.benefits"
        className="pt-24 pb-20"
      />
    </>
  );
}
