"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MessageCircle } from "lucide-react";

const Github = ({ size = 24, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
  </svg>
);

const Linkedin = ({ size = 24, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="min-h-screen bg-black text-white flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 lg:px-24">
      <div className="w-full flex flex-col items-center text-center">
        <div className="contact-reveal font-mono text-xs uppercase tracking-widest text-gray-500 mb-8">
          CONTACT
        </div>
        
        <h2 className="contact-reveal font-display font-bold text-6xl md:text-8xl lg:text-[100px] leading-[0.9] tracking-tighter uppercase max-w-7xl mb-16">
          WHAT SHOULD WE <br /> BUILD TOGETHER?
        </h2>

        <div className="contact-reveal flex justify-center items-center gap-6 md:gap-12 mt-8">
          <a 
            href="mailto:ajink.offcial@gmail.com" 
            className="group relative flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300 bg-[#111] hover:bg-[#222] w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#333] hover:border-white"
            data-cursor-label="EMAIL"
          >
            <Mail size={32} />
          </a>
          <a 
            href="https://wa.me/917736723917" 
            target="_blank" rel="noopener noreferrer"
            className="group relative flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300 bg-[#111] hover:bg-[#222] w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#333] hover:border-white"
            data-cursor-label="CHAT"
          >
            <MessageCircle size={32} />
          </a>
          <a 
            href="https://github.com/AjinLabs" 
            target="_blank" rel="noopener noreferrer"
            className="group relative flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300 bg-[#111] hover:bg-[#222] w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#333] hover:border-white"
            data-cursor-label="GITHUB"
          >
            <Github size={32} />
          </a>
          <a 
            href="https://www.linkedin.com/in/ajinkofficial" 
            target="_blank" rel="noopener noreferrer"
            className="group relative flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300 bg-[#111] hover:bg-[#222] w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#333] hover:border-white"
            data-cursor-label="LINKEDIN"
          >
            <Linkedin size={32} />
          </a>
        </div>
      </div>

      <footer className="contact-reveal mt-32 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-[#222] pt-8">
        <div>
          <div className="font-display font-bold text-2xl tracking-widest uppercase mb-2">AJIN K</div>
          <div className="flex flex-col text-[10px] uppercase tracking-widest text-gray-500 gap-1">
            <span>DATA SCIENTIST</span>
            <span>AI / ML ENGINEER</span>
            <span>FULL STACK WEB DEVELOPER</span>
          </div>
        </div>
        
        <div className="mt-8 md:mt-0 text-right">
          <div className="text-sm font-display tracking-widest uppercase text-white">
            LET'S BUILD SOMETHING <br/> INTELLIGENT.
          </div>
          <div className="mt-4 flex gap-4 text-[10px] uppercase tracking-widest text-gray-500">
            <a href="https://wa.me/917736723917" className="hover:text-white transition-colors">WhatsApp</a>
            <a href="mailto:ajink.offcial@gmail.com" className="hover:text-white transition-colors">Email</a>
            <a href="https://github.com/AjinLabs" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/ajinkofficial" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
