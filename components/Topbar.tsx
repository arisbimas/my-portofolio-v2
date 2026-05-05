"use client";
import React, { useContext, useState } from "react";
import Logo from "../assets/images/Logo.png";
import Image from "next/image";
import MenuContext from "@/context/MenuContext";
import { Menu, X } from "lucide-react";

const anchorStyle =
  "px-2 md:px-4 py-1 border-2 border-black rounded-md text-sm md:text-lg font-medium cursor-pointer bg-brand-whitist-pastel text-black shadow-[4px_4px_0px_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200 whitespace-nowrap";

const mobileAnchorStyle =
  "block w-full text-center px-4 py-3 border-2 border-black rounded-md text-lg font-medium cursor-pointer bg-brand-whitist-pastel text-black shadow-[4px_4px_0px_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-200";

interface TopBarProps {
  handleMenuClick: (index: number) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ handleMenuClick }) => {
  const menuRef = useContext(MenuContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDownloadCV = () => {
    const cvLink = process.env.NEXT_PUBLIC_CV_LINK;
    window.open(cvLink, "_blank");
  };

  const onMenuClick = (ref: any) => {
    handleMenuClick(ref);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-brand-cream-pastel mx-auto h-24 w-full top-0 z-50 fixed flex items-center justify-center">
      <nav className="lg:w-9/12 w-11/12 flex items-center justify-between mx-auto">
        <div
          className="logo cursor-pointer shrink-0"
          onClick={() => onMenuClick(menuRef?.homeRef?.current)}
        >
          <Image src={Logo} alt="logo" unoptimized={true} priority className="h-10 w-auto md:h-12" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-x-3 lg:gap-x-6 items-center text-zinc-700">
          <a
            className={anchorStyle}
            onClick={() => onMenuClick(menuRef?.aboutRef?.current)}
          >
            About
          </a>
          <a
            className={anchorStyle}
            onClick={() => onMenuClick(menuRef?.projectRef?.current)}
          >
            My Works
          </a>
          <a
            className={anchorStyle}
            onClick={() => onMenuClick(menuRef?.contactRef?.current)}
          >
            Contact
          </a>
          <a
            className={
              "flex gap-1 items-center px-3 py-1 border-2 border-black rounded-md text-sm md:text-lg font-medium cursor-pointer bg-brand-yellow-pastel text-black shadow-[4px_4px_0px_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200 whitespace-nowrap"
            }
            onClick={handleDownloadCV}
          >
            Download CV
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 border-2 border-black rounded-md bg-brand-yellow-pastel text-black shadow-[4px_4px_0px_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-24 left-0 w-full bg-brand-cream-pastel border-b-2 border-black flex flex-col px-6 py-8 gap-5 md:hidden shadow-[0_8px_0px_0_rgba(0,0,0,1)] z-40">
          <a
            className={mobileAnchorStyle}
            onClick={() => onMenuClick(menuRef?.aboutRef?.current)}
          >
            About
          </a>
          <a
            className={mobileAnchorStyle}
            onClick={() => onMenuClick(menuRef?.projectRef?.current)}
          >
            My Works
          </a>
          <a
            className={mobileAnchorStyle}
            onClick={() => onMenuClick(menuRef?.contactRef?.current)}
          >
            Contact
          </a>
          <a
            className={
              "block w-full text-center px-4 py-3 border-2 border-black rounded-md text-lg font-medium cursor-pointer bg-brand-yellow-pastel text-black shadow-[4px_4px_0px_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-200"
            }
            onClick={handleDownloadCV}
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
};
