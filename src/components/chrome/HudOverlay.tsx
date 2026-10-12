"use client";

import React, { useEffect, useState } from "react";
import {
  IbnsulyymanSymbol,
  IbnsulyymanWordmark,
} from "@/components/brand/BrandMarks";

const MENU_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#manifesto" },
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Training & Academy", href: "#recognitions" },
  { label: "Contact", href: "#footer" },
  { label: "Enterprise Solutions", href: "#work", external: true },
  { label: "Brand Manifesto", href: "#portal", external: true },
];

export function HudOverlay() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [scrollRatio, setScrollRatio] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      setScrollRatio(Math.min(1, Math.max(0, window.scrollY / max)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !lightMode;
    setLightMode(next);
    document.documentElement.classList.toggle("light", next);
    document.documentElement.classList.toggle("dark", !next);
  };

  return (
    <div
      pointer-none=""
      className="fixed inset-0 pointer-events-none z-[60] select-none"
    >
      {/* Top Bar: Left Wordmark + Right Inline Nav & Pill CTA (00:00 - 00:54) */}
      <div className="w-full px-5 md:px-[2.4vw] pt-5 md:pt-[1.8vw] flex items-center justify-between">
        {/* Top-Left Brand Wordmark */}
        <a
          href="#hero"
          className="pointer-events-auto group inline-flex items-center gap-2.5 focus:outline-none"
          aria-label="IBNSULYYMAN Home"
        >
          <IbnsulyymanSymbol className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-500 group-hover:rotate-12" />
          <IbnsulyymanWordmark className="text-lg md:text-[1.45em]" />
        </a>

        {/* Top-Right Links + Pill Contact Button */}
        <div className="pointer-events-auto flex items-center gap-6 md:gap-[2.2em]">
          <a
            href="#manifesto"
            className="hidden lg:inline-flex flex-col group text-[0.78em] uppercase tracking-[0.08em] text-[#E5E4E0] mix-blend-difference"
          >
            <div className="overflow-hidden flex items-center gap-1.5 py-0.5">
              <span className="stagger-roll">MANIFESTO</span>
              <span className="text-[0.85em] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </div>
            <div className="link-track">
              <div className="link-track-fill" />
            </div>
          </a>

          <a
            href="#capabilities"
            className="hidden lg:inline-flex flex-col group text-[0.78em] uppercase tracking-[0.08em] text-[#E5E4E0] mix-blend-difference"
          >
            <div className="overflow-hidden flex items-center gap-1.5 py-0.5">
              <span className="stagger-roll">TECH SOLUTIONS</span>
              <span className="text-[0.85em] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </div>
            <div className="link-track">
              <div className="link-track-fill" />
            </div>
          </a>

          {/* Pill Contact CTA Button (matching .btn-w in video top-right) */}
          <a
            href="#footer"
            className="group relative inline-flex items-center gap-3 px-5 py-2.5 md:px-[1.55em] md:py-[0.75em] rounded-full bg-[#1D1D1D]/90 backdrop-blur-md border border-white/20 text-[#E5E4E0] text-xs md:text-[0.78em] uppercase tracking-[0.08em] overflow-hidden transition-colors duration-300 hover:border-[#006EFF]"
          >
            <span className="relative z-10 overflow-hidden inline-flex">
              <span className="stagger-roll">CONTACT</span>
            </span>
            <span className="relative z-10 overflow-hidden inline-flex w-4 justify-end">
              <span className="arrow-slide">-&gt;</span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#006EFF]/20 to-[#FF0077]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
        </div>
      </div>

      {/* Mid-Right Vertical Scroll Progress HUD (00:00 - 00:54 right edge) */}
      <div className="hidden md:flex fixed right-[2.2vw] top-1/2 -translate-y-1/2 flex-col items-center gap-2 pointer-events-none">
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
          <div className="w-full h-full bg-[#006EFF] hud-scroll-line-top" />
        </div>
        <div
          className="w-1.5 h-1.5 rounded-full bg-[#FF0077] transition-transform duration-150"
          style={{
            transform: `translateY(${(scrollRatio - 0.5) * 18}px)`,
          }}
        />
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
          <div
            className="w-full bg-white transition-all duration-150"
            style={{ height: `${scrollRatio * 100}%` }}
          />
        </div>
      </div>

      {/* Bottom-Right Floating HUD Drawer & 3-Line Menu Trigger (00:00 - 00:54 bottom-right) */}
      <div className="fixed bottom-5 right-5 md:bottom-[2vw] md:right-[2.2vw] pointer-events-auto flex flex-col items-end">
        {/* Expanded HUD Menu Card (.hud-menu-o) */}
        <div
          className={`mb-3 w-[280px] md:w-[320px] rounded-[1.1em] bg-[#1D1D1D]/95 backdrop-blur-xl border border-white/20 p-6 shadow-2xl transition-all duration-500 origin-bottom-right overflow-hidden ${
            menuOpen
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-90 translate-y-4 pointer-events-none"
          }`}
        >
          {/* Subtle Pattern Watermark inside Menu */}
          <div className="absolute inset-0 brand-pattern-bg opacity-[0.04] pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-2.5">
            {MENU_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="group flex flex-col py-1 text-sm md:text-[0.92em] uppercase tracking-[0.05em] text-[#E5E4E0]"
              >
                <div className="flex items-center justify-between overflow-hidden">
                  <span className="stagger-roll">{item.label}</span>
                  <span
                    className={`arrow-slide text-xs ${
                      item.external ? "-rotate-45 text-[#FF0077]" : "text-[#006EFF]"
                    }`}
                  >
                    -&gt;
                  </span>
                </div>
                <div className="link-track mt-1.5">
                  <div className="link-track-fill" />
                </div>
              </a>
            ))}
          </div>

          {/* Sublinks + Theme Switch */}
          <div className="relative z-10 mt-5 pt-4 border-t border-white/15 flex items-center justify-between">
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.1em] text-white/60">
              <a
                href="#footer"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                Privacy -&gt;
              </a>
              <a
                href="#footer"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                Careers -&gt;
              </a>
            </div>

            {/* Light / Dark Mode Pill Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle colour theme"
              className="w-12 h-6 rounded-full border border-white/25 bg-[#252525] p-0.5 flex items-center transition-colors hover:border-[#006EFF]"
            >
              <span
                className={`w-4 h-4 rounded-full transition-transform duration-300 ${
                  lightMode
                    ? "translate-x-6 bg-[#006EFF]"
                    : "translate-x-0 bg-[#FF0077]"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Bottom-Right Rounded-Square 3-Line Menu Button (.hud-menu-w) */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="group w-12 h-12 md:w-[3.1em] md:h-[3.1em] rounded-[0.65em] bg-[#1D1D1D]/90 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center gap-1.5 transition-colors duration-300 hover:border-[#006EFF]"
        >
          <span
            className={`w-5 h-[1.5px] bg-[#E5E4E0] transition-transform duration-300 ${
              menuOpen
                ? "translate-y-[7px] rotate-45 bg-[#FF0077]"
                : "group-hover:-translate-y-0.5"
            }`}
          />
          <span
            className={`w-5 h-[1.5px] bg-[#E5E4E0] transition-all duration-300 ${
              menuOpen ? "scale-x-0 opacity-0" : "group-hover:bg-[#006EFF]"
            }`}
          />
          <span
            className={`w-5 h-[1.5px] bg-[#E5E4E0] transition-transform duration-300 ${
              menuOpen
                ? "-translate-y-[7px] -rotate-45 bg-[#006EFF]"
                : "group-hover:translate-y-0.5"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
