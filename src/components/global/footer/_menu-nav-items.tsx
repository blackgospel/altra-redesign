import { Typography } from "@/components/ui/typography";
import { MENU_NAVIGATION_ITEMS } from "@/config/navigation";
import Link from "next/link";

export function MenuNavItems() {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant="title-l-medium">Menu</Typography>

      <nav>
        <ul className="flex flex-col gap-4">
          {MENU_NAVIGATION_ITEMS.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
