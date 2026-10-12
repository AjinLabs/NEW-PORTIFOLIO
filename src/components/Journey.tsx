"use client";
import React from "react";
import { GraduationCap, Award, Compass } from "lucide-react";

const milestones = [
  {
    period: "2025 → 2026",
    tag: "PROFESSIONAL SPECIALIZATION",
    title: "Data Science Trainee",
    institution: "Techolas Kochi",
    description:
      "Advanced hands-on immersion in applied statistical modeling, supervised/unsupervised machine learning, database architectures, and business analytics workflows.",
    highlight: "ML Pipelines & Big Data Analytics",
  },
  {
    period: "2022 → 2025",
    tag: "UNDERGRADUATE DEGREE",
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Christ College Puliyanmala (Mahatma Gandhi University)",
    description:
      "Core foundation in computer science, data structures, algorithms, relational database management systems, and software engineering principles.",
    highlight: "Graduated Grade B+",
  },
  {
    period: "2024",
    tag: "ENGINEERING CERTIFICATION",
    title: "Python Full Stack Development",
    institution: "Byteboot Techno Solutions",
    description:
      "Focused practical training on full-stack architecture using Python and Django, building REST APIs, managing authentication, and deploying web services.",
    highlight: "Django Web Systems & REST APIs",
  },
  {
    period: "2020 → 2022",
    tag: "ACADEMIC FOUNDATION",
    title: "Higher Secondary (Science Stream)",
    institution: "Kerala State Board",
    description:
      "Mathematics, Physics, Chemistry, and Computer Science foundation that established strong analytical reasoning.",
    highlight: "Scored 961 / 1200 · Grade B+",
  },
  {
    period: "2020",
    tag: "ACADEMIC EXCELLENCE",
    title: "Secondary School Leaving Certificate (SSLC)",
    institution: "VMC GHSS Wandoor",
    description:
      "Distinction in secondary education with highest-tier academic performance across all subjects.",
    highlight: "A+ in All Subjects (Full A+)",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-28 px-4 sm:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-indigo-400 block mb-3">
              TIMELINE // FOUNDATIONS &amp; TRAJECTORY
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
              Academic &amp; Career Journey
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-md">
            From strong foundations in science and computer applications to dedicated specialization in data science and full-stack systems.
          </p>
        </div>

        {/* Milestone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((m, index) => (
            <div
              key={index}
              data-cursor-label="MILESTONE"
              className="bg-black/60 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-2xl p-7 sm:p-8 flex flex-col justify-between gap-6 transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-indigo-400 font-bold tracking-wider">
                    {m.period}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 bg-white/[0.04] px-2 py-1 rounded">
                    {m.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {m.title}
                  </h3>
                  <p className="font-mono text-xs text-zinc-400 mt-1">
                    {m.institution}
                  </p>
                </div>

                <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {m.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2 font-mono text-xs text-emerald-400">
                <Award size={14} className="shrink-0" />
                <span>{m.highlight}</span>
              </div>
            </div>
          ))}

          {/* Forward Trajectory Card */}
          <div className="bg-gradient-to-br from-indigo-950/40 via-black to-black border border-indigo-500/30 rounded-2xl p-7 sm:p-8 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs text-indigo-400 font-bold tracking-wider">
                LOOKING FORWARD //
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Next Frontier
              </h3>
              <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Actively expanding research into Agentic AI orchestration, low-latency edge inference, and enterprise RAG deployments that solve complex operational bottlenecks.
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-indigo-300">
              <Compass size={14} />
              <span>Continuously Building &amp; Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
