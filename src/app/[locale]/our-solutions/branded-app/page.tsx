import { Benefits, CustomerStory } from "@/components/sections/our-solutions";
import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";
import { HowItWorks } from "@/components/sections/our-solutions/how-it-works";
import { SpotlightGrid } from "@/components/sections/our-solutions/spotlight-grid";

export default function BrandedAppPage() {
  return (
    <>
      <OurSolutionsHero slug="brandedApp" />

      <SpotlightGrid
        translationKey="ourSolutions.brandedApp.spotlight"
        gridClass="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6"
        className="pt-24"
      />

      <HowItWorks
        translationKey="ourSolutions.brandedApp.howItWorks"
        className="pt-24"
      />

      <Benefits
        translationKey="ourSolutions.brandedApp.benefits"
        className="pt-24"
      />

      <CustomerStory
        translationKey="ourSolutions.brandedApp.customerStory"
        className="pt-24"
      />
    </>
  );
}
