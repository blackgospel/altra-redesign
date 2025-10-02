import { CustomerStory } from "@/components/sections/our-solutions";
import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";
import { HowItWorks } from "@/components/sections/our-solutions/how-it-works";
import {
  SpotlightGrid,
  SpotlightItem,
} from "@/components/sections/our-solutions/spotlight-grid";

export default function NewslettersPage() {
  const spotlightItems: SpotlightItem[] = [
    {
      id: "deliver-memories",
      icon: "smile",
      iconBgColor: "rgba(203, 110, 226, 0.9)",
    },
    {
      id: "craft-newsletters",
      icon: "notes",
      iconBgColor: "#ED4789",
    },
    {
      id: "consistent-brand",
      icon: "aim",
      iconBgColor: "#00D39C",
    },
    {
      id: "shared-moments",
      icon: "handshake",
      iconBgColor: "#4DA8DA",
    },
    {
      id: "foster-relationships",
      icon: "users",
      iconBgColor: "#C5E461",
    },
    {
      id: "inspection-evidence",
      icon: "communication",
      iconBgColor: "#9B8FEF",
    },
  ];

  return (
    <>
      <OurSolutionsHero slug="newsletters" />

      <SpotlightGrid
        translationKey="ourSolutions.newsletters.spotlight"
        items={spotlightItems}
        gridClass="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        button={{
          translationKey: "cta",
          showNote: true,
        }}
        className="pt-24"
      />

      <HowItWorks
        translationKey="ourSolutions.newsletters.howItWorks"
        className="pt-24"
      />

      <CustomerStory
        translationKey="ourSolutions.newsletters.customerStory"
        className="pt-24"
      />
    </>
  );
}
