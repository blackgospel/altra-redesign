import {
  Calendar,
  Clock,
  Comment,
  Edit,
  Envelope,
  Graphic,
  Heart,
  MessageOne,
  Notifications,
  Smile,
  Star,
  User,
} from "@/assets/icons";
import { cn } from "@/lib/utils";

const iconMap = {
  calendar: Calendar,
  clock: Clock,
  comment: Comment,
  edit: Edit,
  envelope: Envelope,
  graphic: Graphic,
  heart: Heart,
  messageOne: MessageOne,
  notifications: Notifications,
  smile: Smile,
  star: Star,
  user: User,
} as const;

export type IconKey = keyof typeof iconMap;

interface IconMapProps {
  icon: IconKey;
  slots?: {
    icon?: {
      className?: string;
    };
  };
}

export function IconMap({ icon, slots }: IconMapProps) {
  const IconComponent = iconMap[icon];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={cn("w-8 h-8", slots?.icon?.className)} />;
}
