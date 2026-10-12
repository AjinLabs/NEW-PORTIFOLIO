"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: "power4.inOut",
            onComplete: onComplete,
          });
        },
      });

      // Simple fake progress
      const progressObj = { value: 0 };
      tl.to(progressObj, {
        value: 100,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => setProgress(Math.floor(progressObj.value)),
      });

      tl.from(".loader-name", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      }, 0);

      tl.from(".loader-role", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
      }, 0.3);
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-white"
    >
      <div ref={textRef} className="flex flex-col items-center gap-4 text-center">
        <h1 className="loader-name font-display text-4xl tracking-widest font-bold">AJIN K</h1>
        <div className="flex flex-col gap-1 text-xs sm:text-sm tracking-widest text-gray-400">
          <span className="loader-role">DATA SCIENTIST</span>
          <span className="loader-role">AI / ML ENGINEER</span>
          <span className="loader-role">FULL STACK WEB DEVELOPER</span>
        </div>
      </div>
      
      <div className="absolute bottom-12 font-mono text-sm tracking-widest text-gray-500">
        {progress}%
      </div>
    </div>
  );
}
