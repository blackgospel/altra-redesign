import { IconProps } from "./types";

export function MessageOne({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_message_one"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="4"
        y="6"
        width="32"
        height="29"
      >
        <path
          d="M5 7H35V29.5H23.75L20 33.25L16.25 29.5H5V7Z"
          fill="white"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.2492 18.25H20.7515M26.75 18.25H28.2493M11.75 18.25H13.2492"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </mask>
      <g mask="url(#mask0_message_one)">
        <path d="M1.99902 2.5H37.999V38.5H1.99902V2.5Z" fill="currentColor" />
      </g>
    </svg>
  );
}
