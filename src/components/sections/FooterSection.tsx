"use client";

import React from "react";
import { IbnsulyymanWordmark } from "@/components/brand/BrandMarks";

const SITEMAP_LINKS = [
  { label: "HOME", href: "#hero" },
  { label: "ABOUT US", href: "#manifesto" },
  { label: "WORK", href: "#work" },
  { label: "SERVICES", href: "#capabilities" },
  { label: "CONTACT", href: "#footer" },
];

const CONNECT_LINKS = [
  { label: "TWITTER", href: "https://x.com" },
  { label: "AWWWARDS", href: "https://www.awwwards.com" },
  { label: "FWA", href: "https://thefwa.com" },
  { label: "INSTAGRAM", href: "https://instagram.com" },
  { label: "LINKEDIN", href: "https://linkedin.com" },
];

const AI_SUMMARY_PROMPT = encodeURIComponent(
  "Summarize IBNSULYYMAN: a full-blown creative & technology solutions studio specializing in brand design, high-performance Next.js & WebGL websites, mobile & enterprise apps, commercial video production & editing, and corporate engineering training."
);

const AI_LAUNCHERS = [
  {
    name: "Ask Claude",
    href: `https://claude.ai/new?q=${AI_SUMMARY_PROMPT}`,
    icon: "✻",
  },
  {
    name: "Ask ChatGPT",
    href: `https://chat.openai.com/?q=${AI_SUMMARY_PROMPT}`,
    icon: "◎",
  },
  {
    name: "Ask Perplexity",
    href: `https://www.perplexity.ai/search/new?q=${AI_SUMMARY_PROMPT}`,
    icon: "❈",
  },
  {
    name: "Ask Gemini",
    href: `https://www.google.com/search?q=${AI_SUMMARY_PROMPT}`,
    icon: "✦",
  },
];

export function FooterSection() {
  return (
    <footer
      id="footer"
      className="relative w-full min-h-[92dvh] px-5 md:px-[4vw] pt-20 md:pt-[7vw] pb-10 md:pb-[3vw] bg-[#1D1D1D] text-[#E5E4E0] flex flex-col justify-between z-10 overflow-hidden"
    >
      {/* Subtle Brand Pattern Strip at very bottom */}
      <div className="absolute inset-x-0 bottom-0 h-8 brand-pattern-strip opacity-[0.06] pointer-events-none" />

      {/* Main Grid: Left Giant 4-Line CTA Stack + Right 4-Col Directory (00:50 - 00:54) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        {/* Left Giant CTA Headline Stack (00:50 - 00:54) */}
        <div className="lg:col-span-7 flex flex-col items-start mbm-diff">
          <div className="text-[11vw] md:text-[6.2vw] font-light uppercase tracking-[-0.035em] leading-[0.95]">
            <div className="overflow-hidden">HOW ABOUT</div>
            <div className="overflow-hidden">WE DO A THING</div>
            <div className="flex flex-wrap items-center gap-4 md:gap-[1.6vw]">
              <span>OR TWO,</span>
              {/* Inline Large Pill "GET IN TOUCH ->" Button */}
              <a
                href="mailto:hello@ibnsulyyman.com"
                data-cursor-hover=""
                className="group inline-flex items-center gap-4 px-6 py-3 md:px-[1.8em] md:py-[0.85em] rounded-full border border-white/25 bg-[#1D1D1D] text-xs md:text-[0.22em] font-normal uppercase tracking-[0.08em] hover:border-[#006EFF] transition-colors align-middle"
              >
                <span className="overflow-hidden inline-flex">
                  <span className="stagger-roll">GET IN TOUCH</span>
                </span>
                <span className="overflow-hidden inline-flex w-4 justify-end">
                  <span className="arrow-slide text-[#FF0077]">-&gt;</span>
                </span>
              </a>
            </div>
            <div className="overflow-hidden">
              TO<span className="text-[#FF0077] font-normal">+</span>GETHER
            </div>
          </div>
        </div>

        {/* Right 4-Column Sitemap, Connect, Offices & Admin Directory (00:50 - 00:54) */}
        <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10 text-xs md:text-[0.78em] uppercase tracking-[0.06em] mbm-diff">
          {/* Column 1: SITEMAP + ADMIN */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-white/50 mb-4">SITEMAP</p>
              <ul className="flex flex-col gap-2.5">
                {SITEMAP_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex flex-col py-0.5"
                    >
                      <div className="flex items-center justify-between overflow-hidden">
                        <span className="stagger-roll">{link.label}</span>
                        <span className="arrow-slide">-&gt;</span>
                      </div>
                      <div className="link-track mt-1">
                        <div className="link-track-fill" />
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-white/50 mb-3">ADMIN</p>
              <ul className="flex flex-col gap-2 text-[11px] md:text-[0.88em]">
                <li>
                  <a href="#footer" className="group flex flex-col py-0.5">
                    <div className="flex items-center justify-between overflow-hidden">
                      <span className="stagger-roll">PRIVACY</span>
                      <span className="arrow-slide">-&gt;</span>
                    </div>
                    <div className="link-track mt-1">
                      <div className="link-track-fill" />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#footer" className="group flex flex-col py-0.5">
                    <div className="flex items-center justify-between overflow-hidden">
                      <span className="stagger-roll">CAREERS</span>
                      <span className="arrow-slide">-&gt;</span>
                    </div>
                    <div className="link-track mt-1">
                      <div className="link-track-fill" />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: CONNECT */}
          <div>
            <p className="text-white/50 mb-4">CONNECT</p>
            <ul className="flex flex-col gap-2.5">
              {CONNECT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col py-0.5"
                  >
                    <div className="flex items-center justify-between overflow-hidden">
                      <span className="stagger-roll">{link.label}</span>
                      <span className="text-[0.9em] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </div>
                    <div className="link-track mt-1">
                      <div className="link-track-fill" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: SOLUTIONS & OFFICES */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-white/50 mb-4">SOLUTIONS</p>
              <ul className="flex flex-col gap-2 text-white/90">
                <li>DESIGN &amp; UI/UX</li>
                <li>WEBSITES &amp; WEBGL</li>
                <li>MOBILE &amp; WEB APPS</li>
                <li>VIDEO &amp; EDITING</li>
                <li>TECH TRAINING</li>
              </ul>
            </div>

            <div>
              <p className="text-white/50 mb-3">OFFICES</p>
              <ul className="flex flex-col gap-1.5 text-white/90">
                <li>GLOBAL STUDIO</li>
                <li>REMOTE &amp; ON-SITE</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Left "ASK AI FOR A SUMMARY" + Right Giant Brand Signature (00:52 - 00:54) */}
      <div className="mt-16 md:mt-[5vw] pt-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
        {/* Left AI Summary Quick-Launchers */}
        <div className="flex flex-col gap-3">
          <p className="text-[11px] md:text-[0.72em] uppercase tracking-[0.08em] text-white/55">
            ASK AI FOR A SUMMARY OF IBNSULYYMAN.
          </p>
          <div className="flex items-center gap-3">
            {AI_LAUNCHERS.map((ai) => (
              <a
                key={ai.name}
                href={ai.href}
                target="_blank"
                rel="noreferrer"
                title={ai.name}
                data-cursor-hover=""
                className="w-8 h-8 rounded-full border border-white/20 bg-[#252525] flex items-center justify-center text-sm text-white/80 hover:text-white hover:border-[#006EFF] hover:bg-[#006EFF]/20 transition-all duration-300"
              >
                {ai.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom-Right Monumental Wordmark Signature (00:52 - 00:54) */}
        <div className="self-end">
          <IbnsulyymanWordmark className="text-3xl sm:text-5xl md:text-[4.2vw]" />
        </div>
      </div>
    </footer>
  );
}
