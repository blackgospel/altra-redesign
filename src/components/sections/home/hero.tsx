"use client";

import { ArrowRight } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { SmartLink } from "@/components/ui/smart-link";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type HeroProps = React.ComponentProps<"section">;

export function Hero({ className, ...props }: HeroProps) {
  const t = useTranslations("home.hero");

  return (
    <section className={cn("@container/hero", className)} {...props}>
      <div className="flex flex-col items-center gap-[25px] @md/hero:gap-12">
        <div className="flex flex-col items-center gap-5 @md/hero:gap-8">
          <Typography variant="h1" className="text-center">
            {t("title")}
          </Typography>

          <Typography
            variant="subtitle-xl"
            className="w-full max-w-4xl text-center"
          >
            {t("subtitle")}
          </Typography>
        </div>
        <SmartLink href={t("ctaLink")}>
          <Button variant="primary" size="md" className="self-start">
            {t("cta")}
            <ArrowRight className="size-5" />
          </Button>
        </SmartLink>
      </div>
    </section>
  );
}
