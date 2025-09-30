import { ArrowRight } from "@/assets/icons";
import { INavigationDropdownItem } from "@/config/navigation";
import { Link } from "@/i18n/navigation";
import { useHover } from "@/lib/hooks/use-hover";
import { cn, omitClassName } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface GenericDropdownItemProps {
  item: INavigationDropdownItem;
  slots?: {
    label?: React.ComponentProps<"span">;
    icon?: React.ComponentProps<typeof ArrowRight>;
  };
}

export function GenericDropdownItem({ item, slots }: GenericDropdownItemProps) {
  const t = useTranslations("header");
  const parts = item.href.split("/").filter(Boolean);
  const parent = parts[0] ?? "";
  const slug = parts[1] ?? "";
  const { hovered, ref } = useHover();

  return (
    <Link
      ref={ref}
      href={item.href}
      className="flex items-center gap-[5px] text-l transition-colors text-dark-gray-100 hover:text-light-blue-70"
    >
      <span
        className={cn("flex-1", slots?.label?.className)}
        {...omitClassName(slots?.label)}
      >
        {parent && slug
          ? t(`nav.${parent}.items.${slug}`)
          : t(`nav.${parent}.label`)}
      </span>
      <ArrowRight
        className={cn(
          `size-4 transition-all duration-200 ${
            hovered ? "visible" : "invisible"
          }`,
          slots?.icon?.className
        )}
        {...omitClassName(slots?.icon)}
      />
    </Link>
  );
}
