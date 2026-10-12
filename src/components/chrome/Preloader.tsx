"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { IbnsulyymanSymbol } from "@/components/brand/BrandMarks";

export function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = preloaderRef.current;
    if (!el) return;

    const counter = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        setDone(true);
      },
    });

    tl.to(counter, {
      val: 100,
      duration: 1.5,
      ease: "power3.inOut",
      onUpdate: () => {
        setPercent(Math.round(counter.val));
      },
    })
      .fromTo(
        fillRef.current,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "power3.inOut",
        },
        0
      )
      .to(el, {
        yPercent: -100,
        duration: 0.85,
        ease: "power4.inOut",
        delay: 0.15,
      });

    return () => {
      tl.kill();
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1D1D1D] text-[#E5E4E0] overflow-hidden"
    >
      {/* Subtle Brand Pattern Grid Backdrop */}
      <div className="absolute inset-0 brand-pattern-bg opacity-[0.03] pointer-events-none" />

      {/* Center Masked Symbol Fill */}
      <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
        {/* Wireframe Stroke Symbol */}
        <div className="absolute inset-0 flex items-center justify-center opacity-35">
          <IbnsulyymanSymbol className="w-full h-full" strokeOnly />
        </div>

        {/* Rising Solid Brand Symbol (#006EFF + #FF0077) */}
        <div
          ref={fillRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <IbnsulyymanSymbol className="w-full h-full" />
        </div>
      </div>

      {/* Bottom-Left Build Progress Indicator (matching .pre-info-w) */}
      <div className="absolute bottom-8 left-8 flex items-baseline gap-4 font-mono text-xs tracking-[0.2em] uppercase">
        <span className="text-white/60">BUILD</span>
        <span className="text-[#006EFF] font-semibold tabular-nums">
          {String(percent).padStart(2, "0")}%
        </span>
      </div>
    </div>
  );
}
