/*
 * Copyright (c) 2023
 * 
 * Created Date: Monday, August 7th 2023, 7:04:39 pm
 * Author: 🫰Aris Bimas Nugroho
 * 
 */
import React, { useState } from 'react'

export default function useTopBarHook() {
    const [prevRef, setPrevRef] = useState(null);

    const handleMenuClick = (ref) => {
        const top = ref.offsetTop - 96;
        if (prevRef !== ref) {
            setPrevRef(ref);
            window.scrollTo({
                top: top,
                left: 0,
                behavior: "smooth",
            });
        } else {
            if (top !== window.scrollY) {
                setPrevRef(ref);
                window.scrollTo({
                    top: top,
                    left: 0,
                    behavior: "smooth",
                });
            }
        }
    };

    return {
        handleMenuClick
    }
}
