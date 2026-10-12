# ANTIGRAVITY MASTER PROMPT — IBNSULYYMAN (1:1 Off+Brand Architecture + Pixel-by-Pixel Video Extraction)

> **Design Read:** Experimental Awwwards-grade Creative & Technology Studio flagship for enterprise & high-growth buyers, with a kinetic WebGL + difference-blended typographic language, leaning toward Next.js App Router + Three.js/R3F custom GLSL shaders + GSAP ScrollTrigger + Lenis smooth scroll (`DESIGN_VARIANCE: 10`, `MOTION_INTENSITY: 10`, `VISUAL_DENSITY: 4`).

---

## 0. Mandatory First Step: Frame-by-Frame Video & Brand Asset Extraction
1. **Extract & Inspect All Video Frames**:
   If not already extracted in `extracted_frames/`, run:
   ```powershell
   New-Item -ItemType Directory -Force -Path "extracted_frames"
   ffmpeg -i "httpswww.itsoffbrand.com.mp4" -vf "fps=1" "extracted_frames/frame_%03d.png"
   ```
   Use `view_file` on `httpswww.itsoffbrand.com.mp4` and the extracted frames (`frame_001.png` through `frame_055.png`) alongside the root brand files:
   - `Frame 120.png` (Master brand sheet: Symbol, Word-Mark, Color Palette, Pattern)
   - `logo.png` (Symbol: Electric Blue `#006EFF` rounded right-chevron + Vibrant Magenta `#FF0077` rounded top-right triangle)
   - `word-mark.png` (`IBNSULYYMAN` geometric display wordmark)
   - `pattern.png` (1×7 horizontal symbol repeat)
   - `pattern grid.png` (7×8 tessellated symbol grid)
2. **Load Installed Workspace Skills**:
   - `.agent/skills/gsap-scroll-motion/SKILL.md`
   - `.agent/skills/threejs-webgl/SKILL.md`
   - `.agents/skills/taste-skill/SKILL.md`
   - `.agents/skills/impeccable/SKILL.md`

---

## 1. Brand Identity, Color System & Typography Lock
- **Company Name**: **IBNSULYYMAN**
- **Positioning**: Full-blown Creative & Technology Solutions Company doing everything Off+Brand does and more:
  1. **Brand Identity & UI/UX Design** (Design systems, spatial UI, rebrands)
  2. **High-Performance Websites & WebGL** (Next.js, Three.js, GLSL shaders, interactive storytelling)
  3. **Mobile & Enterprise Web Applications** (iOS, Android, SaaS platforms, AI-native software)
  4. **Video Production, Motion Design & Editing** (Commercial edits, 3D showreels, VFX, brand documentaries)
  5. **Corporate & Developer Technical Training** (Engineering bootcamps, design-to-code workshops, AI upskilling)
- **Strict Color Palette (from `Frame 120.png` + Video Dark Canvas)**:
  - `--brand-blue`: `#006EFF` (`rgb(0, 110, 255)`) — Primary Electric Blue
  - `--brand-magenta`: `#FF0077` (`rgb(255, 0, 119)`) — Primary Vibrant Magenta
  - `--brand-white`: `#FFFFFF` (`rgb(255, 255, 255)`) — Pure White
  - `--main-dark`: `#1D1D1D` — Primary matte dark stage
  - `--main-dark-alt`: `#252525` — Elevated card / menu surface
  - `--main-light`: `#F4F6FA` — Light mode surface & difference-blend base text color
  - `--dark-grey`: `rgba(218, 218, 218, 0.2)` — Hairline grid borders, pill outlines, orbital rings
- **Typography & Blending Rules**:
  - Desktop fluid sizing: `body { font-size: 1.0582vw; }` so all `em` units scale pixel-proportionally across viewports.
  - Display Headlines: Clean geometric neo-grotesk (`Syne` / `Plus Jakarta Sans` / `Space Grotesk`), uppercase, `letter-spacing: -0.03em`, `line-height: 0.96`.
  - Difference Blending (`.mbm-diff`): `mix-blend-mode: difference; color: #FFFFFF; user-select: none;` on all foreground headlines and links so they invert dynamically into high-contrast black/cyan/magenta/blue whenever the 3D WebGL orb passes behind them.

---

## 2. Pixel-to-Pixel Frame Timeline (`00:00` – `00:54`)

| Frame / Time | Section & Camera State | Pixel-Exact Visual & Motion Specification |
| :--- | :--- | :--- |
| **`00:00`–`00:03`** (`frame_001`–`004`) | **Section 2: Manifesto** *(Video begins mid-page)* | • 4-line uppercase headline (`WITH EMOTION + / INNOVATION, WE PUSH THE / BOUNDARIES OF DIGITAL / CREATIVITY.`) at `font-size: ~5.6vw`, `mix-blend-mode: difference`.<br>• 3D Orb sits center-right (`x: +22vw, y: 0, scale: 1.32`). At `00:02–00:03`, cursor hovers over `DIGITAL`, indenting the 3D mesh with a liquid vortex crater.<br>• Bottom 2-column split: Left column uppercase summary + `ABOUT US ->` track link; Right column narrative paragraph. |
| **`00:04`–`00:08`** (`frame_005`–`009`) | **Scroll Up to Hero** | • User scrolls back to top.<br>• Hero headline characters (`A`, `O`, `R`, `S_R`) fly in from scattered 2D/3D coordinates (`[hh-tb] .char`) scrubbed to scroll progress. |
| **`00:09`–`00:12`** (`frame_010`–`013`) | **Section 1: Home Hero** (`100dvh`) | • 3 staggered display blocks around the centered 3D Orb (`x: 0, y: 0, diameter: ~46vw`):<br>  1. Top-Left (`top: 14vh, left: 5vw`): `A DIFFERENT`<br>  2. Mid-Right (`top: 43vh, right: 8vw`): `CREATIVE` (or `TECHNOLOGY`)<br>  3. Bottom-Left (`bottom: 12vh, left: 15vw`): `APPROACH`<br>  4. Bottom-Right (`bottom: 14vh, right: 9vw`): `SCROLL ↓`<br>• Two thin `1px` circular orbital rings (`orb-outline="1"` and `"2"`) rotate around the sphere.<br>• Dragging cursor across the sphere deforms vertices inward with spring physics and shifts specular colors (`#006EFF` / `#FF0077` / `#FFFFFF`). |
| **`00:13`–`00:15`** (`frame_014`–`016`) | **Scroll Down: Hero -> Manifesto** | • Hero characters scatter upward.<br>• Orb glides smoothly from center (`x: 0`) to right (`x: +24vw, scale: 1.35`).<br>• Manifesto headline and 2-col body reveal via masked line stagger (`yPercent: 100 -> 0`). |
| **`00:16`–`00:18`** (`frame_017`–`019`) | **Section 3: Trusted By Matrix** | • Left column (`col-span-3`): `TRUSTED BY` + outlined pill `[ LEADERS ]`.<br>• Hovering any client cell dynamically swaps `[ LEADERS ]` to the client's name (`[ MICROSOFT ]` at `00:17`, `[ PWC ]` at `00:18`).<br>• Right column (`col-span-9`): 5×2 grid of 10 logo cells (`aspect-ratio: 340/166`) with hairline borders and corner symbol markers at every intersection. |
| **`00:19`–`00:36`** (`frame_020`–`037`) | **Section 4: Featured Work** | • Left column (`position: sticky; top: 42vh`): `FEATURED WORK` + superscript count `11` + pill CTA `ALL WORK ->`.<br>• 3D Orb travels behind the grid: right (`00:20`) -> far-left behind `FEATURED WORK` (`00:22–00:25`) -> center (`00:35–00:36`).<br>• Right 2-column offset grid: Square cards (`aspect-ratio: 1/1`, `border-radius: 1.375em`), right column shifted upward by `~35%`.<br>• Card hover (`00:24–00:30`): Image scales `1.1x`, bottom-left capability tags (`● BRAND & DESIGN  △ DEVELOPMENT  ⁂ WEBGL, 3D`) slide up, bottom-right `+`/chevron morphs to `->`. Includes solid `#006EFF` brand card at `00:35`. |
| **`00:37`–`00:40`** (`frame_038`–`041`) | **Section 5: 3D Z-Axis Spatial Cloud** | • Pinned `100dvh` stage with `perspective: 4000px` and `transform-style: preserve-3d`.<br>• 28+ media tiles (`14:9` video loops & project stills) + uppercase capability tags (`BRAND IDENTITY`, `DIGITAL EXPERIENCES`, `WEBGL/VR`, `UX/UI`, `APP DEVELOPMENT`, `VIDEO & EDITING`, `TECH TRAINING`) fly along the Z-axis (`translate3d(x, y, z)`) from `-3000px` to `+1000px`.<br>• Bottom-left sticky difference headline (`00:38`): `ELEVATING / BRANDS IN / UNEXPECTED / WAYS.` |
| **`00:41`–`00:43`** (`frame_042`–`044`) | **Section 6: Recognitions + Metrics** | • Orb shrinks and exits top-left (`00:41`); faint orbital rings remain in center.<br>• Left sticky header: `RECOGNITIONS + AWARDS` (`50`).<br>• Right 4-row table (`01`–`04`) with numbered categories, large uppercase titles, and right-aligned metric stacks with superscript counts. |
| **`00:44`–`00:48`** (`frame_045`–`049`) | **Section 7: Pinned Symbol Portal Zoom** | • Pinned section (`.s.is-hsc`).<br>• Centered vector mark (IBNSULYYMAN Chevron+Triangle / Cross portal) starts at `scale: 0.15, rotate: -35deg` over an evolving `#006EFF -> #FF0077 -> #FFFFFF` gradient (`00:44`).<br>• Scrubbing scroll rotates and scales the cutout to `40x` (`00:45–00:48`) until the gradient fills the entire screen.<br>• Simultaneously, dark single-line display text (`WHERE DIFFERENT IS THE STANDARD. CHOOSE IBNSULYYMAN.`) scrubs horizontally right-to-left until centered (`00:48`). |
| **`00:49`–`00:54`** (`frame_050`–`055`) | **Section 8: Curtain Collapse & Footer** | • The full-screen gradient portal collapses upward (`00:49–00:51`) into a rounded top banner (`border-radius: 1.375em`), revealing the dark `#1D1D1D` footer.<br>• Left 4-line giant CTA stack: `HOW ABOUT / WE DO A THING / OR TWO, [ GET IN TOUCH -> ] / TO»GETHER`.<br>• Right 4-column directory: `SITEMAP`, `CONNECT`, `OFFICES`, `ADMIN`.<br>• Bottom row (`00:52–00:54`): Left `ASK AI FOR A SUMMARY OF IBNSULYYMAN.` + 4 AI icon launchers (Claude, ChatGPT, Perplexity, Gemini); Right oversized `IBNSULYYMAN` wordmark. |

---

## 3. Architecture & Implementation Directives
1. **Single WebGL Context**: Render ONE fixed `<canvas>` (`WebGLOrbStage.tsx`) behind all DOM sections. Share the animation frame with Lenis and GSAP Ticker. Cap `devicePixelRatio` at `2`.
2. **Custom GLSL Orb Shaders**:
   - Vertex shader: 3D Simplex noise + mouse raycast depression uniform (`uMouse`, `uHoverIntensity`, `uScrollProgress`).
   - Fragment shader: Multi-stop cosine/linear ramp driven by surface normals and Fresnel rim lighting using `#006EFF` (Electric Blue), `#FF0077` (Vibrant Magenta), `#FFFFFF` (Pure White), and `#00D4FF` (Cyan highlight), plus subtle procedural film grain.
3. **Strict Motion Cleanup**: Wrap all GSAP ScrollTriggers in `useGSAP()` or `gsap.context()` and support `prefers-reduced-motion`.
