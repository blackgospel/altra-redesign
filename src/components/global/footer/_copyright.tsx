import { Typography } from "@/components/ui/typography";

export function Copyright() {
  return (
    <div
      className="pt-9"
      style={{
        borderTop: "1px solid",
        borderImageSource:
          "linear-gradient(90deg, rgba(134, 151, 169, 0.5) 0%, #8697A9 50.1%, rgba(134, 151, 169, 0.5) 100%)",
        borderImageSlice: 1,
      }}
    >
      <div>
        <Typography variant="text-l" className="text-dark-gray-40">
          © 2025 Altra
        </Typography>
      </div>
    </div>
  );
}
