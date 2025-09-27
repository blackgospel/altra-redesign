import { Linkedin } from "@/assets/icons";
import Link from "next/link";
import { Logo } from "../logo/logo";

interface FooterHeaderProps {
  logoWidth: number;
  logoHeight: number;
}

export function FooterHeader({
  logoWidth = 164,
  logoHeight = 28,
}: FooterHeaderProps) {
  return (
    <div className="flex flex-col gap-6 @[1024px]:flex-row @[1024px]:items-center @[1024px]:justify-between">
      <Logo width={logoWidth} height={logoHeight} />

      <Link
        href="#"
        className="flex items-center gap-3 text-btn-s text-light-blue-70 py-2"
      >
        <Linkedin className="size-6" />
        <span>Connect with us on Linkedin</span>
      </Link>
    </div>
  );
}
