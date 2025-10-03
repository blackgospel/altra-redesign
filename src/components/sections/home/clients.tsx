import { CLIENTS } from "@/config/home";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

type ClientsProps = React.ComponentProps<"section">;

export function Clients({ className, ...props }: ClientsProps) {
  const t = useTranslations("home.clients");

  return (
    <section className={cn("@container/clients", className)} {...props}>
      <div className="relative">
        <div className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory @md/clients:hidden">
          {CLIENTS.map((client) => (
            <div
              className="flex shrink-0 snap-start items-center justify-center"
              key={client.slug}
            >
              <Image
                src={t(`items.${client.slug}.imagePath`)}
                alt={t(`items.${client.slug}.alt`)}
                width={100}
                height={58}
                className="h-[58px] w-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute right-0 top-0 h-full w-[100px] bg-gradient-to-l from-white to-transparent @md/clients:hidden" />

        <div className="hidden @md/clients:grid @md/clients:grid-cols-4 @lg/clients:grid-cols-7 @md/clients:items-center @md/clients:justify-center @md/clients:gap-8 @lg/clients:gap-12">
          {CLIENTS.map((client) => (
            <div className="flex items-center justify-center" key={client.slug}>
              <Image
                src={t(`items.${client.slug}.imagePath`)}
                alt={t(`items.${client.slug}.alt`)}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
