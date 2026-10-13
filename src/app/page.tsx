"use client";
import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LiveArchitecture from "@/components/LiveArchitecture";
import Projects from "@/components/Projects";
import TechnicalNotes from "@/components/TechnicalNotes";
import NowAndExperience from "@/components/NowAndExperience";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F3EE] text-[#111111]">
      {/* Navigation with Ask AI Ajin Drawer */}
      <Navigation />

      {/* Hero with Slanted Neon Badge & Polaroid Card */}
      <Hero />

      {/* Live System Architecture with Worker.log & Queue States */}
      <LiveArchitecture />

      {/* Projects with System Parts Exposed */}
      <Projects />

      {/* Technical Notes Section */}
      <TechnicalNotes />

      {/* Now & Experience Track Record */}
      <NowAndExperience />

      {/* Contact Section & Footer */}
      <ContactSection />
    </main>
  );
}
