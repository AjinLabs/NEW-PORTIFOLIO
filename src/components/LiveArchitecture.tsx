"use client";
import React, { useState } from "react";
import { Terminal, Check, Activity, Layers, Cpu, Database } from "lucide-react";

export default function LiveArchitecture() {
  const [activeStep, setActiveStep] = useState(0);

  const pipelineSteps = [
    {
      step: "01",
      title: "Data Ingestion & Hygiene",
      desc: "California Housing (20.6k rows), IBM HR, raw CSVs; automated schema checks & median imputation",
    },
    {
      step: "02",
      title: "EDA & Feature Engineering",
      desc: "Correlation heatmaps, standard scaling, one-hot encoding, outlier pruning & feature selection",
    },
    {
      step: "03",
      title: "Hyperparameter Optimization",
      desc: "GridSearchCV, 5-fold cross validation; Random Forest & XGBoost tuning for RMSE / R² convergence",
    },
    {
      step: "04",
      title: "RAG & Vector Retrieval",
      desc: "Dense text embeddings, ChromaDB vector store, reciprocal rank fusion & hallucination mitigation",
    },
    {
      step: "05",
      title: "Full-Stack Deployment (Venm)",
      desc: "Next.js 16, Django REST APIs, Claude Code & Google Antigravity vibe coding workflows on Vercel",
    },
  ];

  return (
    <section id="architecture" className="py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto border-t-2 border-[#111111]/15">
      {/* Electric Blue Marker and Headline */}
      <div className="w-12 h-1.5 bg-[#245BDB] border border-[#111111] mb-4" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        <div className="lg:col-span-5">
          <h2 className="text-4xl sm:text-6xl font-display leading-[1.0] text-[#111111] mb-6">
            <span className="font-light block">Live System</span>
            <span className="font-black block">Architecture</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#111111]/80 leading-relaxed">
            I evaluate machine learning models and data pipelines deterministically rather than relying on ungrounded hype. Every model trained at Techolas or platform shipped via Venm undergoes rigorous cross-validation and traceable metric scorecards.
          </p>
        </div>

        {/* Pipeline Box */}
        <div className="lg:col-span-7 bg-[#EBE7DE] border-2 border-[#111111] p-6 sm:p-8 shadow-[6px_6px_0px_#111111]">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111]/70 mb-5">
            EVALUATION &amp; INFERENCE PIPELINE
          </div>

          <div className="flex flex-col gap-3">
            {pipelineSteps.map((item, index) => (
              <div
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`flex items-start sm:items-center gap-4 p-3.5 border-2 cursor-pointer transition-all ${
                  activeStep === index
                    ? "bg-white border-[#111111] shadow-[3px_3px_0px_#111111]"
                    : "bg-[#F5F3EE] border-[#111111]/40 hover:bg-white hover:border-[#111111]"
                }`}
              >
                <div
                  className={`w-9 h-9 border border-[#111111] flex items-center justify-center font-mono font-black text-sm shrink-0 transition-colors ${
                    activeStep === index ? "bg-[#245BDB] text-white" : "bg-white text-[#111111]"
                  }`}
                >
                  {item.step}
                </div>
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                  <span className="font-display font-bold text-sm text-[#111111]">
                    {item.title}
                  </span>
                  <span className="font-mono text-xs text-[#111111]/70 sm:text-right">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Terminal log & Queue States Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Terminal Log in Deep Navy */}
        <div className="lg:col-span-8 bg-[#17243A] border-2 border-[#111111] p-6 shadow-[6px_6px_0px_#111111] text-white">
          <div className="font-mono text-xs text-[#93C5FD] font-bold mb-4 flex items-center justify-between border-b border-white/10 pb-2">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#245BDB]" />
              <span>worker.log</span>
            </span>
            <span className="text-[#DBEAFE]/60 text-[10px]">HOST: TECHOLAS-NODE-01</span>
          </div>
          <pre className="font-mono text-xs text-white/85 leading-relaxed overflow-x-auto whitespace-pre">
{`job: ml_pipeline_california_047 status=converged
worker: ingest language=python records=20640 features=8
pipeline: SimpleImputer(median) + StandardScaler()
cv: StratifiedKFold(n_splits=5)
tuning: GridSearchCV(RandomForestRegressor, params=16)
metrics: R2=0.824 RMSE=0.482 MAE=0.312
proof: single_house_predict(lat=37.88, lon=-122.23) -> $452,600
rag: Law Entrance LMS hybrid_retrieval latency=38ms status=ready`}
          </pre>
        </div>

        {/* Queue States */}
        <div className="lg:col-span-4 bg-[#EBE7DE] border-2 border-[#111111] p-6 shadow-[6px_6px_0px_#111111]">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111]/70 mb-4">
            QUEUE STATES
          </div>

          <div className="flex flex-col gap-3 font-mono text-xs">
            <div className="flex items-center gap-3 p-3 bg-white border border-[#111111] shadow-[2px_2px_0px_#111111]">
              <span className="w-20 bg-[#245BDB] text-white font-bold px-2 py-1 text-center border border-[#111111]">
                trained
              </span>
              <span className="text-[#111111]/80 text-[11px]">
                Ensembles tuned via GridSearchCV
              </span>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white border border-[#111111]">
              <span className="w-20 bg-[#DBEAFE] text-[#17243A] font-bold px-2 py-1 text-center border border-[#111111]">
                evaluating
              </span>
              <span className="text-[#111111]/80 text-[11px]">
                Cross-validation &amp; residual checks
              </span>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white border border-[#111111]">
              <span className="w-20 bg-[#DBEAFE] text-[#17243A] font-bold px-2 py-1 text-center border border-[#111111]">
                streaming
              </span>
              <span className="text-[#111111]/80 text-[11px]">
                FastAPI SSE chunks to Next.js UI
              </span>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white border border-[#111111]">
              <span className="w-20 bg-[#DBEAFE] text-[#17243A] font-bold px-2 py-1 text-center border border-[#111111]">
                cached
              </span>
              <span className="text-[#111111]/80 text-[11px]">
                Prompt &amp; vector fingerprints reused
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Numerical Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border-2 border-[#111111] p-5 shadow-[4px_4px_0px_#111111] hover:border-[#245BDB] transition-colors">
          <div className="font-display font-black text-3xl sm:text-4xl text-[#111111]">
            20.6k
          </div>
          <div className="font-mono text-[10px] text-[#111111]/60 uppercase tracking-widest font-bold mt-1">
            ROWS MODELED
          </div>
        </div>

        <div className="bg-white border-2 border-[#111111] p-5 shadow-[4px_4px_0px_#111111] hover:border-[#245BDB] transition-colors">
          <div className="font-display font-black text-3xl sm:text-4xl text-[#111111]">
            0.96
          </div>
          <div className="font-mono text-[10px] text-[#111111]/60 uppercase tracking-widest font-bold mt-1">
            PEAK ROC-AUC / R²
          </div>
        </div>

        <div className="bg-white border-2 border-[#111111] p-5 shadow-[4px_4px_0px_#111111] hover:border-[#245BDB] transition-colors">
          <div className="font-display font-black text-3xl sm:text-4xl text-[#111111]">
            3
          </div>
          <div className="font-mono text-[10px] text-[#111111]/60 uppercase tracking-widest font-bold mt-1">
            FLAGSHIP PLATFORMS
          </div>
        </div>

        <div className="bg-white border-2 border-[#111111] p-5 shadow-[4px_4px_0px_#111111] hover:border-[#245BDB] transition-colors">
          <div className="font-display font-black text-3xl sm:text-4xl text-[#111111]">
            &lt; 40ms
          </div>
          <div className="font-mono text-[10px] text-[#111111]/60 uppercase tracking-widest font-bold mt-1">
            INFERENCE LATENCY
          </div>
        </div>
      </div>
    </section>
  );
}
