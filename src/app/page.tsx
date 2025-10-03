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
      <Hero />

      <Clients />

      <HeroImage />

      <WhoWeServe />

      <HowWeHelp />

      <WhatYouCanAchieve />

      <WhatOurPartnersSay />

      <ReadyToTransform />
    </main>
  );
}
