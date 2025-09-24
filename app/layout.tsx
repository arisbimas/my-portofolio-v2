import "./globals.css";
import { Inter } from "next/font/google";

import LayoutContent from "@/components/LayoutContent";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aris Bimas Nugroho - Portofolio",
  description: "Protofolio Aris Bimas Nugroho - Software Developer - Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutContent>{children}</LayoutContent>
        <Analytics />
      </body>
    </html>
  );
}
