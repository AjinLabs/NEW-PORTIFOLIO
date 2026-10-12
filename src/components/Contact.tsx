"use client";
import React, { useState, useEffect } from "react";
import {
  Mail,
  MessageCircle,
  Copy,
  Check,
  ArrowUpRight,
  Clock,
  Send,
  Sparkles,
} from "lucide-react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [localTime, setLocalTime] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "AI / ML Engineering",
    message: "",
  });

  // Live ticking clock for Kochi (UTC+5:30)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("ajink.offcial@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    // Simulate swift form processing
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-8 lg:px-16 relative bg-[#040406]">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-indigo-400 block mb-3">
              INITIATE COLLABORATION // CONTACT
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tight text-white leading-[1.0]">
              Let&apos;s Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
                Intelligent Together.
              </span>
            </h2>
          </div>

          {/* Time & Availability Badge */}
          <div className="flex flex-col gap-2 font-mono text-xs text-zinc-400 bg-black/60 p-4 rounded-xl border border-white/10 w-fit">
            <div className="flex items-center gap-2 text-white">
              <Clock size={14} className="text-indigo-400" />
              <span>KOCHI, INDIA: {localTime || "LOADING..."}</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>CURRENT STATUS: AVAILABLE FOR PROJECTS</span>
            </div>
          </div>
        </div>

        {/* Channels & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed">
                Whether you need a custom <strong className="text-white font-medium">machine learning model</strong>, an <strong className="text-white font-medium">enterprise RAG pipeline</strong>, a deep <strong className="text-white font-medium">data science analysis</strong>, or a <strong className="text-white font-medium">full-stack web application</strong> built from scratch — let&apos;s discuss your requirements.
              </p>

              {/* Email Card */}
              <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col gap-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  PRIMARY EMAIL:
                </span>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href="mailto:ajink.offcial@gmail.com"
                    data-cursor-label="EMAIL"
                    className="font-mono text-xs sm:text-sm text-white hover:text-indigo-300 transition-colors truncate"
                  >
                    ajink.offcial@gmail.com
                  </a>
                  <button
                    onClick={copyEmail}
                    data-cursor-label="COPY"
                    className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/10 text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 font-mono text-[11px]"
                    title="Copy Email to Clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={13} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="https://wa.me/917736723917"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-label="WHATSAPP"
                  className="p-4 rounded-xl bg-black/60 border border-white/10 hover:border-white/30 flex flex-col justify-between gap-4 transition-all group"
                >
                  <MessageCircle size={20} className="text-emerald-400" />
                  <div>
                    <span className="font-mono text-[10px] text-zinc-500 block">INSTANT CHAT</span>
                    <span className="font-display font-bold text-sm text-white flex items-center justify-between">
                      WhatsApp <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </a>

                <a
                  href="https://github.com/AjinLabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-label="GITHUB"
                  className="p-4 rounded-xl bg-black/60 border border-white/10 hover:border-white/30 flex flex-col justify-between gap-4 transition-all group"
                >
                  <GithubIcon size={20} />
                  <div>
                    <span className="font-mono text-[10px] text-zinc-500 block">OPEN SOURCE</span>
                    <span className="font-display font-bold text-sm text-white flex items-center justify-between">
                      GitHub <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/ajinkofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-label="LINKEDIN"
                  className="p-4 rounded-xl bg-black/60 border border-white/10 hover:border-white/30 flex flex-col justify-between gap-4 transition-all group"
                >
                  <LinkedinIcon size={20} />
                  <div>
                    <span className="font-mono text-[10px] text-zinc-500 block">CAREER NETWORK</span>
                    <span className="font-display font-bold text-sm text-white flex items-center justify-between">
                      LinkedIn <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="font-mono text-xs text-zinc-500 border-t border-white/[0.08] pt-6 flex flex-col gap-1">
              <span>RESPONSE TIME: TYPICALLY UNDER 6 HOURS</span>
              <span>AVAILABLE FOR REMOTE CONTRACTS &amp; ROLES GLOBALLY</span>
            </div>
          </div>

          {/* Right: Direct Project Inquiry Form */}
          <div className="lg:col-span-7 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl">
            {formSubmitted ? (
              <div className="h-full min-h-[350px] flex flex-col items-center justify-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Check size={24} />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Message Transmitted!
                </h3>
                <p className="font-sans text-sm text-zinc-400 max-w-md">
                  Thank you for reaching out. I have received your inquiry and will review your project requirements promptly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      service: "AI / ML Engineering",
                      message: "",
                    });
                  }}
                  data-cursor-label="AGAIN"
                  className="mt-2 px-5 py-2 rounded-full bg-white text-black font-mono text-xs font-semibold uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-indigo-400">
                  <Sparkles size={14} />
                  <span>DIRECT INQUIRY FORM</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Connor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                    Primary Domain Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="Data Science & Analytics">Data Science &amp; Analytics Engineering</option>
                    <option value="AI / ML Engineering">Applied AI &amp; Machine Learning</option>
                    <option value="Generative AI & RAG">Generative AI, RAG &amp; Vector Search</option>
                    <option value="Full Stack Web Development">Full-Stack Web Development (Next.js / Python)</option>
                    <option value="Consulting / Freelance">Technical Consulting / Freelance Project</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                    Project Overview or Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your dataset, project scope, model objectives, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formLoading}
                  data-cursor-label="SUBMIT"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 disabled:opacity-50"
                >
                  {formLoading ? (
                    <span>Transmitting Payload...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Prestigious Footer */}
        <footer className="border-t border-white/[0.08] pt-10 pb-4 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-zinc-500">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="text-white font-bold font-display">AJIN K</span>
            <span className="hidden sm:inline">·</span>
            <span>DATA SCIENTIST · AI/ML ENGINEER · FULL STACK</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <span>NEXT.JS 16</span>
            <span>·</span>
            <span>TURBOPACK</span>
            <span>·</span>
            <span>TAILWIND CSS</span>
            <span>·</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
