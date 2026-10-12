"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Sparkles, MapPin } from "lucide-react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("MOUNTING TENSOR CORES...");

  useEffect(() => {
    const statuses = [
      "INITIALIZING NEURAL WEIGHTS & SCIKIT-LEARN...",
      "CALIBRATING TECHOLAS DATA PIPELINES...",
      "LAUNCHING VENM STUDIO VIBE ARCHITECTURE...",
      "SYSTEM READY // AJIN K",
    ];

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 0.7,
          ease: "power4.inOut",
          onComplete: onComplete,
        });
      },
    });

    const progressObj = { value: 0 };
    tl.to(progressObj, {
      value: 100,
      duration: 1.4,
      ease: "power2.inOut",
      onUpdate: () => {
        const val = Math.floor(progressObj.value);
        setProgress(val);
        if (val < 25) setStatusText(statuses[0]);
        else if (val < 60) setStatusText(statuses[1]);
        else if (val < 90) setStatusText(statuses[2]);
        else setStatusText(statuses[3]);
      },
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-[#06070c] flex flex-col items-center justify-between p-8 md:p-16 text-white selection:bg-none overflow-hidden"
    >
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 blur-[130px] rounded-full pointer-events-none" />

      {/* Top telemetry */}
      <div className="w-full flex justify-between items-center text-[10px] md:text-xs font-mono text-slate-400 uppercase tracking-widest border-b border-white/10 pb-4 relative z-10">
        <span className="flex items-center gap-1.5 text-cyan-300">
          <MapPin size={12} />
          NILAMBUR, KERALA · TECHOLAS KOCHI
        </span>
        <span className="flex items-center gap-2 text-emerald-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          CALIBRATING MASTER RUNTIME
        </span>
      </div>

      {/* Center hero identity */}
      <div className="flex flex-col items-center text-center max-w-2xl px-4 relative z-10">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300 mb-4 flex items-center gap-1.5 font-semibold">
          <Sparkles size={14} className="text-pink-400" />
          MACHINE LEARNING ENGINEER &amp; DATA SCIENTIST
        </span>
        <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl tracking-tight uppercase mb-6 bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          AJIN K
        </h1>
        <div className="flex flex-wrap justify-center gap-3 font-mono text-xs md:text-sm uppercase tracking-wider">
          <span className="px-3.5 py-1.5 bg-violet-950/50 border border-violet-500/30 text-violet-200 rounded-full shadow-sm">
            Machine Learning
          </span>
          <span className="px-3.5 py-1.5 bg-cyan-950/50 border border-cyan-500/30 text-cyan-200 rounded-full shadow-sm">
            Data Science &amp; EDA
          </span>
          <span className="px-3.5 py-1.5 bg-pink-950/50 border border-pink-500/30 text-pink-200 rounded-full shadow-sm">
            Venm Studio
          </span>
        </div>
      </div>

      {/* Bottom loader meter */}
      <div className="w-full max-w-md flex flex-col gap-3 relative z-10">
        <div className="flex justify-between items-center font-mono text-xs text-slate-300">
          <span className="text-[11px] text-cyan-300 tracking-wider font-semibold">{statusText}</span>
          <span className="text-white font-bold">{progress}%</span>
        </div>
        <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative shadow-sm">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-400 shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all duration-75 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
