"use client";

import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useRef, useMemo } from "react";
import { TestimonialCard } from "./testimonial-card";

interface TestimonialsSectionProps extends React.HTMLAttributes<HTMLElement> {
  titleKey: string;
  category: string;
}

export function TestimonialsSection({
  titleKey,
  category,
  className,
  ...props
}: TestimonialsSectionProps) {
  const t = useTranslations();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Dynamically get testimonials array from translations
  const testimonials = useMemo(() => {
    const testimonialsArray = t.raw(
      `customerTestimonials.testimonials.${category}`
    );
    if (Array.isArray(testimonialsArray)) {
      return testimonialsArray;
    }
    return [];
  }, [t, category]);

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
          {Array.from(
            { length: Math.ceil(testimonials.length / 2) },
            (_, rowIndex) => {
              const startIndex = rowIndex * 2;
              const rowTestimonials = testimonials.slice(
                startIndex,
                startIndex + 2
              );
              return (
                <div key={rowIndex} className="grid grid-cols-2 gap-6">
                  {rowTestimonials.map((testimonial, colIndex) => (
                    <TestimonialCard
                      key={startIndex + colIndex}
                      {...testimonial}
                    />
                  ))}
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
