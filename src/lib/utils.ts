/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Omits specified properties from an object and returns a new object
 * @param obj - The source object
 * @param keysToOmit - Array of property names to exclude
 * @returns A new object without the specified properties
 */
export function omitProps<
  T extends Record<string, any> | undefined | null,
  K extends keyof T
>(obj: T | undefined | null, keysToOmit: K[]): Omit<T, K> | undefined {
  if (!obj) return {} as Omit<T, K>;

  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keysToOmit.includes(key as K))
  ) as Omit<T, K>;
}

/**
 * Omits the className property from an object and returns a new object
 * @param obj - The source object
 * @returns A new object without the className property
 */
export function omitClassName<T extends Record<string, any> | undefined | null>(
  obj: T
): Omit<T, "className"> | undefined {
  if (!obj) return {} as Omit<T, "className">;

  return omitProps(obj, ["className"]);
}
