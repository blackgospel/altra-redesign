"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NAVIGATION_ITEMS } from "@/config/navigation";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { GenericDropdown } from "./_generic-dropdown";
import { OurSolutionDropdown } from "./_our-solution-dropdown";

export function AltraNavigationMenu() {
  const t = useTranslations("header");
  return (
    <NavigationMenu viewport={false} className="h-full">
      <NavigationMenuList className="h-full gap-11">
        {NAVIGATION_ITEMS.map((item) => (
          <NavigationMenuItem
            key={item.id}
            className="h-full flex items-center"
          >
            {item.hasDropdown ? (
              <>
                <NavigationMenuTrigger>
                  {t(`nav.${item.id}.label`)}
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  {item.id === "our-solutions" ? (
                    <OurSolutionDropdown items={item.dropdown} />
                  ) : (
                    <GenericDropdown items={item.dropdown} />
                  )}
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "h-full px-0 py-6 text-nav bg-transparent hover:bg-transparent focus:bg-transparent rounded-none border-b-4 border-transparent transition-colors"
                  )}
                >
                  {t(`nav.${item.id}.label`)}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
