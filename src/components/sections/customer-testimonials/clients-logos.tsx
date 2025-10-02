"use client";

import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

type ClientsLogosProps = React.HTMLAttributes<HTMLElement>;

export function ClientsLogos({ className, ...props }: ClientsLogosProps) {
  const t = useTranslations("customerTestimonials.clients");

  const logos: Array<{ src: string; alt: string }> = t.raw("logos");

  return (
    <section className={cn("relative z-20 -mt-[225px]", className)} {...props}>
      <div className="bg-white border border-[#f2f5f7] rounded-2xl shadow-[0px_4px_30px_0px_rgba(135,135,135,0.16)] p-[40px]">
        <div className="flex flex-col gap-[25px]">
          <Typography variant="h4" className="text-center">
            {t("title")}
          </Typography>

          <div className="flex flex-wrap justify-center items-center gap-[35px]">
            {logos.slice(0, 6).map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-[120px] flex-1 min-w-[120px] max-w-[160px]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={120}
                  className="object-contain w-auto h-auto max-h-[80px]"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-center gap-[35px]">
            {logos.slice(6, 12).map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="flex items-center justify-center h-[120px] flex-1 min-w-[120px] max-w-[160px]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={120}
                  className="object-contain w-auto h-auto max-h-[80px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
