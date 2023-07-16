"use client";

import { TopBar } from "@/components/Topbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { useRef, useState } from "react";
import MenuContext from "@/context/MenuContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aris Bimas Nugroho",
  description: "Protofolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const [prevRef, setPrevRef] = useState(null);

  const handleMenuClick = (ref: any) => {
    const top = ref.offsetTop - 96;
    if (prevRef !== ref) {
      setPrevRef(ref);
      window.scrollTo({
        top: top,
        left: 0,
        behavior: "smooth",
      });
    } else {
      if (top !== window.scrollY) {
        setPrevRef(ref);
        window.scrollTo({
          top: top,
          left: 0,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <MenuContext.Provider value={{ homeRef, aboutRef, projectRef, contactRef }}>
      <html lang="en">
        <body className={inter.className}>
          <TopBar handleMenuClick={handleMenuClick} />
          {children}
        </body>
      </html>
    </MenuContext.Provider>
  );
}
