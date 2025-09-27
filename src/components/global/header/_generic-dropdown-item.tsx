import { ArrowRight } from "@/assets/icons";
import { INavigationDropdownItem } from "@/config/navigation";
import { useHover } from "@/lib/hooks/use-hover";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface GenericDropdownItemProps {
  item: INavigationDropdownItem;
  slots?: {
    label?: React.ComponentProps<"span">;
    icon?: React.ComponentProps<typeof ArrowRight>;
  };
}

export function GenericDropdownItem({ item, slots }: GenericDropdownItemProps) {
  const { hovered, ref } = useHover();

  return (
    <Link
      ref={ref}
      href={item.href}
      className="flex items-center gap-[5px] text-l transition-colors text-dark-gray-100 hover:text-light-blue-70"
    >
      <span
        className={cn("flex-1", slots?.label?.className)}
        {...(slots?.label
          ? Object.fromEntries(
              Object.entries(slots.label).filter(([key]) => key !== "className")
            )
          : {})}
      >
        {item.label}
      </span>
      <ArrowRight
        className={cn(
          `size-4 transition-all duration-200 ${
            hovered ? "visible" : "invisible"
          }`,
          slots?.icon?.className
        )}
        {...(slots?.icon
          ? Object.fromEntries(
              Object.entries(slots.icon).filter(([key]) => key !== "className")
            )
          : {})}
      />
    </Link>
  );
}
