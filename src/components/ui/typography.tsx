import React from "react";
import { cn } from "@/lib/utils";

const typographyVariants = {
  "h1": { class: "text-h1", defaultTag: "h1" },
  "h2": { class: "text-h2", defaultTag: "h2" },
  "h3": { class: "text-h3", defaultTag: "h3" },
  "h4": { class: "text-h4", defaultTag: "h4" },
  "h5": { class: "text-h5", defaultTag: "h5" },

  "title-l": { class: "text-title-l", defaultTag: "h3" },
  "title-l-medium": { class: "text-title-l-medium", defaultTag: "h3" },
  "title-m": { class: "text-title-m", defaultTag: "h4" },
  "title-s": { class: "text-title-s", defaultTag: "h5" },

  "subtitle-xl": { class: "text-subtitle-xl", defaultTag: "h6" },
  "subtitle-l": { class: "text-subtitle-l", defaultTag: "h6" },
  "subtitle-l-semibold": { class: "text-subtitle-l-semibold", defaultTag: "h6" },
  "subtitle-m": { class: "text-subtitle-m", defaultTag: "h6" },
  "subtitle-m-medium": { class: "text-subtitle-m-medium", defaultTag: "h6" },

  "text-xl": { class: "text-xl", defaultTag: "p" },
  "text-xl-medium": { class: "text-xl-medium", defaultTag: "p" },
  "text-xl-semibold": { class: "text-xl-semibold", defaultTag: "p" },
  "text-l": { class: "text-l", defaultTag: "p" },
  "text-m": { class: "text-m", defaultTag: "p" },

  "btn-l": { class: "text-btn-l", defaultTag: "span" },
  "btn-s": { class: "text-btn-s", defaultTag: "span" },
  "btn-m": { class: "text-btn-m", defaultTag: "span" },

  "caption-m": { class: "text-caption-m", defaultTag: "span" },
} as const;

export type TypographyVariant = keyof typeof typographyVariants;

interface TypographyProps {
  variant: TypographyVariant;
  component?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export function Typography({
  variant,
  component,
  className,
  children,
  ...props
}: TypographyProps & React.HTMLAttributes<HTMLElement>) {
  const variantConfig = typographyVariants[variant];
  const Component = component || variantConfig.defaultTag;

  return (
    <Component
      className={cn(variantConfig.class, className)}
      {...props}
    >
      {children}
    </Component>
  );
}