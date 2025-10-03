export function ChecklistBackdrop() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full @md/who-we-serve:rounded-2xl bg-light-blue-60 shadow-2xl"
        style={{
          filter: "drop-shadow(0 4px 50px rgba(135, 105, 220, 0.15))",
        }}
      >
        <div
          className="absolute w-[200px] h-[150px] md:w-[300px] md:h-[200px] lg:w-[400px] lg:h-[250px] opacity-25 -top-8 -right-8 md:-top-12 md:-right-12 lg:-top-16 lg:-right-16"
          style={{
            background: "#CB6EE2",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            transform: "rotate(15deg)",
          }}
        />

        <div
          className="absolute w-[180px] h-[120px] md:w-[250px] md:h-[180px] lg:w-[320px] lg:h-[220px] opacity-50 -bottom-6 -right-6 md:-bottom-10 md:-right-10 lg:-bottom-12 lg:-right-12"
          style={{
            background: "#64BCEC",
            borderRadius: "40% 60% 70% 30% / 40% 70% 30% 60%",
            transform: "rotate(-20deg)",
          }}
        />

        <div
          className="absolute w-[160px] h-[140px] md:w-[220px] md:h-[200px] lg:w-[280px] lg:h-[260px] opacity-40 -top-10 right-[20%] md:-top-16 md:right-[25%] lg:-top-20 lg:right-[30%]"
          style={{
            background: "#64BCEC",
            borderRadius: "70% 30% 50% 50% / 30% 50% 50% 70%",
            transform: "rotate(45deg)",
          }}
        />
      </div>
    </div>
  );
}
