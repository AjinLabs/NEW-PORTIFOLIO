"use client";
import React, { useState } from "react";
import { Database, Cpu, Brain, Layers, ArrowUpRight, CheckCircle2 } from "lucide-react";

const capabilities = [
  {
    num: "01",
    icon: Database,
    gradient: "from-blue-500 via-indigo-500 to-cyan-400",
    badgeColor: "text-cyan-300 bg-cyan-950/40 border-cyan-500/30",
    title: "Data Science & Tabular Analytics",
    tagline: "Statistical analysis, EDA, data cleansing, and executive visualization.",
    description:
      "Trained on real-world datasets through Techolas Technologies Diploma program. Comfortable across the entire data science lifecycle: data collection, cleaning, exploratory analysis (EDA), predictive feature engineering, and reporting.",
    deliverables: [
      "Exploratory Data Analysis (EDA) with Pandas, NumPy, Matplotlib & Seaborn",
      "Predictive modeling on tabular data (regression, classification, clustering)",
      "Interactive executive dashboards in Power BI, Tableau & MS Excel",
      "Relational database design, querying and data pipelines with SQL / MySQL",
    ],
    tech: ["Python", "Pandas", "NumPy", "SQL", "MySQL", "Power BI", "Tableau", "Excel"],
  },
  {
    num: "02",
    icon: Cpu,
    gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
    badgeColor: "text-fuchsia-300 bg-fuchsia-950/40 border-fuchsia-500/30",
    title: "Applied Machine Learning & AI",
    tagline: "Supervised pipelines, cross-validation, and generative AI workflows.",
    description:
      "Building and evaluating models using Scikit-learn with rigorous cross-validation and hyperparameter optimization (GridSearchCV). Expanding into Generative AI concepts: RAG systems, LLM orchestration, and AI Agents.",
    deliverables: [
      "End-to-end regression & classification pipelines (California Housing, etc.)",
      "Hyperparameter tuning (GridSearchCV), k-fold CV, and metric evaluation (MAE, RMSE, R²)",
      "Retrieval-Augmented Generation (RAG) with vector search & prompt engineering",
      "AI-driven student recommendations & weak-topic detection models",
    ],
    tech: ["Scikit-learn", "Python", "RAG", "LLMs", "AI Agents", "Prompt Engineering", "Streamlit"],
  },
  {
    num: "03",
    icon: Layers,
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    badgeColor: "text-emerald-300 bg-emerald-950/40 border-emerald-500/30",
    title: "Full-Stack Web Engineering",
    tagline: "Python / Django backends, Next.js / React frontends, and REST APIs.",
    description:
      "Proven internship experience at Byteboot Techno Solutions and RISS Technologies. Building responsive web applications with secure authentication, CRUD operations, database integrations, and high-performance edge deployment.",
    deliverables: [
      "Python / Django full-stack backends with relational database integration",
      "Modern Next.js & React single-page interfaces with Tailwind CSS",
      "Healthcare patient portals (Recallio at RISS Technologies)",
      "RESTful API design, token authentication & CRUD pipelines",
    ],
    tech: ["Django", "Python", "React", "Next.js", "JavaScript", "HTML/CSS", "Firebase", "REST APIs"],
  },
  {
    num: "04",
    icon: Brain,
    gradient: "from-amber-400 via-rose-500 to-purple-600",
    badgeColor: "text-amber-300 bg-amber-950/40 border-amber-500/30",
    title: "Venm Studio & AI Vibe Coding",
    tagline: "End-to-end freelance web systems built with Claude Code & Google Antigravity.",
    description:
      "Co-founder of Venm studio alongside Akash Tomy and Ashish P S. Independently designing, pitching, building, and deploying full-stack and AI-assisted ('vibe coding') platforms for LegalTech, EdTech, and enterprise businesses.",
    deliverables: [
      "Rapid full-stack delivery using Claude Code and Google Antigravity workflows",
      "Large-scale LegalTech CRM & Case Management (Vakkeel & Associates)",
      "Competitive Law Entrance LMS with Computer-Based Test Engine",
      "Cold-outreach client pitching & end-to-end production delivery",
    ],
    tech: ["Venm Studio", "Claude Code", "Google Antigravity", "Vibe Coding", "Next.js", "Vercel"],
  },
];

export default function WhatIBuild() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="expertise" className="py-28 px-4 sm:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300 font-semibold block mb-2">
              CORE DOMAINS &amp; SERVICES
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
              What I Build &amp; Deliver
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-300 max-w-md">
            Four specialized domains spanning data science, applied machine learning, Python full-stack systems, and AI-assisted freelance platforms via Venm.
          </p>
        </div>

        {/* 4 Multi-Color Glassmorphic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            const isHovered = activeCard === index;

            return (
              <div
                key={cap.num}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                data-cursor-label="EXPLORE"
                className={`group relative p-8 sm:p-10 rounded-3xl glass-panel transition-all duration-300 flex flex-col justify-between gap-8 ${
                  isHovered
                    ? "border-white/35 shadow-2xl scale-[1.01]"
                    : "hover:border-white/20"
                }`}
              >
                {/* Floating ambient colored gradient aura on hover */}
                <div
                  className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br ${cap.gradient} opacity-0 group-hover:opacity-20 blur-3xl rounded-full transition-opacity duration-500 pointer-events-none`}
                />

                <div className="flex flex-col gap-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-2xl bg-gradient-to-tr ${cap.gradient} text-white shadow-lg shadow-purple-500/20`}
                      >
                        <Icon size={22} />
                      </div>
                      <span
                        className={`font-mono text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${cap.badgeColor}`}
                      >
                        DOM {cap.num}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="text-slate-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all">
                      {cap.title}
                    </h3>
                    <p className="font-mono text-xs text-indigo-300 mt-2 font-medium">
                      {cap.tagline}
                    </p>
                    <p className="font-sans text-sm text-slate-300 leading-relaxed mt-4">
                      {cap.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.08]">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
                      VERIFIED DELIVERABLES:
                    </span>
                    <ul className="flex flex-col gap-2">
                      {cap.deliverables.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 font-mono text-xs text-slate-200 leading-snug"
                        >
                          <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech toolkit tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.08] relative z-10">
                  {cap.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 font-mono text-[11px] text-slate-300 font-medium group-hover:border-white/20 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
