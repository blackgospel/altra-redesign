"use client";

import { SpeechMarks } from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { TeamBackdrop } from "./_team-backdrop";

interface TeamProps {
  className?: string;
}

export function Team({ className }: TeamProps) {
  const t = useTranslations("ourMission.team");

  const members = [0, 1];

  return (
    <section className={cn("relative overflow-hidden", className)}>
      <TeamBackdrop />

      <div className="altra-container relative z-10 py-20 flex flex-col gap-12">
        <div className="flex flex-1 flex-col items-center gap-5 text-center">
          <Typography variant="h3" className="text-white">
            {t("title")}
          </Typography>
          <Typography variant="subtitle-l" className="text-white">
            {t("description")}
          </Typography>
        </div>

        <div className="flex flex-col gap-9 lg:flex-row">
          {members.map((index) => (
            <div
              key={index}
              className="flex flex-1 flex-col gap-6 self-start rounded-[10px] border-[2.5px] border-line-5 bg-transparent p-7"
            >
              <div className="flex items-center gap-[25px]">
                <div className="relative h-[120px] w-[120px] flex-shrink-0 overflow-hidden rounded-full border border-light-gray-40">
                  <Image
                    src={t(`members.${index}.imagePath`)}
                    alt={t(`members.${index}.name`)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <Typography variant="h5" className="text-white">
                    {t(`members.${index}.name`)}
                  </Typography>
                  <Typography variant="text-xl-semibold" className="text-white">
                    {t(`members.${index}.role`)}
                  </Typography>
                </div>
              </div>

              <Typography variant="text-xl" className="text-white">
                {t(`members.${index}.bio`)}
              </Typography>

              <div className="flex flex-col gap-6 rounded-[10px] border border-light-gray-60 bg-background-1 p-5">
                <SpeechMarks className="h-[29px] w-[36px] text-pink" />
                <Typography variant="text-xl" className="text-dark-gray-100">
                  {t(`members.${index}.quote`)}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
