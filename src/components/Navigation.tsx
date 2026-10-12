"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Expertise", href: "#expertise" },
  { name: "Selected Work", href: "#work" },
  { name: "ML Sandbox", href: "#sandbox" },
  { name: "Experience", href: "#experience" },
  { name: "Philosophy", href: "#philosophy" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-4 sm:px-8 lg:px-16 pt-5 pb-3 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand identity */}
        <a
          href="#"
          data-cursor-label="HOME"
          className="group flex items-center gap-3 bg-black/50 backdrop-blur-md border border-white/10 hover:border-white/30 px-4 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-black/50"
        >
          <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-white text-black font-display font-extrabold text-xs">
            AK
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xs tracking-wider text-white group-hover:text-zinc-200 transition-colors">
              AJIN K
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">
              AI · DATA · FULLSTACK
            </span>
          </div>
        </a>

        {/* Desktop Navigation pill */}
        <nav
          className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all duration-300 shadow-xl ${
            scrolled
              ? "bg-black/80 backdrop-blur-xl border-white/15 shadow-black/80"
              : "bg-black/40 backdrop-blur-md border-white/10"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              data-cursor-label="GOTO"
              className="px-3.5 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right CTA & status */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-zinc-300 font-mono text-[10px] tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>OPEN TO WORK</span>
          </div>

          <a
            href="#contact"
            data-cursor-label="CONNECT"
            className="group flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black font-mono text-[11px] font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all duration-300 shadow-lg"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight
              size={13}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-sm mx-auto bg-black/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-5 shadow-2xl flex flex-col gap-3 pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-[10px] text-zinc-400">
            <span>STATUS</span>
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AVAILABLE
            </span>
          </div>

          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white text-black font-mono text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-colors"
          >
            <span>Get In Touch</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}
