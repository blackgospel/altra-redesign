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

export default function Home() {
  return (
    <main>
      <section className="altra-container pt-36">
        <Hero />
      </section>

      <section className="altra-container pt-12">
        <Clients />
      </section>

      <section className="container mx-auto pt-24 px-4">
        <HeroImage />
      </section>

      <section className="altra-container pt-24">
        <WhoWeServe />
      </section>

      <section className="altra-container pt-36">
        <HowWeHelp />
      </section>

      <section className="altra-container pt-24">
        <WhatYouCanAchieve />
      </section>

      <section className="altra-container pt-24">
        <WhatOurPartnersSay />
      </section>

      <section className="w-full pt-24">
        <ReadyToTransform />
      </section>
    </main>
  );
}
