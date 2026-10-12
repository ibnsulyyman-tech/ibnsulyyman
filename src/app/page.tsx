import React from "react";
import { SmoothScrollProvider } from "@/components/chrome/SmoothScrollProvider";
import { Preloader } from "@/components/chrome/Preloader";
import { CustomCursor } from "@/components/chrome/CustomCursor";
import { HudOverlay } from "@/components/chrome/HudOverlay";
import { WebGLOrbStage } from "@/components/canvas/WebGLOrbStage";
import { HeroSection } from "@/components/sections/HeroSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import { PerspectiveGridSection } from "@/components/sections/PerspectiveGridSection";
import { RecognitionsSection } from "@/components/sections/RecognitionsSection";
import { PortalZoomSection } from "@/components/sections/PortalZoomSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <Preloader />
      <CustomCursor />
      <HudOverlay />
      <WebGLOrbStage />

      <main className="relative z-10 w-full overflow-x-clip">
        <HeroSection />
        <ManifestoSection />
        <ClientsSection />
        <FeaturedWorkSection />
        <PerspectiveGridSection />
        <RecognitionsSection />
        <PortalZoomSection />
        <FooterSection />
      </main>
    </SmoothScrollProvider>
  );
}
