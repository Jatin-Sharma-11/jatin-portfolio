"use client";

import { useState, useEffect } from 'react';
import { FileText, Plus, Loader2 } from 'lucide-react';

export default function BlogsAdmin() {
    const [blogs, setBlogs] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        const res = await fetch('/api/blogs');
        const data = await res.json();
        setBlogs(data);
        setLoading(false);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-slate-100">Blogs</h1>
                <button
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-400 cursor-not-allowed rounded-lg"
                    title="Blog creation coming soon"
                >
                    <Plus className="w-4 h-4" />
                    Add Blog
                </button>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
                </div>
            ) : (
                <div className="grid gap-4">
                    {blogs.map((blog) => (
                        <div key={blog} className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex items-center gap-4">
                            <div className="p-3 bg-slate-800 rounded-lg text-slate-400">
                                <FileText className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-slate-200">{blog}</h3>
                                <p className="text-slate-500 text-sm">MDX File</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
