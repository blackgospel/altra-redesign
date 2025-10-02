"use client";

import { ArrowRight, SpeechMarks } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { cn, omitClassName } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { CustomerStoryBackdrop } from "./_customer-story-backdrop";

interface CustomerStoryProps extends React.HTMLAttributes<HTMLElement> {
  translationKey: string;
}

export function CustomerStory({
  translationKey,
  ...props
}: CustomerStoryProps) {
  const t = useTranslations(translationKey);

  return (
    <section
      className={cn("flex flex-col relative w-full", props.className)}
      {...omitClassName(props)}
    >
      <div className="relative flex flex-col w-full text-white">
        <CustomerStoryBackdrop />

        <div className="relative z-10 flex flex-col items-center justify-center gap-10 py-24 px-4">
          <div className="flex flex-col items-center gap-5 max-w-[995px]">
            <Typography variant="h3" className="text-white text-center">
              {t("title")}
            </Typography>
            <Typography
              variant="subtitle-l-semibold"
              className="text-white text-center"
            >
              {t("subtitle")}
            </Typography>
          </div>

          <div className="relative w-full max-w-[834px] gap-12 flex flex-col items-center">
            <div className="bg-background-0 border border-line-4 rounded-[10px] p-5 pb-[25px] flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[25px]">
                <SpeechMarks className="text-[#FF408C] size-9" />

                <Typography
                  variant="text-xl"
                  className="text-dark-gray-100 text-center"
                >
                  {t("testimonial")}
                </Typography>
              </div>

              <div className="flex items-center gap-[15px]">
                <div className="w-[55px] h-[55px] rounded-[30px] overflow-hidden bg-gray-200">
                  <Image
                    src={t("authorImage")}
                    alt={t("authorName")}
                    width={55}
                    height={55}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <Typography variant="title-m" className="text-dark-gray-100">
                    {t("authorName")}
                  </Typography>
                  <Typography variant="text-l" className="text-dark-gray-40">
                    {t("authorTitle")}
                  </Typography>
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-[25%] left-1/2 transform -translate-x-1/2 w-full max-w-[911px] h-[180px] pointer-events-none opacity-40"
              style={{
                background:
                  "linear-gradient(180deg, rgba(11, 34, 61, 0) 0%, rgba(11, 34, 61, 0.49) 32%, rgba(11, 34, 61, 0.8) 56%, rgba(11, 34, 61, 1) 83%)",
              }}
            />

            {t.has("usedFor") && (
              <div className="flex flex-col items-center gap-[15px] max-w-[619px]">
                <Typography variant="title-m" className="text-white">
                  Used For:
                </Typography>
                <Typography variant="text-l" className="text-white text-center">
                  {t("usedFor")}
                </Typography>
              </div>
            )}

            <div className="w-full max-w-[873px] flex flex-col items-center gap-[30px] px-4 z-10">
              <Button variant="primary" size="md">
                {t("ctaText")}
                <ArrowRight className="w-5 h-5" />
              </Button>

              <Typography variant="text-xl" className="text-white text-center">
                {t("description")}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
