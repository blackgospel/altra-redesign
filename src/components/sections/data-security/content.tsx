"use client";

import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type DataSecurityContentProps = React.ComponentProps<"section">;

export function DataSecurityContent({
  className,
  ...props
}: DataSecurityContentProps) {
  const t = useTranslations("dataSecurity.content");

  const sections = t.raw("sections") as Array<{
    title: string;
    content: string;
  }>;

  return (
    <section
      className={cn("w-full altra-container py-24", className)}
      {...props}
    >
      <div className="max-w-4xl mx-auto">
        <Typography variant="text-xl" className="mb-12">
          {t("introduction")}
        </Typography>

        <div className="flex flex-col gap-12">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col gap-4">
              <Typography variant="h4">{section.title}</Typography>
              <Typography variant="text-xl" className="text-dark-gray-40">
                {section.content}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
