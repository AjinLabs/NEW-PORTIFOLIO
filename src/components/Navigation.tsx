"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const navLinks = [
  { name: "WORK", href: "#work" },
  { name: "ABOUT", href: "#about" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "JOURNEY", href: "#journey" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 2.5 // wait for loader
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <header ref={navRef} className="fixed top-0 left-0 w-full z-40 px-6 md:px-12 lg:px-24 py-8 flex justify-between items-center mix-blend-difference pointer-events-none">
      <div className="font-display font-bold text-xl tracking-widest text-white uppercase pointer-events-auto">
        AJIN K
      </div>
      
      <nav className="hidden md:flex gap-8 pointer-events-auto">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="group relative text-[10px] tracking-widest uppercase text-white overflow-hidden py-1"
            data-cursor-label="GO"
          >
            <span className="block transition-transform duration-300 group-hover:-translate-y-4">
              {link.name}
            </span>
            <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-[120%]">
              {link.name}
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
          </a>
        ))}
      </nav>
    </header>
  );
}
