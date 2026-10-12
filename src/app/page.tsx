"use client";
import React, { useState } from "react";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import NeuralCanvas from "@/components/NeuralCanvas";
import Hero from "@/components/Hero";
import WhatIBuild from "@/components/WhatIBuild";
import SelectedWork from "@/components/SelectedWork";
import SystemPlayground from "@/components/SystemPlayground";
import Journey from "@/components/Journey";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main className="relative flex flex-col w-full min-h-screen bg-[#030305] text-[#f5f5f5] overflow-hidden">
      {/* Dynamic ambient neural data canvas backdrop */}
      <NeuralCanvas />

      {/* Cyber-luxury initialization loader */}
      {!isLoaded && <Loader onComplete={() => setIsLoaded(true)} />}

      {/* Floating glassmorphic header */}
      <Navigation />

      {/* Hero section */}
      <Hero isLoaded={isLoaded} />

      {/* Architectural Capabilities */}
      <WhatIBuild />

      {/* Selected Work Case Studies */}
      <SelectedWork />

      {/* Interactive AI & ML Lab Sandbox */}
      <SystemPlayground />

      {/* Philosophy & Skill Arsenal */}
      <About />

      {/* Milestones & Academic Journey */}
      <Journey />

      {/* Prestigious Contact Deck */}
      <Contact />
    </main>
  );
}
