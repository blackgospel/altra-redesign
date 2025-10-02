import { cn } from "@/lib/utils";

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Divider({ className, ...props }: DividerProps) {
  return (
    <div
      className={cn("h-[1px] w-full opacity-30", className)}
      style={{
        background:
          "linear-gradient(90deg, rgba(134, 151, 169, 0.3) 0%, rgba(134, 151, 169, 1) 50%, rgba(134, 151, 169, 0.3) 100%)",
      }}
      {...props}
    />
  );
}
