import { Typography } from "@/components/ui/typography";
import { omitProps } from "@/lib/utils";

interface SectionTitleProps {
  slots?: {
    title?: Partial<React.ComponentProps<typeof Typography>>;
    description?: Partial<React.ComponentProps<typeof Typography>>;
  };
  title: string;
  description?: string;
}

export function SectionTitle({ title, description, slots }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <Typography variant="h2" {...slots?.title}>
        {title}
      </Typography>
      <Typography variant="subtitle-l" {...slots?.description}>
        {description}
      </Typography>
    </div>
  );
}
