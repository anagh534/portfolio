'use client';
import BlogCard from "./BlogCard";

export default function BlogList({ posts }) {
    if (!posts || posts.length === 0) {
        return (
            <div className="text-center py-20">
                <h3 className="text-2xl font-bold text-gray-400">No posts found</h3>
                <p className="text-gray-500 mt-2">Check back later for updates!</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post, index) => (
                <BlogCard key={index} post={post} index={index} />
            ))}
        </div>
    );
}
