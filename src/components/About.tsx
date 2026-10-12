"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tools = [
  "Python", "SQL", "MySQL", "Pandas", "NumPy", "Scikit-learn", "Machine Learning",
  "Power BI", "Tableau", "Excel", "Git", "GitHub", "APIs", "PHP", "Django", "FastAPI",
  "HTML", "CSS", "JavaScript", "React", "Next.js", "LLMs", "RAG", "Agentic AI"
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Text reveal
      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Tools stagger reveal
      gsap.from(".tool-item", {
        scrollTrigger: {
          trigger: ".tools-container",
          start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.5)"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 md:px-12 lg:px-24 bg-[#030303] text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
        
        {/* About & Experience */}
        <div className="flex-1">
          <div id="experience" className="mt-0">
            <h3 className="about-text font-display font-bold text-2xl uppercase tracking-widest mb-12 text-gray-500">
              EXPERIENCE
            </h3>
            
            <div className="flex flex-col gap-12">
              <div className="about-text border-l border-white pl-8 relative">
                <div className="absolute w-3 h-3 bg-white -left-[6px] top-1 rounded-full"></div>
                <h4 className="font-display font-bold text-xl md:text-2xl uppercase tracking-widest text-white mb-2">
                  DATA SCIENCE TRAINEE
                </h4>
                <div className="font-sans text-sm tracking-widest uppercase text-gray-400 mb-4">
                  TECHOLAS KOCHI
                </div>
                <div className="font-mono text-sm text-gray-500">
                  June 2025 → July 2026
                </div>
              </div>

              <div className="about-text border-l border-[#333] pl-8 relative">
                <div className="absolute w-3 h-3 bg-[#333] -left-[6px] top-1 rounded-full"></div>
                <h4 className="font-display font-bold text-xl md:text-2xl uppercase tracking-widest text-white mb-2">
                  PYTHON FULL STACK TRAINING
                </h4>
                <div className="font-sans text-sm tracking-widest uppercase text-gray-400 mb-4">
                  BYTEBOOT TECHNO SOLUTIONS
                </div>
                <div className="font-mono text-sm text-gray-500">
                  April 2024 → May 2024
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="flex-1 lg:mt-0 tools-container">
          <h3 className="about-text font-display font-bold text-2xl uppercase tracking-widest mb-12 text-gray-500">
            TOOLS I WORK WITH
          </h3>
          <div className="flex flex-wrap gap-4">
            {tools.map((tool, i) => (
              <div 
                key={i} 
                className="tool-item border border-[#333] px-6 py-3 rounded-full font-sans text-sm md:text-base tracking-wider text-gray-300 hover:text-white hover:border-white hover:bg-white/5 transition-all duration-300 cursor-default"
              >
                {tool}
              </div>
            ))}
          </div>
          
          <div className="mt-24 about-text">
             <h3 className="font-display font-bold text-2xl uppercase tracking-widest mb-8 text-gray-500">
               BUILDING FOR REAL CLIENTS.
             </h3>
             <p className="font-sans text-gray-400 leading-relaxed text-lg max-w-xl">
               I work on freelance web and software projects across Web Development, Data Science, AI/ML, Analytics, LMS, EdTech, LegalTech, and Healthcare Technology.
             </p>
          </div>
        </div>

      </div>
    </section>
  );
}
