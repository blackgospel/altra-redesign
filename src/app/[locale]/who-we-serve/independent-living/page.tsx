import { SectionTitle } from "@/components/sections/home/_section-title";
import { useTranslations } from "next-intl";

export default function IndependentLivingPage() {
  const t = useTranslations("home.whoWeServe.items.independent-living");
  return (
    <section className="altra-container pt-24">
      <SectionTitle title={t("title")} description={t("description")} />
    </section>
  );
}
