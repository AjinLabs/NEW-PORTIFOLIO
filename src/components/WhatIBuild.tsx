"use client";
import React, { useState } from "react";
import { Database, Cpu, Brain, Layers, ArrowUpRight, CheckCircle2 } from "lucide-react";

const capabilities = [
  {
    num: "01",
    icon: Database,
    title: "Data Science & Analytical Engineering",
    tagline: "Statistical analysis, ETL pipelines, and decision intelligence.",
    description:
      "Transforming raw, noisy tabular data into actionable statistical insight. I engineer rigorous data pipelines from ingestion to automated cleaning, feature extraction, and executive visualization.",
    deliverables: [
      "Exploratory Data Analysis (EDA) & hypothesis testing",
      "Automated feature engineering & data preprocessing",
      "Time-series forecasting & trend decomposition",
      "Interactive Power BI, Tableau & MySQL analytical dashboards",
    ],
    tech: ["Python", "Pandas", "NumPy", "SQL", "MySQL", "Power BI", "Tableau", "Excel"],
  },
  {
    num: "02",
    icon: Cpu,
    title: "Applied Machine Learning Systems",
    tagline: "Predictive modeling, classification, and neural pipelines.",
    description:
      "Building and evaluating high-precision machine learning models. From tree-based ensembles (Random Forest, XGBoost) to PyTorch deep learning architectures, optimized for low inference latency and high generalization.",
    deliverables: [
      "Supervised classification & regression pipelines",
      "Anomaly detection & customer segmentation clustering",
      "Hyperparameter optimization & k-fold cross-validation",
      "Inference acceleration & FastAPI microservice endpoints",
    ],
    tech: ["PyTorch", "Scikit-Learn", "FastAPI", "Python", "Algorithms", "Model Registry"],
  },
  {
    num: "03",
    icon: Brain,
    title: "Generative AI & Agentic Architectures",
    tagline: "Production RAG, vector search, and LLM orchestration.",
    description:
      "Creating modern AI products powered by large language models. I build hybrid vector retrieval pipelines with dense embeddings, cross-encoder reranking, and autonomous tool-calling agents.",
    deliverables: [
      "Retrieval-Augmented Generation (RAG) with vector databases",
      "Semantic search with hybrid BM25 + dense embeddings",
      "Tool-calling agents with structured JSON outputs",
      "Prompt optimization & hallucination mitigation safeguards",
    ],
    tech: ["LLMs", "RAG", "LangChain", "Vector DBs", "Embeddings", "Hugging Face"],
  },
  {
    num: "04",
    icon: Layers,
    title: "Full-Stack Web Engineering",
    tagline: "High-performance, type-safe web applications.",
    description:
      "Engineering resilient web platforms where end-users interact with data and intelligence. Built with modern React and Next.js on the client, backed by Python/Django or Node APIs.",
    deliverables: [
      "Next.js 16 App Router with server-side rendering & streaming",
      "Python / Django full-stack backends with RESTful APIs",
      "Type-safe TypeScript architectures with Tailwind CSS",
      "Smooth 60fps micro-animations (GSAP & Framer Motion)",
    ],
    tech: ["Next.js", "React 19", "TypeScript", "Django", "Tailwind CSS", "REST APIs"],
  },
];

export default function WhatIBuild() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="expertise" className="py-28 px-4 sm:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-indigo-400 block mb-3">
              WHAT I DELIVER // CORE COMPETENCIES
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
              Architectural Expertise
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-md">
            Four interconnected disciplines forming a complete cycle: raw data → trained model → intelligent backend → polished web application.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            const isHovered = activeCard === index;

            return (
              <div
                key={cap.num}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                data-cursor-label="EXPAND"
                className={`group relative p-8 sm:p-10 rounded-2xl border transition-all duration-300 flex flex-col justify-between gap-8 bg-black/60 backdrop-blur-xl ${
                  isHovered
                    ? "border-white/40 shadow-2xl shadow-indigo-500/10 bg-zinc-950/80"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {/* Top card info */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                        <Icon size={22} />
                      </div>
                      <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest">
                        DOM {cap.num}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-white transition-colors">
                      {cap.title}
                    </h3>
                    <p className="font-mono text-xs text-zinc-400 mt-2 tracking-wide">
                      {cap.tagline}
                    </p>
                    <p className="font-sans text-sm text-zinc-400 leading-relaxed mt-4">
                      {cap.description}
                    </p>
                  </div>

                  {/* Deliverables checklist */}
                  <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.06]">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                      KEY DELIVERABLES:
                    </span>
                    <ul className="flex flex-col gap-1.5">
                      {cap.deliverables.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 font-mono text-xs text-zinc-300 leading-snug"
                        >
                          <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {cap.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 font-mono text-[11px] text-zinc-400 group-hover:text-zinc-200 group-hover:border-white/20 transition-colors"
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
