import { ArrowRight, Check2 } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";

export function WhatYouCanAchieve() {
  return (
    <div className="relative rounded-[15px] shadow-[0_4px_50px_rgba(135,105,220,0.15)] overflow-hidden xl:aspect-[1199/541] bg-[url('/images/home/what-you-can-achieve/ellipsis.png')] bg-cover bg-center bg-no-repeat">
      {/* <Image
        src="/images/home/what-you-can-achieve/ellipsis.png"
        alt="Ellipsis"
        fill
        className="object-cover z-1 absolute inset-0"
      /> */}

      <div className="relative px-10 py-12 md:py-16 flex flex-col lg:flex-row items-start gap-10 z-2 text-white">
        <div className="flex-1 flex flex-col gap-10">
          <div className="flex flex-col gap-8">
            <Typography variant="h3">What You Can Achieve</Typography>

            <div className="flex flex-col gap-5">
              {[
                "More engaged, independent residents and people supported",
                "Reassured, connected families",
                "Less admin — more time for care",
                "Clear insights for better decisions",
                "Inspection-ready communication and feedback evidence",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check2 className="min-w-6 min-h-6" stroke="#8265d4" />
                  <Typography variant="title-s">{item}</Typography>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="white"
            size="md"
            className="self-start flex items-center gap-3"
          >
            <span>Explore Our Solutions</span>
            <ArrowRight className="size-5" />
          </Button>
        </div>

        <div className="hidden xl:flex flex-1 w-full">
          <div className="relative w-full aspect-[532/556]">
            <Image
              src="/images/home/what-you-can-achieve/what-you-can-achieve.png"
              alt="What You Can Achieve"
              width={532}
              height={556}
              className="object-contain absolute inset-0"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
