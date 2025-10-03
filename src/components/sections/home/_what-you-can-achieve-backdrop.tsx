"use client";

export function WhatYouCanAchieveBackdrop() {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <div className="absolute inset-0 h-full w-full bg-[#8265D4]">
        <div
          className="absolute -bottom-[20%] left-[35%] h-[100px] w-[120px] opacity-90 md:h-[150px] md:w-[180px] lg:h-[200px] lg:w-[240px]"
          style={{
            background: "#9B8FEF",
            borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
            transform: "rotate(15deg)",
          }}
        />

        <div
          className="absolute -right-[2%] top-[30%] h-[140px] w-[160px] opacity-90 md:top-[15%] md:h-[190px] md:w-[220px] lg:-top-[5%] lg:h-[240px] lg:w-[280px]"
          style={{
            background: "#9B8FEF",
            borderRadius: "70% 30% 50% 50% / 30% 50% 50% 70%",
            transform: "rotate(45deg)",
          }}
        />

        <div
          className="absolute right-[8%] top-[50%] h-[70px] w-[80px] opacity-90 md:top-[35%] md:h-[100px] md:w-[120px] lg:top-[15%] lg:h-[130px] lg:w-[160px]"
          style={{
            background: "#D9F193",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            transform: "rotate(-15deg)",
          }}
        />
      </div>
    </div>
  );
}
