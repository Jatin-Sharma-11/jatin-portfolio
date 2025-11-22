import Link from "next/link";
import { getSortedPostsData } from "../../lib/mdx";

export default function Blog() {
    const allPostsData = getSortedPostsData();

    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
            <div className="container mx-auto px-6 pt-32 pb-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    Blog
                </h1>
                <div className="grid gap-8 max-w-3xl mx-auto">
                    {allPostsData.map(({ id, date, title, description }) => (
                        <Link
                            href={`/blog/${id}`}
                            key={id}
                            className="block p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all hover:-translate-y-1 group"
                        >
                            <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                                <time>{date}</time>
                            </div>
                            <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                                {title}
                            </h2>
                            <p className="text-slate-400 leading-relaxed">
                                {description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
