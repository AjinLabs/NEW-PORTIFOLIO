"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    title: "DATA SCIENCE",
    desc: "Turning raw data into useful insights, predictive models and decision-support systems.",
  },
  {
    num: "02",
    title: "AI ENGINEERING",
    desc: "Building AI-powered applications using ML, LLMs, RAG and intelligent workflows.",
  },
  {
    num: "03",
    title: "ANALYTICS",
    desc: "Interactive dashboards, business intelligence and data-driven reporting.",
  },
  {
    num: "04",
    title: "FULL STACK",
    desc: "Building complete web applications from frontend to backend.",
  },
  {
    num: "05",
    title: "AI PRODUCTS",
    desc: "Turning ideas into practical intelligent applications.",
  },
];

export default function WhatIBuild() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Heading reveal
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      // Cards stagger reveal
      gsap.from(".build-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-32 px-6 md:px-12 lg:px-24">
      <h2 ref={headingRef} className="font-display font-bold text-4xl md:text-6xl lg:text-8xl uppercase mb-16 tracking-tighter">
        WHAT I BUILD.
      </h2>

      <div className="flex flex-col gap-4">
        {services.map((service, index) => {
          const isActive = activeIndex === index;
          const isDimmed = activeIndex !== null && activeIndex !== index;

          return (
            <div
              key={service.num}
              className={`build-card relative group flex flex-col md:flex-row items-start md:items-center justify-between p-8 border transition-all duration-500 cursor-pointer ${
                isActive ? "border-white bg-[#0a0a0a]" : "border-[#222] hover:border-gray-500"
              } ${isDimmed ? "opacity-30" : "opacity-100"}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              data-cursor-label="EXPLORE"
            >
              <div className="flex items-center gap-8 md:gap-16">
                <span 
                  className={`font-mono text-3xl md:text-5xl transition-colors duration-500 ${
                    isActive ? "text-white" : "text-gray-700"
                  }`}
                >
                  {service.num}
                </span>
                <div>
                  <h3 
                    className={`font-display font-bold uppercase tracking-widest transition-all duration-500 ${
                      isActive ? "text-3xl md:text-5xl text-white" : "text-xl md:text-3xl text-gray-400"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <div 
                    className={`grid transition-all duration-500 ease-in-out ${
                      isActive ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr] mt-0"
                    }`}
                  >
                    <p className="overflow-hidden font-sans text-gray-400 max-w-xl text-sm md:text-base">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
              
              <div 
                className={`hidden md:block font-mono text-xs tracking-widest transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                EXPLORE ↗
              </div>
              
              {/* Huge background number reveal */}
              <div 
                className={`absolute right-12 top-1/2 -translate-y-1/2 font-display font-bold text-[150px] leading-none text-[#111] pointer-events-none transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                {service.num}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
