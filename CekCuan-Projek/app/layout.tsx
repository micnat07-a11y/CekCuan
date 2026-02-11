import React from "react"
import type { Metadata } from "next";
import { Oswald, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const _oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

const _plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CekCuan - Analisis Cuan Masa Depan",
  description:
    "Kalkulator Break Even Point (BEP) interaktif untuk analisis bisnis Anda. Hitung profit, target unit, dan visualisasi titik balik modal.",
};

export const viewport = {
  themeColor: "#4C763B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${_oswald.variable} ${_plusJakarta.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
