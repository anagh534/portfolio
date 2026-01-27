import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

export const dynamic = 'force-static';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} - Anagh K R`,
        description: post.description,
        openGraph: {
            images: [post.image]
        }
    };
}

// Generate static params for all known slugs (optional but good for performance)
export async function generateStaticParams() {
    const posts = await getBlogPosts();
    console.log(`[generateStaticParams] Found ${posts.length} posts`);

    // Filter out posts without valid slugs
    const validPosts = posts.filter(post => post.slug && post.slug !== '#');
    console.log(`[generateStaticParams] Generating params for slugs:`, validPosts.map(p => p.slug));

    return validPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
                <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                <Link href="/blog" className="text-blue-500 hover:underline">Return to Blog</Link>
            </div>
        );
    }

    return (
        <article className="min-h-screen pt-24 pb-16 px-4">
            <div className="max-w-4xl mx-auto">
                <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>

                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-8">
                    <Image
                        src={post.image || 'https://images.unsplash.com/photo-1499750310159-5b5f87054240?q=80&w=2000&auto=format&fit=crop'}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                        <div className="flex items-center gap-3 text-sm text-gray-300 mb-4">
                            <Calendar className="w-4 h-4 text-blue-500" />
                            <span>{post.date}</span>
                            {post.tags && (
                                <>
                                    <span className="w-1 h-1 rounded-full bg-gray-500" />
                                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30">
                                        {post.tags.split(',')[0]}
                                    </span>
                                </>
                            )}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            {post.title}
                        </h1>
                    </div>
                </div>

                <div className="prose prose-invert prose-xl max-w-none text-gray-300
                    prose-headings:text-white prose-headings:font-bold prose-headings:mb-6 prose-headings:mt-10
                    prose-p:leading-loose prose-p:mb-8 prose-p:text-gray-300
                    prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-white prose-strong:font-bold
                    prose-li:marker:text-blue-500 prose-li:mb-2
                    prose-img:rounded-2xl prose-img:shadow-2xl prose-img:my-10 prose-img:w-full prose-img:object-cover
                    prose-hr:border-gray-800 prose-hr:my-12">
                    <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                        {post.content}
                    </ReactMarkdown>
                </div>
            </div>
        </article>
    );
}
