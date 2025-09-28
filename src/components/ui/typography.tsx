import { cn } from "@/lib/utils";
import React from "react";

const typographyVariants = {
  h1: { class: "typography-h1", defaultTag: "h1" },
  h2: { class: "typography-h2", defaultTag: "h2" },
  h3: { class: "typography-h3", defaultTag: "h3" },
  h4: { class: "typography-h4", defaultTag: "h4" },
  h5: { class: "typography-h5", defaultTag: "h5" },

  "title-l": { class: "typography-title-l", defaultTag: "h3" },
  "title-l-medium": { class: "typography-title-l-medium", defaultTag: "h3" },
  "title-m": { class: "typography-title-m", defaultTag: "h4" },
  "title-s": { class: "typography-title-s", defaultTag: "h5" },

  "subtitle-xl": { class: "typography-subtitle-xl", defaultTag: "h6" },
  "subtitle-l": { class: "typography-subtitle-l", defaultTag: "h6" },
  "subtitle-l-semibold": {
    class: "typography-subtitle-l-semibold",
    defaultTag: "h6",
  },
  "subtitle-m": { class: "typography-subtitle-m", defaultTag: "h6" },
  "subtitle-m-medium": {
    class: "typography-subtitle-m-medium",
    defaultTag: "h6",
  },

  "text-xl": { class: "typography-xl", defaultTag: "p" },
  "text-xl-medium": { class: "typography-xl-medium", defaultTag: "p" },
  "text-xl-semibold": { class: "typography-xl-semibold", defaultTag: "p" },
  "text-l": { class: "typography-l", defaultTag: "p" },
  "text-m": { class: "typography-m", defaultTag: "p" },

  "btn-l": { class: "typography-btn-l", defaultTag: "span" },
  "btn-s": { class: "typography-btn-s", defaultTag: "span" },
  "btn-m": { class: "typography-btn-m", defaultTag: "span" },

  "caption-m": { class: "typography-caption-m", defaultTag: "span" },
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
    <Component className={cn(variantConfig.class, className)} {...props}>
      {children}
    </Component>
  );
}
