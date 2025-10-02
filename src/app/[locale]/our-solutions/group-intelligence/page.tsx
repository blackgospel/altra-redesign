import { Benefits, CustomerStory } from "@/components/sections/our-solutions";
import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";
import { HowItWorks } from "@/components/sections/our-solutions/how-it-works";
import { SpotlightGrid } from "@/components/sections/our-solutions/spotlight-grid";

export default function GroupIntelligencePage() {
  return (
    <>
      <OurSolutionsHero slug="groupIntelligence" />

      <SpotlightGrid
        translationKey="ourSolutions.groupIntelligence.spotlight"
        gridClass="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        className="pt-24"
      />

      <HowItWorks
        translationKey="ourSolutions.groupIntelligence.howItWorks"
        className="pt-24"
      />

      <Benefits
        translationKey="ourSolutions.groupIntelligence.benefits"
        className="pt-24"
      />

      <CustomerStory
        translationKey="ourSolutions.groupIntelligence.customerStory"
        className="pt-24"
      />
    </>
  );
}
