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
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image, { ImageProps } from "next/image";
import React from "react";

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
    breadcrumb?: Partial<BreadcrumbProps>;
    visual?: React.ReactNode | Partial<ImageProps>;
  };
}

export function OurSolutionsHero({
  slug,
  slots,
  className,
  ...props
}: OurSolutionsHeroProps) {
  const t = useTranslations("ourSolutions");
  const headerT = useTranslations("header.nav.our-solutions.items");

  const content = {
    subtitle: t(`${slug}.hero.subtitle`),
    title: t(`${slug}.hero.title`),
    description: t(`${slug}.hero.description`),
    note: t(`${slug}.hero.note`),
    imagePath: t(`${slug}.hero.imagePath`),
  };

  const kebabSlug = slug
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/^-/, "");

  const breadcrumbItems: BreadcrumbItem[] = [{ label: headerT(kebabSlug) }];

  return (
    <section
      className={cn("w-full relative altra-container", className)}
      style={{
        paddingTop: heightTopOffsetClassName(40),
      }}
      {...props}
    >
      <div className="flex flex-col gap-14">
        {breadcrumbItems.length > 0 && (
          <Breadcrumb
            items={breadcrumbItems}
            variant="dark-gray"
            {...slots?.breadcrumb}
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Typography
                variant="caption-m"
                className="uppercase text-light-blue-70"
              >
                {content.subtitle}
              </Typography>
              <Typography variant="h2">{content.title}</Typography>
            </div>

            <Typography variant="text-xl">{content.description}</Typography>

            <div className="flex flex-col gap-4">
              <Button variant="primary" size="sm" className="self-start">
                Book a Demo
                <ArrowRight className="size-5" />
              </Button>
              <Typography variant="text-l" className="text-dark-gray-40">
                {content.note}
              </Typography>
            </div>
          </div>

          <div className="flex items-center justify-center aspect-[631/457] relative">
            {slots?.visual && React.isValidElement(slots?.visual) ? (
              slots.visual
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={content.imagePath}
                  alt={content.subtitle}
                  fill
                  className="object-contain"
                  {...(slots?.visual as Partial<ImageProps>)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
