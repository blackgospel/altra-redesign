"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Logo } from "../logo/logo";
import { AltraNavigationMenu } from "./_navigation-menu";

interface DesktopHeaderProps {
  navbarStyles: string;
}

export function DesktopHeader({ navbarStyles }: DesktopHeaderProps) {
  const t = useTranslations("header");
  return (
    <div
      className={cn(
        navbarStyles,
        "flex items-center justify-between flex-1 px-6 py-4"
      )}
    >
      <Logo enableLink />

      <AltraNavigationMenu />

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <a href="https://app.altra.ie/login">
            {t("actions.login", { default: "Log in" })}
          </a>
        </Button>
        <Button variant="primary" size="sm" asChild>
          <a href="https://calendly.com/helloaltra">
            {t("actions.bookDemo", { default: "Book Demo" })}
          </a>
        </Button>
      </div>
    </div>
  );
}
