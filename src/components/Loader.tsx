"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("MOUNTING TENSOR CORES...");

  useEffect(() => {
    const statuses = [
      "INITIALIZING NEURAL WEIGHTS...",
      "CALIBRATING FEATURE PIPELINES...",
      "SYNCING DISTRIBUTED API RUNTIMES...",
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
      duration: 1.5,
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
      className="fixed inset-0 z-50 bg-[#030305] flex flex-col items-center justify-between p-8 md:p-16 text-white selection:bg-none"
    >
      {/* Top telemetry */}
      <div className="w-full flex justify-between items-center text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-white/5 pb-4">
        <span>SYS_INIT :: KERNEL_v2.4</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          CALIBRATING RUNTIME
        </span>
      </div>

      {/* Center hero identity */}
      <div className="flex flex-col items-center text-center max-w-2xl px-4">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-400 mb-4">
          PORTFOLIO ARCHITECTURE
        </span>
        <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6">
          AJIN K
        </h1>
        <div className="flex flex-wrap justify-center gap-3 font-mono text-xs md:text-sm text-zinc-400 uppercase tracking-wider">
          <span className="px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full">
            Data Science
          </span>
          <span className="px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full">
            AI / ML Engineering
          </span>
          <span className="px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full">
            Full Stack Systems
          </span>
        </div>
      </div>

      {/* Bottom loader meter */}
      <div className="w-full max-w-md flex flex-col gap-3">
        <div className="flex justify-between items-center font-mono text-xs text-zinc-400">
          <span className="text-[11px] text-zinc-400 tracking-wider">{statusText}</span>
          <span className="text-white font-semibold">{progress}%</span>
        </div>
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-indigo-400 to-white transition-all duration-75 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
