import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";

export default function SurveysPage() {
  return (
    <>
      <OurSolutionsHero
        slug="surveys"
        slots={{
          blob1: {
            className: "bg-pink",
          },
          blob2: {
            className: "bg-lime",
          },
        }}
        className="bg-violet"
      />
    </>
  );
}
