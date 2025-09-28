import { INavigationDropdown } from "@/config/navigation";
import { GenericDropdownItem } from "./_generic-dropdown-item";

interface GenericDropdownProps {
  items: INavigationDropdown;
}

export function GenericDropdown({ items }: GenericDropdownProps) {
  if (!items) return null;

  return (
    <div className="flex flex-col gap-[15px] p-4 w-[214px]">
      {items.map((item) => (
        <GenericDropdownItem key={item.href} item={item} />
      ))}
    </div>
  );
}
