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
import { cn } from "@/lib/utils";
import Link from "next/link";
import { GenericDropdown } from "./_generic-dropdown";
import { OurSolutionDropdown } from "./_our-solution-dropdown";

export function AltraNavigationMenu() {
  return (
    <NavigationMenu viewport={false} className="h-full">
      <NavigationMenuList className="h-full gap-11">
        {NAVIGATION_ITEMS.map((item) => (
          <NavigationMenuItem
            key={item.label}
            className="h-full flex items-center"
          >
            {item.hasDropdown ? (
              <>
                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>

                <NavigationMenuContent>
                  {item.label === "Our Solutions" ? (
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
                  {item.label}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
