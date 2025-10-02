import { Benefits, CustomerStory } from "@/components/sections/our-solutions";
import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";
import { HowItWorks } from "@/components/sections/our-solutions/how-it-works";
import { SpotlightGrid } from "@/components/sections/our-solutions/spotlight-grid";

export default function FamilyEngagementPage() {
  return (
    <>
      <OurSolutionsHero slug="familyEngagement" />

      <SpotlightGrid
        translationKey="ourSolutions.familyEngagement.spotlight"
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
