"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bike } from "lucide-react";

const timelineEvents = [
  {
    year: "2020",
    title: "SSLC",
    org: "VMC GHSS Wandoor",
    desc: "A+ in all subjects.",
  },
  {
    year: "2022",
    title: "HIGHER SECONDARY SCIENCE",
    org: "",
    desc: "961 / 1200 | B+",
  },
  {
    year: "2024",
    title: "PYTHON FULL STACK DEVELOPMENT",
    org: "Byteboot Techno Solutions",
    desc: "Django Framework | April 2024 → May 2024",
  },
  {
    year: "2025",
    title: "BACHELOR OF COMPUTER APPLICATIONS",
    org: "Christ College Puliyanmala (Mahatma Gandhi University)",
    desc: "Completed 2025 | Grade B+",
  },
  {
    year: "2025 → 2026",
    title: "DATA SCIENCE TRAINEE",
    org: "Techolas Kochi",
    desc: "June 2025 → July 2026",
  }
];

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cyclistRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Draw timeline line
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
            onUpdate: (self) => {
              // Cyclist direction based on scroll velocity
              if (cyclistRef.current) {
                const isScrollingDown = self.direction === 1;
                gsap.to(cyclistRef.current, {
                  rotation: isScrollingDown ? 90 : -90,
                  duration: 0.3
                });
                
                gsap.set(cyclistRef.current, {
                  top: `${self.progress * 100}%`,
                  yPercent: -50
                });
              }
            }
          }
        }
      );

      // Event animations
      const events = gsap.utils.toArray<HTMLElement>('.journey-event');
      events.forEach((event, i) => {
        const isLeft = i % 2 === 0;
        gsap.from(event, {
          scrollTrigger: {
            trigger: event,
            start: "top 80%",
          },
          x: isLeft ? -50 : 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" ref={sectionRef} className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-[#050505]">
      <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-8xl uppercase mb-32 tracking-tighter text-center">
        MY JOURNEY
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* The central line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gray-800 -translate-x-1/2">
          <div ref={lineRef} className="w-full h-full bg-white origin-top"></div>
          
          {/* Timeline Cyclist */}
          <div 
            ref={cyclistRef}
            className="absolute left-1/2 -translate-x-1/2 text-white bg-[#050505] p-2 rotate-90 z-10 rounded-full"
          >
             <Bike size={20} />
          </div>
        </div>

        <div className="flex flex-col gap-24">
          {timelineEvents.map((event, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className={`journey-event relative flex flex-col md:flex-row ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 pl-12 md:pl-0`}>
                
                {/* Content */}
                <div className={`flex-1 flex flex-col ${isLeft ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                  <div className="font-mono text-xl md:text-2xl text-gray-400 mb-2">{event.year}</div>
                  <h3 className="font-display font-bold text-2xl md:text-4xl uppercase mb-2 text-white">{event.title}</h3>
                  {event.org && <div className="text-gray-300 font-sans tracking-widest text-sm mb-4 uppercase">{event.org}</div>}
                  <p className="text-gray-500 max-w-sm">{event.desc}</p>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
