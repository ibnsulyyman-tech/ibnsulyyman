"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.22,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.22,
      ease: "power3.out",
    });

    const onMove = (e: PointerEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);

      const target = e.target as HTMLElement | null;
      const isInteractive = target?.closest(
        "a, button, [role='button'], [data-cursor-hover]"
      );
      if (isInteractive) {
        cursor.classList.add("scale-[0.55]", "bg-[#FF0077]");
        cursor.classList.remove("bg-white/70");
      } else {
        cursor.classList.remove("scale-[0.55]", "bg-[#FF0077]");
        cursor.classList.add("bg-white/70");
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      data-cursor-wrap=""
      className="fixed inset-0 pointer-events-none z-[90] mix-blend-difference hidden md:block"
    >
      <div
        ref={cursorRef}
        data-cursor=""
        className="w-5 h-5 -ml-2.5 -mt-2.5 rounded-full bg-white/70 transition-transform duration-300 ease-out will-change-transform"
      />
    </div>
  );
}
