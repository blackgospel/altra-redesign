import { type IconProps } from "./types";

export function Workflow({ className, ...props }: IconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M11.9997 2.66699V10.667H14.6663V14.667H6.66634C5.18634 14.667 3.99967 15.8537 3.99967 17.3337V21.3337H1.33301V29.3337H9.33301V21.3337H6.66634V17.3337H14.6663V21.3337H11.9997V29.3337H19.9997V21.3337H17.333V17.3337H25.333V21.3337H22.6663V29.3337H30.6663V21.3337H27.9997V17.3337C27.9997 15.8537 26.813 14.667 25.333 14.667H17.333V10.667H19.9997V2.66699H11.9997Z"
        fill="currentColor"
      />
    </svg>
  );
}
