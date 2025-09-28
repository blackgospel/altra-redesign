import { Footer } from "@/components/global/footer/footer";
import { Header } from "@/components/global/header/header";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (
    !routing.locales.includes(
      locale as unknown as (typeof routing.locales)[number]
    )
  ) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Header sticky />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
