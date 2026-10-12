"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PortalZoomSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const svgWrapRef = useRef<HTMLDivElement>(null);
  const textTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const svgWrap = svgWrapRef.current;
    const textTrack = textTrackRef.current;
    if (!section || !svgWrap || !textTrack) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=220%",
          pin: true,
          scrub: 0.9,
          invalidateOnRefresh: true,
        },
      });

      // 00:44 -> 00:48: Rotate and scale the vector cutout from 0.16x to 42x to fill the viewport
      tl.fromTo(
        svgWrap,
        { scale: 0.16, rotation: -38 },
        { scale: 42, rotation: 28, ease: "power2.inOut", duration: 1 },
        0
      );

      // 00:45 -> 00:48: Scrub the single-line slogan from right to dead-center
      tl.fromTo(
        textTrack,
        { xPercent: 42 },
        { xPercent: 0, ease: "power1.out", duration: 1 },
        0
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="portal"
      ref={sectionRef}
      className="relative w-full h-[100dvh] overflow-hidden z-20 bg-[#1D1D1D] rounded-b-[1.65em]"
    >
      {/* Underlying Full-Screen Evolving Brand Gradient + Horizontal Slogan (00:44 - 00:48) */}
      <div className="relative w-full h-full gradient-evolve flex items-center justify-center overflow-hidden">
        {/* Subtle IBNSULYYMAN Pattern Grid Texture */}
        <div className="absolute inset-0 brand-pattern-bg opacity-[0.06] mix-blend-overlay pointer-events-none" />

        {/* Horizontal Scrubbed Slogan (Centered at 00:48) */}
        <div
          ref={textTrackRef}
          className="relative z-10 whitespace-nowrap px-6 will-change-transform"
        >
          <h2 className="text-[4.8vw] md:text-[2.75vw] font-light uppercase tracking-[-0.025em] text-[#1D1D1D]">
            WHERE DIFFERENT IS THE STANDARD. CHOOSE IBNSULYYMAN.
          </h2>
        </div>

        {/* Multiply Black Mask Layer with White Vector Cutout (Exact Off+Brand .c.is-hsc technique) */}
        <div
          className="absolute inset-0 bg-black flex items-center justify-center pointer-events-none"
          style={{ mixBlendMode: "multiply" }}
        >
          <div
            ref={svgWrapRef}
            className="w-[38vw] h-[38vw] min-w-[260px] min-h-[260px] flex items-center justify-center will-change-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 162 162"
              className="w-full h-full overflow-visible"
            >
              <path
                fill="#FFFFFF"
                d="M108 88.7c-10.8 0-19.7 8.8-19.7 19.7v47.4c0 1.9-1.5 3.4-3.4 3.4h-8.6c-1.9 0-3.4-1.5-3.4-3.4v-47.4c0-10.8-8.8-19.7-19.7-19.7H6.4c-1.9 0-3.4-1.5-3.4-3.4v-8c0-1.9 1.5-3.4 3.4-3.4h46.9c10.8 0 19.7-8.8 19.6-19.7V6.4c0-1.9 1.5-3.4 3.4-3.4H85c1.9 0 3.4 1.5 3.4 3.4v47.8c0 10.8 8.8 19.7 19.7 19.7h46.6c1.9 0 3.4 1.5 3.4 3.4v8c0 1.9-1.5 3.4-3.4 3.4H108z"
              />
              <path
                fill="#FFFFFF"
                d="M146.1 134.4h-.7c-6.5 0-11.9 5.3-11.9 11.9v.7c0 6.7 5.5 12.2 12.2 12.2s12.2-5.5 12.2-12.2v-.7c0-6.6-5.2-11.9-11.8-11.9z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
