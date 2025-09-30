"use client";

import { Breadcrumb, BreadcrumbProps } from "@/components/ui/breadcrumb";
import { Typography } from "@/components/ui/typography";
import { heightTopOffsetClassName } from "@/config/header";
import { cn, omitClassName } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface OurSolutionsHeroProps extends React.ComponentProps<"section"> {
  slug:
    | "familyEngagement"
    | "newsletters"
    | "activityCalendar"
    | "voiceAssistants"
    | "surveys"
    | "wellbeingLibrary"
    | "menu"
    | "contentLibraries"
    | "concierge"
    | "groupIntelligence"
    | "brandedApp"
    | "staffEngagement"
    | "digitalSignage"
    | "workflow";
  slots?: {
    blob1?: React.ComponentProps<"div">;
    blob2?: React.ComponentProps<"div">;
    breadcrumb?: Partial<BreadcrumbProps>;
  };
}

export function OurSolutionsHero({
  slug,
  slots,
  ...props
}: OurSolutionsHeroProps) {
  const t = useTranslations("ourSolutions");
  const headerT = useTranslations("header.nav.our-solutions.items");

  const content = {
    subtitle: t(`${slug}.hero.subtitle`),
    title: t(`${slug}.hero.title`),
    description: t(`${slug}.hero.description`),
  };

  // Convert camelCase to kebab-case for header translation key
  const kebabSlug = slug
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/^-/, "");

  const breadcrumbItems: BreadcrumbItem[] = [{ label: headerT(kebabSlug) }];

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
          <div className="flex flex-col gap-16 pb-32">
            {breadcrumbItems.length > 0 && (
              <div className="flex justify-center lg:justify-start">
                <Breadcrumb
                  items={breadcrumbItems}
                  variant="white"
                  {...slots?.breadcrumb}
                />
              </div>
            )}

            <div className="flex flex-col gap-4 max-w-[849px] mx-auto">
              <Typography variant="caption-m" className="uppercase">
                {content.subtitle}
              </Typography>
              <Typography variant="h2">{content.title}</Typography>
              <Typography variant="text-xl" className="max-w-[849px] mx-auto">
                {content.description}
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div
          className={cn(
            "absolute w-[7%] aspect-square opacity-70",
            "bottom-[8%] md:bottom-[10%] left-[3%] md:left-[3%]",
            "min-w-[60px] max-w-[110px]",
            slots?.blob1?.className
          )}
          style={{
            borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
          }}
          {...omitClassName(slots?.blob1)}
        />
        <div
          className={cn(
            "absolute w-[9%] aspect-square opacity-90",
            "bottom-[6%] md:bottom-[8%] left-[8%] md:left-[6%]",
            "min-w-[75px] max-w-[140px]",
            slots?.blob2?.className
          )}
          style={{
            borderRadius: "54% 46% 38% 62% / 49% 65% 35% 51%",
          }}
          {...omitClassName(slots?.blob2)}
        />
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
