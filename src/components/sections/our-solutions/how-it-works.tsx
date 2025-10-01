import { Communication, Notes, Smile, Users } from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface CaptureItem {
  icon: string;
  title: string;
}

interface KeyFeatures {
  title: string;
  list: string[];
}

interface HowItWorksItem {
  title: string;
  description?: string;
  keyFeatures?: KeyFeatures;
  captureItems?: {
    title: string;
    items: CaptureItem[];
  };
  note?: string;
  imagePath: string;
}

interface HowItWorksProps extends React.ComponentProps<"section"> {
  translationKey: string;
}

const getIconComponent = (iconName: string) => {
  const iconMap = {
    users: Users,
    smile: Smile,
    communication: Communication,
    note: Notes,
  } as const;

  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  return IconComponent || Users;
};

export function HowItWorks({
  translationKey,
  className,
  ...props
}: HowItWorksProps) {
  const t = useTranslations(translationKey);
  const sectionLabel = t("sectionLabel");
  const items = t.raw("items") as HowItWorksItem[];

  return (
    <section
      className={cn(
        "relative altra-container w-full flex flex-col gap-[60px]",
        className
      )}
      {...props}
    >
      {items.map((item, index) => {
        const isEven = index % 2 === 1;

        return (
          <div key={index} className="flex flex-col gap-[60px]">
            <div
              className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center",
                isEven && "lg:grid-flow-dense"
              )}
            >
              <div
                className={cn(
                  "relative w-full h-[500px] rounded-[15px] bg-light-blue-20 border border-line-3 overflow-hidden",
                  isEven && "lg:col-start-2"
                )}
              >
                <div className="relative w-full h-full flex items-center justify-center p-8">
                  <Image
                    src={item.imagePath}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div
                className={cn(
                  "flex flex-col gap-6",
                  isEven && "lg:col-start-1 lg:row-start-1"
                )}
              >
                <div className="flex flex-col gap-[10px]">
                  <Typography
                    variant="caption-m"
                    className="uppercase text-light-blue-70"
                  >
                    {sectionLabel}
                  </Typography>
                  <Typography variant="h3" className="text-dark-gray-100">
                    {item.title}
                  </Typography>
                </div>

                <div className="flex flex-col gap-[30px]">
                  {item.description && (
                    <Typography
                      variant="text-xl"
                      className="text-dark-gray-100"
                    >
                      {item.description}
                    </Typography>
                  )}

                  {item.keyFeatures && (
                    <div className="flex flex-col gap-[10px]">
                      <Typography
                        variant="text-xl-semibold"
                        className="text-dark-gray-100"
                      >
                        {item.keyFeatures.title}
                      </Typography>
                      <ul className="flex flex-col gap-[10px]">
                        {item.keyFeatures.list.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-dark-gray-100 mt-1">•</span>
                            <Typography
                              variant="text-xl"
                              className="text-dark-gray-100"
                            >
                              {feature}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.captureItems && (
                    <div className="flex flex-col gap-[20px]">
                      <Typography
                        variant="text-xl-semibold"
                        className="text-dark-gray-100"
                      >
                        {item.captureItems.title}
                      </Typography>
                      <div className="flex flex-row gap-[40px]">
                        {item.captureItems.items.map(
                          (captureItem, captureIndex) => {
                            const IconComponent = getIconComponent(
                              captureItem.icon
                            );
                            return (
                              <div
                                key={captureIndex}
                                className="flex flex-col items-center gap-[10px]"
                              >
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                  <IconComponent className="w-6 h-6 text-[#ED4789]" />
                                </div>
                                <Typography
                                  variant="text-l"
                                  className="text-dark-gray-100 text-center"
                                >
                                  {captureItem.title}
                                </Typography>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  )}

                  {item.note && (
                    <Typography
                      variant="text-xl"
                      className="text-dark-gray-100"
                    >
                      {item.note}
                    </Typography>
                  )}
                </div>
              </div>
            </div>

            {index < items.length - 1 && (
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-30/30 to-transparent opacity-30" />
            )}
          </div>
        );
      })}
    </section>
  );
}
