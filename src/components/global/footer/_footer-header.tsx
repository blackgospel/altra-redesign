import { Linkedin } from "@/assets/icons";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Logo } from "../logo/logo";

interface FooterHeaderProps {
  logoWidth: number;
  logoHeight: number;
}

export function FooterHeader({
  logoWidth = 164,
  logoHeight = 28,
}: FooterHeaderProps) {
  const t = useTranslations("footer");
  return (
    <div className="flex flex-col gap-6 @[1024px]:flex-row @[1024px]:items-center @[1024px]:justify-between">
      <Logo width={logoWidth} height={logoHeight} />

      <Link
        href="#"
        className="flex items-center gap-3 text-btn-s text-light-blue-70 py-2"
      >
        <Linkedin className="size-6" />
        <span>
          {t("connect.linkedIn", { default: "Connect with us on LinkedIn" })}
        </span>
      </Link>
    </div>
  );
}
