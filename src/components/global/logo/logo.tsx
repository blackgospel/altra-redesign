import Image, { ImageProps } from "next/image";
import { Link } from "@/i18n/navigation";

export interface LogoProps
  extends Omit<ImageProps, "width" | "height" | "src" | "alt"> {
  width?: number;
  height?: number;
  alt?: string;
  enableLink?: boolean;
}

export function Logo({
  width = 130,
  height = 22,
  alt = "Altra Logo",
  enableLink = true,
  ...props
}: LogoProps) {
  const image = (
    <Image
      src="/images/logo.png"
      alt={alt}
      width={width}
      height={height}
      // style={{ width: "auto", height: "auto", ...(props.style || {}) }}
      {...props}
      priority
    />
  );

  if (enableLink) return <Link href="/">{image}</Link>;

  return <>{image}</>;
}
