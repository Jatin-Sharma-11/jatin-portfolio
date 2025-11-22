"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
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
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Experience
                </h2>

                <div className="space-y-12">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-0"
                        >
                            <div className="md:flex items-start gap-6 bg-slate-900/30 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-colors">
                                <div className="hidden md:block flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-slate-800 p-2 border border-slate-700 overflow-hidden">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={exp.logo}
                                            alt={exp.company}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                        <div>
                                            <div className="flex items-center gap-3 md:hidden mb-2">
                                                <div className="w-12 h-12 rounded-full bg-slate-800 p-2 border border-slate-700 overflow-hidden">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        src={exp.logo}
                                                        alt={exp.company}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-200">
                                                    {exp.company}
                                                </h3>
                                            </div>
                                            <h3 className="hidden md:block text-xl font-bold text-slate-200">
                                                {exp.company}
                                            </h3>
                                            <p className="text-lg text-blue-400 font-medium">{exp.role}</p>
                                        </div>
                                        <div className="text-slate-400 text-sm mt-2 md:mt-0 text-right">
                                            <p className="flex items-center gap-2 justify-end">
                                                <Calendar className="w-4 h-4" />
                                                {exp.period}
                                            </p>
                                            <p className="flex items-center gap-2 justify-end mt-1">
                                                <MapPin className="w-4 h-4" />
                                                {exp.type}
                                            </p>
                                        </div>
                                    </div>

                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-slate-400">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
}
