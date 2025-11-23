"use client";

import { useState, useEffect } from 'react';
import { Plus, Pencil, Trash2, X, Loader2 } from 'lucide-react';
import { Photo } from '@/lib/data';

export default function PhotosAdmin() {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPhoto, setEditingPhoto] = useState<Photo | null>(null);
    const [formData, setFormData] = useState<Partial<Photo>>({});

    useEffect(() => {
        fetchPhotos();
    }, []);

    const fetchPhotos = async () => {
        const res = await fetch('/api/photos');
        const data = await res.json();
        setPhotos(data);
        setLoading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const method = editingPhoto ? 'PUT' : 'POST';
        const body = JSON.stringify(editingPhoto ? { ...formData, id: editingPhoto.id } : formData);

        await fetch('/api/photos', {
            method,
            headers: { 'Content-Type': 'application/json' },
            body,
        });

        setIsModalOpen(false);
        setEditingPhoto(null);
        setFormData({});
        fetchPhotos();
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this photo?')) return;
        setLoading(true);
        await fetch(`/api/photos?id=${id}`, { method: 'DELETE' });
        fetchPhotos();
    };

    const openModal = (photo?: Photo) => {
        if (photo) {
            setEditingPhoto(photo);
            setFormData(photo);
        } else {
            setEditingPhoto(null);
            setFormData({});
        }
        setIsModalOpen(true);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-slate-100">Photos</h1>
                <button
                    onClick={() => openModal()}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    Add Photo
                </button>
            </div>

            {loading && !isModalOpen ? (
                <div className="flex justify-center py-20">
                    <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {photos.map((photo) => (
                        <div key={photo.id} className={`bg-slate-900 rounded-xl border overflow-hidden group ${photo.visible === false ? 'border-slate-800 opacity-75' : 'border-slate-800'}`}>
                            <div className="relative aspect-video bg-slate-950">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={photo.src}
                                    alt={photo.title}
                                    className="w-full h-full object-cover"
                                />
                                {photo.visible === false && (
                                    <div className="absolute top-2 right-2 px-2 py-1 bg-black/70 text-slate-300 text-xs rounded border border-slate-700">
                                        Hidden
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                    <button
                                        onClick={() => openModal(photo)}
                                        className="p-2 bg-slate-800 rounded-lg text-white hover:bg-blue-600 transition-colors"
                                    >
                                        <Pencil className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(photo.id)}
                                        className="p-2 bg-slate-800 rounded-lg text-white hover:bg-red-600 transition-colors"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-slate-200 mb-1">{photo.title}</h3>
                                <p className="text-slate-500 text-sm mb-2">{photo.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                    <div className="bg-slate-900 w-full max-w-2xl rounded-2xl p-8 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-slate-100">
                                {editingPhoto ? 'Edit Photo' : 'New Photo'}
                            </h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Title</label>
                                <input
                                    type="text"
                                    value={formData.title || ''}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-purple-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Image Path (e.g., /gallery/photo-1.png)</label>
                                <input
                                    type="text"
                                    value={formData.src || ''}
                                    onChange={(e) => setFormData({ ...formData, src: e.target.value })}
                                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-purple-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Description</label>
                                <textarea
                                    value={formData.description || ''}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-purple-500 h-24"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-1">Location</label>
                                    <input
                                        type="text"
                                        value={formData.location || ''}
                                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                        className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-purple-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-1">Date</label>
                                    <input
                                        type="text"
                                        value={formData.date || ''}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-purple-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Camera</label>
                                <input
                                    type="text"
                                    value={formData.camera || ''}
                                    onChange={(e) => setFormData({ ...formData, camera: e.target.value })}
                                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-purple-500"
                                />
                            </div>

                            <div className="flex items-center gap-3">
                                <label className="block text-sm font-medium text-slate-400">Visibility</label>
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, visible: formData.visible === false ? true : false })}
                                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${formData.visible !== false
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                                        }`}
                                >
                                    {formData.visible !== false ? 'Visible' : 'Hidden'}
                                </button>
                            </div>

                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 text-slate-400 hover:text-white transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                                >
                                    {editingPhoto ? 'Update Photo' : 'Add Photo'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
