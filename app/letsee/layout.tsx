"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, FolderKanban, Image as ImageIcon, FileText, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/letsee/login');
    };

    const navItems = [
        { name: 'Dashboard', href: '/letsee', icon: LayoutDashboard },
        { name: 'Projects', href: '/letsee/projects', icon: FolderKanban },
        { name: 'Photos', href: '/letsee/photos', icon: ImageIcon },
        { name: 'Blogs', href: '/letsee/blogs', icon: FileText },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 flex">
            {/* Mobile Sidebar Toggle */}
            <button
                className="md:hidden fixed top-4 right-4 z-50 p-2 bg-slate-800 rounded-lg"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? <X /> : <Menu />}
            </button>

            {/* Sidebar */}
            <aside className={`
                fixed md:sticky top-0 left-0 h-screen w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col transition-transform z-40
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
                <div className="mb-10">
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                        Admin Panel
                    </h1>
                </div>

                <nav className="flex-1 space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                        ? 'bg-purple-600/20 text-purple-400'
                                        : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                                    }`}
                                onClick={() => setIsSidebarOpen(false)}
                            >
                                <Icon className="w-5 h-5" />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-red-500/10 hover:text-red-400 rounded-lg transition-colors mt-auto"
                >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 md:p-10 overflow-y-auto h-screen">
                {children}
            </main>
        </div>
    );
}
