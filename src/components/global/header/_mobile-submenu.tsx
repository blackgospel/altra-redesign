"use client";

import { ArrowLeft } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { NAVIGATION_ITEMS } from "@/config/navigation";
import { useMobileOverlayStore } from "@/lib/stores/mobile-overlay/mobile-overlay-provider";
import { GenericDropdownItem } from "./_generic-dropdown-item";

export function MobileSubmenu() {
  const activeSubmenu = useMobileOverlayStore((s) => s.activeSubmenu);
  const setActiveSubmenu = useMobileOverlayStore((s) => s.setActiveSubmenu);
  const activeItem = NAVIGATION_ITEMS.find((item) => item.id === activeSubmenu);

  const onBack = () => {
    setActiveSubmenu(null);
  };

  return (
    <div
      className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
        activeSubmenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full w-full container mx-auto gap-8 px-4 py-6 overflow-hidden">
        <div>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 p-0 hover:bg-transparent"
            onClick={onBack}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Button>
        </div>

        <nav className="flex flex-col scroll-container gap-6">
          {activeItem?.title && (
            <Typography variant="subtitle-l-semibold">
              {activeItem.title}
            </Typography>
          )}

          <ul className="flex flex-col gap-6">
            {activeItem?.dropdown.map((subItem) => (
              <li key={subItem.href}>
                <GenericDropdownItem
                  item={subItem}
                  slots={{
                    label: {
                      className: "flex-none",
                    },
                  }}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
