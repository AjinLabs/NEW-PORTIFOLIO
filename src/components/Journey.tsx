"use client";
import React from "react";
import { GraduationCap, Award, Compass, Briefcase, Building } from "lucide-react";

const milestones = [
  {
    period: "June 2025 – Present",
    tag: "CURRENT INTEGRATED DIPLOMA",
    gradient: "from-violet-500 via-fuchsia-500 to-indigo-600",
    badgeColor: "text-purple-300 bg-purple-950/40 border-purple-500/30",
    title: "Diploma in Data Science & Live Internship",
    institution: "Techolas Technologies Pvt. Ltd., Kochi",
    description:
      "Integrated internship program covering Python, SQL, Statistics, Machine Learning, Deep Learning, Computer Vision, NLP, Power BI, and Tableau on real-world datasets.",
    highlight: "Hands-on Project & Model Building",
  },
  {
    period: "2022 – 2025",
    tag: "UNDERGRADUATE DEGREE",
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
    badgeColor: "text-cyan-300 bg-cyan-950/40 border-cyan-500/30",
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Christ College Kattappana, Mahatma Gandhi University",
    description:
      "Core foundation in computer applications, programming, database management, software engineering, and analytical problem-solving.",
    highlight: "Graduated CGPA: 6.52 / 10",
  },
  {
    period: "Feb 2025 – March 2025",
    tag: "HEALTHCARE TECH INTERNSHIP",
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    badgeColor: "text-emerald-300 bg-emerald-950/40 border-emerald-500/30",
    title: "Python Intern — Recallio Platform",
    institution: "RISS Technologies, Kochi",
    description:
      "Developed Recallio, an end-to-end healthcare management platform for memory-impaired patients, including doctor/caregiver portals, appointments, and prescription workflows.",
    highlight: "Healthcare Patient Portal",
  },
  {
    period: "April 2024 – May 2024",
    tag: "FULL-STACK INTERNSHIP",
    gradient: "from-pink-500 via-rose-500 to-purple-600",
    badgeColor: "text-pink-300 bg-pink-950/40 border-pink-500/30",
    title: "Python Full Stack Development Intern",
    institution: "Byteboot Techno Solutions Pvt. Ltd.",
    description:
      "Built responsive web applications using Python and Django, implementing authentication, CRUD operations, database schemas, and relational integrations.",
    highlight: "Django & Relational Databases",
  },
  {
    period: "2024 – Present",
    tag: "ENTREPRENEURIAL VENTURE",
    gradient: "from-amber-400 via-orange-500 to-rose-600",
    badgeColor: "text-amber-300 bg-amber-950/40 border-amber-500/30",
    title: "Co-Founder — Venm Studio",
    institution: "Freelance Web Development Studio",
    description:
      "Co-founded with Akash Tomy & Ashish P S. Pitched and delivered full-stack and AI-assisted ('vibe coding') systems across LegalTech, EdTech, fashion, jewelry, and retail.",
    highlight: "Claude Code & Antigravity Workflows",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-28 px-4 sm:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300 font-semibold block mb-2">
              ACADEMIC &amp; CAREER PATH // MILESTONES
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
              Education &amp; Trajectory
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-300 max-w-md">
            From BCA graduation at Christ College Kattappana to specialized Data Science immersion at Techolas and entrepreneurial delivery through Venm.
          </p>
        </div>

        {/* Milestones Grid with Vivid Colors & Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {milestones.map((m, index) => (
            <div
              key={index}
              data-cursor-label="MILESTONE"
              className="glass-panel-glow hover:border-white/30 rounded-3xl p-7 sm:p-8 flex flex-col justify-between gap-6 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-cyan-300 font-bold tracking-wider">
                    {m.period}
                  </span>
                  <span
                    className={`font-mono text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${m.badgeColor}`}
                  >
                    {m.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {m.title}
                  </h3>
                  <p className="font-mono text-xs text-indigo-300 mt-1 font-medium">
                    {m.institution}
                  </p>
                </div>

                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {m.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 font-mono text-xs text-emerald-300 font-semibold">
                <Award size={15} className="text-emerald-400 shrink-0" />
                <span>{m.highlight}</span>
              </div>
            </div>
          ))}

          {/* Career Direction Card */}
          <div className="glass-panel rounded-3xl p-7 sm:p-8 flex flex-col justify-between gap-6 border border-purple-500/30 bg-gradient-to-br from-violet-950/40 via-slate-900/40 to-slate-950/50 shadow-xl shadow-purple-950/30">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs text-fuchsia-300 font-bold tracking-wider">
                CAREER TARGET // 2025 &amp; BEYOND
              </span>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                Machine Learning Engineer &amp; Data Scientist
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-200 leading-relaxed">
                Actively pursuing high-impact roles as a Machine Learning Engineer and Data Scientist. Combining mathematical foundations in regression/classification with modern Generative AI (RAG, Agents) and production full-stack engineering.
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-300 font-semibold pt-4 border-t border-white/10">
              <Compass size={15} className="text-cyan-400" />
              <span>Available for Full-Time Roles &amp; Contracts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
