"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight, Cpu, Database, Globe, Sparkles, Terminal, Activity } from "lucide-react";

interface HeroProps {
  isLoaded: boolean;
}

const disciplines = [
  {
    id: "data",
    icon: Database,
    badge: "01 // SCIENCE",
    title: "Data Science & Analytics",
    tagline: "Uncovering signal in noise with statistical rigour.",
    capabilities: [
      "Exploratory Data Analysis (EDA)",
      "Predictive Feature Engineering",
      "Automated ETL Pipelines & Cleansing",
      "Executive Power BI & SQL Dashboards",
    ],
    tech: ["Python", "Pandas", "NumPy", "SQL", "MySQL", "Tableau", "Power BI"],
  },
  {
    id: "ml",
    icon: Cpu,
    badge: "02 // INTELLIGENCE",
    title: "Applied AI & Machine Learning",
    tagline: "Architecting generative & predictive models for production.",
    capabilities: [
      "Production RAG & Vector Embeddings",
      "Supervised & Unsupervised ML Models",
      "Agentic Tool-Calling Workflows",
      "High-Throughput FastAPI Model Serving",
    ],
    tech: ["PyTorch", "Scikit-Learn", "FastAPI", "LLMs", "RAG", "LangChain"],
  },
  {
    id: "web",
    icon: Globe,
    badge: "03 // SYSTEMS",
    title: "Full Stack Web Engineering",
    tagline: "Delivering resilient, type-safe digital experiences.",
    capabilities: [
      "Next.js 16 App Router & Edge Runtime",
      "Python / Django & REST API Architecture",
      "Interactive 60fps Web Animations (GSAP)",
      "Accessible & Scalable UI Design Systems",
    ],
    tech: ["Next.js", "React 19", "TypeScript", "Django", "TailwindCSS", "Node"],
  },
];

export default function Hero({ isLoaded }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (!isLoaded) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isLoaded]);

  const currentDiscipline = disciplines[activeTab];
  const CurrentIcon = currentDiscipline.icon;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 pt-32 pb-20 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12 z-10">
        {/* Top telemetry and status banner */}
        <div className="hero-reveal flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div className="flex items-center gap-3 font-mono text-[11px] text-zinc-400 uppercase tracking-widest">
            <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 text-white font-medium flex items-center gap-1.5">
              <Terminal size={12} className="text-indigo-400" />
              SYSTEM.ACTIVE
            </span>
            <span className="hidden sm:inline">KOCHI, INDIA · UTC+5:30</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-300">DATA · AI · FULLSTACK</span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px] text-zinc-400">
            <div className="flex items-center gap-2">
              <Activity size={12} className="text-emerald-400" />
              <span>INFERENCE: &lt;70MS</span>
            </div>
            <span className="hidden md:inline text-zinc-600">|</span>
            <span className="hidden md:inline text-zinc-400">
              MODELS DEPLOYED & TESTED
            </span>
          </div>
        </div>

        {/* Master Headline */}
        <div className="flex flex-col gap-6">
          <div className="hero-reveal flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-[0.25em]">
            <Sparkles size={14} />
            <span>AJIN K // CRAFTING APPLIED INTELLIGENCE</span>
          </div>

          <h1 className="hero-reveal font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight uppercase text-white max-w-5xl">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
              Intelligence
            </span>{" "}
            from data <br />
            to production.
          </h1>

          <p className="hero-reveal font-sans text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
            I bridge the gap between <strong className="text-white font-medium">statistical data science</strong>,{" "}
            <strong className="text-white font-medium">machine learning pipelines</strong>, and{" "}
            <strong className="text-white font-medium">high-performance web architecture</strong>.
            I turn raw data into trained models, and trained models into responsive, human-centered digital products.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="hero-reveal flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#work"
            data-cursor-label="EXPLORE"
            className="group flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-black font-mono text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all duration-300 shadow-xl shadow-white/5"
          >
            <span>Explore Case Studies</span>
            <ArrowUpRight
              size={15}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>

          <a
            href="#sandbox"
            data-cursor-label="TEST ML"
            className="group flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white font-mono text-xs uppercase tracking-wider transition-all duration-300"
          >
            <Cpu size={14} className="text-indigo-400" />
            <span>Interactive ML Sandbox</span>
          </a>

          <a
            href="#contact"
            data-cursor-label="CHAT"
            className="text-zinc-400 hover:text-white font-mono text-xs uppercase tracking-wider px-4 py-2 transition-colors ml-auto sm:ml-0"
          >
            Direct Contact →
          </a>
        </div>

        {/* Interactive Discipline Switcher */}
        <div className="hero-reveal mt-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              DISCIPLINE DEEP-DIVE [SELECT TO INSPECT]:
            </span>
            <div className="flex flex-wrap gap-2">
              {disciplines.map((d, index) => (
                <button
                  key={d.id}
                  onClick={() => setActiveTab(index)}
                  data-cursor-label="SELECT"
                  className={`px-3.5 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all duration-200 ${
                    activeTab === index
                      ? "bg-white text-black font-semibold shadow-md"
                      : "bg-white/[0.04] text-zinc-400 hover:text-white border border-white/5"
                  }`}
                >
                  {d.badge.split("//")[1]?.trim() || d.badge}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-white">
                  <CurrentIcon size={20} />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-indigo-400 tracking-widest uppercase">
                    {currentDiscipline.badge}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {currentDiscipline.title}
                  </h3>
                </div>
              </div>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed mt-2">
                {currentDiscipline.tagline}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                CORE CAPABILITIES:
              </span>
              <ul className="flex flex-col gap-1.5">
                {currentDiscipline.capabilities.map((cap, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 font-mono text-xs text-zinc-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-2.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                ACTIVE TOOLKIT:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentDiscipline.tech.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-[11px] text-zinc-300"
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
