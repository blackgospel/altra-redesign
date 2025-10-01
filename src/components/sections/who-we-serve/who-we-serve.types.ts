import { IconKey } from "@/components/global/icon-map";

export interface AboutGridItem {
  id: string;
  icon: IconKey;
  title: string;
  description: string;
  iconBgColor: string;
  ctaText?: string;
  ctaHref?: string;
}
