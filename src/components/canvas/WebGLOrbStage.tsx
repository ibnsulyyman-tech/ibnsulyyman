"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const VERTEX_SHADER = /* glsl */ `
  uniform float uTime;
  uniform vec3 uHitPoint;
  uniform float uHoverStrength;
  uniform float uNoiseStrength;

  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vWorldPosition;
  varying float vDent;
  varying float vNoise;

  // Simplex 3D Noise
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  vec3 displace(vec3 pos) {
    float n1 = snoise(pos * 0.95 + vec3(uTime * 0.28, uTime * 0.22, -uTime * 0.18));
    float n2 = snoise(pos * 1.85 - vec3(uTime * 0.35, -uTime * 0.25, uTime * 0.3));
    float organic = (n1 * 0.11 + n2 * 0.045) * uNoiseStrength;

    // Interactive cursor crater / vortex depression (matching 00:02-00:03 & 00:09-00:12)
    float dist = distance(pos, uHitPoint);
    float crater = exp(-dist * dist * 3.2) * uHoverStrength;
    float rim = exp(-pow(dist - 0.52, 2.0) * 8.0) * uHoverStrength * 0.26;

    // Swirl twist around hit point
    vec3 toHit = pos - uHitPoint;
    vec3 swirlDir = cross(normalize(pos), vec3(0.0, 0.0, 1.0));
    vec3 twisted = pos + swirlDir * crater * 0.28;

    float totalDisp = organic - crater * 0.58 + rim;
    return twisted + normalize(pos) * totalDisp;
  }

  void main() {
    float n = snoise(position * 0.95 + vec3(uTime * 0.28));
    float dist = distance(position, uHitPoint);
    vDent = exp(-dist * dist * 3.0) * uHoverStrength;
    vNoise = n;

    // Compute displaced position and finite-difference normals for glossy lighting
    vec3 displacedPos = displace(position);
    float eps = 0.02;
    vec3 tangent = normalize(cross(normal, vec3(0.0, 1.0, 0.0)));
    if (length(tangent) < 0.01) tangent = normalize(cross(normal, vec3(1.0, 0.0, 0.0)));
    vec3 bitangent = normalize(cross(normal, tangent));

    vec3 neighbour1 = displace(position + tangent * eps);
    vec3 neighbour2 = displace(position + bitangent * eps);
    vec3 computedNormal = normalize(cross(neighbour1 - displacedPos, neighbour2 - displacedPos));

    vNormal = normalize(normalMatrix * computedNormal);
    vPosition = displacedPos;
    vec4 worldPosition = modelMatrix * vec4(displacedPos, 1.0);
    vWorldPosition = worldPosition.xyz;

    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  uniform float uTime;
  uniform float uOpacity;

  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vWorldPosition;
  varying float vDent;
  varying float vNoise;

  // Film grain hash
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  void main() {
    vec3 N = normalize(vNormal);
    vec3 V = normalize(cameraPosition - vWorldPosition);

    // IBNSULYYMAN Brand Colors + Iridescent Studio Highlights
    vec3 brandBlue    = vec3(0.0, 0.431, 1.0);     // #006EFF Electric Blue
    vec3 brandMagenta = vec3(1.0, 0.0, 0.467);     // #FF0077 Vibrant Magenta
    vec3 pureWhite    = vec3(0.99, 0.99, 1.0);     // #FFFFFF Pure White
    vec3 cyanGlow     = vec3(0.18, 0.82, 1.0);     // Iridescent Cyan Rim
    vec3 warmCore     = vec3(1.0, 0.38, 0.58);     // Warm Magenta-Coral Core

    // Directional studio lighting normals
    float lightTopRight = clamp(dot(N, normalize(vec3(0.75, 0.65, 0.5))), 0.0, 1.0);
    float lightLeft     = clamp(dot(N, normalize(vec3(-0.85, 0.15, 0.4))), 0.0, 1.0);
    float lightBottom   = clamp(dot(N, normalize(vec3(0.1, -0.9, 0.35))), 0.0, 1.0);
    float fresnel       = pow(1.0 - max(dot(N, V), 0.0), 2.4);

    // Base spatial gradient across sphere
    vec3 col = mix(brandBlue, brandMagenta, smoothstep(-0.7, 0.65, N.x * 0.8 + vNoise * 0.35));
    col = mix(col, pureWhite, pow(lightTopRight, 1.65) * 0.92);
    col = mix(col, brandMagenta, pow(lightLeft, 1.4) * 0.78);
    col = mix(col, cyanGlow, lightBottom * 0.55 + fresnel * 0.65);

    // Inside interactive cursor vortex dent (matching 00:02-00:03 & 00:09-00:11)
    vec3 dentColor = mix(brandBlue, pureWhite, smoothstep(0.0, 0.7, vDent));
    dentColor = mix(dentColor, warmCore, sin(vDent * 6.2831 + uTime * 2.0) * 0.5 + 0.5);
    col = mix(col, dentColor, clamp(vDent * 1.45, 0.0, 1.0));

    // Glossy specular highlight
    vec3 H = normalize(normalize(vec3(0.4, 0.5, 1.0)) + V);
    float spec = pow(max(dot(N, H), 0.0), 28.0);
    col += pureWhite * spec * 0.42;

    // Subtle studio film grain
    float grain = (random(gl_FragCoord.xy * 0.01 + uTime) - 0.5) * 0.028;
    col += grain;

    gl_FragColor = vec4(col, uOpacity);
  }
`;

export function WebGLOrbStage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 1. Scene, Camera, Renderer (Single fixed canvas per threejs-webgl skill)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      38,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 5.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 2. Orb Mesh + Custom ShaderMaterial
    const geometry = new THREE.IcosahedronGeometry(1.32, 64);
    const uniforms = {
      uTime: { value: 0 },
      uHitPoint: { value: new THREE.Vector3(0, 0, 1.32) },
      uHoverStrength: { value: 0 },
      uNoiseStrength: { value: prefersReducedMotion ? 0.2 : 1.0 },
      uOpacity: { value: 1.0 },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms,
      transparent: true,
    });

    const orbMesh = new THREE.Mesh(geometry, material);
    scene.add(orbMesh);

    // 3. Raycaster for interactive cursor dent (00:02-00:03 & 00:09-00:12)
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2(999, 999);
    const targetHit = new THREE.Vector3(0, 0, 1.32);
    let targetHoverStrength = 0;

    const onPointerMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // 4. Scroll-driven waypoints matching 00:00 - 00:54 video choreography
    const getOrbTransformForScroll = (progress: number) => {
      // Waypoints: [scrollProgress, x, y, scale, opacity]
      const keyframes = [
        { p: 0.0, x: 0.0, y: 0.0, s: 1.05, o: 1.0 },       // 00:09-00:12 Hero (Centered)
        { p: 0.13, x: 1.38, y: -0.04, s: 1.42, o: 1.0 },   // 00:00-00:03 Manifesto (Right Large)
        { p: 0.24, x: 1.52, y: -0.25, s: 1.35, o: 1.0 },   // 00:16-00:18 Trusted By (Right Lower)
        { p: 0.34, x: 0.12, y: 0.15, s: 1.25, o: 1.0 },    // 00:19-00:21 Featured Work Top
        { p: 0.45, x: -1.85, y: 0.05, s: 1.32, o: 1.0 },   // 00:22-00:25 Featured Work Mid (Far Left)
        { p: 0.56, x: -0.05, y: -0.08, s: 0.96, o: 1.0 },  // 00:35-00:36 Featured Work Bottom (Center)
        { p: 0.69, x: -0.78, y: 0.06, s: 1.18, o: 1.0 },   // 00:37-00:40 3D Perspective Grid
        { p: 0.8, x: -2.25, y: 1.35, s: 0.46, o: 0.85 },   // 00:41-00:43 Awards (Exits Top-Left)
        { p: 0.87, x: -2.8, y: 1.8, s: 0.25, o: 0.0 },     // 00:44+ Portal Zoom & Footer
        { p: 1.0, x: -2.8, y: 1.8, s: 0.25, o: 0.0 },
      ];

      const clamped = Math.max(0, Math.min(1, progress));
      for (let i = 0; i < keyframes.length - 1; i++) {
        const curr = keyframes[i];
        const next = keyframes[i + 1];
        if (clamped >= curr.p && clamped <= next.p) {
          const t = (clamped - curr.p) / (next.p - curr.p || 1);
          // Smoothstep interpolation
          const st = t * t * (3 - 2 * t);
          return {
            x: THREE.MathUtils.lerp(curr.x, next.x, st),
            y: THREE.MathUtils.lerp(curr.y, next.y, st),
            s: THREE.MathUtils.lerp(curr.s, next.s, st),
            o: THREE.MathUtils.lerp(curr.o, next.o, st),
          };
        }
      }
      return { x: 0, y: 0, s: 1, o: 1 };
    };

    const currentScrollState = { x: 0, y: 0, s: 1.05, o: 1.0 };

    // 5. Shared GSAP Ticker render loop (per gsap-scroll-motion & threejs-webgl skills)
    let isTabVisible = true;
    const onVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const tick = (time: number) => {
      if (!isTabVisible) return;

      uniforms.uTime.value = time;

      // Compute normalized page scroll progress
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const scrollProgress = window.scrollY / maxScroll;
      const target = getOrbTransformForScroll(scrollProgress);

      // Mobile scale adjustment
      const mobileFactor = window.innerWidth < 768 ? 0.68 : 1.0;

      currentScrollState.x = THREE.MathUtils.lerp(
        currentScrollState.x,
        target.x * mobileFactor,
        0.08
      );
      currentScrollState.y = THREE.MathUtils.lerp(
        currentScrollState.y,
        target.y * mobileFactor,
        0.08
      );
      currentScrollState.s = THREE.MathUtils.lerp(
        currentScrollState.s,
        target.s * mobileFactor,
        0.08
      );
      currentScrollState.o = THREE.MathUtils.lerp(
        currentScrollState.o,
        target.o,
        0.1
      );

      orbMesh.position.set(currentScrollState.x, currentScrollState.y, 0);
      orbMesh.scale.setScalar(currentScrollState.s);
      orbMesh.rotation.y = time * 0.18 + scrollProgress * 3.2;
      orbMesh.rotation.x = Math.sin(time * 0.25) * 0.15 + scrollProgress * 1.4;
      uniforms.uOpacity.value = currentScrollState.o;

      // Raycast cursor onto Orb for physical liquid crater effect
      if (!prefersReducedMotion && currentScrollState.o > 0.1) {
        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObject(orbMesh);
        if (intersects.length > 0) {
          const localPoint = orbMesh.worldToLocal(intersects[0].point.clone());
          targetHit.copy(localPoint);
          targetHoverStrength = 1.15;
        } else {
          targetHoverStrength = 0.0;
        }
      } else {
        targetHoverStrength = 0.0;
      }

      uniforms.uHitPoint.value.lerp(targetHit, 0.12);
      uniforms.uHoverStrength.value = THREE.MathUtils.lerp(
        uniforms.uHoverStrength.value,
        targetHoverStrength,
        0.09
      );

      // Sync the two thin DOM orbital rings (matching [orb-outline="1"] & [orb-outline="2"])
      if (ring1Ref.current && ring2Ref.current) {
        const ringOffsetX = currentScrollState.x * 14;
        const ringOffsetY = -currentScrollState.y * 12;
        ring1Ref.current.style.transform = `translate3d(${ringOffsetX}vw, ${ringOffsetY}vh, 0) rotate(${
          time * 12 + scrollProgress * 160
        }deg)`;
        ring2Ref.current.style.transform = `translate3d(${
          ringOffsetX * 0.65 + 6
        }vw, ${ringOffsetY * 0.65 - 4}vh, 0) rotate(${
          -time * 9 - scrollProgress * 140
        }deg)`;
      }

      renderer.render(scene, camera);
    };

    gsap.ticker.add(tick);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", onResize);

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      data-orb-wrap=""
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
    >
      {/* Orbital Wireframe Rings (Visible across Hero, Manifesto, and Awards at 00:09, 00:41-00:43) */}
      <div
        ref={ring1Ref}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[52vw] h-[52vw] min-w-[340px] min-h-[340px] rounded-full border border-white/15 will-change-transform"
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#006EFF]/60" />
      </div>
      <div
        ref={ring2Ref}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[44vw] h-[44vw] min-w-[280px] min-h-[280px] rounded-full border border-white/10 will-change-transform"
      >
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#FF0077]/60" />
      </div>

      {/* Single Full-Viewport Three.js Canvas */}
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
