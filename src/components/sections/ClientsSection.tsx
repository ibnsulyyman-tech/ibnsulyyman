"use client";

import React, { useState } from "react";

interface ClientPartner {
  id: string;
  name: string;
  badge: string;
  renderLogo: () => React.ReactNode;
}

const CLIENTS: ClientPartner[] = [
  {
    id: "slack",
    name: "Slack",
    badge: "SLACK",
    renderLogo: () => (
      <span className="inline-flex items-center gap-2 font-bold text-xl md:text-[1.65em] tracking-tight">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 15a2 2 0 1 1-2-2h2v2zm1 0a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0v-5zm2-8a2 2 0 1 1 2-2v2H9zm0 1a2 2 0 1 1 0 4H4a2 2 0 1 1 0-4h5zm8 2a2 2 0 1 1 2 2h-2v-2zm-1 0a2 2 0 1 1-4 0V5a2 2 0 1 1 4 0v5zm-2 8a2 2 0 1 1-2 2v-2h2zm0-1a2 2 0 1 1 0-4h5a2 2 0 1 1 0 4h-5z" />
        </svg>
        slack
      </span>
    ),
  },
  {
    id: "microsoft",
    name: "Microsoft",
    badge: "MICROSOFT",
    renderLogo: () => (
      <span className="inline-flex items-center gap-2.5 font-semibold text-lg md:text-[1.45em] tracking-tight">
        <svg className="w-5 h-5" viewBox="0 0 23 23" fill="currentColor">
          <rect x="1" y="1" width="9.5" height="9.5" fillOpacity="0.95" />
          <rect x="12.5" y="1" width="9.5" height="9.5" fillOpacity="0.75" />
          <rect x="1" y="12.5" width="9.5" height="9.5" fillOpacity="0.6" />
          <rect x="12.5" y="12.5" width="9.5" height="9.5" fillOpacity="0.4" />
        </svg>
        Microsoft
      </span>
    ),
  },
  {
    id: "webflow",
    name: "Webflow",
    badge: "WEBFLOW",
    renderLogo: () => (
      <span className="inline-flex items-center gap-2 font-bold text-lg md:text-[1.45em] tracking-tight">
        <span className="font-black italic text-[#006EFF] group-hover:text-white transition-colors">
          W
        </span>
        Webflow
      </span>
    ),
  },
  {
    id: "salesforce",
    name: "Salesforce",
    badge: "SALESFORCE",
    renderLogo: () => (
      <span className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full border border-current/40 text-xs md:text-[0.9em] italic font-semibold tracking-tight">
        salesforce
      </span>
    ),
  },
  {
    id: "frontify",
    name: "Frontify",
    badge: "FRONTIFY",
    renderLogo: () => (
      <span className="inline-flex items-center gap-2 font-semibold text-lg md:text-[1.4em] tracking-tight">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" />
          <line x1="12" y1="22" x2="12" y2="12" />
          <line x1="21" y1="7" x2="12" y2="12" />
          <line x1="3" y1="7" x2="12" y2="12" />
        </svg>
        Frontify
      </span>
    ),
  },
  {
    id: "lando",
    name: "Lando Norris",
    badge: "LANDO NORRIS",
    renderLogo: () => (
      <span className="flex flex-col items-center leading-[0.88] font-black uppercase text-sm md:text-[1.05em] tracking-tighter">
        <span>LANDO</span>
        <span>NORRIS</span>
      </span>
    ),
  },
  {
    id: "steven",
    name: "Steven Bartlett",
    badge: "STEVEN•COM",
    renderLogo: () => (
      <span className="inline-flex items-center gap-1 font-extrabold uppercase text-sm md:text-[1.05em] tracking-[0.04em]">
        STEVEN<span className="text-[#FF0077]">●</span>COM
      </span>
    ),
  },
  {
    id: "trevor",
    name: "Trevor Noah",
    badge: "TREVOR NOAH",
    renderLogo: () => (
      <span className="font-bold text-base md:text-[1.3em] tracking-tight">
        Trevor Noah
      </span>
    ),
  },
  {
    id: "jasper",
    name: "Jasper",
    badge: "JASPER.AI",
    renderLogo: () => (
      <span className="font-serif italic font-bold text-xl md:text-[1.75em] tracking-tight">
        Jasper
      </span>
    ),
  },
  {
    id: "aptos",
    name: "Aptos Labs",
    badge: "APTOS LABS",
    renderLogo: () => (
      <span className="inline-flex items-center gap-2 font-mono uppercase font-bold text-xs md:text-[0.95em] tracking-[0.12em]">
        <span className="text-[#006EFF]">≋</span> APTOS LABS
      </span>
    ),
  },
  {
    id: "bella",
    name: "Bella",
    badge: "BELLA",
    renderLogo: () => (
      <span className="font-bold lowercase text-2xl md:text-[1.9em] tracking-tighter">
        bella
      </span>
    ),
  },
  {
    id: "pwc",
    name: "PwC",
    badge: "PWC",
    renderLogo: () => (
      <span className="font-serif font-bold lowercase text-2xl md:text-[1.9em] tracking-tight">
        pwc
      </span>
    ),
  },
];

export function ClientsSection() {
  const [activeBadge, setActiveBadge] = useState("LEADERS");

  return (
    <section className="relative w-full px-5 md:px-[4vw] py-16 md:py-[6vw] z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sticky Header with Dynamic Pill Badge (00:16 - 00:18) */}
        <div className="lg:col-span-2 flex flex-col items-start gap-1.5 mbm-diff">
          <h2 className="text-xs md:text-[0.78em] uppercase tracking-[0.08em] font-medium text-[#E5E4E0]">
            TRUSTED BY
          </h2>
          <div className="inline-flex items-center px-2.5 py-0.5 border border-white/75 text-[11px] md:text-[0.75em] uppercase tracking-[0.08em] font-mono transition-all duration-200">
            {activeBadge}
          </div>
        </div>

        {/* Right 5-Col Client Logo Matrix with Corner "+" Markers (00:16 - 00:18) */}
        <div
          onMouseLeave={() => setActiveBadge("LEADERS")}
          className="lg:col-span-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mbm-diff"
        >
          {CLIENTS.map((client) => (
            <div
              key={client.id}
              onMouseEnter={() => setActiveBadge(client.badge)}
              data-cursor-hover=""
              className="group relative aspect-[340/166] flex items-center justify-center border border-white/15 p-4 transition-colors duration-300 hover:bg-white/[0.04] hover:border-[#006EFF]/60"
            >
              {/* 4 Corner "+" Intersection Crosshairs matching .home-client__corner-img */}
              <span className="absolute -top-1.5 -left-1 text-[10px] font-mono text-white/35 group-hover:text-[#FF0077] transition-colors">
                +
              </span>
              <span className="absolute -top-1.5 -right-1 text-[10px] font-mono text-white/35 group-hover:text-[#006EFF] transition-colors">
                +
              </span>
              <span className="absolute -bottom-1.5 -left-1 text-[10px] font-mono text-white/35 group-hover:text-[#006EFF] transition-colors">
                +
              </span>
              <span className="absolute -bottom-1.5 -right-1 text-[10px] font-mono text-white/35 group-hover:text-[#FF0077] transition-colors">
                +
              </span>

              <div className="text-[#E5E4E0] opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                {client.renderLogo()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
