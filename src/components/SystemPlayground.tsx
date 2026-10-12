"use client";
import React, { useState } from "react";
import {
  Brain,
  Sliders,
  Network,
  CheckCircle2,
  RefreshCw,
  Search,
  Code2,
  Sparkles,
} from "lucide-react";

export default function SystemPlayground() {
  const [activeMode, setActiveMode] = useState<"rag" | "classifier" | "arch">("rag");

  // RAG Simulator State
  const sampleQueries = [
    "Predictive house value modeling with California Housing dataset",
    "Law Entrance LMS: Weak-topic detection & CBT exam analytics",
    "Vakkeel & Associates: AI-assisted vibe coding architecture",
  ];
  const [selectedQuery, setSelectedQuery] = useState(sampleQueries[0]);
  const [isProcessingRag, setIsProcessingRag] = useState(false);

  const ragOutputs: Record<string, { similarity: number; chunks: string[]; answer: string }> = {
    [sampleQueries[0]]: {
      similarity: 0.954,
      chunks: [
        "housing_chunk_01: California Housing dataset (20,640 records) preprocessed via standard scaling & median imputation.",
        "housing_chunk_02: Top regression model tuned with GridSearchCV, achieving peak R² and lowest RMSE/MAE.",
      ],
      answer:
        "Built an end-to-end regression pipeline on the California Housing dataset (20,640 records) to predict median values, tuned with GridSearchCV, and deployed for real-time single-house inference.",
    },
    [sampleQueries[1]]: {
      similarity: 0.968,
      chunks: [
        "lms_chunk_01: Student mock-test analytics tracking accuracy, timing, and topic-level mastery.",
        "lms_chunk_02: Weak-topic detection algorithm recommending classes and spaced-repetition flashcards.",
      ],
      answer:
        "Engineered the Law Entrance LMS CBT mock test engine with ELO-style ratings, safety-line visualization, and AI weak-topic detection generating personalized study schedules.",
    },
    [sampleQueries[2]]: {
      similarity: 0.941,
      chunks: [
        "legal_chunk_01: Deployed at vakkeelandassociates.com and vakkeelandassociates.in.",
        "legal_chunk_02: Built using AI-assisted ('vibe coding') workflows in Claude Code and Google Antigravity.",
      ],
      answer:
        "Designed and deployed the Vakkeel & Associates LegalTech CRM & Advocate Portal using AI-assisted vibe coding workflows in Claude Code and Google Antigravity.",
    },
  };

  const currentRagData = ragOutputs[selectedQuery] || ragOutputs[sampleQueries[0]];

  // Classifier Simulation State
  const [epochs, setEpochs] = useState(55);
  const [learningRate, setLearningRate] = useState(0.01);
  const [complexity, setComplexity] = useState(20);

  const accuracy = Math.min(
    99.6,
    Number((88.5 + (epochs / 100) * 8.2 + (complexity / 32) * 2.8 - Math.abs(learningRate - 0.01) * 28).toFixed(1))
  );
  const loss = Math.max(
    0.011,
    Number((0.32 - (epochs / 100) * 0.26 + Math.abs(learningRate - 0.01) * 0.35).toFixed(3))
  );
  const f1Score = (accuracy / 100 * 0.988).toFixed(3);

  // Architecture Nodes State
  const [selectedNode, setSelectedNode] = useState<number>(0);
  const archNodes = [
    {
      name: "01 // Frontend & Vibe Coding",
      tech: "Next.js 16 + Tailwind CSS",
      role: "Client & Advocate portals, bilingual rendering (Malayalam + English), interactive dashboards.",
      latency: "16ms",
      status: "200 OK",
      accent: "from-cyan-400 to-blue-500",
    },
    {
      name: "02 // AI Workflows & Vibe Tools",
      tech: "Claude Code & Google Antigravity",
      role: "Rapid iteration, automated testing, component generation, and system architecture orchestration.",
      latency: "24ms",
      status: "ACTIVE",
      accent: "from-violet-500 to-fuchsia-500",
    },
    {
      name: "03 // Intelligence & Analytics",
      tech: "Python, Scikit-learn, Pandas",
      role: "GridSearchCV model optimization, EDA pipelines, student performance scoring, and RAG retrieval.",
      latency: "38ms",
      status: "CALIBRATED",
      accent: "from-pink-500 to-rose-500",
    },
    {
      name: "04 // Database & Cloud",
      tech: "MySQL + Firebase + Vercel",
      role: "Relational case/lead schemas, real-time tournament tables, edge caching, and zero-downtime hosting.",
      latency: "20ms",
      status: "PERSISTED",
      accent: "from-emerald-400 to-teal-500",
    },
  ];

  return (
    <section id="sandbox" className="py-28 px-4 sm:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-cyan-300 font-semibold mb-2">
              <Code2 size={14} className="text-cyan-400" />
              <span>LIVE TECHNICAL ARTIFACTS // INTERACTIVE LAB</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
              Interactive ML &amp; AI Lab
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-300 max-w-xl mt-3">
              Test vector semantic retrieval across Ajin&apos;s real project dataset, simulate machine learning hyperparameters with Scikit-learn, and inspect full-stack pipeline topology.
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl glass-panel">
            <button
              onClick={() => setActiveMode("rag")}
              data-cursor-label="RAG"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                activeMode === "rag"
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold shadow-lg shadow-purple-500/30"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Brain size={14} />
              <span>RAG &amp; Vector Search</span>
            </button>
            <button
              onClick={() => setActiveMode("classifier")}
              data-cursor-label="MODEL"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                activeMode === "classifier"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/30"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Sliders size={14} />
              <span>Scikit-Learn ML Sim</span>
            </button>
            <button
              onClick={() => setActiveMode("arch")}
              data-cursor-label="SYSTEM"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                activeMode === "arch"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold shadow-lg shadow-emerald-500/30"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Network size={14} />
              <span>Full-Stack Trace</span>
            </button>
          </div>
        </div>

        {/* Sandbox Content Panel with Vibrant Glassmorphism */}
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-10 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-600/15 via-fuchsia-500/10 to-transparent blur-3xl pointer-events-none" />

          {/* MODE 1: RAG & VECTOR SEARCH */}
          {activeMode === "rag" && (
            <div className="flex flex-col gap-8 relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <span className="font-mono text-xs text-cyan-300 tracking-wider uppercase font-semibold">
                    MODULE 01 // RETRIEVAL-AUGMENTED GENERATION (RAG)
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white mt-1">
                    Semantic Vector Matcher &amp; Real-Project Citations
                  </h3>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 px-3.5 py-1.5 rounded-full w-fit">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  <span>EMBEDDING PIPELINE: Active</span>
                </div>
              </div>

              {/* Sample Query Buttons */}
              <div className="flex flex-col gap-3">
                <label className="font-mono text-xs uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <Search size={13} className="text-cyan-400" />
                  <span>SELECT INCOMING PROMPT TO TRACE:</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {sampleQueries.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsProcessingRag(true);
                        setSelectedQuery(q);
                        setTimeout(() => setIsProcessingRag(false), 250);
                      }}
                      data-cursor-label="QUERY"
                      className={`text-left p-4 rounded-2xl border font-sans text-xs sm:text-sm transition-all duration-200 flex flex-col justify-between gap-3 ${
                        selectedQuery === q
                          ? "bg-gradient-to-br from-violet-900/40 to-fuchsia-900/30 border-purple-400/60 text-white shadow-xl shadow-purple-500/20"
                          : "bg-white/[0.03] border-white/10 text-slate-300 hover:text-white hover:border-white/20"
                      }`}
                    >
                      <span className="font-mono text-[10px] text-cyan-400 font-bold">CASE QUERY {idx + 1}</span>
                      <span className="line-clamp-2 leading-snug">{q}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Retrieval Output */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                {/* Left: Vector Match Metrics */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-6 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-xs text-slate-300 uppercase">
                        COSINE SIMILARITY SCORE:
                      </span>
                      <span className="font-mono text-base font-extrabold text-emerald-400">
                        {currentRagData.similarity}
                      </span>
                    </div>

                    <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-green-400 transition-all duration-500"
                        style={{ width: `${currentRagData.similarity * 100}%` }}
                      />
                    </div>

                    <div className="flex flex-col gap-2.5 mt-2">
                      <span className="font-mono text-[11px] text-slate-400 uppercase font-semibold">
                        RETRIEVED KNOWLEDGE CHUNKS:
                      </span>
                      {currentRagData.chunks.map((chunk, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-slate-900/60 border border-white/10 font-mono text-[11px] text-slate-200 leading-relaxed shadow-sm"
                        >
                          {chunk}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[10px] text-cyan-300">
                    <RefreshCw size={11} className={isProcessingRag ? "animate-spin text-white" : ""} />
                    <span>LATENCY: 42MS · CHROMA VECTOR RETRIEVAL</span>
                  </div>
                </div>

                {/* Right: Synthesized Grounded Response */}
                <div className="lg:col-span-7 flex flex-col justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs text-purple-300 uppercase tracking-wider block mb-2 font-semibold">
                      SYNTHESIZED GROUNDED OUTPUT:
                    </span>
                    <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/10 font-sans text-sm sm:text-base text-slate-100 leading-relaxed min-h-[130px] flex items-center shadow-inner">
                      {isProcessingRag ? (
                        <span className="font-mono text-xs text-cyan-300 animate-pulse">
                          STREAMING SYNTHESIZED TOKENS...
                        </span>
                      ) : (
                        currentRagData.answer
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 font-mono text-[10px] text-slate-300">
                    <span className="px-2.5 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-200">
                      RAG EMBEDDINGS
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-200">
                      CROSS-ENCODER RANKING
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-200">
                      FACTUAL CONSTRAINTS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MODE 2: ML CLASSIFIER SIMULATOR */}
          {activeMode === "classifier" && (
            <div className="flex flex-col gap-8 relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <span className="font-mono text-xs text-cyan-300 tracking-wider uppercase font-semibold">
                    MODULE 02 // SCIKIT-LEARN HYPERPARAMETER TUNER
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white mt-1">
                    GridSearchCV &amp; Validation Metric Explorer
                  </h3>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 px-3.5 py-1.5 rounded-full w-fit">
                  <Sliders size={13} />
                  <span>ALGORITHM: Random Forest + Gradient Boost</span>
                </div>
              </div>

              {/* Sliders Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-3 p-5 rounded-2xl glass-panel">
                  <div className="flex justify-between items-center font-mono text-xs">
                    <span className="text-slate-300">EPOCHS / ESTIMATORS:</span>
                    <span className="text-cyan-300 font-bold">{epochs}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={epochs}
                    onChange={(e) => setEpochs(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                  <span className="font-mono text-[10px] text-slate-400">
                    Number of ensemble trees in forest
                  </span>
                </div>

                <div className="flex flex-col gap-3 p-5 rounded-2xl glass-panel">
                  <div className="flex justify-between items-center font-mono text-xs">
                    <span className="text-slate-300">LEARNING RATE:</span>
                    <span className="text-fuchsia-300 font-bold">{learningRate}</span>
                  </div>
                  <input
                    type="range"
                    min="0.001"
                    max="0.05"
                    step="0.005"
                    value={learningRate}
                    onChange={(e) => setLearningRate(Number(e.target.value))}
                    className="w-full accent-fuchsia-400 cursor-pointer"
                  />
                  <span className="font-mono text-[10px] text-slate-400">
                    Step shrinkage for gradient boosting
                  </span>
                </div>

                <div className="flex flex-col gap-3 p-5 rounded-2xl glass-panel">
                  <div className="flex justify-between items-center font-mono text-xs">
                    <span className="text-slate-300">ENGINEERED FEATURES:</span>
                    <span className="text-emerald-300 font-bold">{complexity} features</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="32"
                    step="4"
                    value={complexity}
                    onChange={(e) => setComplexity(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                  <span className="font-mono text-[10px] text-slate-400">
                    Imputed, scaled &amp; encoded columns
                  </span>
                </div>
              </div>

              {/* Dynamic Live Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs text-slate-400 uppercase">
                    CROSS-VALIDATION ACCURACY:
                  </span>
                  <span className="font-display font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                    {accuracy}%
                  </span>
                  <span className="font-mono text-[11px] text-emerald-400">
                    ↑ 5-Fold Stratified Split
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs text-slate-400 uppercase">
                    ROOT MEAN SQUARED ERROR (RMSE):
                  </span>
                  <span className="font-display font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">
                    {loss}
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">
                    Residual Error Minimization
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs text-slate-400 uppercase">
                    HARMONIC F1-SCORE:
                  </span>
                  <span className="font-display font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                    {f1Score}
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">
                    Precision &amp; Recall Equilibrium
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* MODE 3: FULL STACK & VIBE CODING TRACE */}
          {activeMode === "arch" && (
            <div className="flex flex-col gap-8 relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <span className="font-mono text-xs text-cyan-300 tracking-wider uppercase font-semibold">
                    MODULE 03 // FULL-STACK &amp; AI-ASSISTED ARCHITECTURE
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white mt-1">
                    Venm Studio Topology &amp; End-to-End Latency
                  </h3>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-purple-300 bg-purple-950/40 border border-purple-500/30 px-3.5 py-1.5 rounded-full w-fit">
                  <Sparkles size={13} className="text-yellow-300" />
                  <span>TOTAL ROUNDTRIP: ~98MS</span>
                </div>
              </div>

              {/* Topology Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {archNodes.map((node, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedNode(i)}
                    data-cursor-label="INSPECT"
                    className={`text-left p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between gap-4 ${
                      selectedNode === i
                        ? "bg-gradient-to-br from-violet-900/40 to-cyan-900/30 border-cyan-400 text-white shadow-xl shadow-cyan-500/20"
                        : "glass-panel text-slate-300 hover:text-white hover:border-white/20"
                    }`}
                  >
                    <div>
                      <span className="font-mono text-[10px] text-cyan-300 uppercase tracking-widest block mb-1 font-bold">
                        LAYER 0{i + 1}
                      </span>
                      <h4 className="font-display font-bold text-base text-white">
                        {node.name.split("//")[1]?.trim()}
                      </h4>
                      <p className="font-mono text-xs text-indigo-300 mt-1">
                        {node.tech}
                      </p>
                    </div>

                    <div className="flex items-center justify-between font-mono text-[11px] pt-3 border-t border-white/10">
                      <span className="text-emerald-400 font-semibold">{node.status}</span>
                      <span className="text-slate-400">{node.latency}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Detail on selected node */}
              <div className="p-6 rounded-2xl bg-black/40 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 backdrop-blur-xl">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-cyan-300 font-semibold">
                    SELECTED LAYER: {archNodes[selectedNode].name}
                  </span>
                  <p className="font-sans text-sm sm:text-base text-slate-200 mt-1 max-w-2xl leading-relaxed">
                    {archNodes[selectedNode].role}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 font-mono text-xs text-slate-200">
                    STACK: <span className="text-white font-bold">{archNodes[selectedNode].tech}</span>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 font-mono text-xs text-emerald-300 font-semibold">
                    {archNodes[selectedNode].latency}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
