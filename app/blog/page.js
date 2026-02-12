import BlogList from "@/components/blog/BlogList";
import { getBlogPosts } from "@/lib/blog";

export const dynamic = 'force-static';

// META METADATA for SEO
export async function generateMetadata() {
    const posts = await getBlogPosts();
    // Aggregate unique tags for keywords
    const allTags = posts.reduce((acc, post) => {
        if (post.tags && Array.isArray(post.tags)) {
            post.tags.forEach(tag => {
                if (tag && !acc.includes(tag)) {
                    acc.push(tag);
                }
            });
        }
        return acc;
    }, []);

    return {
        title: "Blog | Insights & Updates - Anagh K R",
        description: "Read the latest thoughts, tutorials, and updates on Web Development, Flutter, and Tech Trends.",
        keywords: allTags.length > 0 ? allTags : ["Web Development", "Flutter", "Tech Trends", "Tutorials"],
        alternates: {
            canonical: "https://www.anaghkr.in/blog",
        },
    };
}

export default async function BlogPage() {
    const posts = await getBlogPosts();

    // Create structured data for the blog listing
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Anagh K R - Tech Blog",
        "description": "Insights and tutorials on Web Development, Flutter, and Modern Tech Stacks.",
        "url": "https://www.anaghkr.in/blog",
        "author": {
            "@type": "Person",
            "name": "Anagh K R",
            "url": "https://www.anaghkr.in"
        },
        "blogPost": posts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.description,
            "datePublished": post.date,
            "url": `https://www.anaghkr.in/blog/${post.slug}`,
            "author": {
                "@type": "Person",
                "name": "Anagh K R"
            }
        }))
    };

    return (
        <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
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
