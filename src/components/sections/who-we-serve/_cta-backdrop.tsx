"use client";

export function CtaBackdrop() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[#0B223D]">
        <div
          className="absolute w-[120px] h-[100px] md:w-[180px] md:h-[150px] lg:w-[240px] lg:h-[200px] opacity-90 -bottom-[10%] lg:-bottom-[20%] left-[2%]"
          style={{
            background: "#947CD8",
            borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
            transform: "rotate(15deg)",
          }}
        />

        <div
          className="absolute w-[140px] h-[120px] md:w-[200px] md:h-[170px] lg:w-[260px] lg:h-[220px] opacity-90 -bottom-[12%] lg:-bottom-[24%] left-[6%]"
          style={{
            background: "#C5E461",
            borderRadius: "54% 46% 38% 62% / 49% 65% 35% 51%",
            transform: "rotate(-20deg)",
          }}
        />

        <div
          className="absolute w-[160px] h-[140px] md:w-[220px] md:h-[190px] lg:w-[280px] lg:h-[240px] opacity-90 top-[-10%] md:top-[15%] lg:-top-[5%] -right-[2%]"
          style={{
            background: "#CB6EE2",
            borderRadius: "70% 30% 50% 50% / 30% 50% 50% 70%",
            transform: "rotate(45deg)",
          }}
        />

        <div
          className="absolute w-[80px] h-[70px] md:w-[120px] md:h-[100px] lg:w-[160px] lg:h-[130px] opacity-90 top-[15%] md:top-[35%] lg:top-[15%] right-[8%]"
          style={{
            background: "#7C80D8",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            transform: "rotate(-15deg)",
          }}
        />
      </div>
    </div>
  );
}
