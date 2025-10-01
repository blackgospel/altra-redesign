"use client";

export function CustomerStoryBackdrop() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[#0B223D]">
        <div
          className="absolute w-[120px] h-[123px] opacity-90 -top-[75px] right-[133px]"
          style={{
            background: "rgba(148, 124, 216, 0.9)",
            borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
            transform: "rotate(15deg)",
          }}
        />

        <div
          className="absolute w-[179px] h-[189px] opacity-90 -top-[66px] right-[25px]"
          style={{
            background: "rgba(197, 228, 97, 0.9)",
            borderRadius: "54% 46% 38% 62% / 49% 65% 35% 51%",
            transform: "rotate(-20deg)",
          }}
        />

        <div
          className="absolute w-[260px] h-[248px] opacity-90 -bottom-[28%] left-[6%]"
          style={{
            background: "rgba(203, 110, 226, 0.9)",
            borderRadius: "70% 30% 50% 50% / 30% 50% 50% 70%",
            transform: "rotate(45deg)",
          }}
        />

        <div
          className="absolute w-[72px] h-[70px] opacity-90 -bottom-[2%] left-[2%]"
          style={{
            background: "#00D39C",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            transform: "rotate(-15deg)",
          }}
        />
      </div>
    </div>
  );
}
