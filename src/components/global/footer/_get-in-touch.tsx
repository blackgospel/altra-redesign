import { Envelope } from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

export function GetInTouch() {
  return (
    <div className="flex flex-col gap-6">
      <Typography variant="title-l-medium">Get in touch with us</Typography>

      <Link href="mailto:hello@altra.ie" className="flex items-center gap-2">
        <Envelope className="size-6 text-light-blue-70" />
        <span>hello@altra.ie</span>
      </Link>
    </div>
  );
}
