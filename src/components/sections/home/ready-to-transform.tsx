import { ArrowRight } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";

export function ReadyToTransform() {
  return (
    <div className="flex items-center justify-center w-full relative bg-[url('/images/home/ready-to-transform/background.png')] bg-cover bg-center bg-no-repeat">
      <div className="container px-4 py-24 xl:py-0 flex flex-col lg:flex-row items-center justify-center gap-10 z-2 text-white">
        <div className="flex-1 flex flex-col gap-10 items-center xl:items-start justify-center xl:justify-start">
          <Typography
            variant="h3"
            className="text-white text-center xl:text-left"
          >
            Ready to transform experience and engagement in your care service?
          </Typography>

          <Button
            variant="white"
            size="md"
            className="self-center xl:self-start flex items-center gap-3"
          >
            <span>Explore Our Solutions</span>
            <ArrowRight className="size-5" />
          </Button>
        </div>

        <div className="hidden xl:flex flex-1 relative w-full aspect-[713/501]">
          <Image
            src="/images/home/ready-to-transform/splash.png"
            alt="Ready to Transform"
            width={713}
            height={501}
            className="object-contain absolute bottom-0 left-[50%] translate-x-[-50%]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
