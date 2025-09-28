import { Typography } from "@/components/ui/typography";

interface SectionTitleProps {
  title: string;
  description: string;
}

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <Typography variant="h2">{title}</Typography>
      <Typography variant="subtitle-l">{description}</Typography>
    </div>
  );
}
