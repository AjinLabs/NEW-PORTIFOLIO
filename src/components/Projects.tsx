"use client";
import React, { useState } from "react";
import { ArrowUpRight, ExternalLink, Check, Code2, Terminal, Layers, Sparkles } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto border-t-2 border-black/10">
      {/* Green Marker and Headline */}
      <div className="w-12 h-1.5 bg-[#ccff00] border border-black mb-4" />

      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl sm:text-6xl font-display leading-[1.0] text-black mb-4">
          <span className="font-light block">Projects, with the</span>
          <span className="font-black block">system parts exposed.</span>
        </h2>
        <p className="font-sans text-base text-black/75 leading-relaxed">
          I am not trying to show every button I built. I am trying to show the constraints I noticed and the engineering decisions I made.
        </p>
      </div>

      {/* Featured Project 01: Law Entrance LMS */}
      <div className="bg-[#ffffff] border-2 border-black p-8 sm:p-12 shadow-[8px_8px_0px_#000] mb-14 relative">
        <div className="inline-block transform -rotate-1 bg-[#ccff00] border-2 border-black px-3.5 py-1 font-mono text-[11px] font-black uppercase tracking-wider shadow-[3px_3px_0px_#000] mb-6">
          FLAGSHIP SYSTEM / ARCHITECTURE IN PUBLIC
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-black">
                Law Entrance LMS
              </h3>
              <p className="font-mono text-xs text-black/60 font-semibold mt-1">
                AI-Powered LMS, CBT &amp; Student Analytics Platform
              </p>
            </div>

            <div className="space-y-4 font-sans text-sm text-black/80 leading-relaxed">
              <p>
                <strong className="text-black font-bold">The Constraint:</strong> Law entrance aspirants preparing for competitive examinations (KLEE) needed realistic Computer-Based Test (CBT) mock simulations with negative marking, timers, and immediate weak-topic diagnosis without manual instructor grading overhead.
              </p>
              <p>
                <strong className="text-black font-bold">The Architecture:</strong> Engineered a full-featured Learning Management System combining an interactive CBT exam engine with automated performance analytics, ELO-style ratings, 3-person study syndicates, and projected Kerala rank estimation.
              </p>
            </div>

            {/* Key Engineering Modules List */}
            <div className="border-t border-black/10 pt-4">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-black block mb-3">
                SYSTEM MODULES BUILT:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs text-black/80">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#ccff00] border border-black" />
                  CBT Mock Engine (Timer &amp; Negative Marking)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#ccff00] border border-black" />
                  AI Weak-Topic Detection &amp; Advice
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#ccff00] border border-black" />
                  ELO-Style Competitive Rating
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#ccff00] border border-black" />
                  Projected Kerala Rank Estimation
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Technical Pipeline Terminal Box */}
          <div className="lg:col-span-5 bg-[#111111] border-2 border-black p-5 text-white shadow-[4px_4px_0px_#000]">
            <div className="font-mono text-[11px] text-[#ccff00] font-bold mb-3 border-b border-white/10 pb-2 flex justify-between">
              <span>law-entrance-lms pipeline</span>
              <span className="text-white/40">v2.1</span>
            </div>
            <pre className="font-mono text-[11px] text-white/80 leading-relaxed overflow-x-auto whitespace-pre">
{`$ test_engine --start
timer: 120m | negative_mark: 0.25
cbt_status: active (auto-submit armed)

$ analyze_performance(student_id=402)
accuracy: 84.2% | percentile: 96.8
weak_topic: "Constitutional Writs"
recommendation: "Watch Class 04 Again"
projected_kerala_rank: 142 (Safe Zone)`}
            </pre>
            <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
              {["Python", "LMS Engine", "Data Analytics", "CBT System", "Ranking ELO"].map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 bg-white/10 border border-white/20 font-mono text-[10px] text-white/90"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Project 02: Vakkeel & Associates */}
      <div className="bg-[#ffffff] border-2 border-black p-8 sm:p-12 shadow-[8px_8px_0px_#000] mb-14 relative">
        <div className="inline-block transform -rotate-1 bg-[#ccff00] border-2 border-black px-3.5 py-1 font-mono text-[11px] font-black uppercase tracking-wider shadow-[3px_3px_0px_#000] mb-6">
          LIVE DEPLOYED AT VAKKEELANDASSOCIATES.COM
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-display font-black text-3xl sm:text-4xl text-black">
                  Vakkeel &amp; Associates
                </h3>
                <a
                  href="https://vakkeelandassociates.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-[#f4f1ea] border border-black hover:bg-[#ccff00] transition-colors"
                  aria-label="Visit vakkeelandassociates.com"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="font-mono text-xs text-black/60 font-semibold mt-1">
                LegalTech CRM, Case Management &amp; Advocate Platform
              </p>
            </div>

            <div className="space-y-4 font-sans text-sm text-black/80 leading-relaxed">
              <p>
                <strong className="text-black font-bold">The Constraint:</strong> A multi-practice legal advisory needed an end-to-end digital infrastructure modernizing how they manage client enquiries, advocate case assignments, hearing schedules, and cross-specialization referral fees.
              </p>
              <p>
                <strong className="text-black font-bold">The Architecture:</strong> Built and deployed end-to-end using AI-assisted (&quot;vibe coding&quot;) workflows in Claude Code and Google Antigravity. Features a luxury public web presence, full client CRM pipeline, multi-role RBAC (Super Admin, Partners, Advocates, Clients), and bilingual English + Malayalam support.
              </p>
            </div>

            <div className="border-t border-black/10 pt-4">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-black block mb-3">
                SYSTEM MODULES BUILT:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs text-black/80">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#ccff00] border border-black" />
                  CRM Lead Pipeline (Enquiry to Closure)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#ccff00] border border-black" />
                  Advocate Referral &amp; Commission Tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#ccff00] border border-black" />
                  Client Portal with Hearing Date Alerts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#ccff00] border border-black" />
                  Vibe Coded with Claude Code &amp; AGY
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#111111] border-2 border-black p-5 text-white shadow-[4px_4px_0px_#000]">
            <div className="font-mono text-[11px] text-[#ccff00] font-bold mb-3 border-b border-white/10 pb-2 flex justify-between">
              <span>vakkeel-crm topology</span>
              <span className="text-white/40">production</span>
            </div>
            <pre className="font-mono text-[11px] text-white/80 leading-relaxed overflow-x-auto whitespace-pre">
{`$ status vakkeelandassociates.com
dns: resolved (vakkeelandassociates.in alias)
auth: JWT with Role-Based Access Control
portals: Client | Advocate | Case Manager
pipeline: lead -> hearing -> verdict -> archive
bilingual: Malayalam + English
vibe_workflow: Claude Code + Antigravity`}
            </pre>
            <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
              {["Next.js", "TypeScript", "Tailwind CSS", "RBAC Auth", "Claude Code", "Google Antigravity"].map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 bg-white/10 border border-white/20 font-mono text-[10px] text-white/90"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Other Projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Project 03: Indian Law School */}
        <div className="bg-white border-2 border-black p-6 shadow-[5px_5px_0px_#000] flex flex-col justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] bg-[#ccff00] border border-black font-bold px-2 py-0.5 w-fit mb-3">
              FREELANCE WEB
            </div>
            <h4 className="font-display font-black text-xl text-black">
              Indian Law School
            </h4>
            <p className="font-mono text-xs text-black/60 font-semibold mt-0.5 mb-3">
              Premium Legal Education Platform
            </p>
            <p className="font-sans text-xs text-black/80 leading-relaxed">
              Bilingual (Malayalam &amp; English) legal education website presenting KLEE 2027 Super Batch, LL.B. Subject Mastery, course enrolment flows, and free preparation resources.
            </p>
          </div>
          <div className="border-t border-black/10 pt-3 flex flex-wrap gap-1.5">
            {["HTML5", "CSS3", "JavaScript", "Responsive UI"].map((t) => (
              <span key={t} className="px-2 py-0.5 bg-[#f4f1ea] border border-black font-mono text-[10px]">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Project 04: California House Price Prediction */}
        <div className="bg-white border-2 border-black p-6 shadow-[5px_5px_0px_#000] flex flex-col justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] bg-[#ccff00] border border-black font-bold px-2 py-0.5 w-fit mb-3">
              MACHINE LEARNING PIPELINE
            </div>
            <h4 className="font-display font-black text-xl text-black">
              California House Predictor
            </h4>
            <p className="font-mono text-xs text-black/60 font-semibold mt-0.5 mb-3">
              20,640 Records · GridSearchCV
            </p>
            <p className="font-sans text-xs text-black/80 leading-relaxed">
              End-to-end supervised regression pipeline comparing 5 models on California Housing data, tuned with GridSearchCV (R²=0.824, RMSE=0.482), with real-time inference function.
            </p>
          </div>
          <div className="border-t border-black/10 pt-3 flex flex-wrap gap-1.5">
            {["Python", "Scikit-learn", "Pandas", "GridSearchCV"].map((t) => (
              <span key={t} className="px-2 py-0.5 bg-[#f4f1ea] border border-black font-mono text-[10px]">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Project 05: IBM HR Analytics & Recallio */}
        <div className="bg-white border-2 border-black p-6 shadow-[5px_5px_0px_#000] flex flex-col justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] bg-[#ccff00] border border-black font-bold px-2 py-0.5 w-fit mb-3">
              DATA ANALYTICS &amp; HEALTHCARE
            </div>
            <h4 className="font-display font-black text-xl text-black">
              IBM HR &amp; Recallio Platform
            </h4>
            <p className="font-mono text-xs text-black/60 font-semibold mt-0.5 mb-3">
              Power BI · Tableau · Healthcare Tech
            </p>
            <p className="font-sans text-xs text-black/80 leading-relaxed">
              IBM HR Attrition analytics dashboard analyzing workforce turnover; plus Recallio healthcare platform for memory-impaired patients built during RISS Technologies internship.
            </p>
          </div>
          <div className="border-t border-black/10 pt-3 flex flex-wrap gap-1.5">
            {["Power BI", "Tableau", "Python", "Django", "Healthcare"].map((t) => (
              <span key={t} className="px-2 py-0.5 bg-[#f4f1ea] border border-black font-mono text-[10px]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
