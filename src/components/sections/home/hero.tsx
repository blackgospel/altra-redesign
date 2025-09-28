import { ArrowRight } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("home.hero");
  return (
    <div className="flex flex-col items-center gap-8 md:gap-12">
      <div className="flex flex-col items-center gap-8">
        <Typography variant="h1" className="text-center">
          {t("title")}
        </Typography>

        <Typography
          variant="subtitle-xl"
          className="w-full max-w-4xl text-center"
        >
          {t("subtitle")}
        </Typography>
      </div>
      <Link href="#">
        <Button variant="primary" size="md" className="self-start">
          <span>{t("cta")}</span>
          <ArrowRight className="size-5" />
        </Button>
      </Link>
    </div>
  );
}
