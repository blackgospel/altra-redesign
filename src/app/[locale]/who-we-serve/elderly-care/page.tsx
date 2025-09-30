import { SectionTitle } from "@/components/sections/home/_section-title";
import { useTranslations } from "next-intl";

export default function ElderlyCarePage() {
  const t = useTranslations("home.whoWeServe.items.elderly-care");
  return (
    <section className="altra-container pt-24">
      <SectionTitle title={t("title")} description={t("description")} />
    </section>
  );
}
