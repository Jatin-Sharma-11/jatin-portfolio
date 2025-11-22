"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import Section from "./Section";
import { personalInfo } from "../data";

export default function Contact() {
    return (
        <Section id="contact">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                    I&apos;m currently looking for new opportunities. Whether you have a question
                    or just want to say hi, I&apos;ll try my best to get back to you!
                </p>

                <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all hover:scale-105"
                >
                    <Mail className="w-5 h-5" />
                    Say Hello <ArrowRight className="w-4 h-4" />
                </a>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800">
                        <h3 className="text-lg font-semibold text-slate-200 mb-2">Email</h3>
                        <p className="text-slate-400">{personalInfo.email}</p>
                    </div>
                    <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800">
                        <h3 className="text-lg font-semibold text-slate-200 mb-2">Phone</h3>
                        <p className="text-slate-400">{personalInfo.phone}</p>
                    </div>
                    <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800">
                        <h3 className="text-lg font-semibold text-slate-200 mb-2">Location</h3>
                        <p className="text-slate-400">{personalInfo.location}</p>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
