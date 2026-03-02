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
        // Use no-cache during build to ensure fresh data
        // Add timestamp to prevent caching
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
        
        console.log(`Raw CSV data rows: ${data.length}`);

        // Filter out empty rows and format
        const processedPosts = data
            .filter(post => {
                const hasTitle = post.title && post.title.trim() !== '';
                const notHash = post.slug !== '#';
                if (!hasTitle) {
                    console.log("Skipping row without title:", post);
                }
                return hasTitle && notHash;
            })
            .map((post, index) => {
                // Auto-generate slug from title if missing or invalid
                let cleanSlug = post.slug && post.slug.trim() !== '' && post.slug !== '#'
                    ? post.slug.trim()
                    : post.title.toLowerCase()
                        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
                        .replace(/\s+/g, '-')          // Replace spaces with hyphens
                        .replace(/-+/g, '-')           // Replace multiple hyphens with single
                        .replace(/(^-|-$)/g, '');      // Remove leading/trailing hyphens
                
                // Parse tags and use as keywords
                const tagArray = post.tags 
                    ? post.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
                    : [];
                
                console.log(`Post ${index + 1}: "${post.title}" -> slug: "${cleanSlug}", tags: [${tagArray.join(', ')}]`);
                
                return {
                    ...post,
                    slug: cleanSlug,
                    tags: tagArray,
                    // Ensure required fields exist
                    date: post.date || new Date().toISOString().split('T')[0],
                    description: post.description || post.title,
                    content: post.content || '',
                    image: post.image || '/assets/blog/default.jpg'
                };
            });
        
        console.log(`✅ Successfully fetched ${processedPosts.length} valid blog posts`);
        
        return processedPosts;
    } catch (error) {
        console.error("❌ Error fetching blog posts:", error);
        return [];
    }
}

export async function getBlogPostBySlug(slug) {
    const posts = await getBlogPosts();
    return posts.find(post => post.slug === slug);
}
