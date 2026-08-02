import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import { Providers } from "@/components/ui/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Sephil Home & Business",
  description:
    "Premium boutique retail experience for fashion, beauty, home essentials, and lifestyle products.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-text-primary">
        <Providers>
          <Header />

          <main className="pt-16 lg:pt-[72px]">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}