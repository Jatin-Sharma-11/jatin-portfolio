"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { education, skills, personalInfo, techIcons, experience } from "../data";

export default function About() {
    // Flatten all skills into a single array for the marquee
    const allSkills = Object.values(skills).flat();

    // Filter skills to ensure unique icons
    const uniqueIconSkills = allSkills.reduce((acc, skill) => {
        const iconUrl = techIcons[skill];
        if (iconUrl && !acc.some(s => techIcons[s] === iconUrl)) {
            acc.push(skill);
        }
        return acc;
    }, [] as string[]);

    // Duplicate the array to ensure seamless looping
    const marqueeSkills = [...uniqueIconSkills, ...uniqueIconSkills, ...uniqueIconSkills];

    return (
        <Section id="about">
            <div className="max-w-5xl mx-auto">
                {/* About Me Section - Redesigned */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24"
                >
                    {/* Hero Section with Circular Profile */}
                    <div className="flex flex-col items-center text-center mb-16">
                        {/* Circular Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                            className="relative mb-8 group"
                        >
                            {/* Animated rings */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 animate-spin-slow opacity-50" style={{ animationDuration: '10s' }} />

                            {/* Profile container */}
                            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl">
                                {/* Glassmorphism overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-teal-500/10 backdrop-blur-[2px] z-10" />

                                {/* Profile Image */}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/profile2.webp"
                                    alt="Profile"
                                    className="w-full h-full object-cover contrast-110 brightness-105 group-hover:contrast-125 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-purple-600/10 group-hover:from-blue-600/30 group-hover:to-purple-600/20 transition-all duration-500 z-20" />
                            </div>
                        </motion.div>

                        {/* Name and Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400">
                                {personalInfo.name}
                            </h2>
                            <p className="text-xl text-blue-400 font-medium mb-6">
                                {personalInfo.title}
                            </p>
                        </motion.div>

                        {/* Story-like About Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="max-w-3xl"
                        >
                            <div className="relative">
                                {/* Decorative quote mark */}
                                <div className="absolute -left-4 -top-2 text-6xl text-blue-500/20 font-serif">&ldquo;</div>

                                <p className="text-slate-300 text-lg leading-relaxed mb-6 relative z-10">
                                    {personalInfo.about}
                                </p>

                                {/* Decorative line */}
                                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 mx-auto rounded-full" />
                            </div>
                        </motion.div>


                    </div>
                </motion.div>

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

                {/* Tech Stack Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
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

                {/* Achievements (Stats) Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24 flex flex-col items-center"
                >
                    <h3 className="text-2xl font-bold mb-8 text-center">Achievements</h3>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-6 w-full max-w-2xl">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/30 transition-colors text-center">
                            <div className="text-4xl font-bold text-blue-400 mb-2">535</div>
                            <div className="text-slate-400 font-medium">GATE Rank (DA)</div>
                        </div>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-purple-500/30 transition-colors text-center">
                            <div className="text-4xl font-bold text-purple-400 mb-2">1433</div>
                            <div className="text-slate-400 font-medium">GATE Rank (CS)</div>
                        </div>
                    </div>
                </motion.div>

                {/* Social Links Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                >
                    <h3 className="text-2xl font-bold mb-8 text-center">Connect With Me</h3>
                    <div className="flex gap-6">
                        {personalInfo.social.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-slate-900/50 border border-slate-800 rounded-full text-slate-400 hover:text-blue-400 hover:border-blue-500/30 hover:scale-110 transition-all duration-300"
                                aria-label={social.name}
                            >
                                <social.icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
