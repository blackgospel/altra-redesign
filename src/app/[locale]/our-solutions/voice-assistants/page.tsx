import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";

export default function VoiceAssistantsPage() {
  return (
    <>
      <OurSolutionsHero
        slug="voiceAssistants"
        slots={{
          blob1: {
            className: "bg-violet",
          },
          blob2: {
            className: "bg-pink",
          },
        }}
        className="bg-lime"
      />
    </>
  );
}
