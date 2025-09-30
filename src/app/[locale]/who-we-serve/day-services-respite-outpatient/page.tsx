import { SectionTitle } from "@/components/sections/home/_section-title";
import { useTranslations } from "next-intl";

export default function DayServicesRespiteOutpatientPage() {
  const t = useTranslations(
    "home.whoWeServe.items.day-services-respite-outpatient"
  );
  return (
    <section className="altra-container pt-24">
      <SectionTitle title={t("title")} description={t("description")} />
    </section>
  );
}
