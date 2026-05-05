import Image from "next/image";

import Introduction from "@/components/Introduction";
import About from "@/components/About";
import React, { ReactNode } from "react";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <main className="mt-24">
      <AnimatedSection delay={0.1}>
        <Introduction />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <About />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <Project />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <Contact />
      </AnimatedSection>
    </main>
  );
}
