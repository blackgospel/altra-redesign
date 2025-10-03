import { CustomerStory } from "@/components/sections/our-solutions";
import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";
import { HowItWorks } from "@/components/sections/our-solutions/how-it-works";
import { SpotlightGrid } from "@/components/sections/our-solutions/spotlight-grid";

export default function NewslettersPage() {
  return (
    <>
      <OurSolutionsHero slug="newsletters" />

      <SpotlightGrid
        translationKey="ourSolutions.newsletters.spotlight"
        gridClass="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
