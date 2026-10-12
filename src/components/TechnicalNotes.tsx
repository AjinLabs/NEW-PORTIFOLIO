"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

const notes = [
  {
    num: "01",
    tag: "EVALUATION // AI",
    title: "Why pure LLM generation without deterministic metrics fails in production",
    summary:
      "A generated answer that looks convincing to a non-technical reader can still hallucinate critical legal clauses. In both the Law Entrance LMS and Vakkeel & Associates, ground-truth scorecards and citation cross-encoders are non-negotiable.",
  },
  {
    num: "02",
    tag: "RETRIEVAL // RAG",
    title: "Designing token-aware vector ingestion for domain-specific knowledge bases",
    summary:
      "Naive chunking breaks legal statutes and multi-part questions across boundaries. Hybrid BM25 lexical matching paired with dense embeddings ensures edge cases are never dropped in production.",
  },
  {
    num: "03",
    tag: "DEPLOYMENT // DATA SCIENCE",
    title: "From Jupyter Notebook to production: why model serialization & latency matter",
    summary:
      "A trained Scikit-learn model inside a notebook delivers zero commercial value. Building automated pipelines that serialize estimators with GridSearchCV and expose sub-40ms FastAPI endpoints is where data science meets reality.",
  },
  {
    num: "04",
    tag: "WORKFLOW // VENM STUDIO",
    title: "Vibe coding at scale: delivering client platforms with Claude Code & Google Antigravity",
    summary:
      "How our studio Venm builds end-to-end full-stack web platforms from client pitch to live production on Vercel using modern AI agentic coding workflows while preserving rigorous architectural control.",
  },
];

export default function TechnicalNotes() {
  return (
    <section id="notes" className="py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto border-t-2 border-black/10">
      {/* Green Marker and Headline */}
      <div className="w-12 h-1.5 bg-[#ccff00] border border-black mb-4" />

      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl sm:text-6xl font-display leading-[1.0] text-black mb-4">
          <span className="font-light block">Technical notes</span>
          <span className="font-black block">I should write fully.</span>
        </h2>
        <p className="font-sans text-base text-black/75 leading-relaxed">
          Architectural convictions, lessons learned from client deployments, and what breaks when theory meets live traffic.
        </p>
      </div>

      {/* Grid of Notes Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {notes.map((note) => (
          <div
            key={note.num}
            className="group bg-white border-2 border-black p-7 sm:p-8 shadow-[5px_5px_0px_#000] flex flex-col justify-between gap-6 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#000] transition-all cursor-pointer"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] bg-[#ccff00] border border-black font-bold px-2.5 py-0.5 tracking-wider">
                  {note.tag}
                </span>
                <span className="font-mono text-sm font-black text-black/40 group-hover:text-black transition-colors">
                  {note.num}
                </span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl text-black leading-snug group-hover:text-black">
                {note.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-black/75 leading-relaxed">
                {note.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-black/10 flex items-center justify-between font-mono text-xs font-bold text-black group-hover:text-black">
              <span>READ ARCHITECTURE NOTE</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
