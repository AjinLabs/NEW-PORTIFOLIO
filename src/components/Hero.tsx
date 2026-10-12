"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Bike } from "lucide-react";

export default function Hero({ isLoaded }: { isLoaded: boolean }) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isLoaded) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Split text logic manually or just simple spans for characters
      const titleChars = gsap.utils.toArray<HTMLElement>('.hero-title-char');
      
      tl.from(".hero-ajin", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      })
      .from(titleChars, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out"
      }, "-=0.5")
      .from(".hero-subtitle", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.4")
      .from(".hero-status", {
        opacity: 0,
        duration: 0.5,
      }, "-=0.4")
      .from(".hero-btn", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.2")
      .from(".ambient-cyclist", {
        x: "-10vw",
        opacity: 0,
        duration: 2,
        ease: "power2.out"
      }, "-=0.5");

    }, containerRef);

    return () => ctx.revert();
  }, [isLoaded]);

  const title = "HELLO, I'M AJIN.";

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-20">
      <div className="hero-status flex items-center gap-2 text-xs tracking-widest uppercase mb-8">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
        AVAILABLE FOR WORK
      </div>

      <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-9xl leading-[0.9] tracking-tighter uppercase max-w-6xl">
        <div className="hero-ajin block text-[#333333] mb-4 text-3xl md:text-5xl tracking-widest">AJIN K</div>
        <div className="flex flex-wrap">
          {title.split("").map((char, index) => (
            <span key={index} className="hero-title-char inline-block whitespace-pre">
              {char}
            </span>
          ))}
        </div>
      </h1>

      <div className="mt-12 flex flex-col gap-2 font-sans text-sm md:text-xl tracking-widest uppercase text-gray-400 max-w-2xl">
        <span className="hero-subtitle">DATA SCIENTIST.</span>
        <span className="hero-subtitle">AI / ML ENGINEER.</span>
        <span className="hero-subtitle">FULL STACK DEVELOPER.</span>
        <p className="hero-subtitle mt-6 text-gray-500 normal-case tracking-normal">
          Turning data, AI and code into useful digital experiences.
        </p>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-6">
        <a 
          href="#work" 
          data-cursor-label="VIEW"
          className="hero-btn flex items-center justify-between border border-[#333] hover:border-white px-8 py-4 uppercase tracking-widest text-sm transition-colors duration-300 w-fit gap-8"
        >
          VIEW MY WORK <ArrowRight size={16} />
        </a>
        <a 
          href="#contact" 
          data-cursor-label="CHAT"
          className="hero-btn flex items-center justify-between bg-white text-black hover:bg-gray-200 px-8 py-4 uppercase tracking-widest text-sm transition-colors duration-300 w-fit gap-8"
        >
          CONTACT ME
        </a>
      </div>

      {/* Decorative ambient cyclist riding across the bottom */}
      <div className="ambient-cyclist absolute bottom-12 right-12 opacity-30 hidden md:block text-white">
        <Bike size={32} />
      </div>
    </section>
  );
}
