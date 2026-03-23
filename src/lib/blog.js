import Papa from 'papaparse';

// TODO: Replace with the actual Google Sheet CSV URL provided by the user
const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQzBQU_Zm4oHdU4D4SxRM9TiNtKBdPBDLe1_NDEoqOF1kQtU0K1do41TB73oYcrzDmZrDfYRALwKJpk/pub?output=csv';
const BLOG_CACHE_TTL_MS = 5 * 60 * 1000;

let cachedPosts = null;
let cachedAt = 0;

function pickFirstValue(row, keys) {
    for (const key of keys) {
        const value = row?.[key];
        if (typeof value === 'string' && value.trim() !== '') {
            return value.trim();
        }
    }
    return '';
}

function toSlug(value) {
    return (value || '')
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/(^-|-$)/g, '');
}

function normalizeSlug(value) {
    return String(value || '').trim().replace(/^\/+|\/+$/g, '');
}

function toTimestamp(value) {
    const parsed = Date.parse(value || '');
    return Number.isNaN(parsed) ? 0 : parsed;
}

export async function getBlogPosts() {
    if (cachedPosts && Date.now() - cachedAt < BLOG_CACHE_TTL_MS) {
        return cachedPosts;
    }

    // Return empty array if no URL is provided
    if (!GOOGLE_SHEET_URL) {
        console.warn("Google Sheet URL is not defined.");
        return [];
    }

    try {
        // Use no-cache during build to ensure fresh data.
        const timestamp = Date.now();
        const urlWithTimestamp = `${GOOGLE_SHEET_URL}&t=${timestamp}`;

        const res = await fetch(urlWithTimestamp, {
            cache: 'no-store',
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache'
            }
        });

        if (!res.ok) throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
        const csvData = await res.text();

        const { data, errors } = Papa.parse(csvData, {
            header: true,
            skipEmptyLines: true,
            transformHeader: (header) => header.trim().toLowerCase()
        });

        if (errors && errors.length > 0) {
            console.warn("CSV parsing errors:", errors);
        }

        const validRows = [];

        for (const row of data) {
            const title = pickFirstValue(row, ['title', 'post title', 'blog title']);
            const slugValue = pickFirstValue(row, ['slug', 'url slug']);
            const descriptionValue = pickFirstValue(row, ['description', 'meta description', 'excerpt', 'summary']);
            const contentValue = pickFirstValue(row, ['content', 'article', 'body', 'post content']);

            if (title !== '' && slugValue !== '#') {
                validRows.push({
                    ...row,
                    title,
                    slug: slugValue,
                    description: descriptionValue,
                    content: contentValue
                });
            }
        }

        const processedPosts = validRows.map((post) => {
            const cleanSlug = normalizeSlug(
                post.slug && post.slug !== '#'
                    ? post.slug
                    : toSlug(post.title)
            );

            const tagArray = post.tags
                ? post.tags.split(',').map((tag) => tag.trim()).filter((tag) => tag.length > 0)
                : [];

            return {
                ...post,
                slug: cleanSlug,
                tags: tagArray,
                date: post.date || new Date().toISOString().split('T')[0],
                description: post.description || post.title,
                content: post.content || post.description || '',
                image: post.image || '/assets/blog/default.jpg'
            };
        }).sort((a, b) => toTimestamp(b.date) - toTimestamp(a.date));

        const uniquePosts = [];
        const seenSlugs = new Set();

        for (const post of processedPosts) {
            if (!post.slug || seenSlugs.has(post.slug)) {
                continue;
            }

            seenSlugs.add(post.slug);
            uniquePosts.push(post);
        }

        cachedPosts = uniquePosts;
        cachedAt = Date.now();
        return uniquePosts;
    } catch (error) {
        console.error("❌ Error fetching blog posts:", error);
        return cachedPosts || [];
    }
}

export async function getBlogPostBySlug(slug) {
    const posts = await getBlogPosts();
    return posts.find(post => post.slug === slug);
}
