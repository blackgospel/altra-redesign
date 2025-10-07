import { ArrowRight } from "@/assets/icons/ArrowRight";
import { IconKey, IconMap } from "@/components/global/icon-map/icon-map";
import { SectionTitle } from "@/components/global/section-title/section-title";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React from "react";

interface SpotlightItemData {
  title: string;
  icon: IconKey;
  iconBgColor: string;
}

interface SpotlightGridProps extends React.ComponentProps<"section"> {
  translationKey: string;
  gridClass?: string;
  button?: {
    translationKey: string;
    onClick?: () => void;
    showNote?: boolean;
  };
  slots?: {
    sectionTitle?: Partial<React.ComponentProps<typeof SectionTitle>>;
  };
}

export function SpotlightGrid({
  translationKey,
  gridClass = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  button,
  slots,
  className,
  ...props
}: SpotlightGridProps) {
  const t = useTranslations(translationKey);

  const itemsRaw = t.raw("items") as SpotlightItemData[];

  return (
    <section
      className={cn(
        "relative altra-container w-full flex flex-col gap-10",
        className
      )}
      {...props}
    >
      <SectionTitle
        title={t("title")}
        description={t("description")}
        {...slots?.sectionTitle}
      />

      <div className={gridClass}>
        {itemsRaw.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 p-6 pb-5 bg-background-1 border border-line-4 rounded-[10px]"
          >
            <div
              className="flex items-center justify-center w-[52px] h-[52px] rounded-[10px] p-3"
              style={{ backgroundColor: item.iconBgColor }}
            >
              <IconMap
                icon={item.icon}
                slots={{ icon: { className: "text-white" } }}
              />
            </div>

            <Typography variant="title-s" className="text-dark-gray-100">
              {item.title}
            </Typography>
          </div>
        ))}
      </div>

      {button && (
        <div className="flex flex-col items-center gap-4">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <Link href={t("button.link") as any}>
            <Button
              variant="primary"
              size="sm"
              className="w-fit"
              onClick={button.onClick}
            >
              {t(`button.${button.translationKey}`)}
              <ArrowRight className="size-5" />
            </Button>
          </Link>
          {button.showNote && (
            <Typography
              variant="text-l"
              className="text-dark-gray-50 text-center"
            >
              {t("note")}
            </Typography>
          )}
        </div>
      )}
    </section>
  );
}
