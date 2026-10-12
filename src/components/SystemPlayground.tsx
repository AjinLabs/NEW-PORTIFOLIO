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
} from "lucide-react";

export default function SystemPlayground() {
  const [activeMode, setActiveMode] = useState<"rag" | "classifier" | "arch">("rag");

  // RAG Simulator State
  const sampleQueries = [
    "Predictive risk analysis on financial time-series data",
    "Production RAG pipeline with hybrid BM25 and vector search",
    "High-throughput FastAPI microservice with Next.js edge streaming",
  ];
  const [selectedQuery, setSelectedQuery] = useState(sampleQueries[0]);
  const [isProcessingRag, setIsProcessingRag] = useState(false);

  const ragOutputs: Record<string, { similarity: number; chunks: string[]; answer: string }> = {
    [sampleQueries[0]]: {
      similarity: 0.948,
      chunks: [
        "doc_chunk_14: ARIMA + LSTM ensemble reduced volatility MSE by 28.4% across 12-month backtesting.",
        "doc_chunk_32: Feature engineering prioritized rolling Sharpe ratio and Exponential Moving Averages.",
      ],
      answer:
        "Engineered an automated time-series forecasting pipeline utilizing Pandas feature-engineering and a PyTorch LSTM model, yielding an actionable 28.4% error reduction over baseline models.",
    },
    [sampleQueries[1]]: {
      similarity: 0.962,
      chunks: [
        "doc_chunk_08: Reciprocal Rank Fusion (RRF) synthesized lexical BM25 scores with dense text-embedding-3-small vectors.",
        "doc_chunk_41: Re-ranking stage used cross-encoder to filter top 5 chunks before context prompt injection.",
      ],
      answer:
        "Architected a two-stage hybrid retrieval system combining dense vector search and BM25 sparse lexical matching with Cross-Encoder reranking, cutting hallucination rates to under 2.1%.",
    },
    [sampleQueries[2]]: {
      similarity: 0.935,
      chunks: [
        "doc_chunk_19: Async FastAPI endpoints running on Uvicorn workers connected to Next.js via Server-Sent Events (SSE).",
        "doc_chunk_55: Redis token bucket middleware enforced rate limits and cached frequent embeddings.",
      ],
      answer:
        "Integrated Next.js 16 App Router with an asynchronous FastAPI inference layer via SSE, enabling token-by-token streaming with sub-80ms time-to-first-token (TTFT).",
    },
  };

  const currentRagData = ragOutputs[selectedQuery] || ragOutputs[sampleQueries[0]];

  // Classifier Simulation State
  const [epochs, setEpochs] = useState(45);
  const [learningRate, setLearningRate] = useState(0.01);
  const [complexity, setComplexity] = useState(16);

  // Compute simulated mathematical metrics
  const accuracy = Math.min(
    99.4,
    Number((88.0 + (epochs / 100) * 8.5 + (complexity / 32) * 2.5 - Math.abs(learningRate - 0.01) * 30).toFixed(1))
  );
  const loss = Math.max(
    0.012,
    Number((0.35 - (epochs / 100) * 0.28 + Math.abs(learningRate - 0.01) * 0.4).toFixed(3))
  );
  const f1Score = (accuracy / 100 * 0.985).toFixed(3);

  // Architecture Nodes State
  const [selectedNode, setSelectedNode] = useState<number>(0);
  const archNodes = [
    {
      name: "01 // Client & Edge",
      tech: "Next.js 16 + React 19",
      role: "Server-side rendering, responsive UI, optimistic state, and real-time streaming consumption.",
      latency: "14ms",
      status: "200 OK",
    },
    {
      name: "02 // API Gateway",
      tech: "FastAPI / Python 3.12",
      role: "Async request routing, token authentication, payload validation via Pydantic schemas.",
      latency: "28ms",
      status: "HEALTHY",
    },
    {
      name: "03 // Intelligence Core",
      tech: "PyTorch + Scikit-Learn",
      role: "Batched tensor inference, embedding similarity search, model pipeline evaluation.",
      latency: "42ms",
      status: "ACCELERATED",
    },
    {
      name: "04 // Data Persistence",
      tech: "PostgreSQL + Vector Store",
      role: "Normalized relational schemas, indexed high-dimensional embeddings with cosine distance.",
      latency: "18ms",
      status: "INDEXED",
    },
  ];

  return (
    <section id="sandbox" className="py-28 px-4 sm:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-indigo-400 mb-3">
              <Code2 size={14} />
              <span>LIVE TECHNICAL ARTIFACTS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
              System Sandbox &amp; ML Lab
            </h2>
            <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-xl mt-3">
              Explore the underlying mechanics of my work. Test vector retrieval, simulate neural classification metrics, and inspect full-stack pipeline latency.
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex flex-wrap gap-2 bg-black/60 p-1.5 rounded-xl border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveMode("rag")}
              data-cursor-label="RAG"
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                activeMode === "rag"
                  ? "bg-white text-black font-semibold shadow"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Brain size={14} />
              <span>RAG &amp; Retrieval</span>
            </button>
            <button
              onClick={() => setActiveMode("classifier")}
              data-cursor-label="MODEL"
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                activeMode === "classifier"
                  ? "bg-white text-black font-semibold shadow"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Sliders size={14} />
              <span>ML Classifier</span>
            </button>
            <button
              onClick={() => setActiveMode("arch")}
              data-cursor-label="SYSTEM"
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                activeMode === "arch"
                  ? "bg-white text-black font-semibold shadow"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Network size={14} />
              <span>Full-Stack Trace</span>
            </button>
          </div>
        </div>

        {/* Sandbox Content Panels */}
        <div className="bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 blur-[100px] pointer-events-none" />

          {/* MODE 1: RAG & VECTOR SEARCH SIMULATOR */}
          {activeMode === "rag" && (
            <div className="flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
                <div>
                  <span className="font-mono text-xs text-indigo-400 tracking-wider uppercase">
                    MODULE 01 // RETRIEVAL-AUGMENTED GENERATION (RAG)
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white mt-1">
                    Semantic Search &amp; Context Synthesis
                  </h3>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
                  <CheckCircle2 size={13} />
                  <span>EMBEDDING MODEL: text-embedding-3</span>
                </div>
              </div>

              {/* Sample query selector */}
              <div className="flex flex-col gap-3">
                <label className="font-mono text-xs uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                  <Search size={13} />
                  <span>SELECT INCOMING PROMPT TO TRACE:</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {sampleQueries.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsProcessingRag(true);
                        setSelectedQuery(q);
                        setTimeout(() => setIsProcessingRag(false), 300);
                      }}
                      data-cursor-label="QUERY"
                      className={`text-left p-3.5 rounded-xl border font-sans text-xs sm:text-sm transition-all duration-200 flex flex-col justify-between gap-3 ${
                        selectedQuery === q
                          ? "bg-white/[0.08] border-white text-white shadow-lg"
                          : "bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
                      }`}
                    >
                      <span className="font-mono text-[10px] text-zinc-500">QUERY {idx + 1}</span>
                      <span className="line-clamp-2 leading-snug">{q}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Retrieval Output Card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white/[0.02] border border-white/10 rounded-xl p-6">
                {/* Left: Vector Match Metrics */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-6 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-xs text-zinc-400 uppercase">
                        COSINE SIMILARITY SCORE:
                      </span>
                      <span className="font-mono text-base font-bold text-emerald-400">
                        {currentRagData.similarity}
                      </span>
                    </div>

                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-400 transition-all duration-500"
                        style={{ width: `${currentRagData.similarity * 100}%` }}
                      />
                    </div>

                    <div className="flex flex-col gap-2 mt-2">
                      <span className="font-mono text-[11px] text-zinc-400 uppercase">
                        RETRIEVED VECTOR CHUNKS:
                      </span>
                      {currentRagData.chunks.map((chunk, i) => (
                        <div
                          key={i}
                          className="p-2.5 rounded-lg bg-black/40 border border-white/5 font-mono text-[11px] text-zinc-300 leading-relaxed"
                        >
                          {chunk}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-500">
                    <RefreshCw size={11} className={isProcessingRag ? "animate-spin text-white" : ""} />
                    <span>LATENCY: 46MS · VECTOR DIM: 1536</span>
                  </div>
                </div>

                {/* Right: Synthesized LLM Response */}
                <div className="lg:col-span-7 flex flex-col justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs text-indigo-400 uppercase tracking-wider block mb-2">
                      SYNTHESIZED GROUNDED OUTPUT:
                    </span>
                    <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-sans text-sm sm:text-base text-zinc-200 leading-relaxed min-h-[120px] flex items-center">
                      {isProcessingRag ? (
                        <span className="font-mono text-xs text-zinc-500 animate-pulse">
                          STREAMING SYNTHESIZED TOKENS...
                        </span>
                      ) : (
                        currentRagData.answer
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 font-mono text-[10px] text-zinc-400">
                    <span className="px-2 py-1 rounded bg-white/[0.04] border border-white/5">
                      PRECISION: HIGH
                    </span>
                    <span className="px-2 py-1 rounded bg-white/[0.04] border border-white/5">
                      CROSS-ENCODER: ACTIVE
                    </span>
                    <span className="px-2 py-1 rounded bg-white/[0.04] border border-white/5">
                      HALLUCINATION MITIGATED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MODE 2: PREDICTIVE ML CLASSIFICATION MODEL */}
          {activeMode === "classifier" && (
            <div className="flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
                <div>
                  <span className="font-mono text-xs text-indigo-400 tracking-wider uppercase">
                    MODULE 02 // STATISTICAL MACHINE LEARNING
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white mt-1">
                    Hyperparameter &amp; Metric Simulator
                  </h3>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-full w-fit">
                  <Sliders size={13} />
                  <span>FRAMEWORK: Scikit-Learn + PyTorch</span>
                </div>
              </div>

              {/* Sliders Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Epochs Slider */}
                <div className="flex flex-col gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex justify-between items-center font-mono text-xs">
                    <span className="text-zinc-400">EPOCHS:</span>
                    <span className="text-white font-bold">{epochs}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={epochs}
                    onChange={(e) => setEpochs(Number(e.target.value))}
                    className="w-full accent-indigo-400 cursor-pointer"
                  />
                  <span className="font-mono text-[10px] text-zinc-500">
                    Optimization steps over full dataset
                  </span>
                </div>

                {/* Learning Rate Slider */}
                <div className="flex flex-col gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex justify-between items-center font-mono text-xs">
                    <span className="text-zinc-400">LEARNING RATE:</span>
                    <span className="text-white font-bold">{learningRate}</span>
                  </div>
                  <input
                    type="range"
                    min="0.001"
                    max="0.05"
                    step="0.005"
                    value={learningRate}
                    onChange={(e) => setLearningRate(Number(e.target.value))}
                    className="w-full accent-indigo-400 cursor-pointer"
                  />
                  <span className="font-mono text-[10px] text-zinc-500">
                    Gradient descent step size
                  </span>
                </div>

                {/* Feature Dimension */}
                <div className="flex flex-col gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex justify-between items-center font-mono text-xs">
                    <span className="text-zinc-400">FEATURE DIMS:</span>
                    <span className="text-white font-bold">{complexity} features</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="32"
                    step="4"
                    value={complexity}
                    onChange={(e) => setComplexity(Number(e.target.value))}
                    className="w-full accent-indigo-400 cursor-pointer"
                  />
                  <span className="font-mono text-[10px] text-zinc-500">
                    Extracted tabular &amp; latent variables
                  </span>
                </div>
              </div>

              {/* Computed Live Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white/[0.02] border border-white/10 rounded-xl p-6">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs text-zinc-400 uppercase">
                    ACCURACY (TEST SPLIT):
                  </span>
                  <span className="font-display font-extrabold text-4xl text-white">
                    {accuracy}%
                  </span>
                  <span className="font-mono text-[11px] text-emerald-400">
                    ↑ Balanced Cross-Validation
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs text-zinc-400 uppercase">
                    CONVERGENCE LOSS:
                  </span>
                  <span className="font-display font-extrabold text-4xl text-indigo-300">
                    {loss}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-500">
                    Binary Cross-Entropy Loss
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs text-zinc-400 uppercase">
                    HARMONIC F1-SCORE:
                  </span>
                  <span className="font-display font-extrabold text-4xl text-white">
                    {f1Score}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-500">
                    Precision &amp; Recall Equilibrium
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* MODE 3: FULL STACK ARCHITECTURE TRACE */}
          {activeMode === "arch" && (
            <div className="flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
                <div>
                  <span className="font-mono text-xs text-indigo-400 tracking-wider uppercase">
                    MODULE 03 // DISTRIBUTED FULL-STACK PIPELINE
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white mt-1">
                    End-to-End Latency &amp; Topology Inspector
                  </h3>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-white bg-white/10 border border-white/20 px-3 py-1.5 rounded-full w-fit">
                  <Network size={13} />
                  <span>TOTAL ROUNDTRIP: ~102MS</span>
                </div>
              </div>

              {/* Topology Nodes Flow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {archNodes.map((node, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedNode(i)}
                    data-cursor-label="INSPECT"
                    className={`text-left p-5 rounded-xl border transition-all duration-200 flex flex-col justify-between gap-4 ${
                      selectedNode === i
                        ? "bg-white/[0.08] border-white text-white shadow-xl shadow-white/5"
                        : "bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    <div>
                      <span className="font-mono text-[10px] text-indigo-400 uppercase tracking-widest block mb-1">
                        NODE 0{i + 1}
                      </span>
                      <h4 className="font-display font-bold text-base text-white">
                        {node.name.split("//")[1]?.trim()}
                      </h4>
                      <p className="font-mono text-xs text-zinc-400 mt-1">
                        {node.tech}
                      </p>
                    </div>

                    <div className="flex items-center justify-between font-mono text-[11px] pt-3 border-t border-white/10">
                      <span className="text-emerald-400">{node.status}</span>
                      <span className="text-zinc-500">{node.latency}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Detail on selected node */}
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-indigo-400">
                    SELECTED NODE PROFILE: {archNodes[selectedNode].name}
                  </span>
                  <p className="font-sans text-sm sm:text-base text-zinc-200 mt-1 max-w-2xl">
                    {archNodes[selectedNode].role}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 rounded-lg bg-black/60 border border-white/10 font-mono text-xs text-zinc-300">
                    STACK: <span className="text-white font-bold">{archNodes[selectedNode].tech}</span>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 font-mono text-xs text-emerald-400">
                    LATENCY: {archNodes[selectedNode].latency}
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
