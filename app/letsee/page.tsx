"use client";

import { useEffect, useState } from 'react';
import { FolderKanban, Image as ImageIcon, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
    const [stats, setStats] = useState({ projects: 0, photos: 0, blogs: 0 });

    useEffect(() => {
        // Fetch stats (we'll implement the API later, for now just placeholder or fetch lists)
        const fetchStats = async () => {
            try {
                const [projectsRes, photosRes, blogsRes] = await Promise.all([
                    fetch('/api/projects'),
                    fetch('/api/photos'),
                    fetch('/api/blogs')
                ]);

                const projects = await projectsRes.json();
                const photos = await photosRes.json();
                const blogs = await blogsRes.json();

                setStats({
                    projects: projects.length || 0,
                    photos: photos.length || 0,
                    blogs: blogs.length || 0
                });
            } catch (error) {
                console.error('Failed to fetch stats', error);
            }
        };

        fetchStats();
    }, []);

    const cards = [
        {
            title: 'Projects',
            count: stats.projects,
            icon: FolderKanban,
            color: 'bg-blue-500/20 text-blue-400',
            href: '/letsee/projects'
        },
        {
            title: 'Photos',
            count: stats.photos,
            icon: ImageIcon,
            color: 'bg-pink-500/20 text-pink-400',
            href: '/letsee/photos'
        },
        {
            title: 'Blogs',
            count: stats.blogs,
            icon: FileText,
            color: 'bg-green-500/20 text-green-400',
            href: '/letsee/blogs'
        }
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-slate-100 mb-8">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card) => {
                    const Icon = card.icon;
                    return (
                        <Link
                            key={card.title}
                            href={card.href}
                            className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-all group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-3 rounded-lg ${card.color}`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-slate-400 transition-colors" />
                            </div>
                            <h3 className="text-slate-400 font-medium mb-1">{card.title}</h3>
                            <p className="text-3xl font-bold text-slate-100">{card.count}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
