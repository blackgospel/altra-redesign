import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";

export default function NewslettersPage() {
  return (
    <>
      <OurSolutionsHero
        slug="newsletters"
        slots={{
          blob1: {
            className: "bg-lime",
          },
          blob2: {
            className: "bg-violet",
          },
        }}
        className="bg-pink"
      />
    </>
  );
}
