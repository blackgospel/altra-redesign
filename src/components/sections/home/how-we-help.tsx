import { ArrowRight } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { HOW_WE_HELP } from "@/config/home";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { SectionTitle } from "./_section-title";

export function HowWeHelp() {
  const t = useTranslations("home.howWeHelp");
  return (
    <div className="flex flex-col gap-12">
      <SectionTitle title={t("title")} description={t("description")} />

      <div className="flex flex-col gap-12 md:gap-32">
        {HOW_WE_HELP.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse ${
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-6 lg:gap-12 items-center`}
          >
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <Typography variant="h4">
                  {t(`items.${item.slug}.title`)}
                </Typography>

                <Typography variant="text-xl" className="text-dark-gray-40">
                  {t(`items.${item.slug}.description`)}
                </Typography>
              </div>

              <Button variant="outline" size="sm" className="self-start">
                {t("cta", { default: "Learn more" })}
                <ArrowRight className="size-5" />
              </Button>
            </div>

            <div className="relative aspect-[689/500] w-full lg:w-auto flex-1 xl:flex-none">
              <Image
                src={item.image}
                alt={t(`items.${item.slug}.title`)}
                width={689}
                height={500}
                priority
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
