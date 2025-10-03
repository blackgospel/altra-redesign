"use client";

import { ArrowRight, Check2 } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ChecklistBackdrop } from "./_checklist-backdrop";

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
}

interface ChecklistProps extends React.HTMLAttributes<HTMLElement> {
  slug:
    | "elderlycare"
    | "ldSupportedLiving"
    | "independentLiving"
    | "dayServicesRespiteOutpatient";
}

export function Checklist({ slug, className, ...props }: ChecklistProps) {
  const t = useTranslations("whoWeServe");

  const title = t(`${slug}.checklist.title`);
  const ctaText = t(`${slug}.checklist.ctaText`);
  const items = t.raw(`${slug}.checklist.items`) as ChecklistItem[];

  return (
    <section
      className={cn(
        "@container/who-we-serve flex flex-col relative w-full",
        className
      )}
      {...props}
    >
      <div className="altra-container pl-0! pr-0! @lg/who-we-serve:pl-4! @lg/who-we-serve:pr-4! overflow-hidden">
        <div className="relative flex flex-col w-full text-white">
          <ChecklistBackdrop />
          <div className="relative z-10 px-6 pt-12 md:p-10 lg:p-16">
            <div className="flex flex-wrap gap-8 lg:gap-16 items-center">
              <div className="flex flex-col gap-8 items-center @lg/who-we-serve:items-start @lg/who-we-serve:flex-4">
                <Typography variant="h3" className="text-center lg:text-left">
                  {title}
                </Typography>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-6">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-5 items-start text-white"
                      >
                        <Check2 className="min-w-6 min-h-" stroke="#8265d4" />
                        <div className="flex flex-col gap-1">
                          <Typography variant="title-l-medium">
                            {item.title}
                          </Typography>
                          <Typography variant="text-xl">
                            {item.description}
                          </Typography>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="md"
                    variant="white"
                    className="self-center @lg/who-we-serve:self-start"
                  >
                    {ctaText}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-1 @lg/who-we-serve:flex-2">
                <div className="relative w-full aspect-[286/585] mt-[-90%] @lg/who-we-serve:mt-0">
                  <Image
                    src="/images/who-we-serve/checklist/who-we-serve-checklist-splash.png"
                    alt="What You Can Achieve"
                    width={286}
                    height={585}
                    className="object-contain absolute bottom-[-40%] @lg/who-we-serve:bottom-auto @lg/who-we-serve:top-[50%] @lg/who-we-serve:translate-y-[-50%] left-[50%] translate-x-[-50%]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
