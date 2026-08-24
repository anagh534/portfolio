import blogs from '../data/blogs.json';

export async function getBlogPosts() {
    return blogs.sort((a, b) => {
        const dateA = Date.parse(a.date || '') || 0;
        const dateB = Date.parse(b.date || '') || 0;
        return dateB - dateA;
    });
}

export async function getBlogPostBySlug(slug) {
    const posts = await getBlogPosts();
    return posts.find(post => post.slug === slug);
}
