import React from "react";
import Logo from "../assets/images/Logo.png";
import Image from "next/image";
export const TopBar = () => {
  return (
    <header className="bg-brand-cream-pastel mx-auto h-24 inset-x-0 top-0 z-50 fixed flex items-center justify-center">
      <nav className="lg:w-9/12 w-10/12 flex justify-between m-auto">
        <div className="logo ">
          <Image src={Logo} alt="logo" width={30} height={30} />
        </div>
        <div className="flex gap-x-4 md:gap-x-12 items-center text-zinc-700">
          <a
            // key={item.name}
            // href={item.href}
            className="text-md md:text-lg font-semibold md:font-medium"
          >
            About
          </a>
          <a
            // key={item.name}
            // href={item.href}
            className="text-md md:text-lg font-semibold md:font-medium"
          >
            My Work
          </a>
          <a
            // key={item.name}
            // href={item.href}
            className="text-md md:text-lg font-semibold md:font-medium"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};
