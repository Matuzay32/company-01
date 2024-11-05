import "./globals.css";

import HeaderGlobal from "@/components/ui/Headers/headerGlobal";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Agency Landing Page",
  description:
    "Elevate your digital presence with our web and app development services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-gray-900 text-white scroll-smooth`}
      >
        <HeaderGlobal></HeaderGlobal>
        {children}
      </body>
    </html>
  );
}
