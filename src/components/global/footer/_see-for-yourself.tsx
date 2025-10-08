import { Button } from "@/components/ui/button";
import { SmartLink } from "@/components/ui/smart-link";
import { Typography } from "@/components/ui/typography";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function SeeForYourself() {
  const t = useTranslations("footer.seeForYourself");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Typography variant="title-l-medium">{t("title")}</Typography>

        <Typography variant="text-l">{t("description")}</Typography>
      </div>

      <SmartLink href={t("ctaLink")}>
        <Button variant="primary" className="self-start flex items-center gap-2">
          <span>{t("cta")}</span>
          <ArrowRight className="size-6" />
        </Button>
      </SmartLink>
    </div>
  );
}
