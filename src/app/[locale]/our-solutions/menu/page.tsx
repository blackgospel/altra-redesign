import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";

export default function MenuPage() {
  return (
    <>
      <OurSolutionsHero
        slug="menu"
        slots={{
          blob1: {
            className: "bg-violet",
          },
          blob2: {
            className: "bg-lime",
          },
        }}
        className="bg-light-blue"
      />
    </>
  );
}
