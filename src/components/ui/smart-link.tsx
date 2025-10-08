import { Link } from "@/i18n/navigation";
import { ComponentProps } from "react";

type SmartLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export function SmartLink({ href, children, ...props }: SmartLinkProps) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...(props as ComponentProps<"a">)}
      >
        {children}
      </a>
    );
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Link href={href as any} {...props}>
      {children}
    </Link>
  );
}
