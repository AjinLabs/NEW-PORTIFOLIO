import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Ajin K - Machine Learning Engineer & Data Scientist",
  description:
    "Data Scientist & Machine Learning Engineer with production-ready judgment across Python, Scikit-learn, tabular analytics, RAG architectures, and AI-assisted full-stack platforms. Co-founder of Venm studio.",
  keywords: [
    "Ajin K",
    "Data Scientist",
    "Machine Learning Engineer",
    "Full Stack Developer",
    "Python",
    "Django",
    "Scikit-learn",
    "RAG",
    "Techolas Technologies",
    "Venm Studio",
    "Kerala",
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
      <body className="min-h-full bg-[#F5F3EE] text-[#111111]">
        {children}
      </body>
    </html>
  );
}
