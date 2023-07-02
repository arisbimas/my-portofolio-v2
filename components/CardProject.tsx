import React, { ReactNode } from "react";

interface PropsCard {
  className?: string;
  children?: ReactNode;
}

const CardProject = (props: PropsCard) => {
  const { children, className = "bg-blue-pastel" } = props;
  return (
    <a
      className={`w-full h-[280px] rounded-md border border-black shadow-[6px_5px_0px_0_rgba(0,0,0)] ${className}`}
    >
      {children}
    </a>
  );
};

export default CardProject;
