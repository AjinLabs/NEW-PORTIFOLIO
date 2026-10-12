"use client";
import React, { useState } from "react";
import { MessageSquare, X, Send, Bot, Check, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Architecture", href: "#architecture" },
  { name: "Projects", href: "#projects" },
  { name: "Notes", href: "#notes" },
  { name: "Now", href: "#now" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiQuestion, setAiQuestion] = useState("");
  const [messages, setMessages] = useState<Array<{ sender: "user" | "ai"; text: string }>>([
    {
      sender: "ai",
      text: "Hi, I'm AI Ajin. Ask me about Ajin's machine learning models, data science training at Techolas, Venm studio projects, or full-stack web platforms.",
    },
  ]);

  const handleAskAi = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuestion.trim()) return;

    const userText = aiQuestion.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setAiQuestion("");

    // Deterministic instant smart response based on Ajin's real profile
    setTimeout(() => {
      let reply = "Ajin K is a Data Science professional and Machine Learning Engineer based in Nilambur, Kerala. He is completing his Diploma in Data Science at Techolas Technologies and is co-founder of Venm studio.";
      const lower = userText.toLowerCase();

      if (lower.includes("project") || lower.includes("work") || lower.includes("portfolio")) {
        reply = "Ajin has built three major platforms: (1) Law Entrance LMS with AI weak-topic detection & CBT engine, (2) Vakkeel & Associates LegalTech CRM live at vakkeelandassociates.com, and (3) Indian Law School. He also built a California Housing ML regression pipeline on 20k rows.";
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("hire") || lower.includes("phone")) {
        reply = "You can contact Ajin directly at ajink.offcial@gmail.com or via WhatsApp at +91 7736723917. He is open to Machine Learning Engineer and Data Scientist roles globally.";
      } else if (lower.includes("venm") || lower.includes("vibe")) {
        reply = "Venm is a freelance web development studio co-founded by Ajin K, Akash Tomy, and Ashish P S. They use AI-assisted ('vibe coding') workflows with Claude Code and Google Antigravity to deliver client platforms from pitch to live deployment.";
      } else if (lower.includes("education") || lower.includes("college") || lower.includes("techolas")) {
        reply = "Ajin holds a BCA degree from Christ College Kattappana (MG University, 2022–2025) and is currently completing an integrated Diploma in Data Science at Techolas Technologies, Kochi.";
      }

      setMessages((prev) => [...prev, { sender: "ai", text: reply }]);
    }, 400);
  };

  return (
    <>
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#f4f1ea]/90 backdrop-blur-md border-b border-black/10 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo with Green Highlight */}
          <a href="#" className="flex flex-col group">
            <span className="font-display font-black text-xl text-black tracking-tighter">
              AK
            </span>
            <span className="block h-[3px] w-full bg-[#ccff00] border-t border-black/30"></span>
          </a>

          {/* Center Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-xs text-black/75 hover:text-black font-semibold tracking-wider transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:ajink.offcial@gmail.com"
              className="bg-black text-white hover:bg-neutral-800 px-5 py-2 rounded-full font-mono text-xs font-semibold uppercase tracking-wider transition-all"
            >
              email me
            </a>
          </div>
        </div>
      </header>

      {/* Floating Bottom-Right "ASK AI AJIN" Button */}
      <button
        onClick={() => setIsAiModalOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-black text-white border-2 border-black px-4 py-2.5 rounded-lg shadow-[4px_4px_0px_#ccff00] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex items-center gap-2 font-mono text-xs font-bold"
        aria-label="Open Ask AI Ajin Chat"
      >
        <MessageSquare size={15} className="text-[#ccff00]" />
        <span>ASK AI AJIN</span>
      </button>

      {/* Ask AI Ajin Drawer Modal */}
      {isAiModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-4">
          <div className="w-full max-w-lg bg-[#f4f1ea] border-2 border-black rounded-2xl shadow-[8px_8px_0px_#000] flex flex-col max-h-[85vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-black text-white p-4 flex items-center justify-between border-b-2 border-black">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00] animate-pulse" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  AI AJIN // VIBE ASSISTANT
                </span>
              </div>
              <button
                onClick={() => setIsAiModalOpen(false)}
                className="text-white/70 hover:text-white p-1"
                aria-label="Close Modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 max-h-[50vh]">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    m.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <span className="font-mono text-[9px] uppercase text-black/50 mb-1">
                    {m.sender === "user" ? "$ guest" : "$ ai_ajin"}
                  </span>
                  <div
                    className={`p-3 rounded-xl max-w-[85%] text-xs font-sans leading-relaxed ${
                      m.sender === "user"
                        ? "bg-black text-white rounded-br-none"
                        : "bg-white border-2 border-black text-black shadow-[2px_2px_0px_#000] rounded-bl-none"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="px-4 py-2 border-t border-black/10 flex flex-wrap gap-1.5 bg-[#ece8de]">
              {[
                "Tell me about Law Entrance LMS",
                "What is Venm Studio?",
                "Ajin's Machine Learning skills",
                "How to contact Ajin?",
              ].map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setAiQuestion(suggestion);
                  }}
                  className="font-mono text-[10px] bg-white border border-black px-2.5 py-1 rounded hover:bg-[#ccff00] transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            {/* Form Input */}
            <form onSubmit={handleAskAi} className="p-3 bg-white border-t-2 border-black flex gap-2">
              <input
                type="text"
                placeholder="Ask about models, datasets, Venm studio, or hiring..."
                value={aiQuestion}
                onChange={(e) => setAiQuestion(e.target.value)}
                className="flex-1 font-sans text-xs px-3 py-2 bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded font-mono text-xs font-bold hover:bg-[#ccff00] hover:text-black transition-colors"
              >
                <Send size={13} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
