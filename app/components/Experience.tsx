"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { experience } from "../data";

export default function Experience() {
    return (
        <Section id="experience">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Experience
                </h2>

                <div className="max-w-4xl mx-auto space-y-12">
                    {experience.map((exp, index) => (
                        <div
                            key={index}
                            className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-200">
                                        {exp.role}
                                    </h3>
                                    <p className="text-blue-400 text-lg">{exp.company}</p>
                                </div>
                                <div className="text-right md:text-right">
                                    <p className="text-slate-400 font-medium">{exp.period}</p>
                                    <p className="text-sm text-slate-500">{exp.type}</p>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {exp.description.map((desc, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-400">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                        <span className="leading-relaxed">{desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
}
