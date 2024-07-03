"use client";
import React, { useContext, useRef } from "react";
import Logo from "../assets/images/Logo.png";
import Image from "next/image";
import MenuContext from "@/context/MenuContext";

const anchorStyle =
  "px-1 md:px-3 py-1 border border-brand-cream-pastel rounded-md text-sm md:text-lg font-semibold md:font-medium cursor-pointer hover:bg-brand-pink-pastel hover:border-black hover:shadow-[1.8px_2px_0px_0_rgba(0,0,0)] hover:ease-out hover:duration-500 hover:translate-y-1";

interface TopBarProps {
  handleMenuClick: (index: number) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ handleMenuClick }) => {
  const menuRef = useContext(MenuContext);

  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/14_-z4EE-kFDlkHBfTy-rje0r7mhipUnk/view?usp=drive_link", "_blank");
  }

  return (
    <header className="bg-brand-cream-pastel mx-auto h-24 w-full top-0 z-50 fixed flex items-center justify-center">
      <nav className="lg:w-9/12 w-12/12 flex gap-4 justify-between mx-auto">
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
          <a
            // key={item.name}
            // href={item.href}
            className={"flex gap-1 items-center px-3 py-1 border rounded-md text-sm md:text-lg font-semibold md:font-medium cursor-pointer bg-[#F8CB46] border-black shadow-[1.8px_2px_0px_0_rgba(0,0,0)] hover:ease-out hover:duration-500 hover:translate-y-1"}
            onClick={handleDownloadResume}
          >
            CV Resume
          </a>
        </div>
      </nav>
    </header>
  );
};
