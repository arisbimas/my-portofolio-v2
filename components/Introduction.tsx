import Avatar from "@/assets/images/avatar.png";
import Image from "next/image";

export default function Introduction() {
  return (
    <div className="section-home min-h-screen lg:w-9/12 md:w-10/12 w-11/12 pt-4 m-auto">
      <div className="flex flex-col-reverse lg:flex-row items-start justify-start text-start lg:text-start ">
        <div className="m-auto md:w-6/12 w-8/12 aspect-square lg:mb-0 mt-10">
          <Image
            alt="avatar"
            src={Avatar}
            className="w-full h-full object-contain"
            // width={300}
            // height={300}
          />
        </div>
        <div className="flex flex-col self-center lg:w-6/12 lg:text-right text-center">
          <p className="md:text-2xl text-xl font-medium mb-2">
            Hi, I&apos;m Aris Bimas Nugroho
          </p>
          <p className="md:text-6xl text-4xl font-bold mb-4">
            Software Developer Based in Indonesia
          </p>
          <p className="md:text-2xl text-xl font-medium md:mb-10 mb-6">
            Let&apos;s collaborate and create amazing works together!
          </p>
          <div>
            <button className="bg-yellow-pastel px-9 py-3 rounded-full border border-black shadow-[1.8px_2px_0px_0_rgba(0,0,0)] text-lg font-semibold">
              My Project 🙌
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
