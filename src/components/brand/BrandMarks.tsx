import React from "react";

/**
 * Exact IBNSULYYMAN Symbol Mark (matching logo.png):
 * Left/Center: Electric Blue (#006EFF) rounded right-pointing chevron
 * Top-Right: Vibrant Magenta (#FF0077) rounded downward-pointing triangle nestled in the upper-right notch
 */
export function IbnsulyymanSymbol({
  className = "w-8 h-8",
  monochrome = false,
  strokeOnly = false,
}: {
  className?: string;
  monochrome?: boolean;
  strokeOnly?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 250 284"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Blue Rounded Chevron */}
      <path
        d="M8.5 22.5C2.5 12.1 9.9 0 21.9 0H71.5C82.7 0 93.1 6.0 98.7 15.7L164.8 130.2C170.5 140.1 170.5 152.3 164.8 162.2L98.7 268.3C93.1 278.0 82.7 284 71.5 284H21.9C9.9 284 2.5 271.9 8.5 261.5L70.8 153.6C75.2 146.0 75.2 136.6 70.8 129.0L8.5 22.5Z"
        fill={strokeOnly ? "none" : monochrome ? "currentColor" : "#006EFF"}
        stroke={strokeOnly ? "#006EFF" : "none"}
        strokeWidth={strokeOnly ? "4" : "0"}
        className={strokeOnly ? "st-x" : ""}
      />
      {/* Magenta Rounded Triangle in Upper-Right Notch */}
      <path
        d="M117.4 20.8C111.8 11.1 118.8 0 130.0 0H235.2C246.4 0 253.4 11.1 247.8 20.8L195.2 111.8C189.6 121.5 175.6 121.5 170.0 111.8L117.4 20.8Z"
        fill={strokeOnly ? "none" : monochrome ? "currentColor" : "#FF0077"}
        stroke={strokeOnly ? "#FF0077" : "none"}
        strokeWidth={strokeOnly ? "4" : "0"}
        className={strokeOnly ? "st-c" : ""}
      />
    </svg>
  );
}

/**
 * Exact IBNSULYYMAN Wordmark (matching word-mark.png):
 * IBNSUL (#006EFF) + YY (#FF0077) + MAN (#006EFF with #FF0077 triangle inside A)
 */
export function IbnsulyymanWordmark({
  className = "h-6 w-auto",
  useImage = false,
}: {
  className?: string;
  useImage?: boolean;
}) {
  if (useImage) {
    return (
      <img
        src="/brand/word-mark.png"
        alt="IBNSULYYMAN"
        className={className}
        draggable={false}
      />
    );
  }

  return (
    <span
      className={`inline-flex items-baseline font-black tracking-[-0.04em] select-none leading-none ${className}`}
      style={{ fontFamily: "var(--font-display), sans-serif" }}
    >
      <span className="text-[#006EFF]">IBNSUL</span>
      <span className="text-[#FF0077]">YY</span>
      <span className="text-[#006EFF]">M</span>
      <span className="relative inline-block text-[#006EFF]">
        A
        {/* Magenta upward triangle inside the A counter matching word-mark.png */}
        <svg
          viewBox="0 0 24 24"
          className="absolute left-1/2 bottom-[8%] -translate-x-1/2 w-[52%] h-[58%] pointer-events-none"
          fill="none"
        >
          <path d="M12 3L21 22H3L12 3Z" fill="#FF0077" />
        </svg>
      </span>
      <span className="text-[#006EFF]">N</span>
    </span>
  );
}

/**
 * Off+Brand-style rounded geometric cross/symbol portal SVG (162x162 viewBox)
 * Used in card corners, page-wipe, and the Section 7 40x portal zoom
 */
export function PortalCrossSvg({
  className = "w-full h-full",
  fill = "currentColor",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 162 162"
      className={className}
    >
      <path
        d="M108 88.7c-10.8 0-19.7 8.8-19.7 19.7v47.4c0 1.9-1.5 3.4-3.4 3.4h-8.6c-1.9 0-3.4-1.5-3.4-3.4v-47.4c0-10.8-8.8-19.7-19.7-19.7H6.4c-1.9 0-3.4-1.5-3.4-3.4v-8c0-1.9 1.5-3.4 3.4-3.4h46.9c10.8 0 19.7-8.8 19.6-19.7V6.4c0-1.9 1.5-3.4 3.4-3.4H85c1.9 0 3.4 1.5 3.4 3.4v47.8c0 10.8 8.8 19.7 19.7 19.7h46.6c1.9 0 3.4 1.5 3.4 3.4v8c0 1.9-1.5 3.4-3.4 3.4H108z"
        fill={fill}
      />
      <path
        d="M146.1 134.4h-.7c-6.5 0-11.9 5.3-11.9 11.9v.7c0 6.7 5.5 12.2 12.2 12.2s12.2-5.5 12.2-12.2v-.7c0-6.6-5.2-11.9-11.8-11.9z"
        fill="#FF0077"
      />
    </svg>
  );
}
