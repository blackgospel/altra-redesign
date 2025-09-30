import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";

export default function WellbeingLibraryPage() {
  return (
    <>
      <OurSolutionsHero
        slug="wellbeingLibrary"
        slots={{
          blob1: {
            className: "bg-lime",
          },
          blob2: {
            className: "bg-pink",
          },
        }}
        className="bg-purple"
      />
    </>
  );
}
