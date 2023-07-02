import Image from "next/image";

import Introduction from "@/components/Introduction";
import About from "@/components/About";
import React, { ReactNode } from "react";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="mt-24">
      <Introduction />
      <About />
      <Project />
      <Contact />
    </main>
  );
}
