import { ArrowRight } from "@/assets/icons";
import { AboutGridItem } from "./who-we-serve.types";

interface AboutGridCardProps {
  item: AboutGridItem;
  icon: React.ReactNode;
}

export function AboutGridCard({ item, icon }: AboutGridCardProps) {
  return (
    <div className="bg-background-1 border border-line-4 rounded-[10px] p-5 md:p-6 flex flex-col gap-6 md:gap-8 h-full">
      <div
        className="w-14 h-14 rounded-[10px] flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: item.iconBgColor }}
      >
        <div className="w-8 h-8 text-white">{icon}</div>
      </div>

      <div className="flex flex-col justify-between flex-1 gap-4">
        <div className="space-y-4">
          <h3 className="typography-h5 text-dark-gray-100">{item.title}</h3>
          <p className="typography-xl text-dark-gray-100">{item.description}</p>
        </div>

        {item.ctaText && (
          <button className="flex items-center gap-2 text-dark-navy-60 typography-btn-m py-1 hover:gap-3 transition-all duration-200 self-start">
            <span>{item.ctaText}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
