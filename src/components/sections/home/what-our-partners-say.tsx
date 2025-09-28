import { SpeechMarks } from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import { TESTIMONIALS } from "@/config/home";
import Image from "next/image";

export function WhatOurPartnersSay() {
  return (
    <section className="flex flex-col items-center gap-10">
      <Typography variant="h3">What Our Partners Say</Typography>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {TESTIMONIALS.map((t) => (
          <article
            key={t.name}
            className="flex flex-col gap-6 p-5 rounded-xl bg-background-1 border border-line-4"
          >
            <SpeechMarks className="size-9 text-pink" />

            <Typography variant="text-xl" className="flex-1">
              {t.quote}
            </Typography>

            <div className="flex items-center gap-4">
              <div className="size-[55px] aspect-square rounded-full overflow-hidden relative">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <Typography variant="title-m">{t.name}</Typography>
                <Typography variant="text-l" className="text-dark-gray-40">
                  {t.role}
                </Typography>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
