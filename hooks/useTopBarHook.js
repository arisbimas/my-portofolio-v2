/*
 * Copyright (c) 2023
 *
 * Created Date: Monday, August 7th 2023, 7:04:39 pm
 * Author: 🫰Aris Bimas Nugroho
 *
 */
import { useRef } from "react";

export default function useTopBarHook() {
    const prevRef = useRef(null);

  const handleMenuClick = (ref) => {
    if (!ref) return;

    const top = ref.getBoundingClientRect().top + window.scrollY - 96;

    if (prevRef.current !== ref || Math.abs(top - window.scrollY) > 2) {
      prevRef.current = ref;
      window.scrollTo({
        top,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return {
    handleMenuClick,
  };
}
