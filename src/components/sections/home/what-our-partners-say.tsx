"use client";

import { SpeechMarks } from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

type WhatOurPartnersSayProps = React.ComponentProps<"section">;

export function WhatOurPartnersSay({
  className,
  ...props
}: WhatOurPartnersSayProps) {
  const t = useTranslations("home.testimonials");

  const items: Array<{ quote: string; name: string; role: string; avatar: string }> = t.raw("items");

  return (
    <section
      className={cn("flex flex-col items-center gap-10", className)}
      {...props}
    >
      <Typography variant="h3">{t("title")}</Typography>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {items.map((item, index) => (
          <article
            key={index}
            className="flex flex-col gap-6 p-5 rounded-xl bg-background-1 border border-line-4"
          >
            <SpeechMarks className="size-9 text-pink" />

            <Typography variant="text-xl" className="flex-1">
              {item.quote}
            </Typography>

            <div className="flex items-center gap-4">
              <div className="size-[55px] aspect-square rounded-full overflow-hidden relative">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="55px"
                />
              </div>
              <div className="flex flex-col">
                <Typography variant="title-m">
                  {item.name}
                </Typography>
                <Typography variant="text-l" className="text-dark-gray-40">
                  {item.role}
                </Typography>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
