"use client";

import { ChevronRight } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { NAVIGATION_ITEMS } from "@/config/navigation";
import { useMobileOverlayStore } from "@/lib/stores/mobile-overlay/mobile-overlay-provider";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface MobileNavMenuProps {
  onClose: () => void;
}

export function MobileNavMenu({ onClose }: MobileNavMenuProps) {
  const t = useTranslations("header");
  const activeSubmenu = useMobileOverlayStore((s) => s.activeSubmenu);
  const setActiveSubmenu = useMobileOverlayStore((s) => s.setActiveSubmenu);

  const onItemClick = (itemId: string) => {
    setActiveSubmenu(itemId);
  };

  return (
    <div
      className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
        activeSubmenu ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      <div className="container mx-auto p-4">
        <nav className="scroll-container">
          <ul className="space-y-2">
            {NAVIGATION_ITEMS.map((item) => {
              const hasDropdown = item.hasDropdown && item.dropdown.length > 0;

              return (
                <li key={item.id}>
                  {hasDropdown ? (
                    <span
                      className="flex w-full items-center gap-2 py-4 text-left cursor-pointer"
                      onClick={() => onItemClick(item.id)}
                    >
                      <Typography variant="subtitle-l">
                        {t(`nav.${item.id}.label`)}
                      </Typography>
                      <ChevronRight className="w-4 h-4 text-muted-foreground stroke-[2px] ml-auto" />
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 py-4"
                      onClick={onClose}
                    >
                      <Typography variant="subtitle-l">
                        {t(`nav.${item.id}.label`)}
                      </Typography>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className="py-8 mt-6"
          style={{
            borderTop: "1px solid",
            borderImageSource:
              "linear-gradient(90deg, rgba(134, 151, 169, 0.3) 0%, #8697A9 50.1%, rgba(134, 151, 169, 0.3) 100%)",
            borderImageSlice: 1,
          }}
        >
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="flex-1">
              Log in
            </Button>
            <Button variant="primary" size="sm" className="flex-1">
              Book Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
