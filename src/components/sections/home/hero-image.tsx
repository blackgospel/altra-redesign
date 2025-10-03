import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

type HeroImageProps = React.ComponentProps<"section">;

export function HeroImage({ className, ...props }: HeroImageProps) {
  const t = useTranslations("home.heroImage");

  return (
    <section className={cn("@container/hero-image", className)} {...props}>
      <div className="relative aspect-[390/363] w-full @md/hero-image:hidden pl-4 @md/hero-image:px-4">
        <Image
          src="/images/home/hero-splash/mobile-hero-splash.png"
          alt={t("alt")}
          fill
          priority
          className="object-contain object-left"
        />
      </div>

      <div className="relative hidden aspect-[1511/828] w-full @md/hero-image:block">
        <Image
          src={t("imagePath")}
          alt={t("alt")}
          fill
          priority
          className="object-contain"
        />
      </div>
    </section>
  );
}
