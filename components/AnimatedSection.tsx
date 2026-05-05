"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedSection({ 
  children, 
  delay = 0 
}: { 
  children: ReactNode; 
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
