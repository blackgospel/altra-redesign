"use client";

import { Portal } from "@/components/global/portal/portal";
import { MOBILE_HEADER_HEIGHT } from "@/config/header";
import { useMobileOverlayStore } from "@/lib/stores/mobile-overlay/mobile-overlay-provider";
import { MobileNavMenu } from "./_mobile-nav-menu";
import { MobileSubmenu } from "./_mobile-sub-menu";

interface MobileNavigationOverlayProps {
  onClose: () => void;
}

const OFFSET_TO_HEADER = 24;

export function MobileNavigationOverlay({
  onClose,
}: MobileNavigationOverlayProps) {
  const isOpen = useMobileOverlayStore((s) => s.isOpen);

  if (!isOpen) return null;

  return (
    <Portal>
      <div
        className="fixed inset-0 z-5 flex min-h-screen flex-col bg-background-0 overflow-hidden"
        style={{
          paddingTop: `${MOBILE_HEADER_HEIGHT + OFFSET_TO_HEADER}px`,
        }}
      >
        <div className="relative flex-1 overflow-hidden">
          <MobileNavMenu onClose={onClose} />

          <MobileSubmenu />
        </div>
      </div>
    </Portal>
  );
}
