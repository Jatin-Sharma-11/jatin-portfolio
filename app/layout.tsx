import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jatin Sharma | Portfolio",
  description: "Portfolio of Jatin Sharma, MS(R) CSE Candidate and Data Scientist Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={clsx(inter.className, "bg-slate-950 text-slate-200 antialiased")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
