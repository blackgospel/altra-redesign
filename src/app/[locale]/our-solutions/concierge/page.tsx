import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";

export default function ConciergePage() {
  return (
    <>
      <OurSolutionsHero
        slug="concierge"
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
