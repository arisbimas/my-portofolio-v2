"use client";
import React, { useContext, useRef } from "react";
import Logo from "../assets/images/Logo.png";
import Image from "next/image";
import MenuContext from "@/context/MenuContext";

const anchorStyle =
  "px-3 py-1 border border-brand-cream-pastel rounded-md text-md md:text-lg font-semibold md:font-medium cursor-pointer hover:bg-brand-pink-pastel hover:border-black hover:shadow-[1.8px_2px_0px_0_rgba(0,0,0)] hover:ease-out hover:duration-500 hover:translate-y-1";

interface TopBarProps {
  handleMenuClick: (index: number) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ handleMenuClick }) => {
  const menuRef = useContext(MenuContext);

  return (
    <header className="bg-brand-cream-pastel mx-auto h-24 inset-x-0 top-0 z-50 fixed flex items-center justify-center">
      <nav className="lg:w-9/12 w-11/12 flex justify-between m-auto">
        <div
          className="logo"
          onClick={() => handleMenuClick(menuRef?.homeRef?.current)}
        >
          <Image src={Logo} alt="logo" unoptimized={true} />
        </div>
        <div className="flex gap-x-1 md:gap-x-6 items-center text-zinc-700">
          <a
            // key={item.name}
            // href={item.href}
            className={anchorStyle}
            onClick={() => handleMenuClick(menuRef?.aboutRef?.current)}
          >
            About
          </a>
          <a
            // key={item.name}
            // href={item.href}
            className={anchorStyle}
            onClick={() => handleMenuClick(menuRef?.projectRef?.current)}
          >
            My Work
          </a>
          <a
            // key={item.name}
            // href={item.href}
            className={anchorStyle}
            onClick={() => handleMenuClick(menuRef?.contactRef?.current)}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};
