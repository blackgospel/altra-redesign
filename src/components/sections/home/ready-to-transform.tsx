import { ArrowRight } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function ReadyToTransform() {
  const t = useTranslations("home.readyToTransform");

  return (
    <div
      className="flex items-center justify-center w-full relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${t("backgroundImage")})` }}
    >
      <div className="container px-4 py-24 xl:py-0 flex flex-col lg:flex-row items-center justify-center gap-10 z-2 text-white">
        <div className="flex-1 flex flex-col gap-10 items-center xl:items-start justify-center xl:justify-start">
          <Typography
            variant="h3"
            className="text-white text-center xl:text-left"
          >
            {t("title")}
          </Typography>

          <Button
            variant="white"
            size="md"
            className="self-center xl:self-start flex items-center gap-3"
          >
            {t("cta")}
            <ArrowRight className="size-5" />
          </Button>
        </div>

        <div className="hidden xl:flex flex-1 relative w-full aspect-[713/501]">
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
  );
}
