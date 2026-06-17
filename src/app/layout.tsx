import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ultimate Solution Partners | Firma Hukum Terpercaya",
  description:
    "Firma hukum spesialis litigasi, korporasi, ketenagakerjaan, dan properti. Melayani klien korporasi & individu di seluruh Indonesia sejak 2008.",
  keywords: [
    "firma hukum",
    "pengacara",
    "konsultan hukum",
    "litigasi",
    "hukum perusahaan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
