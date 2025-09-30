import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";

export default function GroupIntelligencePage() {
  return (
    <>
      <OurSolutionsHero
        slug="groupIntelligence"
        slots={{
          blob1: {
            className: "bg-violet",
          },
          blob2: {
            className: "bg-lime",
          },
        }}
        className="bg-pink"
      />
    </>
  );
}
