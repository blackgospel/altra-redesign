import { IconProps } from "./types";

export function Voice({
  className = "",
  width = 32,
  height = 32,
  color = "currentColor",
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20.6663 7.33366C20.6663 4.75633 18.577 2.66699 15.9997 2.66699C13.4223 2.66699 11.333 4.75633 11.333 7.33366V16.0003C11.333 18.5777 13.4223 20.667 15.9997 20.667C18.577 20.667 20.6663 18.5777 20.6663 16.0003V7.33366Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M6 15.334C6 20.8567 10.4773 25.334 16 25.334M16 25.334C21.5227 25.334 26 20.8567 26 15.334M16 25.334V29.334"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
