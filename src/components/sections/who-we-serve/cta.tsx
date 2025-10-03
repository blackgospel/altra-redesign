"use client";

import { ArrowRight } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { cn, omitClassName } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { CtaBackdrop } from "./_cta-backdrop";

interface CTAProps extends React.HTMLAttributes<HTMLElement> {
  slug:
    | "elderlycare"
    | "ldSupportedLiving"
    | "independentLiving"
    | "dayServicesRespiteOutpatient";
}

export function CTA({ slug, ...props }: CTAProps) {
  const t = useTranslations("whoWeServe");

  const text = t(`${slug}.cta.text`);
  const buttonText = t(`${slug}.cta.buttonText`);

  return (
    <section
      className={cn(
        "@container/cta flex flex-col relative w-full",
        props.className
      )}
      {...omitClassName(props)}
    >
      <div className="relative flex flex-col w-full text-white">
        <CtaBackdrop />

        <div className="relative z-10 flex items-center justify-center min-h-[678px] pb-12 @lg/cta:py-12">
          <div className="relative w-full max-w-5xl h-[514px] mx-auto">
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <Image
                src="/images/who-we-serve/cta/cta-splash-image.png"
                width={852}
                height={514}
                alt="CTA splash image"
                className="object-contain"
              />
            </div>

            <div
              className="hidden md:block absolute left-1/2 top-[17%] transform -translate-x-1/2 w-[147px] h-[428px] rounded-full opacity-25 pointer-events-none"
              style={{
                background: "#030910",
                filter: "blur(100px)",
              }}
            />

            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[911px] h-[250px] pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(11, 34, 61, 0) 0%, rgba(11, 34, 61, 0.49) 32%, rgba(11, 34, 61, 0.8) 56%, rgba(11, 34, 61, 1) 83%)",
              }}
            />

            <div className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 w-full max-w-[873px] flex flex-col items-center gap-[30px] px-4 z-10">
              <Button variant="primary" size="md">
                {buttonText}
                <ArrowRight className="w-5 h-5" />
              </Button>

              <Typography variant="text-xl" className="text-white text-center">
                {text}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
