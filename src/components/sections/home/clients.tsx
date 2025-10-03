import { CLIENTS } from "@/config/home";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface ClientsProps extends React.ComponentProps<"section"> {}

export function Clients({ className, ...props }: ClientsProps) {
  const t = useTranslations("home.clients");

  return (
    <section className={cn("altra-container pt-12", className)} {...props}>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 justify-center items-center gap-8 md:gap-12">
        {CLIENTS.map((client) => (
          <div
            className="flex justify-center items-center gap-8"
            key={client.slug}
          >
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
    </section>
  );
}
