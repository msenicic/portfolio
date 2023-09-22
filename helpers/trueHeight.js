"use client"

import { useEffect, useState } from "react"

export function trueHeight() {
    const [vh, setVh] = useState(0);

    useEffect(() => {
        const setActualVh = () => {
            const actualVh = window.innerHeight * 0.01
            setVh(actualVh);
            document.documentElement.style.setProperty('--vh', `${actualVh}px`);
        }
        setActualVh();

        window.addEventListener('resize', setActualVh);

        return () => {
            window.removeEventListener('resize', setActualVh);
        };
    }, []);

    return vh;
}