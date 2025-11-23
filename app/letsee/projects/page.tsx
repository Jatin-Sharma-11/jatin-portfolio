"use client";

import { useState, useEffect } from 'react';
import { Plus, Pencil, Trash2, X, Loader2 } from 'lucide-react';
import { Project } from '@/lib/data';

export default function ProjectsAdmin() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const [formData, setFormData] = useState<Partial<Project>>({});

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        const res = await fetch('/api/projects');
        const data = await res.json();
        setProjects(data);
        setLoading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const method = editingProject ? 'PUT' : 'POST';
        const body = JSON.stringify(editingProject ? { ...formData, id: editingProject.id } : formData);

        await fetch('/api/projects', {
            method,
            headers: { 'Content-Type': 'application/json' },
            body,
        });

        setIsModalOpen(false);
        setEditingProject(null);
        setFormData({});
        fetchProjects();
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this project?')) return;
        setLoading(true);
        await fetch(`/api/projects?id=${id}`, { method: 'DELETE' });
        fetchProjects();
    };

    const openModal = (project?: Project) => {
        if (project) {
            setEditingProject(project);
            setFormData(project);
        } else {
            setEditingProject(null);
            setFormData({ tech: [] });
        }
        setIsModalOpen(true);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-slate-100">Projects</h1>
                <button
                    onClick={() => openModal()}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    Add Project
                </button>
            </div>

            {loading && !isModalOpen ? (
                <div className="flex justify-center py-20">
                    <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
                </div>
            ) : (
                <div className="grid gap-4">
                    {projects.map((project) => (
                        <div key={project.id} className={`bg-slate-900 p-6 rounded-xl border flex justify-between items-start ${project.visible === false ? 'border-slate-800 opacity-75' : 'border-slate-800'}`}>
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-xl font-bold text-slate-200">{project.title}</h3>
                                    {project.visible === false && (
                                        <span className="px-2 py-0.5 bg-slate-800 text-slate-400 text-xs rounded border border-slate-700">Hidden</span>
                                    )}
                                </div>
                                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => openModal(project)}
                                    className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-blue-400 transition-colors"
                                >
                                    <Pencil className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => handleDelete(project.id!)}
                                    className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-red-400 transition-colors"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
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
                                {editingProject ? 'Edit Project' : 'New Project'}
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
                                <label className="block text-sm font-medium text-slate-400 mb-1">Description</label>
                                <textarea
                                    value={formData.description || ''}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-purple-500 h-24"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-1">Category</label>
                                    <input
                                        type="text"
                                        value={formData.category || ''}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-purple-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-1">Period</label>
                                    <input
                                        type="text"
                                        value={formData.period || ''}
                                        onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                                        className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-purple-500"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Tech Stack (comma separated)</label>
                                <input
                                    type="text"
                                    value={formData.tech?.join(', ') || ''}
                                    onChange={(e) => setFormData({ ...formData, tech: e.target.value.split(',').map(s => s.trim()) })}
                                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-purple-500"
                                    placeholder="React, Node.js, TypeScript"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Link</label>
                                <input
                                    type="url"
                                    value={formData.link || ''}
                                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-purple-500"
                                    required
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
                                    {editingProject ? 'Update Project' : 'Create Project'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
