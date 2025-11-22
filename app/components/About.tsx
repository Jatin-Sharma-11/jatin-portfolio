"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { education, skills, personalInfo, techIcons, experience } from "../data";

export default function About() {
    // Flatten all skills into a single array for the marquee
    const allSkills = Object.values(skills).flat();
    // Duplicate the array to ensure seamless looping
    const marqueeSkills = [...allSkills, ...allSkills, ...allSkills];

    return (
        <Section id="about">
            <div className="max-w-5xl mx-auto">
                {/* About Me Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
                        {personalInfo.about}
                    </p>
                </motion.div>

                {/* Education Section */}
                <div className="mb-20">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-10 text-center"
                    >
                        Education
                    </motion.h3>

                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="flex flex-col md:flex-row gap-6 items-center md:items-start bg-slate-900/30 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-colors"
                            >
                                <div className="w-20 h-20 rounded-xl bg-white p-2 border border-slate-700 flex-shrink-0 overflow-hidden shadow-lg shadow-blue-900/10">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={edu.logo}
                                        alt={edu.institution}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="text-center md:text-left flex-grow">
                                    <h4 className="text-xl font-bold text-slate-200">
                                        {edu.institution}
                                    </h4>
                                    <p className="text-blue-400 font-medium mt-1">{edu.degree}</p>
                                    <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-3 text-sm text-slate-500">
                                        <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">
                                            {edu.year}
                                        </span>
                                        <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">
                                            {edu.grade}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Experience Section */}
                <div className="mb-20">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-10 text-center"
                    >
                        Experience
                    </motion.h3>

                    <div className="space-y-8">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="flex flex-col md:flex-row gap-6 items-center md:items-start bg-slate-900/30 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-colors"
                            >
                                <div className="w-20 h-20 rounded-xl bg-white p-2 border border-slate-700 flex-shrink-0 overflow-hidden shadow-lg shadow-blue-900/10">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={exp.logo}
                                        alt={exp.company}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="text-center md:text-left flex-grow">
                                    <h4 className="text-xl font-bold text-slate-200">
                                        {exp.role}
                                    </h4>
                                    <p className="text-blue-400 font-medium mt-1">{exp.company}</p>
                                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                                        {exp.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-3 text-sm text-slate-500">
                                        <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">
                                            {exp.period}
                                        </span>
                                        <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">
                                            {exp.location}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Tech Stack Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-2xl font-bold mb-8 text-center">Tech Stack</h3>

                    {/* Static Skills Tags */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl mx-auto">
                        {allSkills.map((skill, index) => (
                            <span
                                key={`${skill}-tag-${index}`}
                                className="px-4 py-2 bg-slate-900/50 text-slate-400 rounded-lg border border-slate-800 text-sm hover:border-blue-500/30 hover:text-blue-400 transition-colors cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Icon Marquee */}
                    <div className="relative w-full overflow-hidden py-10 bg-slate-900/20 border-y border-slate-800/50">
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10" />

                        <motion.div
                            className="flex gap-12 w-max"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 40 // Slower speed
                            }}
                        >
                            {marqueeSkills.map((skill, index) => (
                                <div
                                    key={`${skill}-${index}`}
                                    className="flex flex-col items-center gap-3 group"
                                >
                                    <div className="w-16 h-16 bg-slate-800/50 rounded-2xl border border-slate-700 p-3 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-slate-800 transition-all group-hover:scale-110">
                                        {techIcons[skill] ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img src={techIcons[skill]} alt={skill} className="w-full h-full object-contain" />
                                        ) : (
                                            <div className="w-full h-full bg-slate-700 rounded-lg" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
