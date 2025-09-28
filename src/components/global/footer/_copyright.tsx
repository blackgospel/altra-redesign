import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";

export function Copyright() {
  const t = useTranslations("footer.copyright");
  return (
    <Typography variant="text-l" className="text-dark-gray-40 self-center">
      {t("text")}
    </Typography>
  );
}
