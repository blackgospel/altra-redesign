import { IconProps } from "./types";

export function Food({ className = "" }: IconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 2.66699H6.66667V29.3337H4V2.66699ZM25.3333 2.66699H8V29.3337H25.3333C26.804 29.3337 28 28.1377 28 26.667V5.33366C28 3.86299 26.804 2.66699 25.3333 2.66699ZM24 16.0003H12V13.3337H24V16.0003ZM24 10.667H12V8.00033H24V10.667Z"
        fill="currentColor"
      />
    </svg>
  );
}

