"use client";

import { SectionTitle } from "@/components/global/section-title/section-title";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { AboutGridCard } from "./_about-grid-card";
import { AboutGridItem } from "./who-we-serve.types";

interface AboutGridProps extends React.ComponentProps<"section"> {
  slug:
    | "elderlycare"
    | "ldSupportedLiving"
    | "independentLiving"
    | "dayServicesRespiteOutpatient";
}

export function AboutGrid({ slug, className, ...props }: AboutGridProps) {
  const t = useTranslations("whoWeServe");

  const sectionTitle = t(`${slug}.aboutGrid.title`);
  const items = t.raw(`${slug}.aboutGrid.items`) as AboutGridItem[];

  return (
    <section
      className={cn("flex flex-col altra-container relative", className)}
      {...props}
    >
      <div className="flex flex-col gap-10">
        <SectionTitle
          title={sectionTitle}
          slots={{ title: { variant: "h3" } }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mx-auto">
          {items.map((item) => (
            <AboutGridCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
