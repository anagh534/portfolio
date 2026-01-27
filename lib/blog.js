import Papa from 'papaparse';

// TODO: Replace with the actual Google Sheet CSV URL provided by the user
const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQzBQU_Zm4oHdU4D4SxRM9TiNtKBdPBDLe1_NDEoqOF1kQtU0K1do41TB73oYcrzDmZrDfYRALwKJpk/pub?output=csv';

export async function getBlogPosts() {
    // Return empty array if no URL is provided
    if (!GOOGLE_SHEET_URL) {
        console.warn("Google Sheet URL is not defined.");
        return [];
    }

    try {
        console.log("Fetching blog posts from Google Sheet...");
        // Use no-store to avoid caching issues during development/updates
        const res = await fetch(GOOGLE_SHEET_URL, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch data');
        const csvData = await res.text();

        const { data } = Papa.parse(csvData, { header: true });
        console.log(`Fetched ${data.length} posts`);

        // Filter out empty rows and format if necessary
        return data.filter(post => post.title && post.title.trim() !== '')
            .map(post => ({
                ...post,
                // Auto-generate slug from title if missing
                slug: post.slug && post.slug.trim() !== ''
                    ? post.slug
                    : post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
            }));
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        return [];
    }
}

export async function getBlogPostBySlug(slug) {
    const posts = await getBlogPosts();
    return posts.find(post => post.slug === slug);
}
