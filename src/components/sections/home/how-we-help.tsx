"use client";

import { ArrowRight } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { SectionTitle } from "../../global/section-title/section-title";

type HowWeHelpProps = React.ComponentProps<"section">;

export function HowWeHelp({ className, ...props }: HowWeHelpProps) {
  const t = useTranslations("home.howWeHelp");

  const items: Array<{ title: string; description: string; imagePath: string; ctaLink: string }> = t.raw("items");

  return (
    <section className={cn("", className)} {...props}>
      <div className="flex flex-col gap-12">
        <SectionTitle title={t("title")} description={t("description")} />

        <div className="flex flex-col gap-12 md:gap-32">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-6 lg:gap-12 items-center`}
            >
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <Typography variant="h4">
                    {item.title}
                  </Typography>

                  <Typography variant="text-xl" className="text-dark-gray-40">
                    {item.description}
                  </Typography>
                </div>

                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <Link href={item.ctaLink as any}>
                  <Button variant="outline" size="sm" className="self-start">
                    {t("cta")}
                    <ArrowRight className="size-5" />
                  </Button>
                </Link>
              </div>

              <div className="relative aspect-[689/500] w-full lg:w-auto flex-1 xl:flex-none">
                <Image
                  src={item.imagePath}
                  alt={item.title}
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
    </section>
  );
}
