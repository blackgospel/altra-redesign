"use client";

import { SpeechMarks } from "@/assets/icons/SpeechMarks";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";

export interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage?: string;
}

export function TestimonialCard({
  quote,
  authorName,
  authorTitle,
  authorImage,
}: TestimonialCardProps) {
  return (
    <div className="@container/testimonial-card flex flex-col w-full h-full">
      <div className="flex flex-col justify-between @lg/testimonial-card:gap-[30px] p-5 bg-[#f0f4f8] border border-[#dce0e4] rounded-[10px] h-full min-h-[396px]">
        <div className="flex flex-col gap-4 @lg/testimonial-card:gap-6">
          <div className="w-9 h-[29px]">
            <SpeechMarks className="w-9 h-[29px] text-[#ED4789]" />
          </div>
          <Typography variant="text-xl" className="text-dark-gray-100">
            {quote}
          </Typography>
        </div>

        <div className="flex items-center gap-[15px]">
          {authorImage && (
            <div className="w-[55px] h-[55px] rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={authorImage}
                alt={authorName}
                width={55}
                height={55}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="flex flex-col gap-[5px]">
            <Typography variant="title-m" className="text-dark-gray-100">
              {authorName}
            </Typography>
            <Typography variant="text-l" className="text-dark-gray-40">
              {authorTitle}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
