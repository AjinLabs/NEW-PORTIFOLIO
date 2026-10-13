"use client";
import React, { useState } from "react";
import { Mail, Phone, Copy, Check, MessageCircle, ArrowUpRight, Send, MapPin } from "lucide-react";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Machine Learning / Data Scientist Role",
    message: "",
  });

  const handleCopy = () => {
    navigator.clipboard.writeText("ajink.offcial@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSent(true);
    }, 500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto border-t-2 border-[#111111]/15">
      {/* Electric Blue Marker and Headline */}
      <div className="w-12 h-1.5 bg-[#245BDB] border border-[#111111] mb-4" />

      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl sm:text-6xl font-display leading-[1.0] text-[#111111] mb-4">
          <span className="font-light block">Get in Touch</span>
          <span className="font-black block">Direct lines &amp; booking.</span>
        </h2>
        <p className="font-sans text-base text-[#111111]/80 leading-relaxed">
          Open to full-time Machine Learning Engineer and Data Scientist roles globally, as well as production web system engagements via Venm Studio.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
        {/* Left: Contact Details Card */}
        <div className="lg:col-span-5 bg-white border-2 border-[#111111] p-7 sm:p-9 shadow-[6px_6px_0px_#111111] flex flex-col gap-6">
          <div className="flex flex-col gap-2 border-b border-[#111111]/15 pb-5">
            <span className="font-mono text-[10px] text-[#111111]/50 uppercase tracking-widest font-bold">
              PRIMARY EMAIL
            </span>
            <div className="flex items-center justify-between gap-3">
              <a
                href="mailto:ajink.offcial@gmail.com"
                className="font-mono text-sm text-[#111111] font-bold hover:text-[#245BDB] hover:underline truncate transition-colors"
              >
                ajink.offcial@gmail.com
              </a>
              <button
                onClick={handleCopy}
                className="p-1.5 bg-[#DBEAFE] border border-[#111111] hover:bg-[#245BDB] hover:text-white text-[#17243A] transition-colors font-mono text-xs flex items-center gap-1 shadow-[1px_1px_0px_#111111]"
                title="Copy Email"
                aria-label="Copy Email address"
              >
                {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                <span className="text-[10px] uppercase font-bold">
                  {copiedEmail ? "Copied" : "Copy"}
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-b border-[#111111]/15 pb-5">
            <span className="font-mono text-[10px] text-[#111111]/50 uppercase tracking-widest font-bold">
              PHONE &amp; WHATSAPP
            </span>
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-sm text-[#111111] font-bold">
                +91 7736723917
              </span>
              <a
                href="https://wa.me/917736723917"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-[#245BDB] text-white border border-[#111111] font-mono text-[10px] font-bold uppercase tracking-wider hover:bg-[#1d4ed8] transition-colors shadow-[2px_2px_0px_#111111]"
              >
                WhatsApp Chat ↗
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 font-mono text-xs text-[#111111]/80">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#245BDB]" />
              <span>Nilambur, Kerala, India</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="https://github.com/AjinLabs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#F5F3EE] border border-[#111111] font-mono text-xs font-bold hover:bg-[#DBEAFE] hover:text-[#17243A] transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/ajinkofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#F5F3EE] border border-[#111111] font-mono text-xs font-bold hover:bg-[#DBEAFE] hover:text-[#17243A] transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://ajinlabs.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#F5F3EE] border border-[#111111] font-mono text-xs font-bold hover:bg-[#DBEAFE] hover:text-[#17243A] transition-colors"
              >
                ajinlabs.github.io ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right: Message Form */}
        <div className="lg:col-span-7 bg-white border-2 border-[#111111] p-7 sm:p-9 shadow-[6px_6px_0px_#111111]">
          {formSent ? (
            <div className="py-12 flex flex-col items-center justify-center text-center gap-3">
              <div className="w-12 h-12 bg-[#245BDB] text-white border-2 border-[#111111] flex items-center justify-center font-bold shadow-[3px_3px_0px_#111111]">
                <Check size={24} />
              </div>
              <h3 className="font-display font-black text-2xl text-[#111111]">
                Message Received
              </h3>
              <p className="font-sans text-xs text-[#111111]/70 max-w-sm">
                Thanks for reaching out! Ajin will review your message and reply via email shortly.
              </p>
              <button
                onClick={() => setFormSent(false)}
                className="mt-4 bg-[#245BDB] text-white border-2 border-[#111111] px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#111111] hover:bg-[#1d4ed8] transition-colors"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111] border-b border-[#111111]/15 pb-2">
                $ send_dispatch --direct
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] font-bold uppercase text-[#111111]/70">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hiring Manager"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-2 border-[#111111] p-2.5 font-sans text-xs bg-[#F5F3EE] focus:bg-white focus:border-[#245BDB] focus:outline-none transition-colors text-[#111111]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] font-bold uppercase text-[#111111]/70">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-2 border-[#111111] p-2.5 font-sans text-xs bg-[#F5F3EE] focus:bg-white focus:border-[#245BDB] focus:outline-none transition-colors text-[#111111]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] font-bold uppercase text-[#111111]/70">
                  Topic / Purpose
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="border-2 border-[#111111] p-2.5 font-sans text-xs bg-[#F5F3EE] focus:bg-white focus:border-[#245BDB] focus:outline-none transition-colors font-medium text-[#111111]"
                >
                  <option value="Machine Learning / Data Scientist Role">Hiring for Machine Learning / Data Scientist Role</option>
                  <option value="Venm Studio Client Project">Freelance / Custom Web Platform via Venm Studio</option>
                  <option value="AI / RAG Architecture Consultation">Generative AI, RAG &amp; LLM Consultation</option>
                  <option value="General Conversation">General Networking</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] font-bold uppercase text-[#111111]/70">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share details about the role, project constraints, or model objectives..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-2 border-[#111111] p-2.5 font-sans text-xs bg-[#F5F3EE] focus:bg-white focus:border-[#245BDB] focus:outline-none resize-none transition-colors text-[#111111]"
                />
              </div>

              <button
                type="submit"
                disabled={formLoading}
                className="bg-[#245BDB] text-white border-2 border-[#111111] py-3.5 font-mono text-xs font-bold uppercase tracking-wider shadow-[4px_4px_0px_#111111] hover:bg-[#1d4ed8] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all disabled:opacity-50"
              >
                {formLoading ? "Sending Payload..." : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#111111]/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#111111]/70">
        <div>
          <span className="font-bold text-[#111111]">AJIN K</span> — Machine Learning Engineer &amp; Data Scientist
        </div>
        <div className="flex items-center gap-4">
          <span>Nilambur, Kerala</span>
          <span>·</span>
          <span>Venm Studio</span>
          <span>·</span>
          <span>© 2026</span>
        </div>
      </footer>
    </section>
  );
}
