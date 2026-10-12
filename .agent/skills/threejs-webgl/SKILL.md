---
name: threejs-webgl
description: Use when adding 3D models, WebGL backgrounds, shader effects, image distortion on hover, or scroll-synced 3D scenes to a website with Three.js or React Three Fiber.
---

# Three.js / WebGL for websites

## Setup
- Install: npm i three. For React/Next.js also: npm i @react-three/fiber @react-three/drei
- Prefer React Three Fiber in React projects. Use vanilla Three.js otherwise.
- Use ONE fixed full-screen canvas behind the DOM (position fixed, inset 0, pointer-events none). Do not create a canvas per section.

## Patterns to use
- Image hover distortion: PlaneGeometry with a ShaderMaterial, uniforms uTexture, uTime, uHover, uMouse. Displace UVs in the fragment shader with noise or a ripple around the mouse.
- Scroll-synced scene: read the Lenis scroll value in the render loop and write it to a uniform or to camera/mesh position. Match DOM element positions to meshes using getBoundingClientRect.
- 3D model: load GLB with GLTFLoader plus DRACOLoader. Compress models (gltf-transform) and keep them under 3MB.
- Background effect: full-screen plane with a fragment shader (gradient noise, grain, fluid). Keep it cheap.
- Post-processing only when needed (bloom, grain). Use the EffectComposer sparingly.

## Rules
- Cap pixel ratio: renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)).
- Dispose geometries, materials and textures on unmount.
- Pause rendering when the canvas is off-screen or the tab is hidden.
- Lazy-load the 3D bundle with dynamic import. Show a lightweight fallback (static image) on mobile, low-power devices, and prefers-reduced-motion.
- Use a single requestAnimationFrame loop (or gsap.ticker) shared with Lenis. Do not run two loops.
- Use KTX2 or WebP textures, power-of-two sizes where possible.
- Keep shader code in separate .glsl files or template strings with clear uniform names.
