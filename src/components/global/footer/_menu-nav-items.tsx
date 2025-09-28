import { Typography } from "@/components/ui/typography";
import { MENU_NAVIGATION_ITEMS } from "@/config/navigation";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function MenuNavItems() {
  const t = useTranslations("footer");
  return (
    <div className="flex flex-col gap-4">
      <Typography variant="title-l-medium">
        {t("menu.title", { default: "Menu" })}
      </Typography>

      <nav>
        <ul className="flex flex-col gap-4">
          {MENU_NAVIGATION_ITEMS.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>{t(`menu.items.${item.id}`)}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
