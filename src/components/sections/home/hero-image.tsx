import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative w-full aspect-[1511/828]">
      <Image
        src="/images/home/hero-splash/hero-splash.png"
        alt="Altra Dashboard"
        fill
        priority
        className="object-contain"
      />
    </div>
  );
}
