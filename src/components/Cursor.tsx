"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;

    const mouse = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (dot) {
        gsap.set(dot, { x: mouse.x, y: mouse.y });
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    let animationFrameId: number;
    const render = () => {
      const dt = 0.2;
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;

      if (ring) {
        gsap.set(ring, { x: pos.x, y: pos.y });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], [data-cursor-label]");
      if (interactive) {
        const customLabel = interactive.getAttribute("data-cursor-label") || "EXPLORE";
        if (ring) {
          gsap.to(ring, {
            scale: 2.2,
            borderColor: "rgba(168, 85, 247, 0.9)",
            backgroundColor: "rgba(168, 85, 247, 0.15)",
            boxShadow: "0 0 25px rgba(168, 85, 247, 0.5)",
            duration: 0.25,
            ease: "power2.out",
          });
        }
        if (dot) {
          gsap.to(dot, { scale: 0.5, opacity: 0.6, duration: 0.2 });
        }
        if (label && customLabel) {
          label.textContent = customLabel;
          gsap.to(label, { opacity: 1, y: -26, duration: 0.2 });
        }
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], [data-cursor-label]");
      if (interactive) {
        if (ring) {
          gsap.to(ring, {
            scale: 1,
            borderColor: "rgba(129, 140, 248, 0.5)",
            backgroundColor: "rgba(255, 255, 255, 0.02)",
            boxShadow: "0 0 10px rgba(99, 102, 241, 0.25)",
            duration: 0.25,
            ease: "power2.out",
          });
        }
        if (dot) {
          gsap.to(dot, { scale: 1, opacity: 1, duration: 0.2 });
        }
        if (label) {
          gsap.to(label, { opacity: 0, y: -18, duration: 0.2 });
        }
      }
    };

    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Precision glowing center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 shadow-[0_0_12px_rgba(232,121,249,0.9)]"
      />

      {/* Glassmorphic trailing aura ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] w-9 h-9 -ml-[18px] -mt-[18px] rounded-full border border-indigo-400/50 bg-white/[0.03] backdrop-blur-[2px] shadow-[0_0_12px_rgba(99,102,241,0.25)] flex items-center justify-center transition-colors"
      >
        <span
          ref={labelRef}
          className="font-mono text-[9px] font-bold uppercase tracking-widest text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] opacity-0 pointer-events-none select-none whitespace-nowrap bg-purple-950/80 px-2 py-0.5 rounded-full border border-purple-500/30"
        />
      </div>
    </>
  );
}
