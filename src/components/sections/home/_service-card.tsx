"use client";

import { ArrowRight } from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  description?: string;
  image: string;
}

export function ServiceCard({ title, description, image }: ServiceCardProps) {
  const t = useTranslations("home.whoWeServe");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="relative w-full rounded-lg overflow-hidden group cursor-pointer aspect-square md:aspect-[281/460]"
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 pointer-events-none z-10"></div>
      <div
        className={`absolute bottom-0 left-0 right-0 bg-light-blue-50 transition-all duration-500 ease-out pointer-events-none z-20 ${
          isExpanded ? "h-full" : "h-0"
        }`}
        style={{
          transformOrigin: "bottom",
        }}
      ></div>
      <div className="absolute inset-0 p-6 text-white flex flex-col justify-end z-30">
        <div
          className={`absolute left-6 right-6 bottom-6 transition-all duration-300 ease-out ${
            isExpanded
              ? "opacity-0 -translate-y-1"
              : "opacity-100 translate-y-0"
          }`}
        >
          <Typography variant="h5">{title}</Typography>
        </div>

        <div
          className={`absolute left-6 right-6 bottom-6 transition-all duration-400 ease-out ${
            isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="flex flex-col gap-4">
            <Typography variant="h5">{title}</Typography>
            <Typography variant="text-l">{description}</Typography>
            <Typography variant="btn-s" className="flex items-center gap-2">
              {t("viewDetails")}
              <ArrowRight className="size-4" />
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
