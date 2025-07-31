import { SearchFiltersProvider } from "@/context/search-filters";
import { ComparisonProvider } from "@/context/comparison";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ComparisonToast } from "@/components/comparison-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SuppComp",
  description: "Search, inspect, and compare your favorite supplements 💊",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ComparisonProvider>
          <SearchFiltersProvider>{children}</SearchFiltersProvider>
          <ComparisonToast />
        </ComparisonProvider>
      </body>
    </html>
  );
}
