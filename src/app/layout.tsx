import { Footer } from "@/components/global/footer/footer";
import { Header } from "@/components/global/header/header";
import type { Metadata } from "next";
import { Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Altra - All-in-one care service platform",
  description:
    "Transform experience and engagement in your care service with Altra's comprehensive platform for modern care providers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${geistMono.variable} bg-background-0 font-outfit antialiased`}
      >
        <Header sticky />
        {children}
        <Footer />
      </body>
    </html>
  );
}
