"use client";
import React, { useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Layers,
  BookOpen,
  GraduationCap,
  BarChart3,
  Home,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface Project {
  id: string;
  category: string;
  gradient: string;
  badgeColor: string;
  badgeIcon: React.ElementType;
  title: string;
  tagline: string;
  client: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  stack: string[];
  liveUrl?: string;
  liveDomain?: string;
}

const projects: Project[] = [
  {
    id: "indian-law-school",
    category: "PROJECT 01 // FREELANCE WEB DEVELOPMENT",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badgeColor: "text-amber-300 bg-amber-950/40 border-amber-500/30",
    badgeIcon: BookOpen,
    title: "Indian Law School",
    tagline: "Premium Legal Education & KLEE Preparation Platform",
    client: "Freelance Client Project",
    highlights: [
      "Public-facing premium responsive website for premier legal education institute",
      "KLEE 2027 Super Batch, LL.B. Subject Mastery & NRI Legal Mastery course flows",
      "Bilingual content support in Malayalam and English for regional and NRI reach",
      "Lead generation, enrolment funnels, free legal resources, and interactive video blogs",
    ],
    metrics: [
      { label: "Design", value: "Bilingual" },
      { label: "Target", value: "KLEE 2027" },
      { label: "Audience", value: "Law Aspirants" },
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive UI/UX", "Lead Funnels"],
    liveUrl: "#",
    liveDomain: "indianlawschool.in",
  },
  {
    id: "law-entrance-lms",
    category: "PROJECT 02 // FREELANCE EDTECH & AI LMS",
    gradient: "from-cyan-400 via-blue-600 to-indigo-600",
    badgeColor: "text-cyan-300 bg-cyan-950/40 border-cyan-500/30",
    badgeIcon: GraduationCap,
    title: "Law Entrance LMS",
    tagline: "AI-Powered CBT Exam Engine & Student Analytics Platform",
    client: "Freelance EdTech Platform (Independently Scoped Software)",
    highlights: [
      "Full Computer-Based Test (CBT) engine: timer, negative marking, auto-submit & review",
      "AI weak-topic detection, personalized study advice & 'Watch This Class Again' engine",
      "Multi-level leaderboards, ELO-style competitive rating & 3-person study syndicates",
      "Projected Kerala rank estimation & cutoff safety-line visualization (Danger → Ultra Safe)",
      "Role-based workflows for Students, Teachers, Mentors, Parents and Academy Admins",
    ],
    metrics: [
      { label: "Engine", value: "CBT Mock Tests" },
      { label: "AI Feature", value: "Weak-Topic ML" },
      { label: "Ranking", value: "Kerala ELO" },
    ],
    stack: ["LMS Architecture", "Python", "Data Analytics", "CBT Engine", "AI Recommendations"],
    liveUrl: "#",
    liveDomain: "Academy Software",
  },
  {
    id: "vakkeel-associates",
    category: "PROJECT 03 // FREELANCE LEGALTECH CRM",
    gradient: "from-purple-500 via-fuchsia-600 to-indigo-600",
    badgeColor: "text-purple-300 bg-purple-950/40 border-purple-500/30",
    badgeIcon: Layers,
    title: "Vakkeel & Associates",
    tagline: "LegalTech CRM, Case Management & Advocate Platform",
    client: "Freelance Client Platform (Deployed Live)",
    highlights: [
      "Live and deployed at vakkeelandassociates.com & vakkeelandassociates.in",
      "Built using AI-assisted ('vibe coding') workflows in Claude Code & Google Antigravity",
      "Complete lead pipeline CRM: from first client enquiry to final judgment closure",
      "Client & Advocate portals with hearing date alerts, case manager workflows & document vault",
      "Advocate Referral System with configurable commission and partnership growth progression",
      "Multilingual experience: English + Malayalam with luxury legal branding",
    ],
    metrics: [
      { label: "Deployment", value: "Live Domains" },
      { label: "Workflow", value: "Vibe Coding" },
      { label: "Tools", value: "Claude & AGY" },
    ],
    stack: ["React / Next.js", "TypeScript", "Tailwind CSS", "Node.js", "RBAC Auth", "Claude Code", "Google Antigravity"],
    liveUrl: "https://vakkeelandassociates.com",
    liveDomain: "vakkeelandassociates.com",
  },
  {
    id: "ibm-hr-analytics",
    category: "ANALYTICS CASE STUDY // DATA SCIENCE",
    gradient: "from-emerald-400 via-teal-500 to-blue-500",
    badgeColor: "text-emerald-300 bg-emerald-950/40 border-emerald-500/30",
    badgeIcon: BarChart3,
    title: "IBM HR Analytics Dashboard",
    tagline: "Employee Attrition & Workforce Intelligence Study",
    client: "Data Analytics Case Study",
    highlights: [
      "Exploratory Data Analysis (EDA) on employee demographics, tenure, and department satisfaction",
      "Identified key drivers of employee attrition using statistical correlation and feature importance",
      "Interactive executive dashboards built in Power BI & Tableau with KPI summary cards",
      "Actionable workforce retention strategies based on empirical data insights",
    ],
    metrics: [
      { label: "Dataset", value: "IBM HR" },
      { label: "Analytics", value: "Attrition Drivers" },
      { label: "Dashboard", value: "Power BI / Tableau" },
    ],
    stack: ["Power BI", "Tableau", "Python", "Pandas", "EDA", "Statistical Analysis"],
    liveUrl: "#",
    liveDomain: "HR Analytics",
  },
  {
    id: "house-price-prediction",
    category: "MACHINE LEARNING // REGRESSION PIPELINE",
    gradient: "from-violet-500 via-indigo-600 to-cyan-500",
    badgeColor: "text-violet-300 bg-violet-950/40 border-violet-500/30",
    badgeIcon: Home,
    title: "California House Price Predictor",
    tagline: "End-to-End Supervised ML Pipeline on 20,640 Records",
    client: "Personal Machine Learning Project",
    highlights: [
      "Analyzed California Housing dataset (20,640 records) with thorough EDA and correlation heatmaps",
      "Engineered automated preprocessing pipeline: missing value imputation, scaling & one-hot encoding",
      "Benchmarked 5 regression models via cross-validation and hyperparameter tuned with GridSearchCV",
      "Evaluated using MAE, RMSE, R² metrics and deployed reusable real-time inference function",
    ],
    metrics: [
      { label: "Records", value: "20,640 Rows" },
      { label: "Tuning", value: "GridSearchCV" },
      { label: "Metrics", value: "MAE / RMSE / R²" },
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "GridSearchCV", "Matplotlib"],
    liveUrl: "#",
    liveDomain: "ML Pipeline",
  },
  {
    id: "fifa-tournament-recallio",
    category: "HEALTHCARE & TOURNAMENTS // FULL-STACK",
    gradient: "from-rose-500 via-pink-600 to-purple-600",
    badgeColor: "text-rose-300 bg-rose-950/40 border-rose-500/30",
    badgeIcon: Sparkles,
    title: "Recallio & FIFA World Cup 2026",
    tagline: "Healthcare Patient Portal & Tournament Prediction Web App",
    client: "RISS Technologies Internship & Harisree Club",
    highlights: [
      "Recallio: Healthcare management platform for memory-impaired patients, doctor/caregiver portals and prescriptions",
      "FIFA World Cup 2026: Score-prediction web app for Harisree Club's 100+ participants with live leaderboards",
      "Real-time database integration with Firebase and zero-downtime deployment on Vercel",
    ],
    metrics: [
      { label: "Recallio", value: "Healthcare App" },
      { label: "FIFA App", value: "100+ Users" },
      { label: "Stack", value: "Firebase / Vercel" },
    ],
    stack: ["Python", "Django", "Firebase", "JavaScript", "Vercel", "Healthcare Tech"],
    liveUrl: "#",
    liveDomain: "Web Applications",
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
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300 font-semibold block mb-2">
              PORTFOLIO SHOWCASE // MASTER CASE STUDIES
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
              Selected Major Projects
            </h2>
          </div>

          {/* Filter Pills with Glassmorphism */}
          <div className="flex flex-wrap gap-2">
            {["ALL", "FREELANCE", "EDTECH", "LEGALTECH", "DATA SCIENCE", "MACHINE LEARNING"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                data-cursor-label="FILTER"
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold tracking-wider transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/30"
                    : "glass-pill text-slate-300 hover:text-white hover:border-white/25"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid with Rich Mixed Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const BadgeIcon = project.badgeIcon;

            return (
              <div
                key={project.id}
                data-cursor-label="CASE STUDY"
                className="group relative glass-panel-glow hover:border-white/40 rounded-3xl p-7 sm:p-9 flex flex-col justify-between gap-8 transition-all duration-300 shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Floating ambient colored gradient aura */}
                <div
                  className={`absolute -top-10 -right-10 w-44 h-44 bg-gradient-to-br ${project.gradient} opacity-15 group-hover:opacity-30 blur-3xl rounded-full transition-opacity duration-500 pointer-events-none`}
                />

                <div className="flex flex-col gap-5 relative z-10">
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex items-center gap-2 px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider border ${project.badgeColor}`}
                    >
                      <BadgeIcon size={13} />
                      {project.category}
                    </span>

                    {project.liveUrl && project.liveUrl !== "#" ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-label="VISIT"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-mono text-[10px] uppercase font-bold transition-all"
                      >
                        <span>Live Site</span>
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="font-mono text-[10px] text-slate-400">
                        {project.client}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-indigo-300 mt-1 font-medium">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <ul className="flex flex-col gap-2 font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics & Stack Footer */}
                <div className="flex flex-col gap-4 pt-5 border-t border-white/10 relative z-10">
                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 bg-black/40 border border-white/10 rounded-2xl p-3 backdrop-blur-md">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="flex flex-col text-center">
                        <span className="font-display font-extrabold text-base text-white">
                          {m.value}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 font-mono text-[10px] text-slate-300 font-medium group-hover:border-purple-400/30 transition-colors"
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
