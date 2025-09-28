import { ArrowRight } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { HOW_WE_HELP } from "@/config/home";
import Image from "next/image";
import { SectionTitle } from "./_section-title";

export function HowWeHelp() {
  return (
    <div className="flex flex-col gap-12">
      <SectionTitle
        title="How We Help"
        description="Everything you need to engage families, support residents and streamline service delivery — in one place:"
      />

      <div className="flex flex-col gap-12 md:gap-32">
        {HOW_WE_HELP.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse ${
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-6 lg:gap-12 items-center`}
          >
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <Typography variant="h4">{item.title}</Typography>

                <Typography variant="text-xl" className="text-dark-gray-40">
                  {item.description}
                </Typography>
              </div>

              <Button variant="outline" size="sm" className="self-start">
                Learn more
                <ArrowRight className="size-5" />
              </Button>
            </div>

            <div className="relative aspect-[689/500] w-full lg:w-auto flex-1 xl:flex-none">
              <Image
                src={item.image}
                alt={item.title}
                width={689}
                height={500}
                priority
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
