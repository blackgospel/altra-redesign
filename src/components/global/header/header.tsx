"use client";

import { DESKTOP_HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from "@/config/header";
import { MobileOverlayStoreProvider } from "@/lib/stores/mobile-overlay/mobile-overlay-provider";
import { cn } from "@/lib/utils";
import { DesktopHeader } from "./_desktop-header";
import { MobileHeader } from "./_mobile-header";

interface HeaderProps {
  sticky?: boolean;
  container?: boolean;
}

export function Header({ sticky = true, container = true }: HeaderProps) {
  const heightClass = `h-[${MOBILE_HEADER_HEIGHT}px] @[1024px]:h-[${DESKTOP_HEADER_HEIGHT}px]`;
  const stickyClass = sticky ? "sticky top-6 z-50" : "";
  const containerClass = container ? "container mx-auto" : "";

  return (
    <MobileOverlayStoreProvider>
      <div
        className={cn(
          "@container flex w-full bg-background border border-border rounded-xl shadow-header z-20",
          stickyClass,
          containerClass
        )}
      >
        <div className={cn("flex @[1024px]:hidden flex-1", heightClass)}>
          <MobileHeader />
        </div>
        <div className={cn("hidden @[1024px]:flex flex-1", heightClass)}>
          <DesktopHeader />
        </div>
      </div>
    </MobileOverlayStoreProvider>
  );
}
