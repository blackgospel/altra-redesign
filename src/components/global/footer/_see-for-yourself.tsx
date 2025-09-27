import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function SeeForYourself() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Typography variant="title-l-medium">See for yourself</Typography>

        <Typography variant="text-l">
          Our demos give you a clear picture of how Altra can transform
          experience and engagement, all the while saving you precious time.
        </Typography>
      </div>

      <div>
        <Button variant="primary">
          <Link href="#" className="flex items-center gap-2">
            <span>Pick a Time</span>
            <ArrowRight className="size-6" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
