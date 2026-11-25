import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

// The width axis lets headings run wide while body text stays at normal width.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: "Benard Ndiritu",
  description:
    "Backend-focused engineer building production-grade web applications using React, Node.js, Django and AWS.",
};

export const viewport: Viewport = {
  themeColor: "#f5f6f8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
