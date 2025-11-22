"use client";

import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import Section from "./Section";
import { personalInfo } from "../data";
import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    }

    return (
        <Section id="contact">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Email</p>
                                        <a href={`mailto:${personalInfo.email}`} className="text-lg font-medium text-slate-200 hover:text-blue-400 transition-colors">
                                            {personalInfo.email}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Phone</p>
                                        <p className="text-lg font-medium text-slate-200">
                                            {personalInfo.phone}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Location</p>
                                        <p className="text-lg font-medium text-slate-200">
                                            {personalInfo.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 text-slate-200 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 text-slate-200 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 text-slate-200 transition-colors resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
                            >
                                {status === "submitting" ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Message <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>

                            {status === "success" && (
                                <p className="text-green-400 text-center text-sm">Message sent successfully!</p>
                            )}
                            {status === "error" && (
                                <p className="text-red-400 text-center text-sm">Something went wrong. Please try again.</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
