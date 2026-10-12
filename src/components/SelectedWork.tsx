"use client";
import React, { useState } from "react";
import { ArrowUpRight, ExternalLink, Activity, Layers, Database, Cpu } from "lucide-react";

const GithubIcon = ({ size = 15 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
  </svg>
);

interface Project {
  id: string;
  category: string;
  badgeIcon: React.ElementType;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: "vakkeel",
    category: "FULL STACK & LEGALTECH",
    badgeIcon: Layers,
    title: "Vakkeel & Associates",
    tagline: "High-Performance Legal Platform & Practice Showcase",
    problem:
      "A premier legal advisory required a high-credibility digital identity with active practice area navigation and client intake channels, replacing an outdated static presence.",
    solution:
      "Engineered a responsive single-page web application featuring high-end dark luxury aesthetics, active court tickers, 9 dynamic practice area showcases, and optimized edge rendering.",
    metrics: [
      { label: "Lighthouse Score", value: "99 / 100" },
      { label: "Initial Load", value: "< 0.9s" },
      { label: "Practice Modules", value: "9 Areas" },
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP Animations", "Vercel"],
    githubUrl: "https://github.com/AjinLabs",
    liveUrl: "#",
  },
  {
    id: "indian-law",
    category: "EDTECH & WEB SYSTEMS",
    badgeIcon: Database,
    title: "Indian Law School Prep",
    tagline: "KLEE Entrance Prep & Legal Education Platform",
    problem:
      "Aspirants required a distraction-free, lightning-fast platform to access KLEE legal entrance syllabus modules and preparation roadmaps without heavy client bundle bloat.",
    solution:
      "Developed an ultra-lean, responsive educational portal utilizing modern semantic HTML5, CSS architecture, and IntersectionObserver scroll reveals for instant zero-delay navigation.",
    metrics: [
      { label: "Bundle Size", value: "< 45 KB" },
      { label: "TTFB Latency", value: "38ms" },
      { label: "Responsiveness", value: "100% Mobile" },
    ],
    stack: ["JavaScript", "HTML5", "CSS3", "Responsive Grid", "IntersectionObserver"],
    githubUrl: "https://github.com/AjinLabs",
    liveUrl: "#",
  },
  {
    id: "predictive-ml",
    category: "DATA SCIENCE & ML",
    badgeIcon: Cpu,
    title: "Predictive Analytics & Churn Forecaster",
    tagline: "Supervised Ensemble Classification Pipeline",
    problem:
      "Enterprise clients struggled to identify at-risk accounts ahead of renewal cycles due to disparate tabular silos and unengineered features.",
    solution:
      "Built an end-to-end Python machine learning pipeline with automated data cleansing, feature correlation analysis, and an ensemble classifier (Random Forest + XGBoost) with SHAP value explanations.",
    metrics: [
      { label: "ROC-AUC Score", value: "0.964" },
      { label: "Precision Rate", value: "94.2%" },
      { label: "Records Modeled", value: "25k+ rows" },
    ],
    stack: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn", "SQL"],
    githubUrl: "https://github.com/AjinLabs",
    liveUrl: "#",
  },
  {
    id: "rag-engine",
    category: "GENERATIVE AI & RAG",
    badgeIcon: Activity,
    title: "Intelligent Semantic RAG Engine",
    tagline: "Vector Retrieval & Knowledge Synthesis Service",
    problem:
      "Internal knowledge bases suffered from keyword mismatch, returning irrelevant passages or inducing hallucinations when queried in natural language.",
    solution:
      "Architected a two-stage hybrid retrieval system combining dense vector embeddings with BM25 lexical search and a cross-encoder reranker, exposed via a fast asynchronous FastAPI endpoint.",
    metrics: [
      { label: "Retrieval Latency", value: "< 65ms" },
      { label: "Hallucination Rate", value: "< 1.8%" },
      { label: "Top-3 Recall", value: "97.1%" },
    ],
    stack: ["Python", "FastAPI", "ChromaDB", "LangChain", "OpenAI / Claude APIs", "Docker"],
    githubUrl: "https://github.com/AjinLabs",
    liveUrl: "#",
  },
];

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="work" className="py-28 px-4 sm:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-indigo-400 block mb-3">
              PORTFOLIO OF WORK // CASE STUDIES
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
              Selected Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {["ALL", "DATA SCIENCE", "GENERATIVE AI", "FULL STACK"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                data-cursor-label="FILTER"
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-white text-black font-semibold shadow"
                    : "bg-white/[0.04] text-zinc-400 hover:text-white border border-white/5"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const BadgeIcon = project.badgeIcon;

            return (
              <div
                key={project.id}
                data-cursor-label="CASE STUDY"
                className="group relative bg-black/60 backdrop-blur-xl border border-white/10 hover:border-white/30 rounded-2xl p-7 sm:p-10 flex flex-col justify-between gap-8 transition-all duration-300 shadow-2xl hover:shadow-indigo-500/5"
              >
                {/* Header of Project Card */}
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[10px] text-indigo-300 uppercase tracking-widest">
                      <BadgeIcon size={12} />
                      {project.category}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor-label="CODE"
                          className="p-2 rounded-full bg-white/[0.05] hover:bg-white text-zinc-400 hover:text-black transition-all"
                          aria-label="View Github Repository"
                        >
                          <GithubIcon size={15} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          data-cursor-label="VISIT"
                          className="p-2 rounded-full bg-white/[0.05] hover:bg-white text-zinc-400 hover:text-black transition-all"
                          aria-label="View Live Project"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-zinc-400 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    <p>
                      <strong className="text-zinc-200 font-medium">The Challenge:</strong>{" "}
                      {project.problem}
                    </p>
                    <p>
                      <strong className="text-zinc-200 font-medium">The Solution:</strong>{" "}
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Metrics & Stack Footer */}
                <div className="flex flex-col gap-5 pt-5 border-t border-white/[0.08]">
                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 bg-white/[0.02] border border-white/5 rounded-xl p-3.5">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="font-display font-bold text-base sm:text-lg text-white">
                          {m.value}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 font-mono text-[10px] text-zinc-400 group-hover:text-zinc-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
