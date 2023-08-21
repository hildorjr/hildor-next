"use client";

import { useEffect } from "react";

export default function MouseTrailer() {
  useEffect(() => {
    const trailer = document.querySelector(".mouse-trailer") as HTMLElement;

    window.onmousemove = (e: MouseEvent) => {
      const keyframes = {
        top: `${e.clientY}px`,
        left: `${e.clientX}px`,
      };
      trailer.animate(keyframes, {
        duration: 3600,
        fill: "forwards",
      });
    };
  }, []);
  return <div className="mouse-trailer"></div>;
}
