"use client";

import { ArrowRight } from "@/assets/icons/ArrowRight";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbProps,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { heightTopOffsetClassName } from "@/config/header";
import { cn, omitClassName } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface OurMissionHeroProps extends React.ComponentProps<"section"> {
  slots?: {
    breadcrumb?: Partial<BreadcrumbProps>;
  };
}

export function OurMissionHero({ slots, ...props }: OurMissionHeroProps) {
  const t = useTranslations("ourMission.hero");
  const headerT = useTranslations("header.nav");

  const content = {
    subtitle: t("subtitle"),
    title: t("title"),
    description: t("description"),
    ctaText: t("ctaText"),
  };

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: headerT("our-mission.label") },
  ];

  return (
    <section
      className={cn(
        "w-full relative overflow-hidden text-white h-auto",
        props.className
      )}
      style={{
        paddingTop: heightTopOffsetClassName(40),
      }}
      {...omitClassName(props)}
    >
      <div className="relative z-10 altra-container flex flex-col justify-center mb-[100px] md:mb-[120px] lg:mb-[140px] xl:mb-[150px] 2xl:mb-[180px]">
        <div className="flex flex-col gap-6 text-center">
          <div className="flex flex-col gap-6 pb-10">
            {breadcrumbItems.length > 0 && (
              <div className="flex justify-center lg:justify-start">
                <Breadcrumb
                  items={breadcrumbItems}
                  variant="white"
                  {...slots?.breadcrumb}
                />
              </div>
            )}

            <div className="flex flex-col gap-[15px] max-w-[849px] mx-auto">
              <div className="flex flex-col gap-[10px]">
                <Typography variant="caption-m" className="uppercase">
                  {content.subtitle}
                </Typography>
                <Typography variant="h2">{content.title}</Typography>
              </div>
              <Typography variant="text-xl">{content.description}</Typography>
              <div className="flex justify-center mt-[10px]">
                <Button variant="white" size="md">
                  {content.ctaText}
                  <ArrowRight className="size-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-[100px] md:h-[120px] lg:h-[140px] xl:h-[150px] 2xl:h-[180px]"
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
