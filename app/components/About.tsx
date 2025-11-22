"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { education, skills } from "../data";

export default function About() {
    return (
        <Section id="about" className="bg-slate-900/50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About Me
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                            Education
                        </h3>
                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="relative pl-8 border-l-2 border-slate-800"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                                    <h4 className="text-xl font-medium text-slate-200">
                                        {edu.institution}
                                    </h4>
                                    <p className="text-slate-400">{edu.degree}</p>
                                    <p className="text-sm text-slate-500 mt-1">{edu.year}</p>
                                    <p className="text-sm text-blue-400 mt-2 font-medium">
                                        {edu.grade}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                            Technical Skills
                        </h3>
                        <div className="space-y-6">
                            {Object.entries(skills).map(([category, items]) => (
                                <div key={category}>
                                    <h4 className="text-lg font-medium text-slate-300 mb-3">
                                        {category}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700 hover:border-blue-500/50 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
