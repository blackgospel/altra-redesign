"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { SectionTitle } from "../../global/section-title/section-title";
import { ServiceCard } from "./_service-card";

type WhoWeServeProps = React.ComponentProps<"section">;

export function WhoWeServe({ className, ...props }: WhoWeServeProps) {
  const t = useTranslations("home.whoWeServe");

  const items: Array<{
    title: string;
    description: string;
    imagePath: string;
  }> = t.raw("items") || [];

  return (
    <section className={cn("@container/who-we-serve", className)} {...props}>
      <div className="flex flex-col gap-10">
        <SectionTitle title={t("title")} description={t("description")} />

        <div className="grid grid-cols-1 @md/who-we-serve:grid-cols-2 @lg/who-we-serve:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.imagePath}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
