import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import SmoothScrolling from "@/components/SmoothScrolling";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AJIN K | Data Scientist, AI/ML Engineer & Full-Stack Developer",
  description:
    "Portfolio of Ajin K — Data Scientist, Applied AI/ML Engineer, and Full-Stack Web Architect. Bridging statistical data analysis, neural architectures, and production-grade software.",
  keywords: [
    "Ajin K",
    "Data Scientist",
    "Machine Learning Engineer",
    "AI Engineer",
    "Full Stack Web Developer",
    "Python",
    "Next.js",
    "PyTorch",
    "RAG",
    "Generative AI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-[#030305] text-[#f5f5f5] selection:bg-indigo-500/30 selection:text-white">
        <SmoothScrolling>
          <Cursor />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
