"use client";

import { Cross, Menu } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { useMobileOverlayStore } from "@/lib/stores/mobile-overlay/mobile-overlay-provider";
import { cn } from "@/lib/utils";
import { Logo } from "../logo/logo";
import { MobileNavigationOverlay } from "./_mobile-navigation-overlay";

interface MobileHeaderProps {
  navbarStyles: string;
}

export function MobileHeader({ navbarStyles }: MobileHeaderProps) {
  const isOpen = useMobileOverlayStore((s) => s.isOpen);
  const toggle = useMobileOverlayStore((s) => s.toggle);
  const close = useMobileOverlayStore((s) => s.close);

  return (
    <>
      <div
        className={cn(
          navbarStyles,
          "flex items-center justify-between w-full h-full px-4 py-3"
        )}
      >
        <Logo enableLink />

        <Button
          variant="ghost"
          size="icon"
          aria-label="Open menu"
          onClick={toggle}
          className="hover:bg-transparent"
        >
          {isOpen ? (
            <Cross className="w-6 h-6 text-dark-gray-60" />
          ) : (
            <Menu className="w-6 h-6 text-dark-gray-60" />
          )}
        </Button>
      </div>

      {isOpen ? <MobileNavigationOverlay onClose={close} /> : null}
    </>
  );
}
