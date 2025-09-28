"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "../logo/logo";
import { AltraNavigationMenu } from "./_navigation-menu";

interface DesktopHeaderProps {
  navbarStyles: string;
}

export function DesktopHeader({ navbarStyles }: DesktopHeaderProps) {
  return (
    <div
      className={cn(
        navbarStyles,
        "flex items-center justify-between flex-1 px-6 py-4"
      )}
    >
      <Logo />

      <AltraNavigationMenu />

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm">
          Log in
        </Button>
        <Button variant="primary" size="sm">
          Book Demo
        </Button>
      </div>
    </div>
  );
}
