"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursorDiv = document.querySelector(".custom-cursor") as HTMLElement;

    const handleMouseMove = (event: MouseEvent) => {
      cursorDiv.style.top = `${event.clientY - 8}px`;
      cursorDiv.style.left = `${event.clientX - 12}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return <div className="custom-cursor"></div>;
}
