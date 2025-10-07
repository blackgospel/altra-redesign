"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbProps,
} from "@/components/ui/breadcrumb";
import { Typography } from "@/components/ui/typography";
import { heightTopOffsetClassName } from "@/config/header";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface DataSecurityHeroProps extends React.ComponentProps<"section"> {
  slots?: {
    breadcrumb?: Partial<BreadcrumbProps>;
  };
}

export function DataSecurityHero({
  slots,
  className,
  ...props
}: DataSecurityHeroProps) {
  const t = useTranslations("dataSecurity.hero");

  const content = {
    title: t("title"),
    lastUpdated: t("lastUpdated"),
  };

  const breadcrumbItems: BreadcrumbItem[] = [{ label: "Data Security" }];

  return (
    <section
      className={cn(
        "w-full relative overflow-hidden text-white h-auto",
        className
      )}
      style={{
        paddingTop: heightTopOffsetClassName(40),
      }}
      {...props}
    >
      <div className="altra-container">
        <div className="relative z-10 flex flex-col justify-center mb-[100px] md:mb-[120px] lg:mb-[140px] xl:mb-[150px] 2xl:mb-[180px]">
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
                <Typography variant="h2">{content.title}</Typography>
                <Typography variant="text-xl" className="opacity-80">
                  {content.lastUpdated}
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <svg
            className="w-full h-[20px] md:h-[60px] lg:h-[80px] xl:h-[150px] 2xl:h-[180px]"
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
      </div>
    </section>
  );
}
