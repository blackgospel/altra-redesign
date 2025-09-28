import { useTranslations } from "next-intl";
import Image from "next/image";

export function HeroImage() {
  const t = useTranslations("home.heroImage");
  return (
    <div className="relative w-full aspect-[1511/828]">
      <Image
        src="/images/home/hero-splash/hero-splash.png"
        alt={t("alt", { default: "Altra Dashboard" })}
        fill
        priority
        className="object-contain"
      />
    </div>
  );
}
