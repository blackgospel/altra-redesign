import {
  Aim,
  Alert,
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
  Idea,
  MessageOne,
  Notes,
  Notifications,
  Rocket,
  Smile,
  Star,
  Task,
  User,
  Users,
  Voice,
  Workflow,
} from "@/assets/icons";
import { cn } from "@/lib/utils";

const iconMap = {
  aim: Aim,
  alert: Alert,
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
  idea: Idea,
  messageOne: MessageOne,
  notes: Notes,
  notifications: Notifications,
  rocket: Rocket,
  smile: Smile,
  star: Star,
  task: Task,
  user: User,
  users: Users,
  voice: Voice,
  workflow: Workflow,
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
