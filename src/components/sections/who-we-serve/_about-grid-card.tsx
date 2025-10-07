import { ArrowRight } from "@/assets/icons";
import { IconMap } from "@/components/global/icon-map";
import { Typography } from "@/components/ui/typography";
import { Link } from "@/i18n/navigation";
import { AboutGridItem } from "./who-we-serve.types";

interface AboutGridCardProps {
  item: AboutGridItem;
}

export function AboutGridCard({ item }: AboutGridCardProps) {
  return (
    <div className="bg-background-1 border border-line-4 rounded-[10px] p-5 md:p-6 flex flex-col gap-6 md:gap-8 h-full">
      <div
        className="w-14 h-14 rounded-[10px] flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: item.iconBgColor }}
      >
        <IconMap
          icon={item.icon}
          slots={{ icon: { className: "text-white" } }}
        />
      </div>

      <div className="flex flex-col justify-between flex-1 gap-4">
        <div className="space-y-4">
          <Typography variant="h5" className="text-dark-gray-100">
            {item.title}
          </Typography>
          <Typography variant="text-xl" className="text-dark-gray-100">
            {item.description}
          </Typography>
        </div>

        {item.ctaText && item.ctaHref && (
          /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
          <Link href={item.ctaHref as any}>
            <button className="flex items-center gap-2 py-1 hover:gap-3 transition-all duration-200 self-start">
              <Typography variant="btn-m" className="text-dark-navy-60">
                {item.ctaText}
              </Typography>
              <ArrowRight className="w-5 h-5 text-dark-navy-60" />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
