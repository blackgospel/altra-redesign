import { Benefits } from "@/components/sections/our-solutions/benefits";
import { CustomerStory } from "@/components/sections/our-solutions/customer-story";
import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";
import { HowItWorks } from "@/components/sections/our-solutions/how-it-works";
import { SpotlightGrid } from "@/components/sections/our-solutions/spotlight-grid";

export default function ConciergePage() {
  return (
    <>
      <OurSolutionsHero slug="concierge" />

      <SpotlightGrid
        translationKey="ourSolutions.concierge.spotlight"
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
