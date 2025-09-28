import { ArrowRight } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

export function Hero() {
  return (
    <div className="flex flex-col items-center gap-8 md:gap-12">
      <div className="flex flex-col items-center gap-8">
        <Typography variant="h1" className="text-center">
          Altra is the all-in-one experience and engagement platform designed
          for modern care services.
        </Typography>

        <Typography
          variant="subtitle-xl"
          className="w-full max-w-4xl text-center"
        >
          We help you deliver outstanding care experiences, build trust with
          families, empower your teams, and improve outcomes for the people you
          support.
        </Typography>
      </div>
      <Link href="#">
        <Button variant="primary" size="md" className="self-start">
          <span>Book Demo</span>
          <ArrowRight className="size-5" />
        </Button>
      </Link>
    </div>
  );
}
