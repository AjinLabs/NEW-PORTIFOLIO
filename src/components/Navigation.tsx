"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const navItems = [
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#work" },
  { name: "ML Sandbox", href: "#sandbox" },
  { name: "Experience", href: "#experience" },
  { name: "Venm Studio", href: "#venm" },
  { name: "Journey", href: "#journey" },
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
        {/* Brand identity with glowing glassmorphism */}
        <a
          href="#"
          data-cursor-label="HOME"
          className="group flex items-center gap-3 bg-slate-900/60 backdrop-blur-2xl border border-white/15 hover:border-purple-400/50 px-4 py-2 rounded-full transition-all duration-300 shadow-xl shadow-purple-950/20 hover:shadow-purple-500/20"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-cyan-400 text-white font-display font-extrabold text-xs shadow-md shadow-violet-500/30">
            AK
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-xs tracking-wider text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-pink-400 transition-all">
              AJIN K
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-indigo-300">
              DATA SCIENTIST · ML ENG
            </span>
          </div>
        </a>

        {/* Desktop Navigation glassmorphic pill */}
        <nav
          className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all duration-300 shadow-2xl ${
            scrolled
              ? "bg-slate-950/75 backdrop-blur-2xl border-white/20 shadow-purple-950/40"
              : "bg-slate-900/50 backdrop-blur-xl border-white/10"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              data-cursor-label="GOTO"
              className="px-3.5 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-violet-600/30 hover:to-cyan-600/30 transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right CTA & status badge */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] tracking-wider backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>TECHOLAS KOCHI · OPEN TO ROLES</span>
          </div>

          <a
            href="#contact"
            data-cursor-label="CONNECT"
            className="group relative flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-mono text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-violet-600/30 hover:shadow-violet-500/50"
          >
            <Sparkles size={12} className="text-yellow-300" />
            <span>Let&apos;s Talk</span>
            <ArrowUpRight
              size={13}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/20 text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-sm mx-auto bg-slate-950/90 backdrop-blur-3xl border border-purple-500/30 rounded-2xl p-5 shadow-2xl flex flex-col gap-3 pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-[10px] text-slate-400">
            <span>LOCATION</span>
            <span className="text-cyan-400">NILAMBUR, KERALA, INDIA</span>
          </div>

          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider text-slate-200 hover:text-white hover:bg-gradient-to-r hover:from-violet-600/20 hover:to-cyan-600/20 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-mono text-xs font-semibold uppercase tracking-wider shadow-lg shadow-violet-600/30"
          >
            <span>Get In Touch</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}
