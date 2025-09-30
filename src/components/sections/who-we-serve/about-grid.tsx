"use client";

import {
  Calendar,
  Comment,
  Edit,
  Envelope,
  Heart,
  Notifications,
  Star,
  User,
} from "@/assets/icons";
import { SectionTitle } from "@/components/sections/home/_section-title";
import { cn, omitClassName } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { AboutGridCard } from "./_about-grid-card";
import { AboutGridItem } from "./who-we-serve.types";

const iconMap: Record<string, React.ReactNode> = {
  "daily-structure": <Edit className="w-8 h-8" />,
  "voice-assistants": <Notifications className="w-8 h-8" />,
  "visual-planning": <Calendar className="w-8 h-8" />,
  "family-engagement": <Comment className="w-8 h-8" />,
  "track-outcomes": <Star className="w-8 h-8" />,
  "resident-wellbeing": <Heart className="w-8 h-8" />,
  "family-communication": <Envelope className="w-8 h-8" />,
  "digital-displays": <Notifications className="w-8 h-8" />,
  "resident-onboarding": <User className="w-8 h-8" />,
  "staff-communication": <Comment className="w-8 h-8" />,
  "reporting-insights": <Star className="w-8 h-8" />,
  "resident-app": <User className="w-8 h-8" />,
  "concierge-services": <Calendar className="w-8 h-8" />,
  "activities-calendar": <Calendar className="w-8 h-8" />,
  "branded-app": <Star className="w-8 h-8" />,
  "engaging-experiences": <Heart className="w-8 h-8" />,
  "family-connection": <Comment className="w-8 h-8" />,
  "keep-informed": <Notifications className="w-8 h-8" />,
  "short-stay-onboarding": <Edit className="w-8 h-8" />,
  "evidence-outcomes": <Star className="w-8 h-8" />,
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
