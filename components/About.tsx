"use client";
import Image from "next/image";
import React, { useContext } from "react";
import Wave1 from "@/assets/images/wave-1.svg";
import Avatar2 from "@/assets/images/avatar-4.png";
import MenuContext from "@/context/MenuContext";

export default function About() {
  const { aboutRef } = useContext(MenuContext);
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
              I am a web developer with over 3 years of experience in developing
              web applications. Currently, I am employed as a frontend developer
              at an IT consulting company. I began my career as a freelance
              software developer while still in university, and after graduating
              from Bani Saleh University with a Bachelor&apos;s degree in
              Computer Science, I transitioned into a front-end web developer
              role. I thoroughly enjoy working closely with cross-functional
              teams that encompass technology, business, and design.
            </p>
            <button className="bg-brand-blue-pastel px-8 py-3 mt-5 rounded-full border border-black shadow-[1.8px_2px_0px_0_rgba(0,0,0)] text-lg font-semibold hover:ease-out hover:duration-500 hover:translate-y-1">
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
