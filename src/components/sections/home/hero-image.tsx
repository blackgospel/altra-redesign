import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface HeroImageProps extends React.ComponentProps<"section"> {}

export function HeroImage({ className, ...props }: HeroImageProps) {
  const t = useTranslations("home.heroImage");

  return (
    <section
      className={cn("container mx-auto pt-24 px-4", className)}
      {...props}
    >
      <div className="relative w-full aspect-[1511/828]">
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
