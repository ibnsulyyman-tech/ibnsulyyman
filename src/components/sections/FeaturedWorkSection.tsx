"use client";

import React from "react";
import {
  IbnsulyymanSymbol,
  PortalCrossSvg,
} from "@/components/brand/BrandMarks";

interface WorkItem {
  id: string;
  title: string;
  tags: string[];
  column: "left" | "right";
  bgClass?: string;
  imageUrl?: string;
  customVisual?: React.ReactNode;
  lightText?: boolean;
}

const WORK_ITEMS: WorkItem[] = [
  // Left Column (Starts slightly lower, matching 00:20 - 00:36)
  {
    id: "microsoft-windows",
    title: "MICROSOFT WINDOWS",
    tags: ["● BRAND & DESIGN", "△ DEVELOPMENT", "⁂ WEBGL, 3D"],
    column: "left",
    bgClass: "bg-[#051e3e]",
    imageUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
    customVisual: (
      <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#041429] via-[#092b5a] to-[#020b18]">
        <div className="w-[82%] aspect-[16/10] rounded-t-lg border-[3px] border-white/20 bg-gradient-to-br from-[#006EFF]/40 via-[#041d42] to-[#00d4ff]/30 shadow-2xl flex flex-col items-center justify-center p-4 relative overflow-hidden">
          <span className="text-[11px] md:text-xs text-white/90 font-medium tracking-tight mb-3">
            It starts on Windows
          </span>
          <div className="grid grid-cols-2 gap-1 w-9 h-9 rotate-[-8deg] opacity-80">
            <div className="bg-[#00d4ff]/80" />
            <div className="bg-[#006EFF]/80" />
            <div className="bg-[#006EFF]/60" />
            <div className="bg-[#00d4ff]/60" />
          </div>
        </div>
        <div className="w-[92%] h-2.5 bg-gradient-to-r from-slate-500 via-slate-300 to-slate-500 rounded-b-md shadow-lg" />
      </div>
    ),
  },
  {
    id: "lando-norris",
    title: "LANDO NORRIS",
    tags: ["● BRAND & DESIGN", "△ DEVELOPMENT", "⁂ WEBGL, 3D"],
    column: "left",
    bgClass: "bg-[#111214]",
    customVisual: (
      <div className="relative w-full h-full flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,#26291e_0%,#0c0c0e_72%)] p-8">
        <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full bg-gradient-to-tr from-[#d2ff00] via-[#b8e600] to-[#1a1a1a] p-1 shadow-[0_25px_70px_rgba(210,255,0,0.22)] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 brand-pattern-bg opacity-25 mix-blend-overlay" />
          <div className="w-[76%] h-[52%] rounded-2xl bg-black/90 border border-[#d2ff00]/50 flex items-center justify-center">
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#d2ff00] uppercase">
              LN4 // TELEMETRY
            </span>
          </div>
        </div>
        <div className="mt-6 text-center font-black uppercase tracking-tighter leading-[0.86] text-xl md:text-2xl text-white">
          <div>LANDO</div>
          <div>NORRIS</div>
        </div>
      </div>
    ),
  },
  {
    id: "dialed-coffee",
    title: "DIALED COFFEE COMPANY",
    tags: ["● BRAND & DESIGN", "△ DEVELOPMENT", "⁂ VIDEO & 3D"],
    column: "left",
    bgClass: "bg-[#5a080c]",
    customVisual: (
      <div className="relative w-full h-full flex items-center justify-center bg-[radial-gradient(circle_at_center,#9e1118_0%,#420407_75%)] p-8 overflow-hidden">
        <div className="relative w-36 md:w-44 h-64 md:h-72 rounded-[1.8rem] bg-gradient-to-r from-[#80090f] via-[#d91c24] to-[#6e060b] border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.65)] flex flex-col items-center justify-between p-5 -rotate-6 group-hover:rotate-0 transition-transform duration-700">
          <div className="w-full h-2 rounded-full bg-amber-200/80" />
          <div className="text-center">
            <div className="font-serif italic font-bold text-2xl md:text-3xl text-amber-100 tracking-tight">
              Dialed
            </div>
            <div className="text-[9px] uppercase tracking-[0.18em] text-amber-200/80 mt-1">
              PERFORMANCE COLD BREW
            </div>
          </div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-200 opacity-90 shadow-inner" />
        </div>
      </div>
    ),
  },
  {
    id: "aether-1",
    title: "AETHER 1",
    tags: ["● BRAND & DESIGN", "△ APP & WEB DEV", "⁂ WEBGL, 3D"],
    column: "left",
    bgClass: "bg-[#050d1a]",
    imageUrl:
      "https://cdn.prod.website-files.com/64cf4cc8c9b14fe4cb3c54b4/688216a05de42d3adfe4bf47_aether1-awwwards-main.webp",
  },
  {
    id: "ibnsulyyman-flagship",
    title: "IBNSULYYMAN ENTERPRISE",
    tags: ["● DESIGN SYSTEMS", "△ NEXT.JS & APPS", "⁂ TRAINING & AI"],
    column: "left",
    bgClass: "bg-[#006EFF]",
    customVisual: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#006EFF] p-12 overflow-hidden">
        <div className="absolute inset-0 brand-pattern-bg opacity-15 pointer-events-none" />
        <div className="relative z-10 w-36 h-36 md:w-48 md:h-48 flex items-center justify-center bg-white rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500 p-6">
          <IbnsulyymanSymbol className="w-full h-full" />
        </div>
      </div>
    ),
  },

  // Right Column (Offset higher by ~32% matching 00:19 - 00:36)
  {
    id: "trevor-noah",
    title: "TREVOR NOAH",
    tags: ["● BRAND & DESIGN", "△ WEB PLATFORM", "⁂ VIDEO & MOTION"],
    column: "right",
    bgClass: "bg-[#2442d8]",
    customVisual: (
      <div className="relative w-full h-full flex flex-col justify-between bg-[#2544dc] p-8 overflow-hidden">
        <div className="absolute inset-0 brand-pattern-bg opacity-10" />
        <div className="relative z-10 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-[10px] font-mono uppercase tracking-[0.18em] text-white">
            WORLD TOUR // DIGITAL
          </span>
          <IbnsulyymanSymbol className="w-6 h-6" />
        </div>
        <div className="relative z-10 my-auto flex flex-col items-center text-center">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-[#FF0077] via-[#ff5ca8] to-white p-1 shadow-2xl flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#15257a] flex items-center justify-center font-black text-2xl md:text-3xl text-white tracking-tighter">
              TN
            </div>
          </div>
          <p className="mt-4 font-bold uppercase tracking-tight text-white text-lg md:text-xl">
            GLOBAL MEDIA &amp; STREAMING
          </p>
        </div>
        <div className="h-6" />
      </div>
    ),
  },
  {
    id: "steven-bartlett",
    title: "STEVEN.COM",
    tags: ["● BRAND & DESIGN", "△ WEB & MOBILE APP", "⁂ VIDEO EDITING"],
    column: "right",
    bgClass: "bg-[#060606]",
    customVisual: (
      <div className="relative w-full h-full flex items-center justify-center bg-[#050505] p-8 overflow-hidden">
        {/* Prism Rainbow Light Streak matching 00:21 - 00:24 */}
        <div className="absolute w-[140%] h-24 -rotate-35 bg-gradient-to-r from-transparent via-[#006EFF]/45 to-[#FF0077]/55 blur-2xl pointer-events-none" />
        <div className="relative z-10 flex items-center gap-1.5 font-black uppercase text-2xl md:text-4xl tracking-[0.04em] text-white">
          <span>STEVEN</span>
          <span className="text-[#FF0077] text-3xl md:text-5xl leading-none">
            ●
          </span>
          <span>COM</span>
        </div>
      </div>
    ),
  },
  {
    id: "vizcom",
    title: "VIZCOM",
    tags: ["● INDUSTRIAL AI", "△ WEB APPLICATION", "⁂ WEBGL, 3D"],
    column: "right",
    bgClass: "bg-[#f3f3f3]",
    lightText: false,
    imageUrl:
      "https://cdn.prod.website-files.com/64cf4cc8c9b14fe4cb3c54b4/6980c243418b458602403062_ob-cs-lead.jpg",
  },
  {
    id: "bella-kitchenwear",
    title: "BELLA KITCHENWEAR",
    tags: ["● DESIGN", "△ DEVELOPMENT", "⁂ WEBGL, 3D"],
    column: "right",
    bgClass: "bg-[#56b8eb]",
    imageUrl:
      "https://cdn.prod.website-files.com/64cf4cc8c9b14fe4cb3c54b4/6734a0e12af1829d3c649f35_bella-cs-hero-img.webp",
  },
  {
    id: "david-lee-academy",
    title: "IBNSULYYMAN TECH ACADEMY",
    tags: ["● CORPORATE TRAINING", "△ ENGINEERING LABS", "⁂ VIDEO COURSES"],
    column: "right",
    bgClass: "bg-[#d8d8d8]",
    imageUrl:
      "https://cdn.prod.website-files.com/64cf4cc8c9b14fe4cb3c54b4/651c202c4afbac7692d57361_cs-dl-mob-left.jpg",
  },
];

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <a
      href="#footer"
      data-cursor-hover=""
      className={`group relative block w-full aspect-square rounded-[1.375em] overflow-hidden border border-white/10 ${
        item.bgClass || "bg-[#252525]"
      }`}
    >
      {/* Card Media / Visual with 1.1x Hover Zoom (matching .hcs-item-w:hover .hcs-img-w) */}
      <div className="w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:scale-110">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          item.customVisual
        )}
      </div>

      {/* Subtle Bottom Scrim for Legibility */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />

      {/* Bottom Metadata Bar: Left Sliding Title + Capability Tags, Right "+" -> "->" Morph (00:24 - 00:30) */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 flex items-end justify-between z-10 text-white">
        <div className="overflow-hidden">
          <div className="transition-transform duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)] translate-y-5 group-hover:translate-y-0">
            <h3 className="text-xs md:text-[0.82em] font-semibold uppercase tracking-[0.06em]">
              {item.title}
            </h3>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] md:text-[0.68em] uppercase tracking-[0.06em] text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom-Right Cross / Arrow Action Icon */}
        <div className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center relative">
          <div className="w-5 h-5 transition-all duration-500 group-hover:rotate-90 group-hover:scale-0 group-hover:opacity-0">
            <PortalCrossSvg fill="#FFFFFF" />
          </div>
          <span className="absolute text-sm md:text-base font-mono text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
            -&gt;
          </span>
        </div>
      </div>
    </a>
  );
}

export function FeaturedWorkSection() {
  const leftItems = WORK_ITEMS.filter((i) => i.column === "left");
  const rightItems = WORK_ITEMS.filter((i) => i.column === "right");

  return (
    <section
      id="work"
      className="relative w-full px-5 md:px-[4vw] py-20 md:py-[8vw] z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
        {/* Left Sticky Column: FEATURED WORK ^10 + ALL WORK -> Pill (00:19 - 00:36) */}
        <div className="lg:col-span-3 lg:sticky lg:top-[42vh] flex flex-col items-start gap-5 mbm-diff">
          <div className="relative inline-flex items-start gap-1.5">
            <h2 className="text-xs md:text-[0.8em] uppercase tracking-[0.08em] font-medium">
              FEATURED WORK
            </h2>
            <span className="text-[10px] font-mono text-[#006EFF] -mt-1">
              10
            </span>
          </div>

          <a
            href="#capabilities"
            className="group inline-flex items-center gap-3 px-5 py-2.5 md:px-[1.5em] md:py-[0.75em] rounded-full border border-white/25 bg-[#1D1D1D]/80 text-xs md:text-[0.76em] uppercase tracking-[0.08em] hover:border-[#006EFF] transition-colors"
          >
            <span className="overflow-hidden inline-flex">
              <span className="stagger-roll">ALL WORK</span>
            </span>
            <span className="overflow-hidden inline-flex w-4 justify-end">
              <span className="arrow-slide">-&gt;</span>
            </span>
          </a>
        </div>

        {/* Right 2-Column Offset Case Study Grid (00:19 - 00:36) */}
        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[2.2vw] items-start">
          {/* Left Sub-Column (Starts lower on desktop to create staggered rhythm) */}
          <div className="flex flex-col gap-6 md:gap-[2.2vw] md:mt-[18vw]">
            {leftItems.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </div>

          {/* Right Sub-Column (Starts at top) */}
          <div className="flex flex-col gap-6 md:gap-[2.2vw]">
            {rightItems.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
