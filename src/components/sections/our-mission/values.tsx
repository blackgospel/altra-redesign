"use client";

import { IconMap } from "@/components/global/icon-map/icon-map";
import { Typography } from "@/components/ui/typography";
import { cn, omitClassName } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface ValueItem {
  title: string;
  description: string;
  icon: string;
  iconBgColor: string;
}

type ValuesProps = React.HTMLAttributes<HTMLElement>;

export function Values({ ...props }: ValuesProps) {
  const t = useTranslations("ourMission.values");
  const items = t.raw("items") as ValueItem[];

  return (
    <section
      className={cn("altra-container w-full flex flex-col", props.className)}
      {...omitClassName(props)}
    >
      <div className="flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-[10px] items-center">
          <Typography
            variant="caption-m"
            className="uppercase text-light-blue-70"
          >
            {t("caption")}
          </Typography>
          <Typography variant="h3" className="text-center">
            {t("title")}
          </Typography>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col gap-6">
          {/* Row 1 - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="bg-background-1 border border-line-4 rounded-[10px] p-[25px_20px_20px] flex flex-col gap-5"
              >
                <div
                  className="w-[52px] h-[52px] rounded-[10px] flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: item.iconBgColor }}
                >
                  <IconMap
                    icon={item.icon}
                    slots={{ icon: { className: "text-white size-8" } }}
                  />
                </div>

                <div className="flex flex-col gap-[10px]">
                  <Typography variant="title-m" className="text-dark-gray-100">
                    {item.title}
                  </Typography>
                  <Typography variant="text-l" className="text-dark-gray-100">
                    {item.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.slice(3, 6).map((item, index) => (
              <div
                key={index + 3}
                className="bg-background-1 border border-line-4 rounded-[10px] p-[25px_20px_20px] flex flex-col gap-5"
              >
                <div
                  className="w-[52px] h-[52px] rounded-[10px] flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: item.iconBgColor }}
                >
                  <IconMap
                    icon={item.icon}
                    slots={{ icon: { className: "text-white size-8" } }}
                  />
                </div>

                <div className="flex flex-col gap-[10px]">
                  <Typography variant="title-m" className="text-dark-gray-100">
                    {item.title}
                  </Typography>
                  <Typography variant="text-l" className="text-dark-gray-100">
                    {item.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <Typography
          variant="text-xl"
          className="text-dark-gray-100 text-center"
        >
          {t("footer")}
        </Typography>
      </div>
    </section>
  );
}
