import {
  Clients,
  Hero,
  HeroImage,
  HowWeHelp,
  WhoWeServe,
} from "@/components/sections/home";
import { ReadyToTransform } from "@/components/sections/home/ready-to-transform";
import { WhatOurPartnersSay } from "@/components/sections/home/what-our-partners-say";
import { WhatYouCanAchieve } from "@/components/sections/home/what-you-can-achieve";
import { heightTopOffsetClassName } from "@/config/header";

export default function Home() {
  return (
    <main
      style={{
        paddingTop: heightTopOffsetClassName(),
      }}
    >
      <Hero className="altra-container pt-14 lg:pt-36" />

      <Clients className="altra-container pt-12" />

      <HeroImage className="container mx-auto pt-16 md:pt-24" />

      <WhoWeServe className="altra-container pt-24" />

      <HowWeHelp className="altra-container pt-36" />

      <WhatYouCanAchieve className="pt-24" />

      <WhatOurPartnersSay className="altra-container pt-24" />

      <ReadyToTransform />
    </main>
  );
}
