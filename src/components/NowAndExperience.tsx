"use client";
import React from "react";
import { MapPin, Briefcase, GraduationCap, Award, Compass, CheckCircle2 } from "lucide-react";

const experienceList = [
  {
    period: "June 2025 – Present",
    role: "Data Science Intern (Integrated Diploma Program)",
    company: "Techolas Technologies Pvt. Ltd., Kochi",
    description:
      "Building predictive models and interactive dashboards using Python, SQL, Pandas, NumPy, Power BI, and Tableau on real-world datasets. Applying statistics, machine learning, deep learning, computer vision, and NLP through project-based industry workflows.",
    skills: ["Python", "SQL", "Machine Learning", "Power BI", "Tableau", "EDA", "Statistics"],
  },
  {
    period: "2024 – Present",
    role: "Co-Founder, Freelance Web Development Studio",
    company: "Venm (with Akash Tomy & Ashish P S)",
    description:
      "Independently designing, building, and delivering full-stack and AI-assisted ('vibe coding') web platforms end-to-end — from client pitch to live production — using Claude Code and Google Antigravity across LegalTech, EdTech, and retail businesses.",
    skills: ["Client Outreach", "Claude Code", "Google Antigravity", "Vibe Coding", "Next.js", "Django"],
  },
  {
    period: "Feb 2025 – March 2025",
    role: "Python Intern — Recallio Healthcare",
    company: "RISS Technologies, Kochi",
    description:
      "Developed Recallio, an end-to-end healthcare management platform for memory-impaired patients, including doctor/caregiver portals, appointment scheduling, and prescription workflows.",
    skills: ["Python", "Django", "Healthcare Platform", "MySQL", "Authentication"],
  },
  {
    period: "April 2024 – May 2024",
    role: "Python Full Stack Development Intern",
    company: "Byteboot Techno Solutions Pvt. Ltd.",
    description:
      "Built responsive web applications using Python and Django, implementing authentication, CRUD operations, relational database schemas, and RESTful API integrations.",
    skills: ["Python", "Django", "CRUD", "Relational DB", "REST APIs"],
  },
  {
    period: "2022 – 2025",
    role: "Bachelor of Computer Applications (BCA)",
    company: "Christ College Kattappana, Mahatma Gandhi University",
    description:
      "Three-year undergraduate program in computer science, software development, relational database management systems, data structures, and algorithms. Graduated with CGPA 6.52/10.",
    skills: ["Computer Applications", "C/C++", "Java", "SQL", "Software Engineering"],
  },
];

export default function NowAndExperience() {
  return (
    <section id="now" className="py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto border-t-2 border-black/10">
      {/* Green Marker and Headline */}
      <div className="w-12 h-1.5 bg-[#ccff00] border border-black mb-4" />

      {/* Now Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
        <div className="lg:col-span-5">
          <h2 className="text-4xl sm:text-6xl font-display leading-[1.0] text-black mb-4">
            <span className="font-light block">Now &amp;</span>
            <span className="font-black block">Active Focus</span>
          </h2>
          <p className="font-sans text-base text-black/75 leading-relaxed">
            What I am actively spending my engineering hours on this month.
          </p>
        </div>

        <div className="lg:col-span-7 bg-white border-2 border-black p-7 sm:p-9 shadow-[6px_6px_0px_#000] flex flex-col gap-6">
          <div className="flex items-center gap-2 font-mono text-xs text-black/70">
            <MapPin size={14} className="text-black" />
            <span>Based in Nilambur, Kerala, India (UTC+5:30)</span>
          </div>

          <div className="space-y-4 font-sans text-sm text-black/85 leading-relaxed">
            <p>
              <strong className="text-black font-bold">1. Techolas Technologies Diploma:</strong> Daily hands-on work with predictive statistical modeling, data cleaning, and executive dashboards across multi-thousand row real-world datasets in Python, SQL, and Power BI.
            </p>
            <p>
              <strong className="text-black font-bold">2. Venm Studio Deployments:</strong> Expanding client systems across LegalTech (Vakkeel &amp; Associates) and competitive exam education platforms (Indian Law School &amp; LMS) using AI-assisted vibe coding workflows in Claude Code and Google Antigravity.
            </p>
            <p>
              <strong className="text-black font-bold">3. Career Transition:</strong> Actively preparing for and interviewing for full-time roles as a <strong className="text-black font-bold bg-[#ccff00] px-1">Machine Learning Engineer</strong> and <strong className="text-black font-bold bg-[#ccff00] px-1">Data Scientist</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Track Record & Experience */}
      <div id="about" className="border-t-2 border-black/10 pt-16">
        <div className="w-12 h-1.5 bg-[#ccff00] border border-black mb-4" />
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl sm:text-6xl font-display leading-[1.0] text-black mb-4">
            <span className="font-light block">Track Record &amp;</span>
            <span className="font-black block">Credentials.</span>
          </h2>
          <p className="font-sans text-base text-black/75 leading-relaxed">
            Verified internship experience, entrepreneurial delivery with Venm, and university education.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {experienceList.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-black p-6 sm:p-8 shadow-[5px_5px_0px_#000] flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-bold bg-[#ccff00] border border-black px-2.5 py-0.5">
                    {exp.period}
                  </span>
                  <span className="font-mono text-xs text-black/60 font-semibold">
                    {exp.company}
                  </span>
                </div>

                <h3 className="font-display font-black text-xl sm:text-2xl text-black mt-1">
                  {exp.role}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-black/80 leading-relaxed mt-1 max-w-3xl">
                  {exp.description}
                </p>
              </div>

              <div className="flex flex-wrap md:flex-col gap-1.5 shrink-0 pt-2 md:pt-0">
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 bg-[#f4f1ea] border border-black font-mono text-[10px] text-black font-semibold text-center"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
