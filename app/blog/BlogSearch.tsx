"use client";

import Link from "next/link";
import { useState } from "react";
import { Search } from "lucide-react";

type Post = {
    id: string;
    date: string;
    title: string;
    description: string;
};

export default function BlogSearch({ posts }: { posts: Post[] }) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-16">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-full focus:outline-none focus:border-blue-500 text-slate-200 transition-colors"
                />
            </div>

            <div className="grid gap-8">
                {filteredPosts.map(({ id, date, title, description }) => (
                    <Link
                        key={id}
                        href={`/blog/${id}`}
                        className="block group bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10"
                    >
                        <article>
                            <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                                <time dateTime={date}>{date}</time>
                                <span className="w-1 h-1 rounded-full bg-slate-700" />
                                <span>5 min read</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                {title}
                            </h2>
                            <p className="text-slate-400 leading-relaxed">
                                {description}
                            </p>
                        </article>
                    </Link>
                ))}
            </div>

            {filteredPosts.length === 0 && (
                <div className="text-center text-slate-500 mt-12">
                    <p>No articles found matching your search.</p>
                </div>
            )}
        </>
    );
}
