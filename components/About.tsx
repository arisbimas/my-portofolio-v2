"use client";
import Image from "next/image";
import React, { useContext } from "react";
import Wave1 from "@/assets/images/wave-1.svg";
import Avatar2 from "@/assets/images/avatar-7.png";
import MenuContext from "@/context/MenuContext";
import useTopBarHook from "@/hooks/useTopBarHook";

export default function About() {
  const { aboutRef, contactRef } = useContext(MenuContext);
  const { handleMenuClick } = useTopBarHook();

  return (
    <div
      className="section-about min-h-screen bg-white pb-10 lg:pb-0"
      ref={aboutRef}
    >
      <div className="top-[-1px] relative" ref={aboutRef}>
        <Image src={Wave1} alt="wave" className="w-full h-full object-cover" />
      </div>
      <div className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row md:text-start text-center items-center gap-3 md:gap-14">
          <div>
            <p>
              I am a seasoned web developer with over 4 years of experience in crafting dynamic and visually
              appealing web applications. With a foundation in freelance software development during my university
              years, I later formalized my expertise by earning a Bachelor`s degree in Informatics Engineering from STMIK
              Bani Saleh. Since then, I have been dedicated to advancing my career as a front-end web developer,
              thriving in collaborative efforts with cross-functional teams across technology, business, and design.
            </p>
            <button
              className="bg-brand-blue-pastel px-8 py-3 mt-5 rounded-full border border-black shadow-[1.8px_2px_0px_0_rgba(0,0,0)] text-lg font-semibold hover:ease-out hover:duration-500 hover:translate-y-1"
              onClick={() => handleMenuClick(contactRef?.current)}
            >
              Let&apos;s Collab 🚀
            </button>
          </div>
          <div className="mx-auto mb-6 md:mb-0 hover:ease-out hover:duration-500 hover:translate-y-1">
            <Image
              src={Avatar2}
              alt="avatar"
              className="w-full h-auto object-contain"
            // width={300}
            // height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
