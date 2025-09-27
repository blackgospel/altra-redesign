import { Typography } from "@/components/ui/typography";
import { INavigationDropdown } from "@/config/navigation";
import { GenericDropdownItem } from "./_generic-dropdown-item";

interface OurSolutionDropdownProps {
  items: INavigationDropdown;
}

export function OurSolutionDropdown({ items }: OurSolutionDropdownProps) {
  if (!items) return null;

  return (
    <div className="flex flex-col gap-4 p-4 w-max">
      <Typography variant="subtitle-l-semibold">Our Solutions</Typography>

      <div className="grid gap-x-8 gap-y-4 lg:gap-x-16 grid-cols-2 sm:grid-cols-3 2xl:grid-cols-4 min-[1900px]:!grid-cols-5">
        {items.map((item) => (
          <GenericDropdownItem key={item.label} item={item} />
        ))}
      </div>
    </div>
  );
}
