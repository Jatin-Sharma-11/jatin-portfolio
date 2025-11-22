import { getPostData, getAllPostIds } from "../../../lib/mdx";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MDXRemote } from "next-mdx-remote/rsc";
import ClientGiscus from "./ClientGiscus";

export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths;
}

export default async function Post({ params }: { params: { slug: string } }) {
    const postData = await getPostData(params.slug);

    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
            <Header />
            <article className="container mx-auto px-6 pt-32 pb-20 max-w-3xl">
                <header className="mb-12 text-center">
                    <time className="text-slate-400 mb-4 block">{postData.date}</time>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{postData.title}</h1>
                </header>

                <div className="prose prose-invert prose-lg max-w-none mb-20">
                    <MDXRemote source={postData.content} />
                </div>

                <div className="border-t border-slate-800 pt-12">
                    <ClientGiscus />
                </div>
            </article>
            <Footer />
        </main>
    );
}
