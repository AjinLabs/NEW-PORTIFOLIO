"use client";
import React from "react";
import { Terminal, Check, Briefcase, Award, Bot, Sparkles, Building2 } from "lucide-react";

const skillClusters = [
  {
    category: "Machine Learning & GenAI",
    gradient: "from-violet-500 to-fuchsia-500",
    badge: "MODELS & INTELLIGENCE",
    badgeColor: "text-purple-300 bg-purple-950/40 border-purple-500/30",
    skills: [
      { name: "Scikit-learn (Regression & Classification)", level: "Production" },
      { name: "Hyperparameter Tuning (GridSearchCV)", level: "Production" },
      { name: "Feature Engineering & Cross-Validation", level: "Production" },
      { name: "Retrieval-Augmented Generation (RAG)", level: "Active" },
      { name: "LLMs, AI Agents & Prompt Engineering", level: "Active" },
      { name: "Model Evaluation (MAE, RMSE, R²)", level: "Production" },
    ],
  },
  {
    category: "Data Science & Analytics",
    gradient: "from-cyan-400 to-blue-600",
    badge: "STATISTICS & ETL",
    badgeColor: "text-cyan-300 bg-cyan-950/40 border-cyan-500/30",
    skills: [
      { name: "Pandas & NumPy Tabular Processing", level: "Production" },
      { name: "Exploratory Data Analysis (EDA)", level: "Production" },
      { name: "SQL & Relational Schemas (MySQL)", level: "Production" },
      { name: "Power BI & Tableau Dashboards", level: "Production" },
      { name: "Data Cleansing & Automated Pipelines", level: "Production" },
      { name: "Matplotlib, Seaborn & MS Excel", level: "Production" },
    ],
  },
  {
    category: "Full-Stack Web & Vibe Coding",
    gradient: "from-emerald-400 to-teal-500",
    badge: "SYSTEMS & TOOLS",
    badgeColor: "text-emerald-300 bg-emerald-950/40 border-emerald-500/30",
    skills: [
      { name: "Python / Django Web Development", level: "Production" },
      { name: "Claude Code & Google Antigravity", level: "Vibe Coding" },
      { name: "Next.js & React Frontend UI", level: "Production" },
      { name: "RESTful APIs & CRUD Systems", level: "Production" },
      { name: "Firebase, MySQL & Vercel", level: "Production" },
      { name: "Git, GitHub & VS Code", level: "Production" },
    ],
  },
];

const internshipExperience = [
  {
    role: "Data Science Intern (Integrated Diploma Program)",
    organization: "Techolas Technologies Pvt. Ltd., Kochi",
    period: "June 2025 – Present",
    gradient: "from-indigo-500 to-cyan-500",
    details:
      "Building predictive models and interactive dashboards using Python, SQL, Pandas, NumPy, Power BI, and Tableau on real-world datasets. Applying statistics, machine learning, deep learning, and computer vision through project-based industry workflows.",
  },
  {
    role: "Python Full Stack Development Intern",
    organization: "Byteboot Techno Solutions Pvt. Ltd.",
    period: "April 2024 – May 2024",
    gradient: "from-purple-500 to-fuchsia-500",
    details:
      "Built responsive web applications using Python and Django, implementing authentication, CRUD operations, database schemas, and relational integrations.",
  },
  {
    role: "Python Intern",
    organization: "RISS Technologies, Kochi",
    period: "February 2025 – March 2025",
    gradient: "from-emerald-400 to-teal-500",
    details:
      "Developed Recallio, a healthcare management platform for memory-impaired patients, including doctor/caregiver portals and appointment and prescription management.",
  },
];

export default function About() {
  return (
    <section id="experience" className="py-28 px-4 sm:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        {/* Human Manifesto with Rich Colors & Glassmorphism */}
        <div className="glass-panel-glow rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          {/* Ambient colorful refractions */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-violet-600/20 via-pink-500/15 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-transparent blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-8 relative z-10">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-cyan-300 font-semibold">
              <Terminal size={14} className="text-cyan-400" />
              <span>ABOUT AJIN K // THE HUMAN BEHIND THE CODE</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase max-w-4xl leading-[1.05]">
              Bridging Rigorous Science &amp; Production Web Software.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-200 font-sans text-sm sm:text-base leading-relaxed">
              <p>
                Based in <strong className="text-white font-semibold">Nilambur, Kerala</strong>, I am a BCA graduate working toward a career as a <strong className="text-cyan-300 font-semibold">Machine Learning Engineer</strong> and <strong className="text-violet-300 font-semibold">Data Scientist</strong>. My freelance project journey spans Web Development, Data Science, AI/ML, Analytics, EdTech, and LegalTech.
              </p>
              <p>
                Currently completing my Diploma in Data Science at <strong className="text-white font-semibold">Techolas Technologies</strong> while co-founding <strong className="text-fuchsia-300 font-semibold">Venm</strong> studio. I believe predictive models only fulfill their true purpose when embedded inside responsive, human-centered web software that solves real business pain points.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10 font-mono text-xs text-slate-300">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-200">
                <Sparkles size={12} className="text-yellow-300" />
                VIBE CODING PRACTITIONER
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-200">
                CLAUDE CODE &amp; GOOGLE ANTIGRAVITY
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-200">
                TECHOLAS TECHNOLOGIES DIPLOMA
              </span>
            </div>
          </div>
        </div>

        {/* Venm Studio Spotlight Card */}
        <div id="venm" className="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-950/40">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-gradient-to-tr from-fuchsia-600 to-violet-600 text-white shadow-lg shadow-purple-500/30">
                <Bot size={24} />
              </div>
              <div>
                <span className="font-mono text-[10px] text-fuchsia-300 tracking-widest uppercase font-bold">
                  CO-FOUNDER VENTURE
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                  Venm — Freelance Web Development Studio
                </h3>
              </div>
            </div>
            <span className="font-mono text-xs text-slate-400 bg-white/[0.05] px-3.5 py-1.5 rounded-full border border-white/10">
              With Akash Tomy &amp; Ashish P S
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div className="flex flex-col gap-2 p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-fuchsia-400" />
                Vibe Coding Workflows
              </h4>
              <p>
                Independently designing, building, and delivering full-stack and AI-assisted platforms from client pitch to live production using Claude Code and Google Antigravity.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Multi-Industry Delivery
              </h4>
              <p>
                Delivering custom platforms across LegalTech (Vakkeel &amp; Associates), EdTech (Indian Law School &amp; LMS), Healthcare, Hospitality, Fashion, and Retail.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                End-to-End Ownership
              </h4>
              <p>
                Full lifecycle ownership: cold client outreach, technical proposal pitching, architecture design, frontend/backend engineering, and live deployment.
              </p>
            </div>
          </div>
        </div>

        {/* Core Skill Taxonomy Grid */}
        <div className="flex flex-col gap-8">
          <div className="border-b border-white/10 pb-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300 font-semibold block mb-2">
              TECHNICAL REPERTOIRE
            </span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl uppercase text-white tracking-tight">
              Core Skills &amp; Libraries
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillClusters.map((cluster) => (
              <div
                key={cluster.category}
                className="glass-panel hover:border-white/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-6 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${cluster.badgeColor}`}
                    >
                      {cluster.badge}
                    </span>
                    <Award size={16} className="text-slate-400" />
                  </div>

                  <h4 className="font-display font-extrabold text-xl text-white mb-6">
                    {cluster.category}
                  </h4>

                  <div className="flex flex-col gap-2.5">
                    {cluster.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between font-mono text-xs py-2 border-b border-white/[0.05]"
                      >
                        <span className="text-slate-200 flex items-center gap-2">
                          <Check size={12} className="text-cyan-400 shrink-0" />
                          {skill.name}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
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

        {/* Verified Internship Experience */}
        <div className="flex flex-col gap-8">
          <div className="border-b border-white/10 pb-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300 font-semibold block mb-2">
              PRACTICAL INTERNSHIPS
            </span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl uppercase text-white tracking-tight">
              Internship Experience
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internshipExperience.map((exp, i) => (
              <div
                key={i}
                className="glass-panel-glow rounded-3xl p-7 sm:p-8 flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-cyan-300 font-bold tracking-wider">
                      {exp.period}
                    </span>
                    <Briefcase size={16} className="text-slate-400" />
                  </div>

                  <h4 className="font-display font-bold text-xl text-white">
                    {exp.role}
                  </h4>
                  <span className="font-mono text-xs text-indigo-300 uppercase tracking-wider font-semibold">
                    {exp.organization}
                  </span>

                  <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
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
