import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";

export default function StaffEngagementPage() {
  return (
    <>
      <OurSolutionsHero
        slug="staffEngagement"
        slots={{
          blob1: {
            className: "bg-lime",
          },
          blob2: {
            className: "bg-pink",
          },
        }}
        className="bg-violet"
      />
    </>
  );
}
