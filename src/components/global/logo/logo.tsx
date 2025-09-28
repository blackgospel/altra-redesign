import Image, { ImageProps } from "next/image";

export interface LogoProps
  extends Omit<ImageProps, "width" | "height" | "src" | "alt"> {
  width?: number;
  height?: number;
  alt?: string;
}

export function Logo({
  width = 130,
  height = 22,
  alt = "Altra Logo",
  ...props
}: LogoProps) {
  return (
    <Image
      src="/images/logo.png"
      alt={alt}
      width={width}
      height={height}
      style={{ width: "auto", height: "auto", ...(props.style || {}) }}
      {...props}
      priority
    />
  );
}
