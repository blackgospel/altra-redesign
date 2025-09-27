import { cn } from "@/lib/utils";
import { DesktopFooter } from "./_desktop-footer";
import { MobileFooter } from "./_mobile-footer";

export function Footer() {
  return (
    <div className="@container flex w-full">
      <div className={cn("flex @[1024px]:hidden flex-1")}>
        <MobileFooter />
      </div>
      <div className={cn("hidden @[1024px]:flex flex-1")}>
        <DesktopFooter />
      </div>
    </div>
  );
}
