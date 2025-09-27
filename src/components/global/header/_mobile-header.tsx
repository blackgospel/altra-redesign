"use client";

import { Cross, Menu } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { useMobileOverlayStore } from "@/lib/stores/mobile-overlay/mobile-overlay-provider";
import { Logo } from "../logo/logo";
import { MobileNavigationOverlay } from "./_mobile-navigation-overlay";

export function MobileHeader() {
  const isOpen = useMobileOverlayStore((s) => s.isOpen);
  const toggle = useMobileOverlayStore((s) => s.toggle);
  const close = useMobileOverlayStore((s) => s.close);

  return (
    <>
      <header className="flex items-center justify-between w-full px-4 py-3">
        <Logo />
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
      </header>

      {isOpen ? <MobileNavigationOverlay onClose={close} /> : null}
    </>
  );
}
