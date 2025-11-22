"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Section from "./Section";
import { projects } from "../data";

export default function Projects() {
    return (
        <Section id="projects" className="bg-slate-900/50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="p-6 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-slate-200 group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-400 hover:text-blue-400 transition-colors"
                                            aria-label="View Project"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-slate-900 text-slate-500 text-xs rounded-md border border-slate-800"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
}
