export default function OurSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="flex flex-col relative">{children}</main>;
}
