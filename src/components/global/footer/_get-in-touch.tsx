import { Envelope } from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function GetInTouch() {
  const t = useTranslations("footer.contact");
  return (
    <div className="flex flex-col gap-6">
      <Typography variant="title-l-medium">{t("title")}</Typography>

      <Link href="mailto:hello@altra.ie" className="flex items-center gap-2">
        <Envelope className="size-6 text-light-blue-70" />
        <span>{t("emailLabel")}</span>
      </Link>
    </div>
  );
}
