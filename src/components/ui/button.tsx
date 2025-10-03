import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary:
          "[color:var(--color-white)] bg-blue hover:bg-blue-60 rounded-full shadow-button-primary",
        destructive:
          "[color:var(--color-white)] bg-red hover:bg-red-60 rounded-full shadow-button",
        outline:
          "border border-[#95CFF0] [background-color:transparent] [color:var(--color-light-blue-70)] hover:bg-gray-5 rounded-full shadow-card",
        ghost:
          "[color:var(--color-dark-navy-60)] hover:bg-navy-5 hover:[color:var(--color-dark-navy-80)] rounded-full",
        white:
          "[color:var(--color-dark-navy-60)] bg-white hover:bg-gray-5 rounded-full shadow-button",
        link: "[color:var(--color-blue)] hover:[color:var(--color-blue-60)] underline-offset-4 hover:underline rounded-none",
      },
      size: {
        md: "px-12 py-[15px] typography-btn-l",
        sm: "px-6 py-[15px] typography-btn-s",
        icon: "size-12 p-0",
        "icon-sm": "size-10 p-0",
        "icon-lg": "size-14 p-0",
      },
      textSize: {
        md: "typography-btn-m",
        sm: "typography-btn-s",
        lg: "typography-btn-l",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

function Button({
  className,
  variant,
  size,
  textSize,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, textSize, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
