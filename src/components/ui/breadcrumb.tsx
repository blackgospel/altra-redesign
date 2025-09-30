"use client";

import { ChevronRight, HomeFill } from "@/assets/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Typography } from "./typography";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps extends React.ComponentProps<"nav"> {
  items: BreadcrumbItem[];
  variant?: "default" | "white";
}

export function Breadcrumb({
  items,
  variant = "default",
  className,
  ...props
}: BreadcrumbProps) {
  const isWhite = variant === "white";

  return (
    <nav
      className={cn("flex items-center gap-2 text-sm", className)}
      aria-label="Breadcrumb"
      {...props}
    >
      <div className="flex items-center gap-2">
        <HomeFill
          className={cn("size-5", isWhite ? "text-white" : "text-gray-600")}
        />
        <Link
          href="/"
          className={cn(
            "typography-m hover:underline",
            isWhite ? "text-white" : "text-gray-600"
          )}
        >
          <Typography variant="text-m">Home</Typography>
        </Link>
      </div>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight
            className={cn("size-3", isWhite ? "text-white" : "text-gray-400")}
          />
          {item.href ? (
            <Link
              href={item.href}
              className={cn(
                "typography-m hover:underline",
                isWhite ? "text-white" : "text-gray-600"
              )}
            >
              {item.label}
            </Link>
          ) : (
            <span
              className={cn(
                "typography-m",
                isWhite ? "text-white/50" : "text-gray-400"
              )}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
