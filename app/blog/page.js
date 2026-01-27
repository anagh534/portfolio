import BlogList from "@/components/blog/BlogList";
import { getBlogPosts } from "@/lib/blog";

// META METADATA for SEO
export const metadata = {
    title: "Blog | Insights & Updates - Anagh K R",
    description: "Read the latest thoughts, tutorials, and updates on Web Development, Flutter, and Tech Trends.",
};

export default async function BlogPage() {
    const posts = await getBlogPosts();

    return (
        <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Latest Insights
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Thoughts, tutorials, and updates on Web Development, Flutter, and the tech world.
                    </p>
                </div>

                <BlogList posts={posts} />
            </div>
        </main>
    );
}
