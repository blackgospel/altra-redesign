"use client";

import { HEADER_TOP_OFFSET, HEIGHT_CLASSNAME } from "@/config/header";
import { MobileOverlayStoreProvider } from "@/lib/stores/mobile-overlay/mobile-overlay-provider";
import { cn } from "@/lib/utils";
import { DesktopHeader } from "./_desktop-header";
import { MobileHeader } from "./_mobile-header";

interface HeaderProps {
  sticky?: boolean;
  container?: boolean;
}

export function Header({ sticky = true, container = true }: HeaderProps) {
  const stickyClass = sticky
    ? "fixed left-[50%] translate-x-[-50%] z-50"
    : "";
  const containerClass = container ? "container mx-auto px-4" : "";
  const navbarStyles =
    "bg-background border border-border rounded-xl shadow-header z-20";

  return (
    <MobileOverlayStoreProvider>
      <header
        className={cn("@container flex", stickyClass, containerClass)}
        style={{
          height: HEIGHT_CLASSNAME,
          ...sticky && {top: HEADER_TOP_OFFSET}
        }}
      >
        <div className="flex @[1024px]:hidden flex-1">
          <MobileHeader navbarStyles={navbarStyles} />
        </div>
        <div className="hidden @[1024px]:flex flex-1">
          <DesktopHeader navbarStyles={navbarStyles} />
        </div>
      </header>
    </MobileOverlayStoreProvider>
  );
}
