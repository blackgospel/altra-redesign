import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";

export default function DigitalSignagePage() {
  return (
    <>
      <OurSolutionsHero
        slug="digitalSignage"
        slots={{
          blob1: {
            className: "bg-violet",
          },
          blob2: {
            className: "bg-lime",
          },
        }}
        className="bg-purple"
      />
    </>
  );
}
