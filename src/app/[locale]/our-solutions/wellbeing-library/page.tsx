import { Benefits } from "@/components/sections/our-solutions/benefits";
import { CustomerStory } from "@/components/sections/our-solutions/customer-story";
import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";
import { HowItWorks } from "@/components/sections/our-solutions/how-it-works";
import {
  SpotlightGrid,
  SpotlightItem,
} from "@/components/sections/our-solutions/spotlight-grid";

export default function WellbeingLibraryPage() {
  const spotlightItems: SpotlightItem[] = [
    {
      id: "offer-consistent",
      icon: "graphic",
      iconBgColor: "rgba(203, 110, 226, 0.9)",
    },
    {
      id: "stimulate-residents",
      icon: "smile",
      iconBgColor: "#ED4789",
    },
    {
      id: "reduce-burden",
      icon: "aim",
      iconBgColor: "#00D39C",
    },
    {
      id: "build-inclusive",
      icon: "calendar",
      iconBgColor: "#4DA8DA",
    },
    {
      id: "support-residents",
      icon: "users",
      iconBgColor: "#BDD86C",
    },
  ];

  return (
    <>
      <OurSolutionsHero slug="wellbeingLibrary" />

      <SpotlightGrid
        translationKey="ourSolutions.wellbeingLibrary.spotlight"
        items={spotlightItems}
        gridClass="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        className="pt-24"
      />

      <HowItWorks
        translationKey="ourSolutions.wellbeingLibrary.howItWorks"
        className="pt-24"
      />

      <Benefits
        translationKey="ourSolutions.wellbeingLibrary.benefits"
        className="pt-24"
      />

      <CustomerStory
        translationKey="ourSolutions.wellbeingLibrary.customerStory"
        className="pt-24 pb-20"
      />
    </>
  );
}
