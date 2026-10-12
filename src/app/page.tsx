"use client";
import React, { useState } from "react";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatIBuild from "@/components/WhatIBuild";
import Journey from "@/components/Journey";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main className="relative flex flex-col w-full min-h-screen bg-black">
      {!isLoaded && <Loader onComplete={() => setIsLoaded(true)} />}
      
      <Navigation />
      
      <Hero isLoaded={isLoaded} />
      <WhatIBuild />
      <SelectedWork />
      <Journey />
      <About />
      <Contact />
      
    </main>
  );
}
