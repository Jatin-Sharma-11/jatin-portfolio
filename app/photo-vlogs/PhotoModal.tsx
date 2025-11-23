"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Photo {
    id: string;
    src: string;
    title: string;
    description?: string;
    location?: string;
    camera?: string;
    date?: string;
}

interface PhotoModalProps {
    photo: Photo;
    onClose: () => void;
}

export default function PhotoModal({ photo, onClose }: PhotoModalProps) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative max-w-7xl w-full max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors"
                    >
                        <X className="w-6 h-6 text-slate-200" />
                    </button>

                    <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                        {/* Image Section */}
                        <div className="flex-1 flex items-center justify-center bg-slate-950 p-8">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={photo.src}
                                alt={photo.title}
                                className="max-w-full max-h-[70vh] object-contain rounded-lg"
                            />
                        </div>

                        {/* Details Section */}
                        <div className="w-full md:w-96 bg-slate-900 p-8 overflow-y-auto">
                            <h2 className="text-2xl font-bold text-slate-100 mb-3">
                                {photo.title}
                            </h2>

                            {photo.description && (
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    {photo.description}
                                </p>
                            )}

                            {/* Photo Metadata */}
                            <div className="space-y-3 mb-6">
                                {photo.location && (
                                    <div className="flex items-start">
                                        <span className="text-slate-500 text-sm w-20">Location:</span>
                                        <span className="text-slate-300 text-sm flex-1">{photo.location}</span>
                                    </div>
                                )}
                                {photo.camera && (
                                    <div className="flex items-start">
                                        <span className="text-slate-500 text-sm w-20">Camera:</span>
                                        <span className="text-slate-300 text-sm flex-1">{photo.camera}</span>
                                    </div>
                                )}
                                {photo.date && (
                                    <div className="flex items-start">
                                        <span className="text-slate-500 text-sm w-20">Date:</span>
                                        <span className="text-slate-300 text-sm flex-1">{photo.date}</span>
                                    </div>
                                )}
                            </div>

                            {/* Photo by */}
                            <div className="mt-auto pt-6 border-t border-slate-800">
                                <p className="text-sm text-slate-500">
                                    Photo by <span className="text-slate-300 font-medium">Jatin Sharma</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
