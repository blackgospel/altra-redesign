"use client";

import { Divider } from "@/components/global/divider";
import { Typography } from "@/components/ui/typography";
import { cn, omitClassName } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface Section {
  caption: string;
  title: string;
  description: string;
  imagePath: string;
  reverse: boolean;
  showDivider: boolean;
  showBlobs: boolean;
}

type OurStoryProps = React.HTMLAttributes<HTMLElement>;

export function OurStory({ ...props }: OurStoryProps) {
  const t = useTranslations("ourMission.story");
  const sections = t.raw("sections") as Section[];

  return (
    <section
      className={cn("altra-container w-full flex flex-col", props.className)}
      {...omitClassName(props)}
    >
      <div className="flex flex-col gap-20">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
              <div
                className={cn(
                  "flex flex-col gap-[25px]",
                  !section.reverse && "lg:col-start-2"
                )}
              >
                <div className="flex flex-col gap-[15px]">
                  <div className="flex flex-col gap-[10px]">
                    <Typography
                      variant="caption-m"
                      className="uppercase text-light-blue-70"
                    >
                      {section.caption}
                    </Typography>
                    <Typography variant="h4">{section.title}</Typography>
                  </div>
                  <Typography
                    variant="text-xl"
                    className="text-dark-gray-40 whitespace-pre-line"
                  >
                    {section.description}
                  </Typography>
                </div>
              </div>

              <div
                className={cn(
                  "relative w-full h-[400px] md:h-[500px] lg:h-[590px] rounded-[15px] border border-line-4 overflow-visible",
                  !section.reverse && "lg:col-start-1 lg:row-start-1"
                )}
              >
                <div className="relative w-full h-full rounded-[15px] overflow-hidden">
                  <Image
                    src={section.imagePath}
                    alt={section.caption}
                    fill
                    className="object-cover"
                  />
                </div>

                {section.showBlobs && (
                  <div className="absolute bottom-0 right-0 pointer-events-none hidden md:flex w-[120px] h-[120px]">
                    <div
                      className="absolute w-[84px] h-[84px] opacity-90"
                      style={{
                        left: "20px",
                        top: "49px",
                        background: "rgba(148, 124, 216, 0.9)",
                        borderRadius: "54% 46% 38% 62% / 49% 65% 35% 51%",
                      }}
                    />
                    <div
                      className="absolute w-[106px] h-[109px] opacity-90"
                      style={{
                        left: "64px",
                        top: "24px",
                        background: "rgba(197, 228, 97, 0.9)",
                        borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {section.showDivider && <Divider />}
          </div>
        ))}
      </div>
    </section>
  );
}
