import Link from "next/link";
import { getSortedPostsData } from "@/lib/mdx";
import BlogSearch from "./BlogSearch";

export default function Blog() {
    const allPostsData = getSortedPostsData();

    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 pt-24 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Blog
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
                        Thoughts, tutorials, and insights on software engineering, machine learning, and more.
                    </p>

                    <BlogSearch posts={allPostsData} />
                </div>
            </div>
        </main>
    );
}
