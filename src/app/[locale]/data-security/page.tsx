import {
  DataSecurityContent,
  DataSecurityHero,
} from "@/components/sections/data-security";

export default function DataSecurityPage() {
  return (
    <main>
      <DataSecurityHero className="bg-light-blue-60" />

      <DataSecurityContent />
    </main>
  );
}
