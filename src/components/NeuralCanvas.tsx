"use client";
import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  pulsePhase: number;
}

const particleColors = [
  "rgba(56, 189, 248, 0.8)",  // Cyan
  "rgba(129, 140, 248, 0.85)", // Indigo
  "rgba(192, 132, 252, 0.85)", // Violet
  "rgba(244, 114, 182, 0.8)",  // Pink
  "rgba(52, 211, 153, 0.75)",  // Emerald
];

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 180,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    let particles: Particle[] = [];
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(Math.min(width, 1600) / 20);
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 2 + 1;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: radius,
          baseRadius: radius,
          color: particleColors[i % particleColors.length],
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    initParticles();

    let time = 0;
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Multi-stop background radial gradients with vivid colors
      const g1 = ctx.createRadialGradient(
        width * 0.2,
        height * 0.25,
        10,
        width * 0.2,
        height * 0.25,
        width * 0.55
      );
      g1.addColorStop(0, "rgba(99, 102, 241, 0.18)"); // Indigo
      g1.addColorStop(0.6, "rgba(79, 70, 229, 0.05)");
      g1.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      const g2 = ctx.createRadialGradient(
        width * 0.8,
        height * 0.35,
        10,
        width * 0.8,
        height * 0.35,
        width * 0.5
      );
      g2.addColorStop(0, "rgba(236, 72, 153, 0.14)"); // Pink/Magenta
      g2.addColorStop(0.6, "rgba(219, 39, 119, 0.04)");
      g2.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      const g3 = ctx.createRadialGradient(
        width * 0.5,
        height * 0.8,
        10,
        width * 0.5,
        height * 0.8,
        width * 0.55
      );
      g3.addColorStop(0, "rgba(14, 165, 233, 0.16)"); // Cyan/Sky
      g3.addColorStop(0.6, "rgba(20, 184, 166, 0.05)");
      g3.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, width, height);

      // Connect particles
      const maxDistance = 125;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0) p1.x = width;
        if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        if (p1.y > height) p1.y = 0;

        // Mouse attraction
        const dxMouse = mouse.x - p1.x;
        const dyMouse = mouse.y - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouse.radius) {
          const force = (1 - distMouse / mouse.radius) * 0.9;
          p1.x += (dxMouse / distMouse) * force;
          p1.y += (dyMouse / distMouse) * force;
        }

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.22;
            ctx.strokeStyle = `rgba(165, 180, 252, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw particle node
        const pulse = Math.sin(time + p1.pulsePhase) * 0.35 + 1;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.baseRadius * pulse, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.shadowColor = p1.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Floating luminous color orbs for deep glassmorphism refractions */}
      <div
        className="fixed top-[-10%] left-[-5%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-violet-600/25 via-indigo-600/20 to-transparent blur-[140px] pointer-events-none z-0 animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="fixed top-[25%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-pink-500/20 via-purple-600/15 to-transparent blur-[140px] pointer-events-none z-0 animate-float-slow-reverse"
        aria-hidden="true"
      />
      <div
        className="fixed bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-teal-500/15 to-transparent blur-[150px] pointer-events-none z-0 animate-float-slow"
        aria-hidden="true"
      />

      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-80"
        aria-hidden="true"
      />
    </>
  );
}
