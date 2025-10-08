"use client";

import { ArrowRight, Check2 } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { WhatYouCanAchieveBackdrop } from "./_what-you-can-achieve-backdrop";

type WhatYouCanAchieveProps = React.ComponentProps<"section">;

export function WhatYouCanAchieve({
  className,
  ...props
}: WhatYouCanAchieveProps) {
  const t = useTranslations("home.achieve");

  return (
    <section className={cn("@container/achieve", className)} {...props}>
      <div className="altra-container pl-0! pr-0! @md/achieve:pl-4! @md/achieve:pr-4!">
        <div className="relative flex overflow-hidden @md/achieve:rounded-[15px] shadow-[0_4px_50px_rgba(135,105,220,0.15)]">
          <WhatYouCanAchieveBackdrop />

          <div className="relative z-10 flex-1 flex flex-col gap-10 px-4 pt-[50px] text-white @md/achieve:px-10 @lg/achieve:flex-row">
            <div className="flex flex-1 flex-col gap-10 @md/achieve:pb-10">
              <div className="flex flex-col gap-5 @md/achieve:gap-8">
                <Typography variant="h3">{t("title")}</Typography>

                <div className="flex flex-col gap-5">
                  {t.raw("bullets").map((item: string) => (
                    <div key={item} className="flex items-center gap-[15px]">
                      <Check2 className="size-6 shrink-0" stroke="#8265D4" />
                      <Typography variant="title-m">{item}</Typography>
                    </div>
                  ))}
                </div>
              </div>

              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Link href={t("ctaLink") as any}>
                <Button
                  variant="white"
                  size="md"
                  className="flex w-full items-center gap-3 @md/achieve:w-auto @md/achieve:self-start"
                >
                  {t("cta")}
                  <ArrowRight className="size-5" />
                </Button>
              </Link>
            </div>

            <div className="relative flex min-h-0 flex-1">
              <Image
                src={t("splashImage")}
                alt={t("title")}
                fill
                className="relative @md/achieve:absolute object-contain mt-[5px] hidden @md/achieve:block"
                priority
              />

              <Image
                src={t("splashImage")}
                alt={t("title")}
                width={532}
                height={556}
                className="relative @md/achieve:absolute object-contain mt-[5px] @md/achieve:hidden"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
