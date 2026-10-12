"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IbnsulyymanSymbol } from "@/components/brand/BrandMarks";

gsap.registerPlugin(ScrollTrigger);

interface SpatialNode {
  id: string;
  type: "card" | "label";
  label?: string;
  subtitle?: string;
  accent?: string;
  x: number; // vw
  y: number; // vh
  z: number; // px (-2600 to 0)
  scale?: number;
}

// 26 Spatial 3D nodes distributed in X/Y/Z matching 00:37 - 00:40 flythrough
const SPATIAL_NODES: SpatialNode[] = [
  { id: "l1", type: "label", label: "BRAND\nIDENTITY", x: -24, y: -26, z: -200 },
  { id: "l2", type: "label", label: "DIGITAL\nEXPERIENCES", x: 22, y: -24, z: -380 },
  { id: "c1", type: "card", label: "UI / UX SYSTEMS", subtitle: "DESIGN", accent: "from-[#006EFF] to-[#FF0077]", x: -26, y: -30, z: -450 },
  { id: "c2", type: "card", label: "3D & SHADERS", subtitle: "WEBGL", accent: "from-[#1a1a2e] to-[#006EFF]", x: -28, y: 4, z: -650 },
  { id: "c3", type: "card", label: "NEXT.JS APPS", subtitle: "WEB DEV", accent: "from-[#FF0077] to-[#252525]", x: 18, y: 12, z: -780 },
  { id: "l3", type: "label", label: "WEBGL / VR", x: 16, y: -28, z: -950 },
  { id: "c4", type: "card", label: "COMMERCIAL EDIT", subtitle: "VIDEO", accent: "from-[#006EFF] to-[#00d4ff]", x: 4, y: 16, z: -1080 },
  { id: "c5", type: "card", label: "IOS & ANDROID", subtitle: "MOBILE APPS", accent: "from-[#252525] to-[#FF0077]", x: -16, y: 24, z: -1200 },
  { id: "l4", type: "label", label: "APP\nDEVELOPMENT", x: 14, y: -12, z: -1350 },
  { id: "c6", type: "card", label: "MOTION REELS", subtitle: "VFX & EDITING", accent: "from-[#FF0077] to-[#ff7b00]", x: -22, y: -18, z: -1480 },
  { id: "l5", type: "label", label: "UX / UI", x: 2, y: 26, z: -1620 },
  { id: "c7", type: "card", label: "TECH BOOTCAMPS", subtitle: "TRAINING", accent: "from-[#006EFF] to-[#111827]", x: 28, y: -8, z: -1750 },
  { id: "c8", type: "card", label: "BRAND STRATEGY", subtitle: "IDENTITY", accent: "from-[#14b8a6] to-[#006EFF]", x: -8, y: -6, z: -1900 },
  { id: "l6", type: "label", label: "VIDEO &\nEDITING", x: -26, y: 22, z: -2050 },
  { id: "c9", type: "card", label: "SAAS PLATFORMS", subtitle: "FULL-STACK", accent: "from-[#006EFF] to-[#FF0077]", x: 32, y: 22, z: -2200 },
  { id: "l7", type: "label", label: "TECH\nTRAINING", x: 22, y: 28, z: -2350 },
  { id: "c10", type: "card", label: "AI WORKFLOWS", subtitle: "AUTOMATION", accent: "from-[#7c3aed] to-[#006EFF]", x: -20, y: 10, z: -2520 },
  { id: "c11", type: "card", label: "DESIGN SYSTEMS", subtitle: "TOKENS", accent: "from-[#FF0077] to-[#006EFF]", x: 10, y: -22, z: -2700 },
  { id: "l8", type: "label", label: "PRODUCT\nDESIGN", x: -4, y: 20, z: -2850 },
  { id: "c12", type: "card", label: "ENTERPRISE WEB", subtitle: "ARCHITECTURE", accent: "from-[#006EFF] to-[#1e293b]", x: -18, y: -14, z: -3000 },
];

export function PerspectiveGridSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cloud = cloudRef.current;
    if (!section || !cloud) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Pin the 3D stage and fly the entire cloud forward along +Z (00:37 - 00:40)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=240%",
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        cloud,
        { z: -400, rotateZ: -2 },
        { z: 3250, rotateZ: 2, ease: "none" },
        0
      );

      // Reveal bottom-left headline at 00:38 mid-flythrough
      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { yPercent: 60, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.35, ease: "power2.out" },
          0.18
        ).to(
          headlineRef.current,
          { yPercent: -40, opacity: 0, duration: 0.25, ease: "power2.in" },
          0.78
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="relative w-full h-[100dvh] overflow-hidden z-10 select-none"
    >
      {/* 4000px 3D Perspective Stage */}
      <div className="w-full h-full flex items-center justify-center hg-stage">
        <div
          ref={cloudRef}
          className="relative w-full h-full flex items-center justify-center hg-cloud"
        >
          {SPATIAL_NODES.map((node) => {
            if (node.type === "label") {
              return (
                <div
                  key={node.id}
                  style={{
                    transform: `translate3d(${node.x}vw, ${node.y}vh, ${node.z}px)`,
                  }}
                  className="absolute hg-tile text-xs md:text-[0.88em] font-mono uppercase tracking-[0.12em] text-white/90 whitespace-pre-line text-center mbm-diff"
                >
                  {node.label}
                </div>
              );
            }

            return (
              <div
                key={node.id}
                style={{
                  transform: `translate3d(${node.x}vw, ${node.y}vh, ${node.z}px)`,
                }}
                className="absolute hg-tile w-44 md:w-[17vw] aspect-[14/9] rounded-[0.65em] overflow-hidden border border-white/20 shadow-2xl bg-[#1D1D1D]"
              >
                <div
                  className={`w-full h-full bg-gradient-to-br ${node.accent} p-4 flex flex-col justify-between relative`}
                >
                  <div className="absolute inset-0 brand-pattern-bg opacity-15 mix-blend-overlay" />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[9px] font-mono uppercase tracking-[0.18em] px-2 py-0.5 rounded bg-black/40 text-white/90">
                      {node.subtitle}
                    </span>
                    <IbnsulyymanSymbol className="w-4 h-4" />
                  </div>
                  <div className="relative z-10 font-bold uppercase tracking-tight text-white text-xs md:text-[0.85em]">
                    {node.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom-Left Sticky Difference Headline (00:38 "ELEVATING BRANDS IN UNEXPECTED WAYS.") */}
      <div
        ref={headlineRef}
        className="pointer-events-none absolute bottom-12 left-5 md:bottom-[6vh] md:left-[4vw] z-20 mbm-diff"
      >
        <h2 className="text-[9vw] md:text-[5.2vw] font-light uppercase tracking-[-0.03em] leading-[0.96]">
          <span className="block md:pl-[5vw]">ELEVATING</span>
          <span className="block">BRANDS IN</span>
          <span className="block">UNEXPECTED</span>
          <span className="block">WAYS.</span>
        </h2>
      </div>
    </section>
  );
}
