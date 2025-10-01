import { WHO_WE_SERVE } from "@/config/home";
import { useTranslations } from "next-intl";
import { SectionTitle } from "../../global/section-title/section-title";
import { ServiceCard } from "./_service-card";

export function WhoWeServe() {
  const t = useTranslations("home.whoWeServe");

  return (
    <div className="flex flex-col gap-10">
      <SectionTitle title={t("title")} description={t("description")} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {WHO_WE_SERVE.map((service) => (
          <ServiceCard
            key={service.slug}
            title={t(`items.${service.slug}.title`)}
            description={t(`items.${service.slug}.description`)}
            image={t(`items.${service.slug}.imagePath`)}
          />
        ))}
      </div>
    </div>
  );
}
