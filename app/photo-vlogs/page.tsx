"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Loader2 } from "lucide-react";
import PhotoModal from "./PhotoModal";
import { Photo } from "@/lib/data";

export default function PhotoVlogs() {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const res = await fetch('/api/photos');
                const data = await res.json();
                setPhotos(data);
            } catch (error) {
                console.error("Failed to fetch photos", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPhotos();
    }, []);

    // Filter photos based on search term
    const filteredPhotos = photos.filter(
        (photo) =>
            photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            photo.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            photo.location?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                        Photography Gallery
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
                        A collection of moments captured through my lens. Click any photo to view details and like your favorites.
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-md mx-auto mb-16">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search photos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-full focus:outline-none focus:border-purple-500 text-slate-200 transition-colors"
                        />
                    </div>

                    {searchTerm && (
                        <p className="text-sm text-slate-500 text-center mb-8">
                            Found {filteredPhotos.length} {filteredPhotos.length === 1 ? 'photo' : 'photos'}
                        </p>
                    )}
                </div>

                {/* Masonry Gallery Grid */}
                {loading ? (
                    <div className="flex justify-center py-20">
                        <Loader2 className="w-12 h-12 animate-spin text-purple-500" />
                    </div>
                ) : filteredPhotos.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredPhotos.map((photo, index) => {
                            // Create non-uniform layout by varying heights
                            const isLarge = index % 5 === 0;
                            const isMedium = index % 3 === 0 && !isLarge;
                            const spanClass = isLarge
                                ? "md:col-span-2 md:row-span-2"
                                : isMedium
                                    ? "md:row-span-2"
                                    : "";

                            return (
                                <motion.div
                                    key={photo.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`group relative overflow-hidden rounded-lg cursor-pointer ${spanClass}`}
                                    onClick={() => setSelectedPhoto(photo)}
                                >
                                    <div className="relative w-full h-full min-h-[200px] bg-slate-900">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={photo.src}
                                            alt={photo.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                                <h3 className="text-white font-bold text-lg mb-1">
                                                    {photo.title}
                                                </h3>
                                                {photo.location && (
                                                    <p className="text-slate-300 text-sm">
                                                        {photo.location}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Border glow on hover */}
                                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 transition-colors duration-300 rounded-lg" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-slate-500 text-lg">
                            No photos found matching &quot;{searchTerm}&quot;
                        </p>
                        <button
                            onClick={() => setSearchTerm("")}
                            className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                        >
                            Clear Search
                        </button>
                    </div>
                )}
            </div>

            {/* Photo Modal */}
            {selectedPhoto && (
                <PhotoModal
                    photo={selectedPhoto}
                    onClose={() => setSelectedPhoto(null)}
                />
            )}
        </main>
    );
}
