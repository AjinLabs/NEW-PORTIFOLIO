"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bike } from "lucide-react";

const projects = [
  {
    title: "VAKKEEL & ASSOCIATES",
    tagline: "React / Single-Page Application",
    desc: "Law Firm Website with dark luxury theme, active courts ticker, and 9 dynamically-rendered practice areas.",
    features: "React, CSS-in-JS, Scroll Nav, Responsive Grid"
  },
  {
    title: "INDIAN LAW SCHOOL",
    tagline: "HTML / CSS / JS",
    desc: "KLEE Prep & Legal Education Platform. Static single-page site with scroll-triggered reveal animations.",
    features: "IntersectionObserver, Vanilla JS, Responsive Grid"
  },
  {
    title: "PYTHON FULLSTACK INTERNSHIP",
    tagline: "Django / Web Development",
    desc: "Comprehensive training and hands-on experience in building full-stack web applications using Python and Django framework.",
    features: "Python, Django, SQL, APIs"
  }
];

export default function SelectedWork() {
  const containerRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const cyclistRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const gallery = galleryRef.current;
      if (!gallery) return;

      const getScrollAmount = () => -(gallery.scrollWidth - window.innerWidth);

      const tween = gsap.to(gallery, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: () => `+=${gallery.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
             if (cyclistRef.current) {
                // Determine direction based on scroll direction
                // 1 = forward/down, -1 = backward/up
                const dir = self.direction;
                gsap.to(cyclistRef.current, {
                  scaleX: dir === 1 ? 1 : -1,
                  duration: 0.3
                });
             }
          }
        }
      });

      // Parallax effect on cards
      const cards = gsap.utils.toArray<HTMLElement>('.work-card');
      cards.forEach((card) => {
        gsap.fromTo(card.querySelector('.work-inner'), 
          { x: 50 },
          {
            x: -50,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: "left right",
              end: "right left",
              scrub: true
            }
          }
        );
      });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="selected-work" ref={containerRef} className="relative bg-black text-white">
      <div ref={wrapperRef} className="h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="px-6 md:px-12 lg:px-24 mb-12 flex justify-between items-end">
          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-8xl uppercase tracking-tighter">
            SELECTED WORK.
          </h2>
          {/* Horizontal Cyclist */}
          <div 
            ref={cyclistRef}
            className="text-white hidden md:block"
          >
             <Bike size={32} />
          </div>
        </div>

        <div ref={galleryRef} className="flex gap-12 px-6 md:px-12 lg:px-24 w-max h-[60vh]">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="work-card relative w-[85vw] md:w-[60vw] lg:w-[40vw] h-full bg-[#0a0a0a] border border-[#222] overflow-hidden group cursor-pointer"
              data-cursor-label="EXPLORE"
            >
              <div className="work-inner w-full h-full p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-gray-500 mb-4 tracking-widest">{project.tagline}</div>
                  <h3 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tighter mb-6 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 font-sans md:text-lg mb-8 max-w-md">
                    {project.desc}
                  </p>
                </div>
                
                <div className="border-t border-[#222] pt-6">
                  <p className="text-xs text-gray-500 uppercase tracking-widest leading-relaxed">
                    {project.features}
                  </p>
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-white mix-blend-overlay opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
