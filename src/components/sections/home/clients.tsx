import { CLIENTS } from "@/config/home";
import Image from "next/image";

export function Clients() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 justify-center items-center gap-8 md:gap-12">
      {CLIENTS.map((client) => (
        <div
          className="flex justify-center items-center gap-8"
          key={client.image}
        >
          <Image
            src={client.image}
            alt={client.alt}
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
