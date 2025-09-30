import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";

export default function BrandedAppPage() {
  return (
    <>
      <OurSolutionsHero
        slug="brandedApp"
        slots={{
          blob1: {
            className: "bg-pink",
          },
          blob2: {
            className: "bg-violet",
          },
        }}
        className="bg-light-blue"
      />
    </>
  );
}
