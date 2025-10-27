"use client";

import { ArrowRight, Check2 } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { cn, omitClassName } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { BenefitsBackdrop } from "./_benefits-backdrop";

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsProps extends React.HTMLAttributes<HTMLElement> {
  translationKey: string;
}

export function Benefits({ translationKey, ...props }: BenefitsProps) {
  const t = useTranslations(translationKey);
  const benefits = t.raw("benefits") as Benefit[];

  return (
    <section
      className={cn(
        "@container/benefits flex flex-col relative w-full",
        props.className
      )}
      {...omitClassName(props)}
    >
      <div className="altra-container pl-0! pr-0! @lg/benefits:pl-4! @lg/benefits:pr-4!">
        <div className="relative flex flex-col w-full text-white">
          <BenefitsBackdrop />
          <div className="relative z-10 p-6 md:p-10 lg:px-10 lg:py-12 pr-0!">
            <div className="flex flex-col gap-8 lg:gap-16 items-center">
              <Typography
                variant="h3"
                className="text-center lg:text-left pr-6"
              >
                {t("title")}
              </Typography>

              <div className="flex flex-col lg:flex-row gap-20 w-full">
                <div className="flex flex-col gap-8 flex-1 pr-6 lg:pr-0">
                  <div className="flex flex-col gap-6">
                    {benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex gap-5 items-start text-white"
                      >
                        <Check2 className="min-w-6 min-h-6" stroke="#8265d4" />
                        <div className="flex flex-col gap-1">
                          <Typography variant="title-l-medium">
                            {benefit.title}
                          </Typography>
                          <Typography variant="text-xl">
                            {benefit.description}
                          </Typography>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="md"
                    variant="white"
                    className="self-center lg:self-start"
                  >
                    {t("cta")}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>

                <div className="flex flex-1">
                  <div className="relative w-full aspect-[676/453] mb-16 lg:mb-0">
                    <Image
                      src={t("screenshot")}
                      alt={t("title")}
                      width={676}
                      height={453}
                      className="object-contain absolute inset-0 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
