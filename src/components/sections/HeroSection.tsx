"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Pre-computed scatter offsets matching the character disassembly at 00:04 - 00:08
const SCATTER_VECTORS = [
  { x: -18, y: -22, r: -14 },
  { x: 14, y: -35, r: 18 },
  { x: -26, y: -18, r: -8 },
  { x: 22, y: -42, r: 12 },
  { x: -12, y: -28, r: -20 },
  { x: 30, y: -15, r: 15 },
  { x: -22, y: -38, r: -12 },
  { x: 18, y: -24, r: 9 },
  { x: -15, y: -32, r: -16 },
  { x: 25, y: -20, r: 14 },
  { x: -28, y: -14, r: -10 },
];

function SplitScatterWord({
  text,
  seedOffset = 0,
}: {
  text: string;
  seedOffset?: number;
}) {
  return (
    <span className="inline-flex whitespace-nowrap">
      {text.split("").map((char, idx) => {
        const vec =
          SCATTER_VECTORS[(idx + seedOffset) % SCATTER_VECTORS.length];
        return (
          <span
            key={idx}
            data-hero-char=""
            data-vx={vec.x}
            data-vy={vec.y}
            data-vr={vec.r}
            className="inline-block will-change-transform"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </span>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray<HTMLElement>("[data-hero-char]");

      // Initial entrance reveal
      gsap.fromTo(
        chars,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.02,
          ease: "power4.out",
          delay: 1.45,
        }
      );

      // Scroll-scrubbed character scatter (matching 00:04 - 00:08 in video)
      chars.forEach((charEl) => {
        const vx = Number(charEl.getAttribute("data-vx") || 0);
        const vy = Number(charEl.getAttribute("data-vy") || 0);
        const vr = Number(charEl.getAttribute("data-vr") || 0);

        gsap.to(charEl, {
          x: `${vx}vw`,
          y: `${vy}vh`,
          rotation: vr,
          opacity: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-[100dvh] w-full px-5 md:px-[4vw] pt-24 pb-12 flex flex-col justify-between overflow-hidden z-10"
    >
      {/* Top-Left Block: "A DIFFERENT" (00:09 - 00:12) */}
      <div className="mt-[6vh] md:mt-[8vh] mbm-diff">
        <h1 className="text-[11vw] md:text-[7.2vw] font-light uppercase tracking-[-0.035em] leading-[0.94] overflow-hidden">
          <SplitScatterWord text="A DIFFERENT" seedOffset={0} />
        </h1>
      </div>

      {/* Middle-Right Block: "CREATIVE" (00:09 - 00:12 overlapping right side of 3D Orb) */}
      <div className="self-end mr-0 md:mr-[6vw] my-auto mbm-diff">
        <p
          aria-hidden="true"
          className="text-[11vw] md:text-[7.2vw] font-light uppercase tracking-[-0.035em] leading-[0.94] overflow-hidden"
        >
          <SplitScatterWord text="CREATIVE" seedOffset={4} />
        </p>
      </div>

      {/* Bottom Row: Left "APPROACH" + Right "SCROLL ↓" (00:09 - 00:12) */}
      <div className="w-full flex items-end justify-between mb-[2vh] mbm-diff">
        <div className="ml-0 md:ml-[11vw]">
          <p
            aria-hidden="true"
            className="text-[11vw] md:text-[7.2vw] font-light uppercase tracking-[-0.035em] leading-[0.94] overflow-hidden"
          >
            <SplitScatterWord text="APPROACH" seedOffset={7} />
          </p>
        </div>

        <div className="hidden md:flex items-center gap-2 mr-[7vw] mb-3 text-[0.82em] uppercase tracking-[0.14em] font-medium">
          <span>SCROLL</span>
          <span className="inline-block animate-bounce text-[#006EFF]">↓</span>
        </div>
      </div>
    </section>
  );
}
