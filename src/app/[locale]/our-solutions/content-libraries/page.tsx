import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";

export default function ContentLibrariesPage() {
  return (
    <>
      <OurSolutionsHero
        slug="contentLibraries"
        slots={{
          blob1: {
            className: "bg-pink",
          },
          blob2: {
            className: "bg-violet",
          },
        }}
        className="bg-lime"
      />
    </>
  );
}
