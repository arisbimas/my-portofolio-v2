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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
