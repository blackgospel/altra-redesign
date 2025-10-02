import { Benefits } from "@/components/sections/our-solutions/benefits";
import { OurSolutionsHero } from "@/components/sections/our-solutions/hero";
import { HowItWorks } from "@/components/sections/our-solutions/how-it-works";
import {
  SpotlightGrid,
  SpotlightItem,
} from "@/components/sections/our-solutions/spotlight-grid";

export default function VoiceAssistantsPage() {
  const spotlightItems: SpotlightItem[] = [
    {
      id: "offer-intuitive",
      icon: "messageOne",
      iconBgColor: "rgba(203, 110, 226, 0.9)",
    },
    {
      id: "improve-independence",
      icon: "graphic",
      iconBgColor: "#ED4789",
    },
    {
      id: "reduce-queries",
      icon: "aim",
      iconBgColor: "#00D39C",
    },
    {
      id: "manage-devices",
      icon: "voice",
      iconBgColor: "#4DA8DA",
    },
    {
      id: "position-forward",
      icon: "rocket",
      iconBgColor: "#BDD86C",
    },
  ];

  return (
    <>
      <OurSolutionsHero slug="voiceAssistants" />

      <SpotlightGrid
        translationKey="ourSolutions.voiceAssistants.spotlight"
        items={spotlightItems}
        gridClass="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        className="pt-24"
      />

      <HowItWorks
        translationKey="ourSolutions.voiceAssistants.howItWorks"
        className="pt-24"
      />

      <Benefits
        translationKey="ourSolutions.voiceAssistants.benefits"
        className="pt-24 pb-20"
      />
    </>
  );
}
