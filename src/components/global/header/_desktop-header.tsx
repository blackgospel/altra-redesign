"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "../logo/logo";
import { AltraNavigationMenu } from "./_navigation-menu";

export function DesktopHeader() {
  return (
    <header className="flex items-center justify-between flex-1 px-6 py-4">
      <Logo />

      <AltraNavigationMenu />

      <div className="flex items-center gap-2">
        <Button variant="ghost">Log in</Button>
        <Button variant="primary">Book Demo</Button>
      </div>
    </header>
  );
}
