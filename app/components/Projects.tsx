"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Search, X } from "lucide-react";
import Section from "./Section";
import { projects, techIcons } from "../data";
import { useState } from "react";

export default function Projects() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.category?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Section id="projects">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto"
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
                        A collection of my work in Machine Learning, Web Development, and Software Engineering.
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-md mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search projects by name, tech, or category..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-full focus:outline-none focus:border-blue-500 text-slate-200 transition-colors"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className="group bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer flex flex-col h-full"
                        >
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                                        {project.category || "Project"}
                                    </span>
                                    <Github className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-slate-200 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.slice(0, 3).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-slate-950 text-slate-500 text-xs rounded border border-slate-800"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="px-2 py-1 bg-slate-950 text-slate-500 text-xs rounded border border-slate-800">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center text-slate-500 mt-12">
                        <p>No projects found matching your search.</p>
                    </div>
                )}
            </motion.div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-2xl w-full relative shadow-2xl shadow-blue-500/10 max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute right-4 top-4 p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="mb-8">
                                <span className="px-3 py-1 text-sm font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 mb-4 inline-block">
                                    {selectedProject.category || "Project"}
                                </span>
                                <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                                <p className="text-slate-500 text-sm">{selectedProject.period}</p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-slate-200 mb-3">Overview</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {selectedProject.description}
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-slate-200 mb-4">Technologies</h3>
                                <div className="flex flex-wrap gap-4">
                                    {selectedProject.tech.map((tech) => (
                                        <div key={tech} className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-lg border border-slate-800">
                                            {techIcons[tech] ? (
                                                // eslint-disable-next-line @next/next/no-img-element
                                                <img src={techIcons[tech]} alt={tech} className="w-5 h-5" />
                                            ) : (
                                                <div className="w-5 h-5 bg-slate-800 rounded-full" />
                                            )}
                                            <span className="text-slate-300 text-sm">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 pt-6 border-t border-slate-800">
                                <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                                >
                                    <Github className="w-5 h-5" />
                                    View on GitHub
                                </a>
                                {/* Placeholder for Live Demo if available */}
                                {/* <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                                    <ExternalLink className="w-5 h-5" />
                                    Live Demo
                                </button> */}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
}
