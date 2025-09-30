export default function WhoWeServeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="flex flex-col relative">{children}</main>;
}
