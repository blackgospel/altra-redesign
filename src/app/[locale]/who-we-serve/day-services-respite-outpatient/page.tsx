import { AboutGrid } from "@/components/sections/who-we-serve/about-grid";
import { Checklist } from "@/components/sections/who-we-serve/checklist";
import { CTA } from "@/components/sections/who-we-serve/cta";
import { WhoWeServeHero } from "@/components/sections/who-we-serve/hero";

export default function DayServicesRespiteOutpatientPage() {
  return (
    <>
      <WhoWeServeHero
        slug="dayServicesRespiteOutpatient"
        slots={{
          blob1: {
            className: "bg-pink",
          },
          blob2: {
            className: "bg-purple",
          },
          breadcrumb: {
            className: "text-dark-gray-100",
            variant: "dark-gray",
          },
        }}
        className="bg-light-blue-20 text-dark-gray-100"
      />
      <AboutGrid slug="dayServicesRespiteOutpatient" className="pt-6" />
      <Checklist slug="dayServicesRespiteOutpatient" className="pt-24" />
      <CTA slug="dayServicesRespiteOutpatient" className="pt-24" />
    </>
  );
}
