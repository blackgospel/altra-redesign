import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function SeeForYourself() {
  const t = useTranslations("footer.seeForYourself");
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Typography variant="title-l-medium">{t("title")}</Typography>

        <Typography variant="text-l">{t("description")}</Typography>
      </div>

      <Button variant="primary" className="self-start">
        <Link href="#" className="flex items-center gap-2">
          <span>{t("cta")}</span>
          <ArrowRight className="size-6" />
        </Link>
      </Button>
    </div>
  );
}
