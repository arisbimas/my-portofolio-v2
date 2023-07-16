"use client";
import React from "react";
import { TopBar } from "@/components/Topbar";
import { useRef, useState } from "react";
import MenuContext from "@/context/MenuContext";

function LayoutContent({ children }: { children: React.ReactNode }) {
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
      <TopBar handleMenuClick={handleMenuClick} />
      {children}
    </MenuContext.Provider>
  );
}

export default LayoutContent;
