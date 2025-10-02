"use client";

import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { TestimonialCard } from "./testimonial-card";

interface TestimonialsSectionProps extends React.HTMLAttributes<HTMLElement> {
  titleKey: string;
  category: string;
  slots?: {
    title?: Partial<React.ComponentProps<typeof Typography>>;
  };
}

export function TestimonialsSection({
  titleKey,
  category,
  slots,
  className,
  ...props
}: TestimonialsSectionProps) {
  const t = useTranslations();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = Array.from({ length: 7 }, (_, i) => ({
    quote: t(`customerTestimonials.testimonials.${category}.${i}.quote`),
    authorName: t(
      `customerTestimonials.testimonials.${category}.${i}.authorName`
    ),
    authorTitle: t(
      `customerTestimonials.testimonials.${category}.${i}.authorTitle`
    ),
    authorImage: t(
      `customerTestimonials.testimonials.${category}.${i}.authorImage`
    ),
  }));

  return (
    <div
      className={cn("flex flex-col items-center gap-10", className)}
      {...props}
    >
      <Typography variant="h3" className="text-dark-gray-100 text-center">
        {t(titleKey)}
      </Typography>

      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto md:overflow-x-visible scrollbar-hide"
      >
        <div className="flex md:hidden gap-6 snap-x snap-mandatory pb-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[calc(100vw-2rem)] snap-center"
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        <div className="hidden md:flex md:flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <TestimonialCard {...testimonials[0]} />
            <TestimonialCard {...testimonials[1]} />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <TestimonialCard {...testimonials[2]} />
            <TestimonialCard {...testimonials[3]} />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <TestimonialCard {...testimonials[4]} />
            <TestimonialCard {...testimonials[5]} />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <TestimonialCard {...testimonials[6]} />
          </div>
        </div>
      </div>
    </div>
  );
}
