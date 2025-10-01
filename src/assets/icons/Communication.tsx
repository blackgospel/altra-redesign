import { IconProps } from "./types";

export function Communication({ className = "" }: IconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <path
          d="M3.33 5H30V25H14.17L10.83 28.33L7.5 25H3.33V5Z"
          fill="currentColor"
        />
        <path
          d="M3.33 5H30V25H14.17L10.83 28.33L7.5 25H3.33V5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.83 15H16.67M21.67 15H22.5M10 15H10.83"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <g opacity="0.7">
        <path
          d="M27.5 31.67H18.33V25H30V18.33H36.67V31.67H32.5L30 34.17L27.5 31.67Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
