"use client";

import { ArrowRight } from "@/assets/icons/ArrowRight";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Link } from "@/i18n/navigation";
import { heightTopOffsetClassName } from "@/config/header";
import { cn, omitClassName } from "@/lib/utils";
import { useTranslations } from "next-intl";

type CustomerTestimonialsHeroProps = React.ComponentProps<"section">;

export function CustomerTestimonialsHero({
  className,
  ...props
}: CustomerTestimonialsHeroProps) {
  const t = useTranslations("customerTestimonials.hero");

  const content = {
    subtitle: t("subtitle"),
    title: t("title"),
    description: t("description"),
    ctaText: t("ctaText"),
    ctaLink: t("ctaLink"),
  };

  return (
    <section
      className={cn(
        "w-full relative overflow-hidden text-white h-auto bg-purple",
        className
      )}
      style={{
        paddingTop: heightTopOffsetClassName(40),
      }}
      {...omitClassName(props)}
    >
      <div className="relative z-10 altra-container flex flex-col justify-center mb-[100px] md:mb-[120px] lg:mb-[140px] xl:mb-[150px] 2xl:mb-[180px]">
        <div className="flex flex-col gap-6 text-center">
          <div className="flex flex-col gap-6 pb-40">
            <div className="flex flex-col gap-[15px] max-w-[849px] mx-auto">
              <div className="flex flex-col gap-[10px]">
                <Typography variant="caption-m" className="uppercase">
                  {content.subtitle}
                </Typography>
                <Typography variant="h2">{content.title}</Typography>
              </div>

              <Typography variant="text-xl">{content.description}</Typography>

              <div className="flex justify-center mt-[10px]">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <Link href={content.ctaLink as any}>
                  <Button variant="white" size="md">
                    {content.ctaText}
                    <ArrowRight className="size-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-[20px] md:h-[120px] lg:h-[140px] xl:h-[150px] 2xl:h-[180px]"
          viewBox="0 0 1400 180"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C350,120 1050,120 1400,0 L1400,180 L0,180 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
