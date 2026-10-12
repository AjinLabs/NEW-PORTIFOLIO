"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const riderRef = useRef<SVGSVGElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const cursor = cursorRef.current;
    const rider = riderRef.current;
    
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let vel = { x: 0, y: 0 };
    
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    window.addEventListener("mousemove", onMouseMove);
    
    let isIdle = false;
    let idleTimeout: NodeJS.Timeout;
    
    const render = () => {
      const dt = 0.15;
      
      const dx = mouse.x - pos.x;
      const dy = mouse.y - pos.y;
      
      vel.x = dx;
      vel.y = dy;
      
      pos.x += dx * dt;
      pos.y += dy * dt;
      
      if (cursor) {
        gsap.set(cursor, { x: pos.x, y: pos.y });
      }
      
      if (rider) {
        const speed = Math.sqrt(vel.x * vel.x + vel.y * vel.y);
        if (speed > 0.5) {
          isIdle = false;
          const scaleX = vel.x < 0 ? -1 : 1;
          const rotation = (vel.y / window.innerHeight) * 45 * scaleX; 
          
          gsap.to(rider, {
            scaleX: scaleX,
            rotation: rotation,
            duration: 0.3,
            ease: "power2.out"
          });
          
          gsap.to('.bicycle-wheel', {
             rotation: "+=" + (speed * 2 * scaleX),
             duration: 0.1,
             ease: "none"
          });
          
          gsap.killTweensOf('.rider-body');
          gsap.set('.rider-body', { y: 0 });

          clearTimeout(idleTimeout);
          idleTimeout = setTimeout(() => {
            isIdle = true;
          }, 100);
        } else if (isIdle) {
          gsap.to(rider, {
            rotation: 0,
            duration: 0.5,
            ease: "power2.out"
          });
          
          gsap.to('.rider-body', {
            y: 1,
            duration: 1.5,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
          });
        }
      }
      
      requestAnimationFrame(render);
    };
    
    requestAnimationFrame(render);
    
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest('a') || target.closest('button');
      if (clickable) {
        gsap.to(cursorRef.current, { scale: 0.9, duration: 0.3 });
        if (labelRef.current) {
          labelRef.current.innerText = clickable.getAttribute('data-cursor-label') || "EXPLORE";
          gsap.to(labelRef.current, { opacity: 1, y: -10, duration: 0.2 });
        }
      }
    };
    
    const onMouseOut = () => {
       gsap.to(cursorRef.current, { scale: 1, duration: 0.3 });
       if (labelRef.current) {
          gsap.to(labelRef.current, { opacity: 0, y: 0, duration: 0.2 });
       }
    };
    
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      clearTimeout(idleTimeout);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex flex-col items-center justify-center mix-blend-difference"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <div 
        ref={labelRef} 
        className="absolute -top-6 text-[10px] font-bold uppercase tracking-widest opacity-0 whitespace-nowrap text-white"
      >
      </div>
      
      <svg 
        ref={riderRef}
        width="48" 
        height="48" 
        viewBox="0 0 64 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-white drop-shadow-md"
      >
        <circle cx="16" cy="48" r="10" stroke="currentColor" strokeWidth="2" className="bicycle-wheel origin-[16px_48px]" />
        <circle cx="48" cy="48" r="10" stroke="currentColor" strokeWidth="2" className="bicycle-wheel origin-[48px_48px]" />
        
        <path d="M16 48L28 24H42L48 48" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M28 24L12 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M42 24L36 48" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        
        <path d="M42 24L40 18H46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 24L24 18H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        
        <g className="rider-body">
          <circle cx="32" cy="10" r="4.5" fill="currentColor" />
          <path d="M32 14C32 14 36 20 40 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M32 14L28 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M28 22L36 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
