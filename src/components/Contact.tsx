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
  MapPin,
  Phone,
  Globe,
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
    service: "Machine Learning / Data Scientist Role",
    message: "",
  });

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
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header with Mixed Color Gradients */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300 font-semibold block mb-2">
              GET IN TOUCH // INITIATE COLLABORATION
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tight text-white leading-[1.0]">
              Let&apos;s Build Something <br />
              <span className="gradient-text-primary">
                Extraordinary Together.
              </span>
            </h2>
          </div>

          {/* Time & Availability Badge */}
          <div className="flex flex-col gap-2 font-mono text-xs text-slate-300 glass-panel p-4 rounded-2xl w-fit">
            <div className="flex items-center gap-2 text-white">
              <Clock size={14} className="text-cyan-400" />
              <span>NILAMBUR, KERALA: {localTime || "INITIALIZING..."}</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-300 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>AVAILABLE FOR ML/DATA SCIENCE ROLES &amp; VENM PROJECTS</span>
            </div>
          </div>
        </div>

        {/* Channels & Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Direct Contacts & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              <p className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed">
                Whether you have an opening for a <strong className="text-cyan-300 font-semibold">Machine Learning Engineer</strong> or <strong className="text-violet-300 font-semibold">Data Scientist</strong>, or want to partner with <strong className="text-fuchsia-300 font-semibold">Venm Studio</strong> to build an intelligent web application from scratch — let&apos;s connect.
              </p>

              {/* Email Card with Glassmorphic Highlight */}
              <div className="glass-panel-glow rounded-2xl p-5 flex flex-col gap-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
                  PRIMARY EMAIL:
                </span>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href="mailto:ajink.offcial@gmail.com"
                    data-cursor-label="EMAIL"
                    className="font-mono text-xs sm:text-sm text-white hover:text-cyan-300 transition-colors truncate font-medium"
                  >
                    ajink.offcial@gmail.com
                  </a>
                  <button
                    onClick={copyEmail}
                    data-cursor-label="COPY"
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors flex items-center gap-1.5 font-mono text-[11px]"
                    title="Copy Email to Clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={13} className="text-emerald-400" />
                        <span className="text-emerald-300">Copied</span>
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

              {/* Direct Phone / WhatsApp Card */}
              <div className="glass-panel rounded-2xl p-5 flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
                  PHONE &amp; WHATSAPP:
                </span>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href="tel:+917736723917"
                    className="font-mono text-xs sm:text-sm text-white hover:text-emerald-300 transition-colors font-medium flex items-center gap-2"
                  >
                    <Phone size={14} className="text-emerald-400" />
                    <span>+91 7736723917</span>
                  </a>
                  <a
                    href="https://wa.me/917736723917"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-label="CHAT"
                    className="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500 hover:text-black font-mono text-[10px] font-bold uppercase transition-all flex items-center gap-1"
                  >
                    <MessageCircle size={12} />
                    <span>Chat Now</span>
                  </a>
                </div>
              </div>

              {/* Social Channels List with Colorful Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="https://wa.me/917736723917"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-label="WHATSAPP"
                  className="p-4 rounded-2xl glass-panel hover:border-emerald-400/50 flex flex-col justify-between gap-4 transition-all group shadow-lg"
                >
                  <MessageCircle size={22} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 block">DIRECT CHAT</span>
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
                  className="p-4 rounded-2xl glass-panel hover:border-purple-400/50 flex flex-col justify-between gap-4 transition-all group shadow-lg"
                >
                  <GithubIcon size={22} />
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 block">OPEN SOURCE</span>
                    <span className="font-display font-bold text-sm text-white flex items-center justify-between">
                      GitHub <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/ajinkofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-label="LINKEDIN"
                  className="p-4 rounded-2xl glass-panel hover:border-blue-400/50 flex flex-col justify-between gap-4 transition-all group shadow-lg"
                >
                  <LinkedinIcon size={22} />
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 block">NETWORK</span>
                    <span className="font-display font-bold text-sm text-white flex items-center justify-between">
                      LinkedIn <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="font-mono text-xs text-slate-400 border-t border-white/10 pt-6 flex flex-col gap-1">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-cyan-400" />
                NILAMBUR, KERALA, INDIA · OPEN TO REMOTE &amp; RELOCATION
              </span>
              <span>GITHUB PAGES PORTFOLIO: ajinlabs.github.io</span>
            </div>
          </div>

          {/* Right: Direct Project Inquiry Form */}
          <div className="lg:col-span-7 glass-panel-glow rounded-3xl p-7 sm:p-10 shadow-2xl">
            {formSubmitted ? (
              <div className="h-full min-h-[360px] flex flex-col items-center justify-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <Check size={28} />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-white">
                  Message Transmitted!
                </h3>
                <p className="font-sans text-sm text-slate-300 max-w-md">
                  Thank you for reaching out, Ajin will review your message and reply back within a few hours.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      service: "Machine Learning / Data Scientist Role",
                      message: "",
                    });
                  }}
                  data-cursor-label="AGAIN"
                  className="mt-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-purple-600/30"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-300 font-semibold">
                  <Sparkles size={14} className="text-fuchsia-400" />
                  <span>DIRECT INQUIRY &amp; HIRING INVITATION</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-slate-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / Tech Recruiter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-slate-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-slate-300">
                    Subject / Discussion Purpose
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="Machine Learning / Data Scientist Role">Hiring: Machine Learning Engineer / Data Scientist</option>
                    <option value="Venm Studio Project">Freelance / Custom Web Platform via Venm Studio</option>
                    <option value="AI / RAG / GenAI Development">Generative AI, RAG &amp; AI Agents System</option>
                    <option value="Data Science & Dashboard">Tabular Data Science, EDA &amp; Power BI Dashboard</option>
                    <option value="General Collaboration">General Technical Inquiry &amp; Networking</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-slate-300">
                    Project Scope / Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about the role, dataset, model goals, or web platform you're building..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formLoading}
                  data-cursor-label="SUBMIT"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-purple-600/30 disabled:opacity-50"
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

        {/* Footer */}
        <footer className="border-t border-white/10 pt-10 pb-4 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="text-white font-bold font-display text-sm">AJIN K</span>
            <span className="hidden sm:inline">·</span>
            <span>MACHINE LEARNING ENGINEER &amp; DATA SCIENTIST · VENM STUDIO</span>
          </div>

          <div className="flex items-center gap-4 text-slate-300 font-medium">
            <span>NILAMBUR, KERALA</span>
            <span>·</span>
            <span>NEXT.JS 16</span>
            <span>·</span>
            <span>TURBOPACK</span>
            <span>·</span>
            <span>© 2026</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
