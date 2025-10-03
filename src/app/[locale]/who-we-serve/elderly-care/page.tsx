import { AboutGrid } from "@/components/sections/who-we-serve/about-grid";
import { Checklist } from "@/components/sections/who-we-serve/checklist";
import { CTA } from "@/components/sections/who-we-serve/cta";
import { WhoWeServeHero } from "@/components/sections/who-we-serve/hero";

export default function ElderlyCarePage() {
  return (
    <main>
      <WhoWeServeHero
        slug="elderlycare"
        slots={{
          blob1: {
            className: "bg-violet",
          },
          blob2: {
            className: "bg-lime",
          },
        }}
        className="bg-purple"
      />
      <AboutGrid slug="elderlycare" className="pt-6" />
      <Checklist slug="elderlycare" className="pt-24" />
      <CTA slug="elderlycare" className="pt-24" />
    </main>
  );
}
