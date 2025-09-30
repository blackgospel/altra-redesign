"use client";

import { SectionTitle } from "@/components/sections/home/_section-title";
import { useTranslations } from "next-intl";
import {
  NoteIcon,
  VoiceIcon,
  CalendarIcon,
  MessageIcon,
  GraphIcon,
} from "@/components/ui/icons/about-grid-icons";
import { AboutGridItem } from "./who-we-serve.types";
import { AboutGridCard } from "./_about-grid-card";
import { cn, omitClassName } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  "daily-structure": <NoteIcon />,
  "voice-assistants": <VoiceIcon />,
  "visual-planning": <CalendarIcon />,
  "family-engagement": <MessageIcon />,
  "track-outcomes": <GraphIcon />,
};

interface AboutGridProps extends React.ComponentProps<"section"> {
  slug:
    | "elderlycare"
    | "ldSupportedLiving"
    | "independentLiving"
    | "dayServicesRespiteOutpatient";
}

export function AboutGrid({ slug, ...props }: AboutGridProps) {
  const t = useTranslations("whoWeServe");

  const sectionTitle = t(`${slug}.aboutGrid.title`);

  const items = t.raw(`${slug}.aboutGrid.items`) as AboutGridItem[];

  return (
    <section
      className={cn("flex flex-col altra-container relative", props.className)}
      {...omitClassName(props)}
    >
      <div className="flex flex-col gap-10">
        <SectionTitle
          title={sectionTitle}
          slots={{ title: { variant: "h3" } }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[1200px] mx-auto">
          {items.map((item) => (
            <AboutGridCard key={item.id} item={item} icon={iconMap[item.id]} />
          ))}
        </div>
      </div>
    </section>
  );
}
