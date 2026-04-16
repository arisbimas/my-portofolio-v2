"use client";
import React, { useContext, useRef } from "react";
import Logo from "../assets/images/Logo.png";
import Image from "next/image";
import MenuContext from "@/context/MenuContext";

const anchorStyle =
  "px-2 md:px-4 py-1 border-2 border-black rounded-md text-sm md:text-lg font-medium cursor-pointer bg-brand-whitist-pastel text-black shadow-[4px_4px_0px_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200";

interface TopBarProps {
  handleMenuClick: (index: number) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ handleMenuClick }) => {
  const menuRef = useContext(MenuContext);

  const handleDownloadCV = () => {
    const cvLink = process.env.NEXT_PUBLIC_CV_LINK;
    window.open(cvLink, "_blank");
  }

  return (
    <header className="bg-brand-cream-pastel mx-auto h-24 w-full top-0 z-50 fixed flex items-center justify-center">
      <nav className="lg:w-9/12 w-12/12 flex gap-4 justify-between mx-auto">
        <div
          className="logo cursor-pointer"
          onClick={() => handleMenuClick(menuRef?.homeRef?.current)}
        >
          <Image src={Logo} alt="logo" unoptimized={true} />
        </div>
        <div className="flex gap-x-1 md:gap-x-6 items-center text-zinc-700">
          <a className={anchorStyle} onClick={() => handleMenuClick(menuRef?.aboutRef?.current)}>About</a>
          <a
            className={anchorStyle}
            onClick={() => handleMenuClick(menuRef?.projectRef?.current)}
          >
            My Works
          </a>
          <a
            className={anchorStyle}
            onClick={() => handleMenuClick(menuRef?.contactRef?.current)}
          >
            Contact
          </a>
          <a
            className={"flex gap-1 items-center px-3 py-1 border-2 border-black rounded-md text-sm md:text-lg font-medium cursor-pointer bg-brand-yellow-pastel text-black shadow-[4px_4px_0px_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200"}
            onClick={handleDownloadCV}
          >
            Download CV
          </a>
        </div>
      </nav>
    </header>
  );
};
