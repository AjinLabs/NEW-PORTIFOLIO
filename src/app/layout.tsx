import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
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

export const metadata: Metadata = {
  title: "AJIN K | Portfolio",
  description: "Data Scientist, AI/ML Engineer, Full Stack Web Developer. I build intelligent systems, data-driven applications and interactive digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-[#f5f5f5]">
        <SmoothScrolling>
          <Cursor />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
