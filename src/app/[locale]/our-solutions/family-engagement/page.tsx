import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";

export default function FamilyEngagementPage() {
  return (
    <>
      <OurSolutionsHero
        slug="familyEngagement"
        slots={{
          blob1: {
            className: "bg-pink",
          },
          blob2: {
            className: "bg-purple",
          },
        }}
        className="bg-light-blue"
      />
    </>
  );
}
