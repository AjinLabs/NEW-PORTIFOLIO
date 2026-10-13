"use client";
import React from "react";
import { ArrowDown, Mail, ExternalLink, Terminal, Sparkles } from "lucide-react";

const GithubIcon = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
  </svg>
);

const LinkedinIcon = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero({ isLoaded }: { isLoaded?: boolean }) {
  return (
    <section className="relative px-4 sm:px-8 lg:px-16 pt-12 pb-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Headline and Proof */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Slanted Electric Blue Badge */}
          <div className="inline-block transform -rotate-1 bg-[#245BDB] text-white border-2 border-[#111111] px-3.5 py-1 font-mono text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_#111111] mb-8">
            MACHINE LEARNING ENGINEER / DATA SCIENTIST / VENM STUDIO / PYTHON / RAG
          </div>

          {/* Master Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-[#111111] mb-8 font-display">
            <span className="font-light block">Ajin K</span>
            <span className="font-black block">engineers</span>
            <span className="font-black block">machine learning</span>
            <span className="font-black block">&amp; data systems</span>
            <span className="font-light block">that can be audited.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg text-[#111111]/80 max-w-xl leading-relaxed mb-10">
            Data Scientist and Machine Learning Engineer with production-ready judgment across Python, Scikit-learn, tabular analytics, RAG architectures, and AI-assisted full-stack platforms. Co-founder of Venm studio.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#architecture"
              className="bg-[#245BDB] text-white border-2 border-[#111111] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider shadow-[4px_4px_0px_#111111] hover:bg-[#1d4ed8] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              SHOW THE PIPELINE
            </a>

            <a
              href="#projects"
              className="bg-white text-[#111111] border-2 border-[#111111] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider shadow-[4px_4px_0px_#111111] hover:bg-[#DBEAFE] hover:text-[#17243A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              READ THE DEEP DIVE
            </a>

            <a
              href="#contact"
              className="font-mono text-xs font-bold uppercase text-[#111111] hover:text-[#245BDB] hover:underline px-3 py-3.5 tracking-wider transition-colors"
            >
              GRAB RESUME
            </a>
          </div>

          {/* Social Proof Pills */}
          <div className="flex flex-wrap gap-2.5">
            <a
              href="https://github.com/AjinLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-[#111111] border-2 border-[#111111] px-4 py-2 font-mono text-xs font-semibold shadow-[2px_2px_0px_#111111] hover:bg-[#DBEAFE] hover:text-[#17243A] transition-colors"
            >
              <GithubIcon size={13} />
              <span>GITHUB</span>
            </a>

            <a
              href="https://linkedin.com/in/ajinkofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-[#111111] border-2 border-[#111111] px-4 py-2 font-mono text-xs font-semibold shadow-[2px_2px_0px_#111111] hover:bg-[#DBEAFE] hover:text-[#17243A] transition-colors"
            >
              <LinkedinIcon size={13} />
              <span>LINKEDIN</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 bg-white text-[#111111] border-2 border-[#111111] px-4 py-2 font-mono text-xs font-semibold shadow-[2px_2px_0px_#111111] hover:bg-[#DBEAFE] hover:text-[#17243A] transition-colors"
            >
              <Mail size={13} />
              <span>CONTACT</span>
            </a>
          </div>
        </div>

        {/* Right Column: Polaroid Blueprint Card */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center pt-4">
          <div className="relative w-full max-w-sm sm:max-w-md transform sm:rotate-2 hover:rotate-0 transition-transform duration-300">
            {/* Polaroid Frame */}
            <div className="bg-white border-2 border-[#111111] p-5 sm:p-6 shadow-[8px_8px_0px_#111111] flex flex-col gap-5">
              {/* Image / Graphic Container */}
              <div className="relative w-full aspect-[4/3] bg-[#EBE7DE] border-2 border-[#111111] overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#17243A] text-white flex items-center justify-center mb-3 border-2 border-[#111111] font-display font-black text-2xl shadow-[3px_3px_0px_#245BDB]">
                  AK
                </div>
                <h3 className="font-display font-extrabold text-xl text-[#111111]">
                  AJIN K
                </h3>
                <span className="font-mono text-xs text-[#111111]/70 mt-1">
                  Nilambur, Kerala, India
                </span>
                <span className="font-mono text-[10px] text-[#17243A] font-bold uppercase tracking-wider bg-[#DBEAFE] border border-[#111111] px-2.5 py-0.5 mt-2">
                  Techolas Technologies &amp; Venm Studio
                </span>
              </div>

              {/* Code Snippet Below Image */}
              <div className="font-mono text-xs text-[#111111] space-y-3 pt-2">
                <div>
                  <div className="text-[#111111]/50 text-[11px]">$ identity</div>
                  <div className="font-semibold text-[#111111]">
                    data science + machine learning + full-stack platforms
                  </div>
                </div>

                <div>
                  <div className="text-[#111111]/50 text-[11px]">$ flagship</div>
                  <div className="font-semibold text-[#111111]">
                    Law Entrance LMS: AI weak-topic detection + CBT engine
                  </div>
                </div>

                <div>
                  <div className="text-[#111111]/50 text-[11px]">$ proof</div>
                  <div className="font-semibold text-[#111111]">
                    Vakkeel &amp; Associates: live CRM, RBAC, deployed at vakkeelandassociates.com
                  </div>
                </div>
              </div>
            </div>

            {/* Slanted Sticker Badge */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 transform -rotate-3 bg-[#245BDB] text-white border-2 border-[#111111] px-4 py-2 font-mono text-xs font-black uppercase tracking-wider shadow-[4px_4px_0px_#111111]">
              FLAGSHIP: AI LMS &amp; LEGALTECH
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
