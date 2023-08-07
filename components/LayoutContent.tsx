"use client";
import React from "react";
import { TopBar } from "@/components/Topbar";
import { useRef, useState } from "react";
import MenuContext from "@/context/MenuContext";
import useTopBarHook from "@/hooks/useTopBarHook";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const { handleMenuClick } = useTopBarHook();

  return (
    <MenuContext.Provider value={{ homeRef, aboutRef, projectRef, contactRef }}>
      <TopBar handleMenuClick={handleMenuClick} />
      {children}
    </MenuContext.Provider>
  );
}

export default LayoutContent;
