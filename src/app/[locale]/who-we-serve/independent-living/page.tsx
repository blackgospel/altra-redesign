import { AboutGrid } from "@/components/sections/who-we-serve/about-grid";
import { Checklist } from "@/components/sections/who-we-serve/checklist";
import { CTA } from "@/components/sections/who-we-serve/cta";
import { WhoWeServeHero } from "@/components/sections/who-we-serve/hero";

export default function IndependentLivingPage() {
  return (
    <>
      <WhoWeServeHero
        slug="independentLiving"
        slots={{
          blob1: {
            className: "bg-light-blue-30",
          },
          blob2: {
            className: "bg-yellow-20",
          },
        }}
        className="bg-dark-navy-40"
      />
      <AboutGrid slug="independentLiving" className="pt-12 lg:pt-6" />
      <Checklist slug="independentLiving" className="pt-24" />
      <CTA slug="independentLiving" className="pt-0 lg:pt-24" />
    </>
  );
}
