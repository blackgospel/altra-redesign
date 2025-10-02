import { Benefits } from "@/components/sections/our-solutions";
import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";
import { HowItWorks } from "@/components/sections/our-solutions/how-it-works";
import { SpotlightGrid } from "@/components/sections/our-solutions/spotlight-grid";

export default function WorkflowPage() {
  return (
    <>
      <OurSolutionsHero slug="workflow" />
      <SpotlightGrid
        translationKey="ourSolutions.workflow.spotlight"
        gridClass="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        className="pt-24"
      />
      <HowItWorks
        translationKey="ourSolutions.workflow.howItWorks"
        className="pt-24"
      />
      <Benefits
        translationKey="ourSolutions.workflow.benefits"
        className="pt-24 pb-20"
      />
    </>
  );
}
