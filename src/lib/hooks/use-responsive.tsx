import { useEffect, useState } from "react";

const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

type Breakpoint = keyof typeof BREAKPOINTS;

/**
 * Hook that returns true if the screen width is at or above the specified Tailwind breakpoint (min-width approach)
 * @param breakpoint - The Tailwind breakpoint to check against ('sm', 'md', 'lg', 'xl', '2xl')
 * @param defaultValue - Default value to return before hydration (defaults to false)
 * @returns boolean indicating if screen width is at or above the breakpoint
 *
 * @example
 * useResponsive('md') // true when width >= 768px
 * useResponsive('lg') // true when width >= 1024px
 */
export function useResponsive(
  breakpoint: Breakpoint,
  defaultValue = false
): boolean {
  const [isAtOrAboveBreakpoint, setIsAtOrAboveBreakpoint] =
    useState(defaultValue);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      const newWidth = window.innerWidth;
      setIsAtOrAboveBreakpoint(newWidth >= BREAKPOINTS[breakpoint]);
    };

    handleWindowSizeChange();

    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [breakpoint]);

  return isAtOrAboveBreakpoint;
}
