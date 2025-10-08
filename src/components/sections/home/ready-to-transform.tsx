import { ArrowRight } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { SmartLink } from "@/components/ui/smart-link";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ReadyToTransformBackdrop } from "./_ready-to-transform-backdrop";

type ReadyToTransformProps = React.ComponentProps<"section">;

export function ReadyToTransform({
  className,
  ...props
}: ReadyToTransformProps) {
  const t = useTranslations("home.readyToTransform");

  return (
    <section className={cn("w-full pt-24", className)} {...props}>
      <div className="flex items-center justify-center w-full relative overflow-hidden">
        <ReadyToTransformBackdrop />

        <div className="relative z-10 container px-4 pt-24 xl:pt-0 flex flex-col lg:flex-row items-center justify-center gap-10 text-white">
          <div className="flex-1 flex flex-col gap-10 items-center xl:items-start justify-center xl:justify-start">
            <Typography variant="h3" className="text-white text-left">
              {t("title")}
            </Typography>

            <SmartLink href={t("ctaLink")}>
              <Button
                variant="primary"
                size="md"
                className="self-center xl:self-start flex items-center gap-3"
              >
                {t("cta")}
                <ArrowRight className="size-5" />
              </Button>
            </SmartLink>
          </div>

          <div className="flex flex-1 relative w-full aspect-[713/501]">
            <Image
              src={t("splashImage")}
              alt={t("title")}
              width={713}
              height={501}
              className="object-contain absolute bottom-0 left-[50%] translate-x-[-50%]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
