import {
  Aim,
  Calendar,
  Checkbox,
  Clock,
  Comment,
  Communication,
  Dashboard,
  Document,
  Edit,
  Envelope,
  Food,
  Graphic,
  Handshake,
  Heart,
  MessageOne,
  Notes,
  Notifications,
  Rocket,
  Smile,
  Star,
  User,
  Users,
  Voice,
} from "@/assets/icons";
import { cn } from "@/lib/utils";

const iconMap = {
  aim: Aim,
  calendar: Calendar,
  checkbox: Checkbox,
  clock: Clock,
  comment: Comment,
  communication: Communication,
  dashboard: Dashboard,
  document: Document,
  edit: Edit,
  envelope: Envelope,
  food: Food,
  graphic: Graphic,
  handshake: Handshake,
  heart: Heart,
  messageOne: MessageOne,
  notes: Notes,
  notifications: Notifications,
  rocket: Rocket,
  smile: Smile,
  star: Star,
  user: User,
  users: Users,
  voice: Voice,
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
