export default function DataSecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col relative bg-background">{children}</main>
  );
}
