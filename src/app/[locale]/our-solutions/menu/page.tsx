import { Benefits } from "@/components/sections/our-solutions/benefits";
import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";
import { HowItWorks } from "@/components/sections/our-solutions/how-it-works";
import { SpotlightGrid } from "@/components/sections/our-solutions/spotlight-grid";

export default function MenuPage() {
  return (
    <>
      <OurSolutionsHero slug="menu" />

      <SpotlightGrid
        translationKey="ourSolutions.menu.spotlight"
        gridClass="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
