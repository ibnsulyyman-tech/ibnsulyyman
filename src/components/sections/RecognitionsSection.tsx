"use client";

import React from "react";

interface RecognitionRow {
  num: string;
  organization: string;
  items: { label: string; count: string }[];
}

const RECOGNITION_ROWS: RecognitionRow[] = [
  {
    num: "01",
    organization: "AWWWARDS",
    items: [
      { label: "SITE OF THE YEAR", count: "01" },
      { label: "SITE OF THE MONTH", count: "01" },
      { label: "SITE OF THE DAY", count: "07" },
      { label: "DEVELOPER AWARD", count: "06" },
      { label: "HONORS", count: "18" },
    ],
  },
  {
    num: "02",
    organization: "FWA",
    items: [{ label: "FWA OF THE DAY", count: "05" }],
  },
  {
    num: "03",
    organization: "CSS DESIGN AWARDS",
    items: [
      { label: "SITE OF THE MONTH", count: "1" },
      { label: "SITE OF THE DAY", count: "10" },
    ],
  },
  {
    num: "04",
    organization: "ORPETRON",
    items: [
      { label: "SITE OF THE DAY", count: "8" },
      { label: "SITE OF THE MONTH", count: "1" },
    ],
  },
];

export function RecognitionsSection() {
  return (
    <section
      id="recognitions"
      className="relative w-full px-5 md:px-[4vw] py-24 md:py-[10vw] z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mbm-diff">
        {/* Left Sticky Header: RECOGNITIONS + AWARDS ^50 (00:41 - 00:43) */}
        <div className="lg:col-span-3 lg:sticky lg:top-[42vh]">
          <div className="inline-flex items-start gap-1.5">
            <h2 className="text-xs md:text-[0.8em] uppercase tracking-[0.08em] leading-[1.35] font-medium">
              RECOGNITIONS
              <br />+ AWARDS
            </h2>
            <span className="text-[10px] font-mono text-[#FF0077] -mt-1">
              50
            </span>
          </div>
        </div>

        {/* Right 4-Row Table (00:41 - 00:43) */}
        <div className="lg:col-span-9 flex flex-col">
          {RECOGNITION_ROWS.map((row) => (
            <div
              key={row.num}
              data-cursor-hover=""
              className="group flex flex-col pt-8 md:pt-[2.6vw]"
            >
              <div className="grid grid-cols-12 gap-4 pb-8 md:pb-[2.6vw] items-start">
                {/* Index 01 - 04 */}
                <div className="col-span-2 md:col-span-2 text-xs md:text-[0.72em] font-mono text-white/60 pt-2">
                  {row.num}
                </div>

                {/* Award Body / Vertical Name */}
                <div className="col-span-10 md:col-span-6">
                  <h3 className="text-2xl md:text-[2.6vw] font-light uppercase tracking-[-0.02em] leading-none group-hover:text-[#006EFF] transition-colors duration-300">
                    {row.organization}
                  </h3>
                </div>

                {/* Right Metric Sub-List with Superscript Counts */}
                <div className="col-span-10 col-start-3 md:col-span-4 flex flex-col items-start md:items-end gap-1.5 mt-3 md:mt-0">
                  {row.items.map((sub) => (
                    <div
                      key={sub.label}
                      className="inline-flex items-start gap-1.5 text-xs md:text-[0.82em] uppercase tracking-[0.06em]"
                    >
                      <span>{sub.label}</span>
                      <span className="text-[10px] font-mono text-[#006EFF] -mt-1">
                        {sub.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Hairline + Animated Hover Fill */}
              <div className="link-track">
                <div className="link-track-fill" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
