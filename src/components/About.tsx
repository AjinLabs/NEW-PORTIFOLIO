"use client";
import React from "react";
import { Terminal, Check, Briefcase, Award } from "lucide-react";

const skillClusters = [
  {
    category: "AI & Machine Learning",
    badge: "MODELS & WORKFLOWS",
    skills: [
      { name: "PyTorch & Deep Learning", level: "Advanced" },
      { name: "Scikit-Learn (Ensembles, XGBoost)", level: "Production" },
      { name: "RAG & Vector Retrieval (ChromaDB)", level: "Production" },
      { name: "LLM Orchestration & Prompting", level: "Production" },
      { name: "Agentic Tool-Use Workflows", level: "Advanced" },
      { name: "FastAPI Model Serving", level: "Production" },
    ],
  },
  {
    category: "Data Science & Analytics",
    badge: "STATISTICS & ETL",
    skills: [
      { name: "Pandas & NumPy Tabular Processing", level: "Advanced" },
      { name: "SQL & Relational Schemas (MySQL)", level: "Production" },
      { name: "Exploratory Data Analysis (EDA)", level: "Advanced" },
      { name: "Executive Power BI & Tableau Dashboards", level: "Production" },
      { name: "Hypothesis Testing & Statistical Inference", level: "Advanced" },
      { name: "Data Cleansing & Automated Pipelines", level: "Production" },
    ],
  },
  {
    category: "Full-Stack Web Engineering",
    badge: "SYSTEMS & APIS",
    skills: [
      { name: "Next.js 16 (App Router, Server Actions)", level: "Production" },
      { name: "React 19 & TypeScript", level: "Production" },
      { name: "Python / Django REST Framework", level: "Production" },
      { name: "Tailwind CSS & Design Systems", level: "Production" },
      { name: "RESTful API Design & Websockets", level: "Production" },
      { name: "Git, GitHub & Vercel Deployment", level: "Production" },
    ],
  },
];

const experienceItems = [
  {
    role: "Data Science Trainee",
    organization: "Techolas Kochi",
    period: "June 2025 → July 2026",
    details:
      "Intensive practical training in applied data science, statistical modeling, machine learning algorithms, database pipelines, and production business analytics.",
  },
  {
    role: "Python Full Stack Training",
    organization: "Byteboot Techno Solutions",
    period: "April 2024 → May 2024",
    details:
      "Hands-on web architecture, Django framework, relational databases, secure authentication, and RESTful API engineering.",
  },
];

export default function About() {
  return (
    <section id="philosophy" className="py-28 px-4 sm:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        {/* Engineering Philosophy Manifesto */}
        <div className="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 rounded-3xl p-8 sm:p-14 backdrop-blur-2xl flex flex-col gap-8 relative overflow-hidden">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-indigo-400">
            <Terminal size={14} />
            <span>HUMAN CRAFTSMANSHIP // THE PHILOSOPHY</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase max-w-4xl leading-[1.05]">
            Why build at the intersection of data, AI, and full-stack web?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
            <p>
              A statistical model or neural network confined inside a Jupyter Notebook delivers{" "}
              <strong className="text-white font-medium">zero tangible value</strong>. On the
              flip side, a stylish web application without intelligent data processing is little
              more than an expensive brochure.
            </p>
            <p>
              True technical leverage occurs when{" "}
              <strong className="text-white font-medium">rigorous data science</strong>,{" "}
              <strong className="text-white font-medium">production machine learning</strong>, and{" "}
              <strong className="text-white font-medium">resilient full-stack web software</strong>{" "}
              are crafted together by an engineer who understands both statistical algorithms and
              responsive browser architecture.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/[0.08] font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>CRAFTED BY AJIN K</span>
            </div>
            <span>·</span>
            <span>DATA-DRIVEN</span>
            <span>·</span>
            <span>MODEL-POWERED</span>
            <span>·</span>
            <span>PRODUCTION-READY</span>
          </div>
        </div>

        {/* Skill Taxonomy Grid */}
        <div className="flex flex-col gap-10">
          <div className="border-b border-white/10 pb-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-indigo-400 block mb-2">
              TECHNICAL TAXONOMY
            </span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl uppercase text-white tracking-tight">
              Tools &amp; Core Disciplines
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillClusters.map((cluster) => (
              <div
                key={cluster.category}
                className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6 hover:border-white/20 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] text-indigo-400 tracking-widest uppercase">
                      {cluster.badge}
                    </span>
                    <Award size={15} className="text-zinc-500" />
                  </div>

                  <h4 className="font-display font-bold text-xl text-white mb-6">
                    {cluster.category}
                  </h4>

                  <div className="flex flex-col gap-3">
                    {cluster.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between font-mono text-xs py-1.5 border-b border-white/[0.05]"
                      >
                        <span className="text-zinc-300 flex items-center gap-2">
                          <Check size={12} className="text-emerald-400 shrink-0" />
                          {skill.name}
                        </span>
                        <span className="text-[10px] text-zinc-500 uppercase">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div id="experience" className="flex flex-col gap-8 pt-6">
          <div className="border-b border-white/10 pb-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-indigo-400 block mb-2">
              VERIFIED BACKGROUND
            </span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl uppercase text-white tracking-tight">
              Professional Training &amp; Roles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experienceItems.map((exp, i) => (
              <div
                key={i}
                className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-7 sm:p-8 flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-indigo-400 tracking-wider">
                      {exp.period}
                    </span>
                    <Briefcase size={16} className="text-zinc-500" />
                  </div>

                  <h4 className="font-display font-bold text-2xl text-white">
                    {exp.role}
                  </h4>
                  <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                    {exp.organization}
                  </span>

                  <p className="font-sans text-sm text-zinc-400 leading-relaxed mt-2">
                    {exp.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
