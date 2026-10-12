"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ArrowUpRight,
  Cpu,
  Database,
  Globe,
  Sparkles,
  Terminal,
  MapPin,
  Bot,
  Zap,
} from "lucide-react";

interface HeroProps {
  isLoaded: boolean;
}

const disciplines = [
  {
    id: "ml",
    icon: Cpu,
    color: "from-violet-500 to-fuchsia-500",
    glowColor: "rgba(168, 85, 247, 0.25)",
    borderActive: "border-purple-400/60",
    badge: "01 // MACHINE LEARNING & AI",
    title: "Applied ML & Generative AI",
    tagline: "Building predictive models, RAG architectures, and agentic workflows.",
    capabilities: [
      "Supervised Regression & Classification (Scikit-learn)",
      "Retrieval-Augmented Generation (RAG) & Vector Search",
      "Hyperparameter Tuning (GridSearchCV) & Cross-Validation",
      "AI Agents, Prompt Engineering & Fast LLM Tooling",
    ],
    tech: ["Python", "Scikit-learn", "PyTorch", "RAG", "LLMs", "AI Agents", "FastAPI"],
  },
  {
    id: "data",
    icon: Database,
    color: "from-cyan-400 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.25)",
    borderActive: "border-cyan-400/60",
    badge: "02 // DATA SCIENCE & ANALYTICS",
    title: "Data Science & Visual Analytics",
    tagline: "Statistical analysis, ETL pipelines, and executive dashboards at Techolas.",
    capabilities: [
      "End-to-end data lifecycle: collection, cleaning & EDA",
      "Predictive modeling on multi-thousand row real-world datasets",
      "Interactive Power BI, Tableau & MS Excel dashboards",
      "Relational database schemas with SQL & MySQL",
    ],
    tech: ["Python", "Pandas", "NumPy", "SQL", "MySQL", "Power BI", "Tableau", "Seaborn"],
  },
  {
    id: "web",
    icon: Globe,
    color: "from-emerald-400 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.25)",
    borderActive: "border-emerald-400/60",
    badge: "03 // FULL-STACK & VENM STUDIO",
    title: "Full-Stack & AI-Assisted Vibe Coding",
    tagline: "Co-founder of Venm — shipping client platforms from pitch to live production.",
    capabilities: [
      "AI-assisted ('vibe coding') with Claude Code & Google Antigravity",
      "Full-stack web architectures (Python/Django, React, Next.js)",
      "LegalTech, EdTech & Healthcare CRM/LMS platforms",
      "Bilingual interfaces, role-based workflows & zero-delay UI",
    ],
    tech: ["Next.js", "Django", "TypeScript", "Tailwind CSS", "Claude Code", "Antigravity", "Vercel"],
  },
];

export default function Hero({ isLoaded }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (!isLoaded) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 35,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isLoaded]);

  const current = disciplines[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 pt-32 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-10 z-10">
        {/* Top Status & Telemetry Bar with Colorful Glassmorphic Badges */}
        <div className="hero-reveal flex flex-wrap items-center justify-between gap-4 glass-panel px-6 py-3.5 rounded-2xl">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-300">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-200 font-semibold shadow-sm">
              <Sparkles size={13} className="text-pink-400" />
              AJIN K // MASTER PORTFOLIO
            </span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin size={13} className="text-cyan-400" />
              Nilambur, Kerala, India
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-indigo-300 font-medium">
              Diploma in Data Science @ Techolas Technologies
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              CO-FOUNDER @ VENM
            </span>
          </div>
        </div>

        {/* Master Headline with Rich Mixed Colors */}
        <div className="flex flex-col gap-6">
          <div className="hero-reveal flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-cyan-300 font-semibold">
            <Terminal size={14} className="text-cyan-400" />
            <span>MACHINE LEARNING ENGINEER &amp; DATA SCIENTIST</span>
          </div>

          <h1 className="hero-reveal font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight text-white uppercase">
            Transforming Data <br />
            <span className="gradient-text-primary">
              Into Intelligent
            </span> <br />
            <span className="gradient-text-accent">
              Living Systems.
            </span>
          </h1>

          <p className="hero-reveal font-sans text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
            I am <strong className="text-white font-semibold">Ajin K</strong> — a BCA graduate &amp; Data Science professional based in Kerala. Currently completing my Diploma in Data Science at <strong className="text-cyan-300 font-medium">Techolas Technologies</strong> and co-founder of <strong className="text-purple-300 font-medium">Venm</strong> studio, where I architect ML pipelines, predictive analytics, and AI-assisted (<em className="text-pink-300 not-italic font-semibold">&quot;vibe coding&quot;</em>) full-stack web platforms using Claude Code and Google Antigravity.
          </p>
        </div>

        {/* Action Buttons with Vibrant Glassmorphism */}
        <div className="hero-reveal flex flex-wrap items-center gap-4 pt-1">
          <a
            href="#work"
            data-cursor-label="PROJECTS"
            className="group relative flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-purple-600/30 hover:shadow-cyan-500/40"
          >
            <span>Explore Case Studies</span>
            <ArrowUpRight
              size={15}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>

          <a
            href="#sandbox"
            data-cursor-label="SANDBOX"
            className="group flex items-center gap-2.5 px-6 py-3.5 rounded-full glass-panel hover:bg-slate-800/60 border border-white/15 hover:border-cyan-400/50 text-white font-mono text-xs uppercase tracking-wider transition-all duration-300 shadow-lg"
          >
            <Zap size={14} className="text-cyan-400 group-hover:animate-bounce" />
            <span>Interactive ML Sandbox</span>
          </a>

          <a
            href="#venm"
            data-cursor-label="VENM"
            className="group flex items-center gap-2 px-5 py-3 rounded-full bg-purple-950/40 border border-purple-500/30 hover:border-purple-400 text-purple-200 font-mono text-xs uppercase tracking-wider transition-all"
          >
            <Bot size={14} className="text-fuchsia-400" />
            <span>Venm Studio Work</span>
          </a>
        </div>

        {/* Interactive Discipline Tabs with Vivid Glassmorphism */}
        <div className="hero-reveal glass-panel-glow rounded-3xl p-6 sm:p-8 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              SELECT CORE SPECIALIZATION TO INSPECT:
            </span>
            <div className="flex flex-wrap gap-2">
              {disciplines.map((d, index) => (
                <button
                  key={d.id}
                  onClick={() => setActiveTab(index)}
                  data-cursor-label="INSPECT"
                  className={`px-4 py-2 rounded-full font-mono text-xs font-semibold tracking-wider transition-all duration-200 ${
                    activeTab === index
                      ? `bg-gradient-to-r ${d.color} text-white shadow-lg shadow-purple-500/30 scale-105`
                      : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/10 hover:border-white/25"
                  }`}
                >
                  {d.title.split("&")[0].trim()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div
                  className={`p-3 rounded-2xl bg-gradient-to-tr ${current.color} text-white shadow-lg shadow-violet-500/30`}
                >
                  <CurrentIcon size={24} />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-cyan-300 tracking-widest uppercase font-bold">
                    {current.badge}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-white">
                    {current.title}
                  </h3>
                </div>
              </div>
              <p className="font-sans text-sm text-slate-300 leading-relaxed mt-2">
                {current.tagline}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
                CORE CAPABILITIES:
              </span>
              <ul className="flex flex-col gap-2">
                {current.capabilities.map((cap, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 font-mono text-xs text-slate-200 leading-snug"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-2.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
                TOOLKIT IN USE:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {current.tech.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/15 font-mono text-[11px] text-slate-200 font-medium hover:border-purple-400/50 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
