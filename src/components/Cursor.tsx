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

    // Smooth spring physics for outer ring
    let animationFrameId: number;
    const render = () => {
      const dt = 0.18;
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;

      if (ring) {
        gsap.set(ring, { x: pos.x, y: pos.y });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Hover interactions
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], [data-cursor-label]");
      if (interactive) {
        const customLabel = interactive.getAttribute("data-cursor-label") || "OPEN";
        if (ring) {
          gsap.to(ring, {
            scale: 2.2,
            borderColor: "rgba(255, 255, 255, 0.8)",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            duration: 0.25,
            ease: "power2.out",
          });
        }
        if (dot) {
          gsap.to(dot, { scale: 0.4, opacity: 0.5, duration: 0.2 });
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
            borderColor: "rgba(255, 255, 255, 0.4)",
            backgroundColor: "transparent",
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
      {/* Precision center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 -ml-1 -mt-1 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] mix-blend-difference"
      />

      {/* Lagging outer magnetic ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] w-9 h-9 -ml-[18px] -mt-[18px] rounded-full border border-white/40 transition-colors backdrop-blur-[1px] flex items-center justify-center mix-blend-difference"
      >
        {/* Floating monospace micro badge */}
        <span
          ref={labelRef}
          className="font-mono text-[9px] uppercase tracking-widest text-white/90 opacity-0 pointer-events-none select-none whitespace-nowrap drop-shadow"
        />
      </div>
    </>
  );
}
