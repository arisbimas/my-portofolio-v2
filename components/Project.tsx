import React from "react";
import CardProject from "./CardProject";

export default function Project() {
  return (
    <div className="section-project bg-white min-h-screen">
      <div className="mb-8">
        <p className="flex justify-center">My Recent Project</p>
        <hr className="w-[200px] m-auto bg-blue-pastel  border-black shadow-[1.8px_1px_0px_0_rgba(0,0,0)]" />
      </div>
      <div className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-16 text-white">
          <CardProject></CardProject>
          <CardProject className="bg-yellow-pastel"></CardProject>
          <CardProject className="bg-red-pastel"></CardProject>
        </div>
      </div>
    </div>
  );
}
