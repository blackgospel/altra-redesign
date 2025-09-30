import { AboutGrid } from "@/components/sections/who-we-serve/about-grid";
import { Checklist } from "@/components/sections/who-we-serve/checklist";
import { CTA } from "@/components/sections/who-we-serve/cta";
import { WhoWeServeHero } from "@/components/sections/who-we-serve/hero";

export default function LdSupportedLivingPage() {
  return (
    <>
      <WhoWeServeHero
        slug="ldSupportedLiving"
        slots={{
          blob1: {
            className: "bg-violet",
          },
          blob2: {
            className: "bg-lime",
          },
        }}
        className="bg-light-blue-60"
      />
      <AboutGrid slug="ldSupportedLiving" className="pt-6" />
      <Checklist slug="ldSupportedLiving" className="pt-24" />
      <CTA slug="ldSupportedLiving" className="pt-24" />
    </>
  );
}
