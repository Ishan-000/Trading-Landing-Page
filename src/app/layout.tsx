import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ['400', '500', '600', '700'] 
});

export const metadata: Metadata = {
  title: "Think Superior, Trade Zuperior",
  description: "Recreated from Framer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-inter antialiased",
        inter.variable,
        manrope.variable
      )}>
        {children}
      </body>
    </html>
  );
}