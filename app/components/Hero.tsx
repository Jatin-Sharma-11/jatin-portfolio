"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { personalInfo } from "../data";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20">
                            Available for Opportunities
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            Hi, I'm <span className="text-blue-400">{personalInfo.name}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 mb-8 leading-relaxed">
                            {personalInfo.title}
                        </p>
                        <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
                            {personalInfo.about}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-colors flex items-center gap-2"
                        >
                            View Work <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-full font-medium transition-colors flex items-center gap-2 border border-slate-700"
                        >
                            Resume <Download className="w-4 h-4" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
