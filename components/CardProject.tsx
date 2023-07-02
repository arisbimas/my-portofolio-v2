import React, { ReactNode } from "react";
import DefaultIcon from "@/assets/images/iconproject.png";
import Image, { StaticImageData } from "next/image";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

interface PropsCard {
  className?: string;
  children?: ReactNode;
  image?: any;
  title: string;
  vendor?: string;
  client: string;
  stack?: Array<string>;
}

const CardProject = (props: PropsCard) => {
  const {
    children,
    className = "bg-brand-blue-pastel",
    image,
    title,
    vendor,
    client,
    stack = [],
  } = props;
  return (
    <a
      className={`group w-full h-[280px] rounded-md border border-black shadow-[6px_5px_0px_0_rgba(0,0,0)] p-5 cursor-pointer relative flex items-end ease-out duration-500 before:contents-[""] before:absolute before:left-0 before:top-0 before:block before:w-full before:h-full before:rounded-md before:bg-black before:bg-opacity-60 before:z-10 before:duration-500 before:opacity-0 hover:translate-y-2 hover:before:opacity-100 ${className}`}
    >
      {children}
      <Image
        src={image || DefaultIcon}
        alt="poject"
        className={`absolute rounded-md ${
          props?.image
            ? "absolute w-full h-full object-cover top-0 left-0 rounded-md"
            : ""
        }`}
      />
      <div className="group info opacity-0 relative z-30 text-white translate-y-2 duration-500 group-hover:opacity-100 group-hover:translate-y-0">
        <h1 className="text-lg leading-6 mb-3">{title}</h1>
        <span className="block rounded-full bg-brand-whitist-pastel px-2 py-0.5 text-xs text-slate-500 mb-1 border border-black shadow-[1px_2px_0px_0_rgba(0,0,0)]">
          {vendor ? vendor + ":" : ""}
          <span className="font-semibold">{client}</span>
        </span>
        <div className="block mb-1  ">{BuilderBadge(stack)}</div>
        <span className="bg-brand-red-pastel px-2 py-0.5 rounded-sm border border-black shadow-[1px_2px_0px_0_rgba(0,0,0)]">
          Internal
        </span>
      </div>
    </a>
  );
};

export default CardProject;

interface Color {
  name: string;
  value: string;
}

interface RecursiveKeyValuePair<K extends keyof any = string, V = string> {
  [key: string]: V | RecursiveKeyValuePair<K, V>;
}

const BuilderBadge = (stacks: Array<string>) => {
  let onlyExtendColor = fullConfig.theme?.colors?.brand as
    | {
        [key: string]: string | RecursiveKeyValuePair<string, string>;
      }
    | undefined;

  const colorArray: Color[] = Object.entries(onlyExtendColor || {}).map(
    ([name, value]) => ({
      name,
      value: typeof value === "string" ? value : "",
    })
  );

  return stacks?.map((data: string, index: number) => {
    return (
      <span
        key={`stack-${index}`}
        className={`whitespace-nowrap rounded px-2 py-0.5 mr-1 text-xs border border-black shadow-[1px_2px_0px_0_rgba(0,0,0)] bg-brand-${
          colorArray[index + 1].name
        } text-black`}
      >
        {data}
        {/* {JSON.stringify(onlyExtendColor)} */}
      </span>
    );
  });
  // return <>test {JSON.stringify(fullConfig.theme?.colors)}</>;
};
