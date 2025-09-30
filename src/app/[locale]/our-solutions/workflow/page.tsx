import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";

export default function WorkflowPage() {
  return (
    <>
      <OurSolutionsHero
        slug="workflow"
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
