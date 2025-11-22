"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { education, skills, personalInfo } from "../data";

export default function About() {
    return (
        <Section id="about" className="bg-slate-900/50">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                        {personalInfo.about}
                    </p>

                    <h3 className="text-2xl font-bold mb-6">Education</h3>
                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-4 items-start"
                            >
                                <div className="w-16 h-16 rounded-xl bg-slate-900 p-2 border border-slate-800 flex-shrink-0 overflow-hidden">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={edu.logo}
                                        alt={edu.institution}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-200">
                                        {edu.institution}
                                    </h4>
                                    <p className="text-blue-400">{edu.degree}</p>
                                    <p className="text-slate-500 text-sm mt-1">
                                        {edu.year} • {edu.grade}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Tech Stack</h2>
                    <div className="space-y-8">
                        {Object.entries(skills).map(([category, items], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h3 className="text-lg font-semibold text-blue-400 mb-4">
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 bg-slate-900/50 text-slate-300 rounded-lg border border-slate-800 hover:border-blue-500/50 hover:text-blue-400 transition-all hover:scale-105 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
