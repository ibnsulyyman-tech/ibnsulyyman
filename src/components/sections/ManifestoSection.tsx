"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MANIFESTO_LINES = [
  "WITH EMOTION +",
  "INNOVATION, WE PUSH THE",
  "BOUNDARIES OF DIGITAL",
  "CREATIVITY.",
];

export function ManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>("[data-manifesto-line]");
      gsap.fromTo(
        lines,
        { yPercent: 105 },
        {
          yPercent: 0,
          duration: 1.0,
          stagger: 0.08,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const cols = gsap.utils.toArray<HTMLElement>("[data-manifesto-col]");
      gsap.fromTo(
        cols,
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 55%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative w-full px-5 md:px-[6vw] py-24 md:py-[11vw] z-10"
    >
      {/* 4-Line Giant Uppercase Statement (00:00 - 00:03 & 00:14 - 00:15) */}
      <div className="max-w-[88vw] mx-auto mbm-diff">
        <h2 className="text-[7.8vw] md:text-[5.5vw] font-light uppercase tracking-[-0.03em] leading-[1.02]">
          {MANIFESTO_LINES.map((line, i) => (
            <span
              key={i}
              className={`block overflow-hidden ${
                i === 0 ? "md:pl-[10vw]" : ""
              }`}
            >
              <span
                data-manifesto-line=""
                className="block will-change-transform"
              >
                {line}
              </span>
            </span>
          ))}
        </h2>
      </div>

      {/* Bottom 2-Column Split (00:00 - 00:03 & 00:14 - 00:16) */}
      <div className="mt-16 md:mt-[7.5vw] grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start mbm-diff">
        {/* Left Column: Agency Descriptor + ABOUT US -> link */}
        <div
          data-manifesto-col=""
          className="md:col-start-2 md:col-span-3 flex flex-col justify-between gap-8"
        >
          <p className="text-xs md:text-[0.82em] uppercase tracking-[0.04em] leading-[1.45] font-medium">
            WE ARE A FOUNDER-LED GLOBAL TECHNOLOGY SOLUTIONS STUDIO — DESIGN,
            WEBSITES, APPS, VIDEO EDITING &amp; TRAINING.
          </p>

          <a
            href="#capabilities"
            className="group inline-flex flex-col w-full max-w-[180px] text-xs md:text-[0.82em] uppercase tracking-[0.06em]"
          >
            <div className="flex items-center justify-between py-1.5 overflow-hidden">
              <span className="stagger-roll">ABOUT US</span>
              <span className="arrow-slide">-&gt;</span>
            </div>
            <div className="link-track">
              <div className="link-track-fill" />
            </div>
          </a>
        </div>

        {/* Right Column: Narrative Body Copy */}
        <div
          data-manifesto-col=""
          className="md:col-start-6 md:col-span-4 text-sm md:text-[0.92em] leading-[1.58] font-normal text-[#E5E4E0]/90 max-w-[46ch]"
        >
          <p>
            Every brand has a story, from startups finding their voice to
            titans refining their legacy. We ensure that tale shines
            brilliantly. Across custom web &amp; mobile applications, WebGL
            architecture, high-impact video production, and hands-on team
            training, IBNSULYYMAN empowers you to reshape your digital
            narrative.
          </p>
        </div>
      </div>
    </section>
  );
}
