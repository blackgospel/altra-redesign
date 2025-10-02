import { Benefits } from "@/components/sections/our-solutions/benefits";
import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";
import { HowItWorks } from "@/components/sections/our-solutions/how-it-works";
import { SpotlightGrid } from "@/components/sections/our-solutions/spotlight-grid";

export default function ContentLibrariesPage() {
  return (
    <>
      <OurSolutionsHero slug="contentLibraries" />

      <SpotlightGrid
        translationKey="ourSolutions.contentLibraries.spotlight"
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
