---
name: gsap-scroll-motion
description: Use when building scroll-driven animation, smooth scrolling, text reveals, pinned sections, horizontal scroll, parallax, marquees, or page transitions with GSAP, ScrollTrigger and Lenis.
---

# GSAP + ScrollTrigger + Lenis

## Setup
- Install: npm i gsap lenis
- Register plugins once: gsap.registerPlugin(ScrollTrigger, SplitText)
- In React/Next.js use @gsap/react's useGSAP() hook so animations clean up on unmount.

## Lenis and ScrollTrigger sync (always do this)
const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

## Patterns to use
- Text reveal: SplitText by lines or words, mask each line with overflow hidden, animate yPercent 100 to 0 with stagger 0.05 and ease power4.out.
- Section pin: ScrollTrigger with pin: true, scrub: 1, start "top top", end "+=150%".
- Horizontal scroll: pin the wrapper, animate x to -(scrollWidth - innerWidth) with scrub and ease "none".
- Parallax: animate yPercent on images with scrub: true. Scale the image slightly (1.15) so edges never show.
- Marquee: infinite gsap.to on xPercent -100 with repeat -1 and ease "none". Speed up with scroll velocity.
- Page transitions: animate an overlay with a timeline, then swap content, then reveal.
- Preloader: lock scroll with lenis.stop(), play the intro timeline, then lenis.start().

## Rules
- Animate transform and opacity only. Never animate width, height, top or left.
- Use gsap.context() or useGSAP scope and call revert() on cleanup.
- Use gsap.matchMedia() for desktop/mobile variants and for prefers-reduced-motion (skip heavy motion).
- Call ScrollTrigger.refresh() after images or fonts load.
- Use will-change sparingly. Prefer gsap.set over inline CSS for initial states to avoid flash.
- Keep durations between 0.6s and 1.2s. Default ease: power3.out or power4.out.
- Use clamp() or vw units for big type so it scales.
